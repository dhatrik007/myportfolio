import React from "react";
import { Progress, Button, Flex } from "@mantine/core";
import { StyleSheet, css } from "aphrodite";

export default function EntryAnimationUnlockText({
    onHandleAnimation,
}) {
    const targetText = React.useMemo(() => ["ArrowUp", "Enter", "ArrowDown", "Enter"], []);
    const [text, setText] = React.useState(targetText[0]);
    const [progressValue, setProgressValue] = React.useState(0)
    const [showUnlock, setshowUnlock] = React.useState(false)

    React.useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === targetText[0]) {
                targetText.shift()
                if (targetText.length === 0) {
                    setshowUnlock(true)
                } else {
                    setText(targetText[0])
                    setProgressValue(progressValue + 25)
                }
            } 
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [targetText, progressValue]);

    return (
        <>
        {!showUnlock && (<Flex direction="column" gap="md">
            <h2>{"<< "}{text}{" >>"}</h2>
            <Progress color="#ffff85" value={progressValue} />
        </Flex>) }
        {showUnlock &&
        (<Button className={css(styles.unlockButton)} onClick={onHandleAnimation} size="xl" color="#ffff85" radius="xl" >
            Click here to unlock
        </Button>)}
        {/** TODO: add loadingOverlay */}
        </>
    )
}

const styles = StyleSheet.create({
    unlockButton: {
        fontSize: "24px",
        color: "black"
    }
})