import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Styles/Home.css"

function Info () {
    return (
        <div className="home-container">
        <Header />
        <section className="intro-section">
            <h1>Derrière l’écran</h1>
            <h2>Le chemin d’un passionné du code</h2>
            <p>
              Gamer à mes heures perdues et passionné par la réparation d’ordinateurs, j’ai naturellement été attiré par la voie <strong>STI2D</strong>, où j’ai découvert le <strong>développement informatique</strong>.
            </p>
            <p>
              C’est à ce moment-là que j’ai compris à quel point la logique, la créativité et la résolution de problèmes pouvaient se combiner pour donner vie à des projets concrets.
            </p>
            <p>
              Au fil du temps, j’ai pris goût à concevoir des sites et applications toujours plus aboutis, cherchant à comprendre comment tout fonctionne derrière chaque ligne de code.
            </p>
            <p>
              Aujourd’hui, je vois le développement comme plus qu’un simple domaine d’étude : c’est une passion que je souhaite faire évoluer en une véritable carrière.
            </p>

            <div className="contact-section">
              <h2 className="contact-title">Où me retrouver</h2>
              <p className="contact-subtitle">
                Vous pouvez suivre mes projets, en apprendre davantage sur mon parcours ou me contacter via ces plateformes :
              </p>
              <div className="contact-buttons">
                <a 
                  href="https://github.com/Marvin-le1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fab fa-github" style={{ marginRight: "8px" }}></i>
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/marvin-levoyer-5a0150321/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-success"
                >
                  <i className="fab fa-linkedin" style={{ marginRight: "8px" }}></i>
                  LinkedIn
                </a>
              </div>
            </div>
            
        </section>
        <Footer />
        </div>
    );
};

export default Info;