import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import CVButton from '../components/CVButton';
import Header from "../components/Header";
import Footer from "../components/Footer";


function Accueil () {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="intro-section">
        <h1>Salut, moi c’est Marvin 👋</h1>
        <h2>Développeur d’applications web</h2>
        <p>
          Passionné par le développement, j'aime créer des sites et applications modernes,
          performants et bien conçus.
        </p>
        <CVButton />
      </div>
      <Footer />
    </div>
  );
};
export default Accueil;