import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    const form = useRef();

    const handleContactFormSubmission = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_edepv3v', 'template_h1pt6ke', form.current, {
            publicKey: 'jKM3xD9KvUXSIomRR',
        })
            .then(
                () => {
                    console.log('SUCCESS! Email Sent Successfully');
                },
                (error) => {
                    console.log('Email Sending FAILED...', error.text);
                },
            );

        resetForm();
    }

    const resetForm = () => {
        name.current.value = "";
        email.current.value = "";
        message.current.value = "";
    }

    return (
        <div>
            <h1 className='section-title'>Contact</h1>
            <form ref={form} className='contact-form' onSubmit={(e) => handleContactFormSubmission(e)}>
                <input type='text' name="user_name" placeholder='Name' required ref={name} />
                <input type='email' name="user_email" placeholder='Email' required ref={email} />
                <textarea name="message" placeholder='Message' required ref={message} />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Contact