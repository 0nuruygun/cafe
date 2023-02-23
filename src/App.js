import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User name='onur' surname='uygun' />
        <Navbar title='Full Stack Dev'/>
        <img src={logo} className="App-logo" alt="logo" />
        <form></form>
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
