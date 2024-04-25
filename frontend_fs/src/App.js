import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';  // Assurez-vous que les chemins sont corrects

import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import SignupForm from './components/SignupForm';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

function App() {
  // Fonction pour gérer les recherches
  const handleSearch = (query) => {
    console.log("Recherche pour :", query);
    // Ici, tu peux rediriger vers un composant de résultats ou effectuer une autre action
  };

  return (
    <Router>
      <div>
        <NavBar onSearch={handleSearch} />  {/* La NavBar inclut maintenant SearchBar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
