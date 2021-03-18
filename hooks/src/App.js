import logo from './logo.svg';
import './App.css';
//import Button from './components/Button';
import ButtonHooks from './components/hooks/ButtonHooks';
import DataLoader from './components/DataLoader';
import DataLoaderHooks from './components/hooks/DataLoaderHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonHooks/>
          <DataLoaderHooks/>
        </a>
      </header>
    </div>
  );
}

export default App;
