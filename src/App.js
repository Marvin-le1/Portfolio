import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import Info from "./pages/Info";
import Mentions from "./pages/Mentions";
import Confidentialite from "./pages/Confidentialite";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
      </Routes>
    </Router>
  );
}

export default App;