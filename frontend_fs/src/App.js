import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';  // Importez le nouveau composant NavBar

import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import SignupForm from './components/SignupForm'; // Assurez-vous d'importer le composant

import NotFoundPage from './components/NotFoundPage';
import './App.css';  // Ajoutez cette ligne pour importer le CSS


function App() {
  return (
    <Router>
      <div>
      <NavBar />  {/* Ajoutez la NavBar ici pour qu'elle apparaisse sur toutes les pages */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignupForm />} />  {/* Ajoutez cette ligne */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
    
     
  );
}

export default App;
