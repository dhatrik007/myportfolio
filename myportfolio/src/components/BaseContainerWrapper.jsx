import React from "react";
import BasePageEntryAnimation from "./entryAnimation/BasePageEntryAnimation";
import ProfileLandinginterface from "./ProfileLandingInterface";

export default function BaseContainerWrapper() {
    const [entryFlag, setEntryFlag] = React.useState(true)
    const handleAnimationClosed = () => {
        return setEntryFlag(false)
    }
    return(
        <div>
            {entryFlag ?
             <BasePageEntryAnimation onHandleAnimation={handleAnimationClosed}/>
            :<ProfileLandinginterface/>}
        </div>
    )
}