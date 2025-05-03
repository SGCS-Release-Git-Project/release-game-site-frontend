import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import GamesPage from './pages/GamesPage';
import AboutPage from './pages/AboutPage';
import './index.css';
import './animation.css';

import SubmitCodePage from "./pages/SubmitCodePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/game/:id" element={<GamePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/submit" element={<SubmitCodePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;