import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

function App() {

  return (
    <div className='app-container'>
      <Intro />
      <Header />
      <Body />
    </div>
  )
}

export default App
