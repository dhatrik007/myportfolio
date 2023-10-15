import React from "react";
import BasePageEntryAnimation from "./BasePageEntryAnimation";
import { Text } from "@mantine/core";

export default function BaseContainerWrapper() {
    const [entryFlag, setEntryFlag] = React.useState(true)
    const handleAnimationClosed = () => {
        return setEntryFlag(false)
    }
    return(
        <div>
            {entryFlag ?
             <BasePageEntryAnimation onHandleAnimation={handleAnimationClosed}/>
            :<Text>Animation Closed</Text>}
        </div>
    )
}