import React from 'react'
import {useLocation, useHistory} from "react-router"
const About = () => {
    const location = useLocation();
    console.log(location);

    const history = useHistory();
    // goBackHandle (() => {
    //     history.goBack()
    // })
    const goBackHandle = () => {
        history.goBack()
    }

    return (
        <div>
            <div>
            About
            </div>
            <div>
                {location.pathname}
            </div>
            <div>
                {location.state.from}
            </div>
            <button onClick = {goBackHandle}>
                Back
            </button>
        </div>
    )
}

export default About
