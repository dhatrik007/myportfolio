import { StyleSheet, css } from "aphrodite"
import { Flex, Button, Anchor } from "@mantine/core";
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

export default function BaseLandingInterface() {
    const resumeURL = "https://drive.google.com/uc?export=download&id=13US9Ecfh53nyGqrvK7X_vQhIeVR-Pbmj"
    return (
        <div className={css(styles.mainContainer)}>
            <Flex gap={72} direction={"column"}>
                <Anchor href="/home" >
                    <Button size="xl" leftSection={<IconPhoto size={24} />} variant="light">Portfolio</Button>
                </Anchor>
                <Anchor href={resumeURL} download >
                    <Button size="xl" rightSection={<IconDownload size={24} />} variant="gradient">Download Resume</Button>
                </Anchor>
                <Anchor href="/pseditor" >
                    <Button size="xl" rightSection={<IconArrowRight size={24} />} variant="outline">Predict Spring Visual Editor (WIP)</Button>
                </Anchor>
            </Flex>
        </div>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center"
    }
})