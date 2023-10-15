import React from "react";
import { Text, Progress, Button } from "@mantine/core";

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
        {!showUnlock && (<div>
            <Text>{text}</Text>
            <Progress color="yellow" value={progressValue} />
        </div>) }
        {showUnlock && (<Button onClick={onHandleAnimation}>Click here to unlock</Button>)}
        </>
    )
}