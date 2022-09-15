import './App.css';
import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import Project from '../components/Project/Project';
import Skill from '../components/Skill/Skill';
import About from '../components/About/About';
import Footer from '../components/Common/Footer';

function App() {

  return (
    <div className="container">
      <Nav />
      <Home />
      <About />
      <Project />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
