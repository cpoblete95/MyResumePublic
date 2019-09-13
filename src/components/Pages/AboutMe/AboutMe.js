import React, {useEffect} from 'react';

const AboutMe = () => {
    useEffect(() => {
        //scroll to top of page when page loaded
        document.body.scrollTop = 0;
    },[]);
    
    return(
        <div>
            About Me!
        </div>
    )
}

export default AboutMe;