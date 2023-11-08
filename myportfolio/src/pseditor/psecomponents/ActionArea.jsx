import React from "react";
import { StyleSheet, css } from "aphrodite";
import { useDisclosure } from '@mantine/hooks';
import { Button, Select, Modal, TextInput, Flex } from "@mantine/core";
import { LayoutContext, LayoutListStorageContext} from "./LayoutContext";
import { notifications } from '@mantine/notifications';
import { getDefaultLayoutCell, getDefaultLayout } from "../Utils";

/**
 * @description ActionArea
 * This component is responsible for holding elements to
 * perform actions like:
 * 1 - Adding New cell below
 * 2 - Choosing Saved template to load on action area
 * 3 - Save as new template
 * 4 - Save to current template
 * 5 - Reset Layout
 */
export default function ActionArea() {
    const {layoutData, setLayoutData} = React.useContext(LayoutContext);
    const handleNewCell = () => {
        setLayoutData([...layoutData, getDefaultLayoutCell()])
    };
    const [opened, { open, close }] = useDisclosure(false);
    const {listItems, setListData} = React.useContext(LayoutListStorageContext);
    const [value, setValue] = React.useState();
    const [templateOption, setTemplateOption] = React.useState();

    /**
     * Responsible for saving as New template
     */
    const handleSaveTemplate = ()=> {
        if(listItems == null) {
            setListData(`${value}`);
            localStorage.setItem("listItemData", value);
        } else {
            setListData(listItems + `;${value}`);
            localStorage.setItem("listItemData", listItems + `;${value}`);
        }
        localStorage.setItem(value, JSON.stringify(layoutData));
        setTemplateOption(value);
        close();
        notifications.show({
            title: 'Template Saved',
            message: `Hey there, your current layout saved with the name "${value}".`,
        });
    };

    /**
     * Responsible for loading selected template from the dropdown
     */
    const handleLoadSavedTemplate = () => {
        const savedTemplateData = localStorage.getItem(templateOption);
        setLayoutData(JSON.parse(savedTemplateData));
        notifications.show({
            title: 'Template loaded',
            message: `Hey there, your selected template "${templateOption}" loaded.`,
        });
    };

    /**
     * Responsible for saving layout to selected layout
     */
    const saveCurrentTemplate = () => {
        localStorage.setItem(value, JSON.stringify(layoutData));
        notifications.show({
            title: 'Template Saved',
            message: `Hey there, your changes saved to current template "${value}"`,
        });
    };

    /**
     * Resets back to empty 4 cell layout
     */
    const handleResetLayout = () => {
        setLayoutData(getDefaultLayout());
    }
    return (
        <div className={css(styles.actionAreaContainer)}>
            <Button variant="gradient" onClick={handleNewCell}>Add new cell</Button>
            <Select
                searchable
                allowDeselect={false}
                label="Select template to load"
                onOptionSubmit={(selectedItemName)=>setTemplateOption(selectedItemName)}
                defaultValue={templateOption}
                placeholder="Choose a Saved Template to Load"
                data={listItems ? listItems.split(";"): []}
            ></Select>
            <Button variant="gradient" onClick={()=> handleLoadSavedTemplate(templateOption)}>Load selected Template</Button>
            <Flex direction="column" gap={8}>
                <Button variant="gradient" onClick={open} size="compact-xs">Save as New template</Button>
                <Button variant="outline" onClick={saveCurrentTemplate} size="compact-xs">Save to Current template </Button>
            </Flex>
            <Button onClick={handleResetLayout} variant="gradient">Reset Layout</Button>
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
    );
}

const styles = StyleSheet.create({
    actionAreaContainer: {
        display: "flex",
        width:"100%",
        height: "100px",
        justifyContent: "space-evenly",
        alignItems:"flex-end",
        padding:"20px",
        backgroundColor:"black",
    },
    dailogContainer: {
        display: "flex",
        flexDirection: "column",
    },
    actionButtonContainer: {
        display:"flex",
        justifyContent: "space-between",
        marginTop: "16px",
    }
})

