import './App.css';
import avatarIcon from './assets/images/avatar-jessica.jpeg';

function App() {
  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div id="avatar-icon-container">
            <img src={avatarIcon} alt="avatar" id="avatar-icon"></img>
          </div>
          <div id="info">
            <h1 id="name">Jessica Randall</h1>
            <p id="location">London, United Kingdom</p>
            <p id="description">"Front-end developer and avid reader."</p>
            <div id="button-container">
              <button className="social-link" id="github">GitHub</button>
              <button className="social-link" id="fm">Frontend Mentor</button>
              <button className="social-link" id="linkedin">LinkedIn</button>
              <button className="social-link" id="twitter">Twitter</button>
              <button className="social-link" id="instagram">Instagram</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
