import Background from './Background';
import Navigation from './Navigation';
import './style.css'

function App() {

  return (
    <div id="Body">
      <Navigation />
      <div id="MainHeader">
        <div id="title">
          <h1 id="hey">Hey, I'm Matt.</h1>
        </div>
        <div id="QuickLinks">
            <a className="link" target="_blank" id="email" href="mattmblanco@gmail.com"> email </a>
            <a className="link" target="_blank" id="github" href="https://github.com/Matt-Blanco"> github </a>
            <a className="link" target="_blank" id="linkedIn" href="https://www.linkedin.com/in/mattblanco/"> linkedIn </a>
          </div>
        <div id="about">
          <p id="aboutText">
            I'm a designer, developer, and adventurer trying to make complex information easier for people to understand!
            If this, or any of my past projects seems cool to you feel free to drop a line I'm always up for a chat!
          </p>
        </div>
      </div>
      <Background />
    </div>
  );
}

export default App;