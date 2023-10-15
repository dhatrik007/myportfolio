import React from "react";
import { StyleSheet, css } from 'aphrodite';
import { Flex } from "@mantine/core";
import EntryAnimationUnlockText from "./EntryAnimationUnlockText";
export default function BasePageEntryAnimation({
    onHandleAnimation
}) {
    let targetText = ["ArrowUp", "Enter", "Tab", "Enter"];
    return (
        <div className={css(styles.mainContainer)}>
            <Flex direction="column" gap="md">
                <h1 className={css(styles.headerContainer)}>To unlock this website press following:</h1>
                <EntryAnimationUnlockText onHandleAnimation={onHandleAnimation} targetText={targetText}/>
            </Flex>
        </div>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
    },
    headerContainer: {
        fontFamily: "Papyrus"
    }
})
