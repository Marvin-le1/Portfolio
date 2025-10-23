import { Link } from "react-router-dom";
import '../Styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/confidentialite">Politique de confidentialité</Link>
        <a href="https://github.com/Marvin-le1" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/marvin-levoyer-5a0150321/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Marvin Levoyer — Tous droits réservés</p>
    </footer>
  );
}