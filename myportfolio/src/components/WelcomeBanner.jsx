import React from "react"
import { StyleSheet, css } from "aphrodite";
import Subject from "../assets/Subject.png"
import { Flex } from "@mantine/core";
import Typewriter from "typewriter-effect";
export default function WelcomeBanner() {
    const visitorCount = 1;
    const message = `Hello visitor #${visitorCount}!`;
    return (
        <Flex >
            <div className={css(styles.imageContainer)}>
                <img src={Subject} alt="profileImage"/>
            </div>
            <div className={css(styles.visitorContainer)}>
                <Typewriter onInit={(obj) => {
                    obj
                        .typeString(message)
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString("How are you doing!")
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString("Welcome to my world!")
                        .pauseFor(3000)
                        .start()
                }}
                options={{
                    loop: true,
                }}
                />
            </div>
        </Flex>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: "700px",
        display: "flex",
        marginTop: "-200px",
        minWidth: "30%"
    },
    visitorContainer: {
        marginTop: "-120px",
        paddingLeft: "28px",
        display: "flex",
        overflow: "hidden",
        fontSize: "56px",
        fontWeight: "bold",
        fontFamily: "Papyrus",
        color: "white"
    },
    headerContainer: {
    }
})
