// import React, { useState } from 'react';
// import './Contact.css';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.message.trim()) newErrors.message = 'Message is required';
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Here you would typically send the data to your backend
//       console.log('Form submitted:', formData);
//       setSubmitted(true);
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//       setTimeout(() => setSubmitted(false), 5000);
//     }
//   };

//   return (
//     <div className="contact-page">
//       <div className="contact-hero">
//         <div className="hero-overlay">
//           <h1>Get in Touch</h1>
//           <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
//         </div>
//       </div>

//       <div className="contact-container">
//         <div className="contact-info">
//           <div className="info-card">
//             <div className="info-icon">
//               <i className="fas fa-map-marker-alt"></i>
//             </div>
//             <h3>Our Location</h3>
//             <p>123 Food Street, Culinary District</p>
//             <p>New York, NY 10001</p>
//           </div>

//           <div className="info-card">
//             <div className="info-icon">
//               <i className="fas fa-phone-alt"></i>
//             </div>
//             <h3>Call Us</h3>
//             <p>+1 (555) 123-4567</p>
//             <p>Mon-Fri: 9am-6pm</p>
//           </div>

//           <div className="info-card">
//             <div className="info-icon">
//               <i className="fas fa-envelope"></i>
//             </div>
//             <h3>Email Us</h3>
//             <p>info@foodwebsite.com</p>
//             <p>support@foodwebsite.com</p>
//           </div>
//         </div>

//         <div className="contact-form-container">
//           <h2>Send Us a Message</h2>
//           {submitted && (
//             <div className="success-message">
//               <i className="fas fa-check-circle"></i>
//               <p>Thank you for your message! We'll get back to you soon.</p>
//             </div>
//           )}
          
//           <form onSubmit={handleSubmit} className="contact-form">
//             <div className="form-group">
//               <label htmlFor="name">Your Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={errors.name ? 'error' : ''}
//               />
//               {errors.name && <span className="error-message">{errors.name}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Your Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={errors.email ? 'error' : ''}
//               />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="subject">Subject</label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Your Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className={errors.message ? 'error' : ''}
//               ></textarea>
//               {errors.message && <span className="error-message">{errors.message}</span>}
//             </div>

//             <button type="submit" className="submit-btn">
//               Send Message <i className="fas fa-paper-plane"></i>
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="contact-map">
//         <iframe
//           title="Our Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.98784492401886!3d40.74844097138978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;











import React, { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Contact.css';

const ContactPage = () => {
  const { url } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(`${url}/api/contact/submit`, {
          name: formData.name,
          email: formData.email,
          message: formData.message
        });
        console.log('Form submitted:', response.data);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setErrors({});
        toast.success('Your message has been sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { background: '#10b981', color: '#fff' }
        });
        setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        console.error('Error submitting form:', error.response?.data || error.message);
        toast.error(error.response?.data?.message || 'Failed to send message', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: { background: '#ff4d4d', color: '#fff' }
        });
      }
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="hero-overlay">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Our Location</h3>
            <p>123 Food Street, Culinary District</p>
            <p>New York, NY 10001</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567</p>
            <p>Mon-Fri: 9am-6pm</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>info@foodwebsite.com</p>
            <p>support@foodwebsite.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          {submitted && (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <p>Thank you for your message! We'll get back to you soon.</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.98784492401886!3d40.74844097138978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;