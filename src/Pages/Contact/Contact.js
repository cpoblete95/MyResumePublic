import React, {useEffect, useState} from 'react';
import styles from './Contact.css';

import Avatar from '../../Images/Avatar.png';
import RealAvatar from '../../Images/RealAvatar.png';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';
import emailMask from 'text-mask-addons/dist/emailMask'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Prompt } from 'react-router'


const Contact = () => {
    const onUnload = (event) => { // the method that will be used for both add and remove event
        event.returnValue = "Are you sure you want to leave?"
    };

    useEffect(() => {
        //scroll to top of page when page loaded
        document.body.scrollTop = 0;
        //add event listener when user wnats to leave page
        window.addEventListener('beforeunload', onUnload);
        return(() => {
            window.removeEventListener('beforeunload',onUnload);
        })
    },[]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [shouldBlockNavigation, setShouldBlockNavigation] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch(name){
            case("name"):
                setName(value);
                break;
            case("email"):
                setEmail(value);
                break;
            case("subject"):
                setSubject(value);
                break;
            case("message"):
                setMessage(value);
                break;
        }
        setShouldBlockNavigation(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO handle email submit
    }
    return(
        <div className = {styles.Contact}>
            <Prompt
            when={shouldBlockNavigation}
            message={() => `Are you sure you want to leave the page, you have unfinished changes?`}
            />
            <div className = {styles.Modal}>
                <div className = {styles.Dialog}>
                    {/* LEFT CONTENT */}
                    <div className = {styles.LeftContent}>
                        <h1>Christopher Poblete</h1>
                        <img className = {styles.ContactAvatar} src = {RealAvatar}></img>
                        {/* <p>Dynamic Software Engineer with 2+ years of experience. Skilled at developing turnkey, testable and efficient code. Implemented Jasmine unit test cases for a UnitedHealth Group project that covers 97% AngularJS code that helps prevent future issues. A conscientious fast learner who can easily adapt to changing business requirements.</p> */}
                        <div className = {styles.ContactInfoElement}>
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                                <h2>chrispoblete95@gmail.com</h2>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className = {styles.RightContent}>
                        <h1>Contact Me</h1>
                        <hr/>
                        <form onSubmit = {handleSubmit}>
                            {/* Name */}
                            <Input
                            type = "text"
                            name = "name"
                            label = "Name:"
                            placeholder = "John Smith"
                            value = {name}
                            onChange = {handleChange}
                            />  

                            {/* Email */}
                            <Input
                            type = "text"
                            name = "email"
                            label = "Email:"
                            placeholder = "johnsmith@gmail.com"
                            mask = {emailMask}
                            value = {email}
                            onChange = {handleChange}
                            /> 
                        
                            {/* Subject */}
                            <Input
                            type = "text"
                            name = "subject"
                            label = "Subject:"
                            placeholder = "Hey Chris!"
                            value = {subject}
                            onChange = {handleChange}
                            /> 

                            <TextArea
                            name = "message"
                            label = "Message:"
                            placeholder = "Hey Chris I would love to connect!"
                            value = {message}
                            onChange = {handleChange}
                            />

                            <button type = "submit">Submit</button>
                        </form>
                        {/* <div className = {styles.ContactInfo}>
                            <div className = {styles.ContactInfoElement}>
                                <FontAwesomeIcon icon={['fas', 'mobile-alt']} />
                                <h2>1231231231</h2>
                            </div>
                            <div className = {styles.ContactInfoElement}>
                                <FontAwesomeIcon icon={['far', 'building']} />
                                <h2>1231231231231</h2>
                            </div>

                            <div className = {styles.ContactInfoElement}>
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                                <h2>123123123@gmail.com</h2>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;