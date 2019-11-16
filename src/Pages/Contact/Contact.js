import React, { useEffect, useState } from 'react';
import styles from './Contact.css';

import RealAvatar from '../../Images/RealAvatar.png';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';
import emailMask from 'text-mask-addons/dist/emailMask';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Prompt } from 'react-router';

import EmailService from '../../Services/EmailService';

const Contact = () => {
    const onUnload = (event) => {
    // the method that will be used for both add and remove event
        event.returnValue = 'Are you sure you want to leave?';
    };

    useEffect(() => {
    //scroll to top of page when page loaded
        document.body.scrollTop = 0;
        //add event listener when user wnats to leave page
        window.addEventListener('beforeunload', onUnload);
        return () => {
            window.removeEventListener('beforeunload', onUnload);
        };
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState("");
    const [message, setMessage] = useState('');
    const [shouldBlockNavigation, setShouldBlockNavigation] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
        show: false,
        error: false,
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
        }
        setShouldBlockNavigation(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var postData = {
            from_name: name,
            from_email: email,
            message: message
        };
        EmailService.sendEmail(postData).then((data) => {
            if (data === true) {
                setName('');
                setEmail('');
                setMessage('');
                setErrorMessage({
                    show: true,
                    error: false,
                    message: 'Email successfully sent!'
                });
            } else {
                setErrorMessage({
                    show: true,
                    error: true,
                    message:
            'We had a problem sending your email, please try again later!'
                });
            }
        });
    };
    return (
        <div className={styles.Contact}>
            <Prompt
                when={shouldBlockNavigation}
                message={() =>
                    `Are you sure you want to leave the page, you have unfinished changes?`
                }
            />
            {/* LEFT CONTENT */}
            <div className={styles.LeftContent}>
                <h1>Christopher Poblete</h1>
                <hr />
                <img className={styles.ContactAvatar} src={RealAvatar} />
                <div className={styles.ContactInfoElement}>
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                    <h2>chrispoblete95@gmail.com</h2>
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.RightContent}>
                <h1>Contact Me</h1>
                <hr />
                {errorMessage.show && (
                    <p
                        className={
                            errorMessage.error === true ? styles.error : styles.success
                        }
                    >
                        {errorMessage.message}
                    </p>
                )}
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <Input
                        type="text"
                        name="name"
                        label="Name:"
                        placeholder="John Smith"
                        value={name}
                        onChange={handleChange}
                        required
                    />

                    {/* Email */}
                    <Input
                        type="text"
                        name="email"
                        label="Email:"
                        placeholder="johnsmith@gmail.com"
                        mask={emailMask}
                        value={email}
                        onChange={handleChange}
                        required
                    />

                    {/* Subject */}
                    {/* <Input
                        type = "text"
                        name = "subject"
                        label = "Subject:"
                        placeholder = "Hey Chris!"
                        value = {subject}
                        onChange = {handleChange}
                        />  */}

                    <TextArea
                        name="message"
                        label="Message:"
                        placeholder="Hey Chris I would love to connect!"
                        value={message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
