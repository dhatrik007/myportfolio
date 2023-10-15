import React from "react"
import { StyleSheet, css } from "aphrodite"
import WelcomeBanner from "./WelcomeBanner"

export default function ProfileLandinginterface() {
    return (
        <div className={css(styles.mainContainer)}>
            <div className={css(styles.welcomeContainer)}>
                <WelcomeBanner/>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        width: "100%",
        height: "100vh",
    },
    welcomeContainer: {
        display: "flex",
        marginTop: "400px",
        background: "#ffff85",
        height: "500px",
        width: "100%",
        borderRadius: "50px 50px 0px 0px",
    }
})