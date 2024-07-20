import React from 'react'
// import './Project.css'

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h1 className="contact-heading">Get in <strong className="purple1">Touch</strong></h1>
      <p className="contact-intro">If you have any questions, feel free to reach out!</p>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
        <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
        <input type="text" name="subject" placeholder="Subject" className="contact-input" required />
        <textarea name="message" placeholder="Your Message" className="contact-textarea" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  )
}

export default Contact
