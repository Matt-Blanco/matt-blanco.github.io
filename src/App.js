import { Link } from 'react-router-dom';
import Background from './Background';
import './style.css'

function App() {

  return (
    <div id="Body">
      <div id="MainHeader">
        <div id="title">
          <h1 id="hey">Hey, I'm Matt.</h1>
        </div>
        <div id="about">
          <p id="aboutText">
            I'm a designer and software engineer trying to make complex information easier for people to understand!
            If this, or any of my past projects seems cool to you feel free to drop a line I'm always up for a chat!
          </p>
          <div id="QuickLinks">
            <a className="link" target="_blank" id="email" href="mattmblanco@gmail.com"> email </a>
            <a className="link" target="_blank" id="github" href="https://github.com/Matt-Blanco"> github </a>
            <a className="link" target="_blank" id="linkedIn" href="https://www.linkedin.com/in/mattblanco/"> linkedIn </a>
          </div>
        </div>
      </div>
      <div id="Navigation">
        <ul>
        <li className="NavLink">
            <Link to="/">Home</Link>
          </li>
          <li className="NavLink">
            <Link to="/Test">About</Link>
          </li>
          <li className="NavLink">
            <Link to="/Test">Projects</Link>
          </li>
          <li className="NavLink">
            <Link to="/Test">CV</Link>
          </li>
        </ul>
      </div>
      <Background />
    </div>
  );
}

export default App;
