import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useDisclosure } from '@mantine/hooks';
import { Button, Flex, Select, Modal, TextInput } from "@mantine/core";
import { LayoutContext, LayoutListStorageContext} from "./LayoutContext";
import { getDefaultLayoutCell } from "../Utils";

export default function ActionArea() {
    const {layoutData, setLayoutData} = React.useContext(LayoutContext);
    const handleNewCell = () => {
        setLayoutData([...layoutData, getDefaultLayoutCell()])
    }
    const [opened, { open, close }] = useDisclosure(false);
    const {listItems, setListData} = React.useContext(LayoutListStorageContext)
    const [value, setValue] = React.useState();
    const [templateOption, setTemplateOption] = React.useState()
    const handleSaveTemplate = ()=> {
        if(listItems == null) {
            setListData(`${value}`)
            localStorage.setItem("listItemData", value)
        } else {
            setListData(listItems + `;${value}`)
            localStorage.setItem("listItemData", listItems + `;${value}`)
        }
        localStorage.setItem(value, JSON.stringify(layoutData) )
        setTemplateOption(value)
        close();
    }
    const handleLoadSavedTemplate = (selectedItemName) => {
        const savedTemplateData = localStorage.getItem(selectedItemName)
        setTemplateOption(selectedItemName)
        setLayoutData(JSON.parse(savedTemplateData))
    }

    const saveCurrentTemplate = () => {
        localStorage.setItem(value, JSON.stringify(layoutData))
    }
    return (
        <div className={css(styles.actionAreaContainer)}>
            <Button variant="gradient" onClick={handleNewCell}>Add new cell</Button>
            <Select
                searchable
                label="Select template to load"
                onOptionSubmit={handleLoadSavedTemplate}
                defaultValue={templateOption}
                placeholder="Choose a Saved Template to Load"
                data={listItems ? listItems.split(";"): []}
                ></Select>
                <Button variant="gradient" onClick={open}>Save as New template</Button>
                <Button variant="outline" onClick={saveCurrentTemplate}>Save to Current template </Button>
            <Modal opened={opened} onClose={close} title="Save as new template" centered>
                <div className={css(styles.dailogContainer)}>
                <TextInput
                    label="Template Name"
                    placeholder="Please provide template name"
                    size="xs"
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)} />
                <div className={css(styles.actionButtonContainer)}>
                    <Button size="compact-xs" onClick={handleSaveTemplate}>save</Button>
                    <Button size="compact-xs" onClick={close}>cancel</Button>
                </div>
                </div>
            </Modal>

        </div>
    )
}

const styles = StyleSheet.create({
    actionAreaContainer: {
        display: "flex",
        width:"100%",
        height: "100px",
        justifyContent: "space-evenly",
        alignItems:"flex-end",
        paddingLeft: "20px",
        paddingBottom:"20px",
        backgroundColor:"black",
    },
    dailogContainer: {
        display: "flex",
        flexDirection: "column"
    },
    actionButtonContainer: {
        display:"flex",
        justifyContent: "space-between",
        marginTop: "16px"
    }
})

