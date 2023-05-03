import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import BaseContainer from "./components/BaseContainer";
import {Login} from "./components/login/Login";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<BaseContainer/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  );
}

export default App;
