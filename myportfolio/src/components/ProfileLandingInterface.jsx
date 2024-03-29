import React from "react";
import { StyleSheet, css } from "aphrodite";
import WelcomeBanner from "./WelcomeBanner";
import { Card, Flex, Text } from "@mantine/core";
import Temenos from "../assets/temenos.png";
import Walmart from "../assets/walmart.svg";
import Flexport from "../assets/flexport.png";
import Typewriter from "typewriter-effect";
import TestimonialCarousel from "./TestimonialCarousel";
import SkillsCardContainer from "./SkillCardContainer";
import Header from "./Header";
import Footer from "./Footer";
import GetInTouchSimple from "./GetInTouchSimple";


export default function ProfileLandinginterface() {
    const getDeviceType = () => {
        const userAgent = navigator.userAgent;

        if (userAgent.match(/Android/i)) {
        return 'Android';
        } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
            return 'iOS';
        } else if (userAgent.match(/Windows Phone/i)) {
            return 'Windows Phone';
        } else if (userAgent.match(/Windows NT/i) && userAgent.match(/arm/i)) {
            return 'Windows RT';
        } else if (userAgent.match(/Macintosh/i) && 'ontouchend' in document) {
            return 'Mac with Touch Screen';
        } else if (userAgent.match(/Macintosh/i)) {
            return 'Mac';
        } else if (userAgent.match(/Windows/i)) {
            return 'Windows';
        } else {
            return 'Unknown';
        }
    }
    const deviceName = getDeviceType()
    const frontendSkills = ["HTML5", "CSS3", "JavaScript", "ReactJS", "Typescript", "GraphQL", "Redux", "NextJS", "AngularJS", "React-native", "Vue", "Yarn","Webpack", "Monorepo", "Bootstrap", "Ajax", "jQuery"]
    const backendSkills = ["JAVA", "Kotlin", "Ruby on Rails", "python", "NodeJS", "AWS", "ExpressJS", "Spring Boot", "REST", "Kafka"]
    const databases = ["PostgreSQL", "MongoDB", "Nosql","Mysql", "SQlite", "Redis", "Django"]
    const devopsSkills = ["GIT", "Docker","Kubernetes", "Jenkins", "IntelliJ", "Sentry", "Datadog", "Atlassian", "JIRA", "Figma"]
    return (
        <div className={css(styles.mainContainer)}>
            <Header/>
            <div className={css(styles.headerContainer)}>
                <div align="left"><Typewriter onInit={(obj) => {
                        obj
                            .typeString(`Hello ${deviceName} user!`)
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
            </div>
            <div className={css(styles.welcomeContainer)}>
                <WelcomeBanner/>
            </div>
            <div className={css(styles.experiencesHeaderContainer, styles.textColorWhite)}>My Recent Experiences</div>
            <Text ff="sans-serif" size="xl" > Here are a few past professional experiences. Want to know more? Email me.</Text>
            <Flex gap={48} className={css(styles.experiencesContainer)}>
                <div className={css(styles.cardContainer)}>
                    <Card >
                        <Card.Section >
                            <img className={css(styles.imageContainer)} alt="Flexport" src={Flexport} />
                        </Card.Section>
                        <div className={css(styles.cardTextContainer)} align="justify">
                            I spearheaded the UI workstream for a 4PL visibility project, pioneering new shipment visibility features in the Client application. This initiative not only reduced latency by 40% but also integrated new APIs using a federated architecture, enhancing data retrieval efficiency and system performance. I successfully integrated the Amplitude logging framework for actionable insights and significantly improved unit test coverage for React components and GraphQL, resulting in a 30% increase in overall test coverage.
                        </div>
                    </Card>
                </div>
                <div className={css(styles.cardContainer)}>
                    <Card>
                        <Card.Section>
                            <img className={css(styles.imageContainer)} alt="temenos" src={Temenos}/>
                        </Card.Section>
                        <div className={css(styles.cardTextContainer)} align="justify">
                            As an Associate Software Engineer, I significantly improved application build efficiency by 80%. I integrated multimedia support and streaming media APIs into the Temenos web quantum framework while reducing build time by 50%. I also added complex features like lazy loading, web accessibility, web and service workers. In the Kony Framework, I resolved frontend issues, enhancing loading speed by 30%. I monitored and improved banking applications in the Jasmine test automation system, ensuring cross-platform compatibility. Furthermore, I restructured the Temenos Quantum framework for OS-based classification, catering to cross-platform, browser, and mobile device support.
                        </div>
                    </Card>
                </div>
                <div className={css(styles.cardContainer)}>
                    <Card >
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
            </Flex>
            <div className={css(styles.skillsContainer)}>
                <Flex direction={"column"} align="center">
                    <div className={css(styles.experiencesHeaderContainer, styles.textColorBlack)}>What I know?</div>
                    <Text ff="sans-serif" size="xl" c="#494F55" > Below are the key skills accquired throughout my professional journey.</Text>
                    <Flex gap={150} className={css(styles.experiencesContainer)}>
                        <div className={css(styles.skillsCardContainer)}>
                            <SkillsCardContainer header="Frontend" data={frontendSkills}/>
                        </div>
                        <div className={css(styles.skillsCardContainer)}>
                            <SkillsCardContainer header="Backend" data={backendSkills}/>
                        </div>
                        <div className={css(styles.skillsCardContainer)}>
                            <SkillsCardContainer header="Databases" data={databases}/>
                        </div>
                        <div className={css(styles.skillsCardContainer)}>
                            <SkillsCardContainer header="Devops and tools" data={devopsSkills}/>
                        </div>
                    </Flex>
                </Flex>
            </div>
            <div className={css(styles.testimonialContainer)}>
                <TestimonialCarousel/>
            </div>
            <div className={css(styles.contactForm)}>
                <GetInTouchSimple/>
            </div>
            <Footer/>
        </div>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems:"center",
        backgroundImage: `url("../assets/bg.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    },
    headerContainer: {
        minHeight: "200px",
        paddingLeft: "48px",
        paddingRight: "48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems:"center",
        overflow: "hidden",
        fontSize: "56px",
        fontWeight: "bold",
        fontFamily: "eurostile, sans-serif",
        color: "white",
    },
    skillsContainer: {
        display: "flex",
        padding: "48px",
        marginTop: "72px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        background: "#ddf0c7",
        borderRadius: "50px 50px 0px 0px",
    },
    contactForm: {
        display: "flex",
        padding: "48px",
        marginTop: "72px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        background: "#ddf0c7",
        borderRadius: "50px 50px 0px 0px",
    },
    skillsCardContainer: {
        width: "200px",
        height:"250px",
    },
    welcomeContainer: {
        display: "flex",
        background: "#ddf0c7",
        minHeight: "500px",
        width: "100%",
        borderRadius: "50px 50px 0px 0px",
    },
    experiencesContainer: {
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
        borderRadius:"20px 20px 0px 0px",
        overflow:"hidden",
        boxShadow:"0px 15px 10px white"
    },
    cardTextContainer: {
        padding: "20px",
        height:"300px",
        fontSize: "14px",
        fontFamily: "europa, sans-serif"
    },
    experiencesHeaderContainer: {
        fontSize: "32px",
        fontFamily: "europa, sans-serif",
        fontWeight: "bold",
        marginTop: "72px",
        display:"flex",
        justifyContent: "center"
    },
    textColorWhite: {
        color:"white",
    },
    textColorBlack: {
        color:"black",
    },
    testimonialContainer: {
        marginTop: "72px",
        display:"flex",
        alignItems:"center",
        flexDirection:"column"
    }
})