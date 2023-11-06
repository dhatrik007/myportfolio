import {useState} from "react"
import { StyleSheet, css } from "aphrodite";
import { Button, Select } from "@mantine/core";

export default function ActionArea() {
    // eslint-disable-next-line
    const [showLoad, setLoad] = useState(true)
    // eslint-disable-next-line
    const [saveTemplateName, setSaveTemplateName] = useState(true)
    return (
        <div className={css(styles.actionAreaContainer)}>
            <Button variant="gradient">Save as New template</Button>
            <Select placeholder="Choose a Saved Template to Load"></Select>
            {showLoad && (
                <Button variant="gradient">Load selected template</Button>
            )}
            {saveTemplateName && (
                <Button variant="outline">Save to Current template </Button>
            )}
        </div>
    )
}

const styles = StyleSheet.create({
    actionAreaContainer: {
        display: "flex",
        width:"100%",
        height: "100px",
        justifyContent: "space-evenly",
        alignItems:"center",
        paddingLeft: "20px",
        backgroundColor:"black"
    }
})

