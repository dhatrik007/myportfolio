import { StyleSheet, css } from "aphrodite";
import ActionArea from "./psecomponents/ActionArea";
import EditorArea from "./psecomponents/EditorArea";
import {LayoutContextProvider, LayoutListStorageContextProvider } from "./psecomponents/LayoutContext";

/**
 * @description
 * Hi team, This is the entry point / landing interface for the Visual editor.
 * Happy debugging!!
 */

export default function PsEditor() {
    return(
    <div className={css(styles.mainContainer)}>
        <h1>Predict Spring's Visual Editor JS Challenge</h1>
        <div  className={css(styles.editorContainer)} >
            <LayoutContextProvider>
                <LayoutListStorageContextProvider>
                    <ActionArea/>
                    <EditorArea/>
                </LayoutListStorageContextProvider>
            </LayoutContextProvider>
        </div>
    </div>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        alignItems:"center",
        marginTop: "72px",
    },
    editorContainer: {
        display: "flex",
        width: "1000px",
        flexDirection: "column",
        background: "white",
    },
})