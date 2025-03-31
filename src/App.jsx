import { useSelector } from 'react-redux';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

function App() {

  const darkMode = useSelector((store) => store.app.darkMode);

  return (
    <div className={`app-container ${!darkMode ? 'light-mode' : ''}`}>
      <Intro />
      <Header />
      <Body />
    </div>
  )
}

export default App
