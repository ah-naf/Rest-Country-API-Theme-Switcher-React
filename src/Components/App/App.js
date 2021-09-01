import React, { useEffect, useState } from 'react';
import './App.css';
import SocialMediaList from '../SocialMediaList/SocialMediaList';
import DashBoardList from '../DashBoardList/DashBoardList';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    if(darkMode) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  },[darkMode])
  return (
    <main>
      <div className={`content ${darkMode ? '':'content-light'}`}>
        <div className={`text ${darkMode ? '':'text-light'}`}>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className={`toggle-container ${darkMode ? '':'toggle-container-light'}`}>
          <p>Dark Mode</p>
          <div className="toggle" onClick={toggleMode}>
            <div className={`circle ${darkMode ? '':'move'}`}></div>
          </div>
        </div>
      </div>
      <SocialMediaList darkMode={darkMode} />
      <DashBoardList darkMode={darkMode} />
    </main>
  );
}

export default App;
