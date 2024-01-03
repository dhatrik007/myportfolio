import React from "react"
import { StyleSheet, css } from "aphrodite";
import Subject from "../assets/Subject.png"
import { Flex, Text } from "@mantine/core";
export default function WelcomeBanner() {

    const proSum1 = "I'm a software engineer with a track record spanning over three years, specializing in full-stack development. My journey in the tech world has always been an enticing blend of creative and logical thinking. My fascination with web design, which I discovered during my college years, has naturally evolved into a full-fledged career in software engineering."
    const proSum2 = "My expertise extends to multiple programming languages and tools, empowering me to take on a wide range of challenging projects and deliver robust, scalable solutions. Throughout my career, I've honed my ability to collaborate seamlessly with cross-functional teams, demonstrating strong problem-solving skills, and a knack for navigating complex software development landscapes."
    const prosum3 = "I'm deeply committed to ongoing learning and staying up-to-date with emerging technologies and industry best practices. I'm enthusiastic about embracing fresh challenges and eager to make a meaningful contribution to projects that demand a harmonious blend of creativity and technical excellence.";
    return (
        <Flex justify="space-around" align={"flex-end"}>
            <div className={css(styles.imageContainer)}>
                <img src={Subject} alt="profileImage"/>
            </div>
            <div className={css(styles.visitorContainer)}>
                <div className={css(styles.summaryContainer)} align="justify">
                    <Flex gap={40} direction={"column"}>
                        <Text size="md" c="black" ff="europa, sans-serif">{proSum1}</Text>
                        <Text size="md" c="black" ff="europa, sans-serif">{proSum2}</Text>
                        <Text size="md" c="black" ff="europa, sans-serif">{prosum3}</Text>
                    </Flex>
                </div>
            </div>
            <div className={css(styles.deviceContainer)}>
                <img src="../assets/laptop.png" alt="device"/>
            </div>
        </Flex>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: "700px",
        display: "flex",
        marginTop: "-200px",
        width: "100%"
    },
    visitorContainer: {
        padding: "32px",
        overflow:"hidden"
    },
    summaryContainer: {
        display: "flex",
        paddingBottom: "32px",
        width: "100%",
    },
    deviceContainer: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingRight: "48px",
    }
})
