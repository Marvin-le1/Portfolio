import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjetCard from "../components/ProjetCard";
import "../Styles/Projets.css";

const projets = [
    {
        titre: "Portfolio",
        description: "Mon site personnel présentant mes projets, compétences et parcours. Design responsive et performances optimisées.",
        image: "/img-project/Portfolio.png",
    },
    {
        titre: "FlyingWeb",
        description: "Application de gestion d’avions et d’aéroports avec réservation de vols (aller simple et aller‑retour) via une interface fluide.",
        image: "/img-project/FlyingWeb.webp",
    },
    {
        titre: "PHP Toolbox",
        description: "Application PHP regroupant plusieurs outils pratiques : conversion euros ↔ dollars, décimal ↔ hexadécimal, chiffrement César, calculs de pourcentage et règle de trois. Simple et efficace.",
        image: "/img-project/phpToolBox.png",
    },
    {
        titre: "Resonix",
        description: "Application web et mobile pour enregistrer, stocker et réécouter des sons comme une soundbox personnelle.",
    },
    {
        titre: "DockerCube",
        description: "Environnement Docker avec workflows dev/prod séparés et déploiement simplifié des nouvelles versions en production.",
        image: "/img-project/dockerCube.png",
    },
    {
        titre: "MedLock",
        description: "Distributeur de médicaments automatisé et sécurisé pour limiter les risques d’addiction et assurer le suivi des prises.",
    }
];

function Projets () {
    return (
        <div className="projets-page">
            <Header />
            <div className="liste-projets">
                {projets.map((projet, index) => (
                    <ProjetCard key={index} {...projet} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Projets;