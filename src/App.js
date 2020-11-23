import './App.css';
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import React from 'react';
import FullName from "./Component/Profile/FullName";
import Address from './Component/Profile/Address';
import "./App.css"




function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <hr />
      <FullName />
      <hr />
      <Address />
    </div>
  );
}

export default App;
