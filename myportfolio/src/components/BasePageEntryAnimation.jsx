import React from "react";
import { StyleSheet, css } from 'aphrodite';
import { Button, Flex } from "@mantine/core";

export default function BasePageEntryAnimation({
    onHandleAnimation
}) {
return (
    <div className={css(styles.mainContainer)}>
        <Flex direction="column" gap="md">
            <h1 className={css(styles.headerContainer)}>To unlock this website type following:</h1>
            <Button onClick={onHandleAnimation} >click me</Button>
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
        height: "100vh"
    },
    headerContainer: {
        fontFamily: ""
    }
})
