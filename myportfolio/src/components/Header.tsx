import { Anchor, Button, Flex, Grid, Container } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import { StyleSheet, css } from "aphrodite";

const links = [
  { link: '/', label: 'Home', color:"blue" },
  { link: '/pricing', label: 'Resume', color: "green" },
  { link: 'https://github.com/dhatrik007', label: 'GitHub', color: "#ffffff", icon: <IconBrandGithub/> },
  { link: 'https://www.linkedin.com/in/ndhatrik/', label: 'LinkedIn', color: "blue", icon: <IconBrandLinkedin/> },
  { link: 'https://www.instagram.com/_nikhil.kumar.dhatrik_/', label: 'Instagram', color: "red", icon: <IconBrandInstagram/>},
];

export default function Header() {

    const items = links.map((link) => (
    <Anchor
        key={link.label}
        href={link.link}
    >
        <Button variant="outline" color={link.color} leftSection={link.icon}>{link.label}</Button>
    </Anchor>
    ));

    return (
    <header className={css(styles.headerContainer)}>
        <div className={css(styles.titleContainer)}><ProfileGrid/></div>
        <Flex gap={24} align={"flex-start"} className={css(styles.marginTopContainer)}>
            {items}
        </Flex>

    </header>
    );
}

function ProfileGrid() {

    return (
        <Container my="lg" >
          <Grid>
            <Grid.Col span={{ base: 12, xs: 8 }}><div className={css(styles.gridContainer)} style={{background:"#fcba03"}}>Nikhil Kumar</div></Grid.Col>
            <Grid.Col span={{ base: 12, xs: 4 }}><div className={css(styles.gridContainer)} style={{background:"#94f525"}}>Dhatrik</div></Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12 }}><div className={css(styles.gridContainer)} style={{background:"#87c1ff"}}>Full Stack Engineer</div></Grid.Col>
            <Grid.Col span={{ base: 12, xs: 3 }}><div className={css(styles.gridContainer)} style={{background:"#bd87ff"}}>+1</div></Grid.Col>
            <Grid.Col span={{ base: 12, xs: 9 }}><div className={css(styles.gridContainer)} style={{background:"#fac8ec"}}>716-400-2512</div></Grid.Col>
            <Grid.Col span={{ base: 12, xs: 7 }}><div className={css(styles.gridContainer)} style={{background:"#f52525"}}>nikhil.dhatrik</div></Grid.Col>
            <Grid.Col span={{ base: 12, xs: 5 }}><div className={css(styles.gridContainer)} style={{background:"#03ecfc"}}>@gmail.com</div></Grid.Col>
          </Grid>
        </Container>
      );
}



const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        padding:"24px",
    },
    titleContainer: {
        width: "500px"
    },
    gridContainer: {
        height: "36px",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "22px",
        color: "white",
        textShadow: "2px 3px 10px #000",
    },
    marginTopContainer: {
        marginTop: "20px"
    }
})