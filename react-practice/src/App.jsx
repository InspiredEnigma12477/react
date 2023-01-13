import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutUS from './components/AboutUs';
import Login from './components/Login';
import Privacy from './components/Privacy';
import Home from './components/Home';
import Signup from './components/Signup';
import MySQLData from './components/MySQLData';
import List from './components/List';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/list" element={<List />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}


function Navbar() {
  return (
    <section className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/aboutus">About-Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

