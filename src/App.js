import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from './components/Home.jsx';
import GamePage from './components/GamePage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer';

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
    <Footer />
  </Router>
}
export default App;
