import React, {useEffect} from 'react';

const Resume = () => {
    useEffect(() => {
        //scroll to top of page when page loaded
        document.body.scrollTop = 0;
    },[]);
    
    return(
        <div>
            Resume!
        </div>
    )
}

export default Resume;