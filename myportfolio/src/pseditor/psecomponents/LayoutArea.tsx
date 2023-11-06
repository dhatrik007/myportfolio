import React from "react";
import { StyleSheet, css } from "aphrodite";
import CellRenderer from "./CellRenderer";
import {LayoutContext} from "./LayoutContext"
type Props ={
}
export default function LayoutArea(_: Props) {
    const {layoutData} = React.useContext(LayoutContext)
    const layoutRows = layoutData.map((cell) => {
        return (
            <div id={cell.id} key={cell.id} className={css(styles.cellContainer)}>
                <CellRenderer cellData={cell}/>
            </div>
        )
    })
    return (
    <div className={css(styles.layoutContainer)}>
        {layoutRows}
    </div>
    )
}

const styles = StyleSheet.create({
    layoutContainer: {
        display: "flex",
        paddingTop: "4px",
        paddingRight: "12px",
        width: "100%",
        flexDirection: "column",
    },
    cellContainer: {
        display: "flex",
        height: "450px",
        width: "100%",
        margin: "4px"
    }
})