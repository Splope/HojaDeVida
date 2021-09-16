
import './App.css';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Acerca from './components/acerca/Acerca';
import Footer from './components/Footer/Footer.css';

function App() {
  return (
    <div className="container">
     <Header />
     <section id="informacion">
     <Contact />
     <Acerca />
     </section>
     <footer />
    </div>
  );
}

export default App;
