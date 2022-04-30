import React, { useRef, useState } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_apump4g', 'template_sdac3ki', formRef.current, 'jokro9lrDMHoqtsjs')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                e.target.reset();
                window.location.reload(false);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="contact">
            <div className="con-desc">
                <h1 className="con-title">You are welcome to say hello!</h1>
                <h3 className="con-sub">Please leave a Message down below</h3>
            </div>
            <div className="con-input">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name='user_name' />
                    <input type="text" placeholder='Subject' name='user_subject' />
                    <input type="text" placeholder='E-Mail' name='user_email' />
                    <textarea rows="10" placeholder='Message' name='message' />
                    <button>Submit</button>
                    {done && " Message sent! Thank you so much!"}
                </form>
            </div>
        </div>
    )
}

export default Contact