import { StyleSheet, css } from "aphrodite";
import ActionArea from "./psecomponents/ActionArea";
import EditorArea from "./psecomponents/EditorArea";
export default function PsEditor() {
    return(
    <div className={css(styles.mainContainer)}>
        <div  className={css(styles.editorContainer)} >
            <ActionArea/>
            <EditorArea/>
        </div>
    </div>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        alignItems:"center",
        marginTop: "72px"
    },
    editorContainer: {
        display: "flex",
        width: "1000px",
        flexDirection: "column",
        background: "white"
    },
})