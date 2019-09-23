import React from 'react';
import styles from './Banner.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {

    return(
        <div className = {styles.Banner}>
            <h1>Software Engineer</h1>
            <hr/>
            <p>HTML/CSS | Java | Javascript | React | AngularJS</p>

            {/* Social Links */}
            <div className = {styles.SocialLinks}>
                    {/* github */}
                    <a href = "https://github.com/cpoblete95" target = "_blank">
                        <FontAwesomeIcon icon={['fab', 'github-square']} />
                    </a>

                    {/* linkedin */}
                    <a href = "https://www.linkedin.com/in/christopher-poblete-0a67a1138/" target = "_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                    {/* <a href = "https://github.com/cpoblete95" target = "_blank">
                        <FontAwesomeIcon icon={['fab', 'github-square']} />
                    </a> */}
            </div>

            
        </div>
    )
}

export default Banner;