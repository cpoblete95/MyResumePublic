import React, {useEffect} from 'react';

const Contact = () => {
    useEffect(() => {
        //scroll to top of page when page loaded
        document.body.scrollTop = 0;
    },[]);
    return(
        <div>
            Contact!
        </div>
    )
}

export default Contact;