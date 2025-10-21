import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Mentions() {
  return (
    <div className="home-container">
      <section className="intro-section">
        <Header />
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          <strong>Nom :</strong> Marvin Levoyer<br />
          <strong>Statut :</strong> Étudiant<br />
          <strong>Contact :</strong> <a href="mailto:levoyermarvin@gmail.com">levoyermarvin@gmail.com</a>
        </p>

        <h2>Hébergement</h2>
        <p>
          Site hébergé par <strong>GitHub Pages</strong> (GitHub, Inc.).<br />
          <a href="https://pages.github.com/" target="_blank" rel="noreferrer">pages.github.com</a>
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Sauf mention contraire, les contenus de ce site (textes, images, code) sont la propriété de Marvin Levoyer.
          Toute réutilisation doit faire l’objet d’une autorisation préalable.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Les informations présentées sur ce site sont fournies à titre informatif. Aucun engagement de résultat.
        </p>
      </section>
      <Footer />
    </div>
  );
}