import React from "react";
import { Progress, Flex } from "@mantine/core";

export default function EntryAnimationUnlockText({
    onHandleAnimation,
}) {
    const [progressValue, setProgressValue] = React.useState(0)

    React.useEffect(() => {
        if(progressValue === 100) {
            onHandleAnimation()
        } else {
            setTimeout(() => {
                setProgressValue(progressValue + 25)
            }, 1000)
        }
    }, [progressValue, onHandleAnimation]);

    return (
        <>
        <Flex direction="column" gap="md">
            <Progress color="#ffff85" value={progressValue} />
        </Flex>
        {/** TODO: add loadingOverlay */}
        </>
    )
}