import logo from './logo.svg';
import './App.css';

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

function App() {
  return (
    <div className="App">
      {element}
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
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