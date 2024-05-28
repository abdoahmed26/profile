import './App.css';
import About from './components/About/About';
import Body from './components/Body';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Hearders/Header';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import UpButton from './components/UpButton';

function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Services/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <About/>
      <Contact/>
      <Footer/>
      <UpButton/>
    </div>
  );
}

export default App;
