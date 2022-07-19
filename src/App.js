import keyhole from './key-hole-medium.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="title">Let's Authenticate</div>
        <img className="logo" alt="Let's Authenticate logo, a key hole" src={keyhole} />
      </div>
      <div className="dialog">
        
        <h1>
          Welcome! You have logged in successfully!
        </h1>

        <p>Thank you for trying the Let's Authenticate system.</p>

      </div>
    </div>
  );
}

export default App;
