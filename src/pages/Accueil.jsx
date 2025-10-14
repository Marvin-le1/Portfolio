import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import CVButton from '../components/CVButton';
import Header from "../components/Header"

function Accueil () {
  return (
    <div className="home-container">
      <div className="intro-section">
        <Header/>
        <h1>Salut, moi c’est Marvin 👋</h1>
        <h2>Développeur d’applications web</h2>
        <p>
          Passionné par le développement, j'aime créer des sites et applications modernes,
          performants et bien conçus.
        </p>
        <CVButton />
      </div>
    </div>
  );
};
export default Accueil;