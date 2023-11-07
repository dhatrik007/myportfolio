import React from "react"
import type { Layout } from "../Utils";
import {updateLayoutData, updateLayoutSplit} from  "../Utils";
import { StyleSheet, css } from "aphrodite";
import {LayoutContext} from "./LayoutContext";
import { Button, Flex, Popover } from "@mantine/core";
type Prop ={
    cellData: Layout,
    cellId?: string,
}
export default function CellRenderer(prop: Prop) {
    const {cellData} = prop;
    const {layoutData, setLayoutData} = React.useContext(LayoutContext);
    const handleDrop = (event: React.DragEvent<HTMLElement>, previousDataSrc: string | null | undefined) => {
        event.stopPropagation();
        const [imageSrc, sourceElementId] = event.dataTransfer.getData('text/plain').split(":");
        const id = event.currentTarget.getAttribute("id");
        if(previousDataSrc &&  previousDataSrc !== null && id) {
            const updatedTargetData = updateLayoutData(layoutData, sourceElementId, previousDataSrc )
            const updatedPreviousSrc = updateLayoutData(updatedTargetData, id, imageSrc ==="false"? null: imageSrc)
            setLayoutData(updatedPreviousSrc)
        } else if(id){
            const updatedData = updateLayoutData(layoutData, id, imageSrc === "false"? null: imageSrc)
            setLayoutData(updatedData)
        }
    };

    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute("data-cell-id")
        if(id !== null) {
            const updatedData = updateLayoutData(layoutData, id, null)
            setLayoutData(updatedData)
        }
    }

    const handleVerticalSplit = (event: React.MouseEvent<HTMLElement>) => {
        const id = event.currentTarget.getAttribute("data-cell-id")
        if(id !== null) {
            const updatedData = updateLayoutSplit(layoutData, id, false)
            setLayoutData(updatedData)
        }

    }
    const handleHorizontalSplit = (event: React.MouseEvent<HTMLElement>) => {
        const id = event.currentTarget.getAttribute("data-cell-id")
        if(id !== null) {
            const updatedData = updateLayoutSplit(layoutData, id, true)
            setLayoutData(updatedData)
        }

    }
    const handleDragStart = (event: React.DragEvent<HTMLElement>, src: string, id: string) => {
        event.dataTransfer.setData('text/plain', `${src.toString()}:${id.toString()}` );
    };
    if(cellData.cells.length > 0) {
        const children = cellData.cells.map((cellData) => (<CellRenderer key={cellData.id} cellData={cellData} cellId={cellData.id}/>))
        return(
            <div
                id={cellData.id}
                className={css(styles.cellContainer, cellData.isHorizontal && styles.horizontalSplitContainer)}
            >
                {children}
            </div>
        )
    } else {
        const backgroundSrc = cellData.data || '../assets/dragbackground.png';
        const backgroundStyle = {
          backgroundImage: `url("${backgroundSrc}")`,
          backgroundSize: "cover"
        };
        return(
            <div
                id={cellData.id}
                onDrop={(e) => handleDrop(e, cellData.data)}
                onDragOver={(e) => {e.preventDefault()}}
                onDragStart={(e) => handleDragStart(e, cellData.data ?? "false", cellData.id)}
                draggable
                style={backgroundStyle}
                className={css(styles.cellContainer, styles.cellActionContainer)}
            >
                {cellData.data  && <Button
                    size={"compact-xs"}
                    variant="filled"
                    color="red"
                    radius={0}
                    onClick={handleClose}
                    data-cell-id={cellData.id}>x</Button>}
                <Popover withArrow >
                    <Popover.Target>
                        <Button size={"compact-xs"} variant="default" radius={0}>···</Button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Flex direction={"column"} gap={4}>
                            <Button
                                variant="subtle"
                                radius={0}
                                data-cell-id={cellData.id}
                                onClick={handleHorizontalSplit}
                            >
                                Split Horizontal
                            </Button>
                            <Button
                                variant="subtle"
                                radius={0}
                                data-cell-id={cellData.id}
                                onClick={handleVerticalSplit}
                            >
                                Split Vertical
                            </Button>
                        </Flex>
                    </Popover.Dropdown>
                </Popover>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    horizontalSplitContainer: {
        flexDirection: "column"
    },
    cellContainer: {
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundSize: "fill",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden",
        margin: "4px"
    },
    cellActionContainer: {
        flexDirection:"column",
        alignItems:"flex-end",
        alignContent:"flex-end",
        justifyContent:"space-between",
        paddingRight:"2px"
    }
})