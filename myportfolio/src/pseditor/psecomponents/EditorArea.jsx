import React from "react"
import { StyleSheet, css } from "aphrodite";
import {LayoutContextProvider, } from "./LayoutContext";
import ImagePallet from "./ImagePallet";
import LayoutArea from "./LayoutArea";

export default function EditorArea() {
    return (
    <div className={css(styles.editorAreaContainer)}>
        <ImagePallet/>
        <LayoutContextProvider>
            <LayoutArea  />
        </LayoutContextProvider>
    </div>
    )
}

const styles = StyleSheet.create({
    editorAreaContainer: {
        display: "flex",
        width: "100%",
        padding: "4px"
    }
})