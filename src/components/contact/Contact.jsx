import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jpnhu97', 'template_km520xf', form.current, 'Mmh0fFVAyyrywVZFc')
    
  alert("Your Message Was Sent");
  e.target.reset();

  };
  
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className='contact__options'>
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>oluwaremidaniel36@gmail.com</h5>
          <a href="mailto:oluwaremidaniel36@gmail.com" target="_blank">Send a Message</a>
        </article>

        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Daniel</h5>
          <a href="http://m.me/" target="_blank">Send a Message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+2349035391575</h5>
          <a href="https://api.whatsapp.com/send?phone=%2B2348157625589&text&app_absent=0" target="_blank">Send a Message</a>
        </article>
      </div>
     
     {/* END OF CONTACT OPTIONS */}
     
     <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" placeholder='Your Message'  rows="7" required>
        
         </textarea>

        <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>
     

     
    </div>
  </section>
  )
}

export default Contact