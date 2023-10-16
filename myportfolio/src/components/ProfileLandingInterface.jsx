import React from "react";
import { StyleSheet, css } from "aphrodite";
import WelcomeBanner from "./WelcomeBanner";
import { Card, Text } from "@mantine/core";
import Temenos from "../assets/temenos.png";
import Walmart from "../assets/walmart.svg";
import Flexport from "../assets/flexport.png";

export default function ProfileLandinginterface() {
    return (
        <div className={css(styles.mainContainer)}>
            <div className={css(styles.welcomeContainer)}>
                <WelcomeBanner/>
            </div>
            <div className={css(styles.headerContainer)}>My Recent Experiences</div>
            <Text ff="sans-serif" size="xl" > Here are a few past professional experiences. Want to know more? Email me.</Text>
            <div className={css(styles.experiencesContainer)}>
                <div className={css(styles.cardContainer)}>
                    <Card withBorder radius="lg"shadow="xl" >
                        <Card.Section >
                            <img className={css(styles.imageContainer)} alt="Flexport" src={Flexport} />
                        </Card.Section>
                        <div className={css(styles.cardTextContainer)} align="justify">
                            I spearheaded the UI workstream for a 4PL visibility project, pioneering new shipment visibility features in the Client application. This initiative not only reduced latency by 40% but also integrated new APIs using a federated architecture, enhancing data retrieval efficiency and system performance. I successfully integrated the Amplitude logging framework for actionable insights and significantly improved unit test coverage for React components and GraphQL, resulting in a 30% increase in overall test coverage.
                        </div>
                    </Card>
                </div>
                <div className={css(styles.cardContainer)}>
                    <Card withBorder radius="lg">
                        <Card.Section>
                            <img className={css(styles.imageContainer)} alt="temenos" src={Temenos}/>
                        </Card.Section>
                        <div className={css(styles.cardTextContainer)} align="justify">
                            As an Associate Software Engineer, I significantly improved application build efficiency by 80%. I integrated multimedia support and streaming media APIs into the Temenos web quantum framework while reducing build time by 50%. I also added complex features like lazy loading, web accessibility, web and service workers. In the Kony Framework, I resolved frontend issues, enhancing loading speed by 30%. I monitored and improved banking applications in the Jasmine test automation system, ensuring cross-platform compatibility. Furthermore, I restructured the Temenos Quantum framework for OS-based classification, catering to cross-platform, browser, and mobile device support.
                        </div>
                    </Card>
                </div>
                <div className={css(styles.cardContainer)}>
                    <Card withBorder radius="lg">
                        <Card.Section>
                            <img className={css(styles.imageContainer)} alt="walmart" src={Walmart}/>
                        </Card.Section>
                        <div className={css(styles.cardTextContainer)} align="justify">
                            <p>
                                Innovated multiple features for Walmart's order fulfillment tool, optimizing UI layouts to boost code coverage beyond 80% during automation testing. Spearheaded the creation of a ReactJS-based application for isolated testing prior to full integration. Migrated legacy web driver IO test cases to a modern Appium-driven framework, incorporating over 100 new test cases. Streamlined the automation framework, facilitating seamless integration of future features and reducing time consumption by 40%.
                            </p>
                        </div>
                    </Card>

                </div>
            </div>
            <div className={css(styles.carousalContainer)}>
                {/** TODO: rest of the page */}
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
    },
    welcomeContainer: {
        display: "flex",
        marginTop: "400px",
        background: "#ffff85",
        height: "500px",
        width: "100%",
        borderRadius: "50px 50px 0px 0px",
    },
    experiencesContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "72px",
    },
    imageContainer: {
        height:"100px",
        backgroundColor: "white",
        objectFit: "contain",
        width: "500px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft:"120px",
        paddingRight:"120px",
    },
    cardContainer: {
        width: "500px",
        color:"white",
    },
    cardTextContainer: {
        padding: "20px",
        height:"300px",
        fontSize: "14px",
        fontFamily: "europa, sans-serif"
    },
    headerContainer: {
        color: "White",
        fontSize: "32px",
        fontFamily: "europa, sans-serif",
        fontWeight: "bold",
        marginTop: "72px"
    },
    carousalContainer: {
        marginTop: "72px"
    }
})