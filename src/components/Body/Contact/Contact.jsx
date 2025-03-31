import React, { useRef } from 'react';
import './Contact.css';

const Contact = () => {

    const name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);

    const handleContactFormSubmission = (e) => {
        e.preventDefault();
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
            <form className='contact-form' onSubmit={(e) => handleContactFormSubmission(e)}>
                <input type='text' placeholder='Name' required ref={name} />
                <input type='email' placeholder='Email' required ref={email} />
                <textarea type='text' placeholder='Message' required ref={message} />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Contact