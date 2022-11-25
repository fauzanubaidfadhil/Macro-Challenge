import './App.css';
import './css/background.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Pomodoro from './Pages/Pomodoro';
import Signup from './Pages/Signup';
import Beranda from './Pages/Beranda';
import Articles from './Pages/Articles';
import Article1 from './Pages/Article1';
import Aboutus from './Pages/Aboutus';
import Aboutus2 from './Pages/Aboutus2';
import Customize from './Pages/Customize';
import React from 'react';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';

function App() {
 return (
    <section >
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Pomodoro" element={<Pomodoro />}/>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Beranda" element={<Beranda/>} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Article1" element={<Article1/>} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Aboutus2" element={<Aboutus2 />} />
          <Route path="/Customize" element={<Customize />} />
        </Routes>
      </div>
    </section>
  );
};

export default App;
