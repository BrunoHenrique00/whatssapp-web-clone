import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Chat from './components/Chat';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Chat />
    </div>
  );
}
