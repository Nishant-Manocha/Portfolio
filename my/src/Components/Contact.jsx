import React from 'react';
import { useState } from 'react';
import { IoCallSharp, IoLocation } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import '../index.css'
const Contact = () => 
{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <div className='contact-heading'>
        <h5>Have You Any Questions?</h5>
        <h6>I am at Your Service</h6>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <i><IoCallSharp /></i>
          <h5>Call Us Now</h5>
          <span>+123 456 7890</span>
        </div>
        <div className="contact-item">
          <i><IoIosMail /></i>
          <h5>Email Us</h5>
          <span>nishantmanocha05@gmail.com</span>
        </div>
        <div className="contact-item">
          <i><IoLocation /></i>
          <h5>Find Us</h5>
          <span>Chugh Street Malkhana Mohala Fazilka,India</span>
        </div>
      </div>

      <div className='contact-heading'>
        <h5>Send me an Message</h5>
        <h6>I am very Responsive to Messages</h6>
      </div>

      <form onSubmit={handleSubmit} className='contact-form'>
        <div className='first-input'>
          <input
            type="text"
            name="name"
            placeholder="Insert your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Insert your email"
            value={formData.email}
            onChange={handleChange}
          />
      </div>
      <div className='second-input'>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
      <div className='third-input'>
        <textarea
          name="message"
          placeholder="Write your Message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Link  className='contact-button' style={{color:"white"}}>Send Message</Link>
    </form>

    </div>
  );
}

export default Contact;
