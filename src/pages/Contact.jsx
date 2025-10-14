import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css';
import Header from "../components/Header"

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_lmlhd2e', 'template_e3vu11f', formData, 'Y5vvtNrOiSM29QP8A')
      .then(() => {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          navigate('/');
        }, 5000);
      })
      .catch(() => {
        setStatus('Une erreur est survenue. Veuillez réessayer.');
      });
  };

  return (
    <div className="contact-page">
    <Header/>
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Nom :
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email :
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message :
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default Contact;