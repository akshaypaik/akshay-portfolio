import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    const form = useRef();

    const handleContactFormSubmission = (e) => {
        e.preventDefault();

        toast.promise(
        emailjs.sendForm('service_edepv3v', 'template_h1pt6ke', form.current, {
            publicKey: 'jKM3xD9KvUXSIomRR',
        }),{
            loading: 'Receiving your message!🚀',
            success: () => `Received your message. Thank you!🙏`,
            error: () => `Something went wrong! we did not receive your message. Please try again later.☹️`,
        });
        resetForm();
    }

    const resetForm = () => {
        name.current.value = "";
        email.current.value = "";
        message.current.value = "";
    }

    return (
        <div>
            <Toaster/>
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