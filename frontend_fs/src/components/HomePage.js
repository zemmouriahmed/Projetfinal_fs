import React, { useState } from 'react';
import WeatherWidget from './WeatherWidget';
import NewsFeed from './NewsFeed';
import ChatWindow from './ChatWindow';
import './HomePage.css';

const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCommentPopupOpen, setIsCommentPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter le code pour envoyer le commentaire au serveur ou à l'état de l'application
    // Ne pas fermer le popup ici
  };

  return (
    <div className="home-page">
      <div className="sidebar left-sidebar">
        <WeatherWidget />
      </div>
      <div className="main-content">
        {isChatOpen && <ChatWindow isVisible={isChatOpen} closeChat={() => setIsChatOpen(false)} />}
        {isCommentPopupOpen && (
          <div className="comment-popup">
            <button onClick={() => setIsCommentPopupOpen(false)}>Fermer</button>
            <form onSubmit={handleSubmit}>
              <textarea placeholder="Écrire un commentaire..." required></textarea>
              <button type="submit">Poster</button>
            </form>
          </div>
        )}
      </div>
      <div className="sidebar right-sidebar">
        <NewsFeed />
      </div>
      <button className="open-chat-btn" onClick={() => setIsChatOpen(true)}>Ouvrir le Chat</button>
      <button className="open-comment-btn" onClick={() => setIsCommentPopupOpen(true)}>Ajouter un Commentaire</button>
    </div>
  );
};

export default HomePage;
