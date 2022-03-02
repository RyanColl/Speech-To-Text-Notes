import logo from './logo.svg';
import './App.scss';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.img 
        style={{height: '40vmin'}} 
        src={logo} 
        initial={{scale: 1}} 
        animate={{rotate: 360}} 
        transition={{duration: 10, repeat: true, ease: 'linear'}} 
        alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
