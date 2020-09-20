import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Chat from './components/Chat';


export default function App() {

  function handleDarkMode(event) {
    setDark(!isDark)
  }

  const [isDark, setDark] = React.useState(false);

  return (
    <div className="App">
      <Navbar isDark={isDark} handleDarkMode={handleDarkMode} />
      <Chat isDark={isDark} handleDarkMode={handleDarkMode} />
    </div>
  );
}
