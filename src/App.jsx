import { useSelector } from 'react-redux';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Footer from './components/Footer/Footer';

function App() {

  const darkMode = useSelector((store) => store.app.darkMode);

  return (
    <div className={`app-container ${!darkMode ? 'light-mode' : ''}`}>
      {darkMode && <ParticlesBackground />}
      <Intro />
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
