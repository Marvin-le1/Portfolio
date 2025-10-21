import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Confidentialite() {
  return (
    <div className="home-container">
      <section className="intro-section">
        <Header />
        <h1>Politique de confidentialité</h1>

        <h2>1. Données collectées</h2>
        <p>
          Via le formulaire de contact : <strong>nom</strong>, <strong>email</strong>, <strong>message</strong>.
          Aucune autre donnée n’est collectée volontairement.
        </p>

        <h2>2. Finalité</h2>
        <p>
          Répondre à votre demande de contact. Les données ne sont pas utilisées à d’autres fins.
        </p>

        <h2>3. Base légale</h2>
        <p>
          Votre envoi du formulaire vaut consentement pour ce traitement.
        </p>

        <h2>4. Durée de conservation</h2>
        <p>
          Les messages sont conservés le temps nécessaire au traitement puis supprimés (au plus tard <strong>6 mois</strong>).
        </p>

        <h2>5. Destinataires / Sous-traitant</h2>
        <p>
          L’envoi des messages est assuré par <strong>EmailJS</strong> en qualité de sous-traitant. Aucune donnée n’est vendue ni partagée à des tiers.
        </p>

        <h2>6. Droits</h2>
        <p>
          Vous pouvez exercer vos droits d’accès, rectification et suppression en écrivant à :{" "}
          <a href="mailto:levoyermarvin+portfolio@gmail.com">levoyermarvin@gmail.com</a>.
        </p>

        <h2>7. Cookies</h2>
        <p>
          Ce site n’utilise pas de cookies de suivi ni de publicité.
        </p>

        <h2>8. Anti-spam</h2>
        <p>
          Un champ <em>honeypot</em> invisible est utilisé pour bloquer l’envoi automatisé des bots.
        </p>
      </section>
      <Footer />
    </div>
  );
}