import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cr7ju2q', 'template_jlxbr58', form.current, 'mVJaLYzgkfxxs_I9t')
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>m.a.s.n@gmail.com</h5>
            <a href="mailto:m.a.s.n@gmail.com" target="_blank" rel="noreferrer">Send a Massage</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact-option-icon' />
            <h4>Messenger</h4>
            <h5>Moayed A Al-Nabahin</h5>
            <a href="https://m.me/moayed.nabahen.1" target="_blank" rel="noreferrer">Send a Massage</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact-option-icon' />
            <h4>Whatsapp</h4>
            <h5>+970-568909533</h5>
            <a href="https://api.whatsapp.com/send?phone=+970568909533" target="_blank" rel="noreferrer">Send a Massage</a>
          </article>
        </div>
        {/* End OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' id='txtName' placeholder='Your Full Name' required />
          <input type="email" name='email' id='txtEmail' placeholder='Your Email' required />
          <textarea name="massage" id="txtMassage" rows="7" placeholder='Your Massage' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Massage</button>
        </form>

      </div>
    </section>
  )
}

export default Contact