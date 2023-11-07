import React from "react";
import { StyleSheet, css } from "aphrodite";
import CellRenderer from "./CellRenderer";
import {LayoutContext} from "./LayoutContext"

export default function LayoutArea() {
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
        height: "800px",
        width: "800px",
        margin: "4px"
    }
})