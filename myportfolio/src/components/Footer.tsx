import {  Group, ActionIcon, rem, Flex, Text, Anchor } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import { StyleSheet, css } from 'aphrodite';
export default function Footer() {
    return (
    <div className={css(styles.mainContainer)}>
        <Flex className={css(styles.innerContainer)}>
        <Flex direction={"column"}>
            <Text size='lg' fw={"bold"} c="white" ff="europa, sans-serif">
                Nikhil Kumar Dhatrik
            </Text>
            <Text size='sm' fw={"bold"} ff="europa, sans-serif" className={css(styles.descContainer)}>
                I am a frontend focused full stack web developer. I build applications addressing business needs which ensures optimality and sustainability.
            </Text>

        </Flex>
        <Group gap={4} justify="flex-end" wrap="nowrap">
            <Anchor href='https://github.com/dhatrik007'>
            <ActionIcon size="xl" color="white" variant="outline">
                <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            </Anchor>
            <Anchor href='https://www.linkedin.com/in/ndhatrik/'>
            <ActionIcon size="xl" color="white" variant="outline">
                <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            </Anchor>
            <Anchor href='https://www.instagram.com/_nikhil.kumar.dhatrik_/'>
            <ActionIcon size="xl" color="white" variant="outline">
                <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            </Anchor>
        </Group>
        </Flex>
        <Text c="dimmed" size="sm" className={css(styles.copyrightContainer)}>
            © Copyright 2023. Made by Nikhil Kumar Dhatrik.
        </Text>
    </div>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: "60px",
        height: "auto",
        width: "100%",
        padding:"40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        bottom: "0px",
    },
    innerContainer: {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "60%",
        paddingBottom: "32px",
        borderBottom: "1px solid #909296"
    },
    copyrightContainer: {
        marginTop: "20px"
    },
    descContainer: {
        marginTop: "20px",
        width: "60%"
    }
})

