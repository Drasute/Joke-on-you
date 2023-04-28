
import './App.css';
import logo from './logo.svg';
import Button from './Component/Button';
import Jokes from './Component/Jokes';
import { Code } from './Component/Store';




function App() {
  return (
    <Code>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Joke on You
          </h1>
          <>
      <h1>Click the button for fun with 'React'!!!</h1>
      <Button/>
      <Jokes/>
    </>

          



        </header>
      </div>
       </Code >
    
  );
}

export default App;
