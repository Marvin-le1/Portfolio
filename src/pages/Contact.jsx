import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css';
import Header from "../components/Header";
import Footer from "../components/Footer";


function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.website) {
      setStatus('Spam détecté. Message non envoyé.');
      return;
    }
    emailjs.send('service_lmlhd2e', 'template_e3vu11f', { ...formData }, 'Y5vvtNrOiSM29QP8A')
      .then(() => {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '', website: '' });
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
        <input type="text" name="website" value={formData.website} onChange={handleChange} style={{ display: 'none' }} />
        <div className="checkbox-container">
          <input type="checkbox" required />
          <span>J’accepte que mes informations soient utilisées uniquement pour me recontacter.</span>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
        <p className="rgpd btn-like">
        Les informations envoyées via ce formulaire sont utilisées uniquement pour répondre à votre demande de contact.
        Elles ne sont ni conservées au-delà du nécessaire, ni partagées ou revendues à des tiers.
        Conformément au RGPD, vous pouvez demander la suppression de vos données à tout moment en me contactant via ce même formulaire.
      </p>
      </form>
      {status && <p className="status-message">{status}</p>}
      <Footer />
    </div>
  );
}

export default Contact;