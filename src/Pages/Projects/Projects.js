import React, { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
    //scroll to top of page when page loaded
        document.body.scrollTop = 0;
    }, []);

    return <div>Projects!</div>;
};

export default Projects;
