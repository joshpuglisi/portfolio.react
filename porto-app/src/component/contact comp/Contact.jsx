import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact">
        <div className="con-desc">
           <h1 className="con-title">You are welcome to say hello!</h1>
           <h3 className="con-sub">Please leave a Message down below</h3>
        </div>
        <div className="con-input">
           <form>
               <input type="text" placeholder='Name' name='user_name'/>
               <input type="text" placeholder='Subject' name='user_subject'/>
               <input type="text" placeholder='E-Mail' name='user_email'/>
               <textarea rows="10" placeholder='Message' name='message' />
               <button>Submit</button>
           </form>
        </div>
    </div>
  )
}

export default Contact