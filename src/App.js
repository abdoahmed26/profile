import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import About from './components/About/About';
import Body from './components/Body';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer';
import Header from './components/Hearders/Header';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import UpButton from './components/UpButton';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-bgcolor-1 transition-colors duration-300">
        <Header/>
        <Body/>
        <About/>
        <Experience/>
        <Skills/>
        <Services/>
        <Projects/>
        <Certificates/>
        <Contact/>
        <Footer/>
        <UpButton/>
      </div>
    </ThemeProvider>
  );
}

export default App;
