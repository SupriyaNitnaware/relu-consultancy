
import './App.css';
import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import  Log from './component/login';
import  Regi from './component/registration';
import Home from './component/home';
import { auth } from './firebase';
import Firstrow from './component/firstrow';
import Menubar from './component/menubar';

function App() {

  const [nm, setnm] = useState("");

  useEffect(()=>{

    auth.onAuthStateChanged((user) => {
      if(user)
      {
        setnm(user.displayName)
      }
      else setnm("");
      console.log(user);
    })

  },[]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="log" element={<Log /> } />
          <Route path="reg" element={<Regi />} />
          <Route path="home" element={<Home name={nm}  />} />
          <Route path="/" element={<Menubar/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
