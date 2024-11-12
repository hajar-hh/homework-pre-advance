import React from 'react';
import SideBar from './components/SideBar';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app-container d-flex">
      <SideBar />
      <div className="main-content-container flex-grow-1 d-flex flex-column">
        <Header />
       
      </div>
    </div>
  );
}

export default App;
