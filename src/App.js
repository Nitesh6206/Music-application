import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavoritesPage from './Component/FaviouretsPage';
import MusicPlayer from './Component/MusicPlayer';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MusicPlayer />} /> 
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
