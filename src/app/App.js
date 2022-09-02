import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Skill from './components/Skill/Skill';
import About from './components/About/About';
import Footer from './components/Common/Footer';
import Loading from './components/Common/Loading';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {setLoading(false)}, 6000)
  }, []);

  return (
    <div className="container">
      {loading? <Loading /> : <><Nav /><Home /><About /><Project /><Skill /><Footer /></>}
    </div>
  );
}

export default App;
