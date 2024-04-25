import React from 'react';
import WeatherWidget from './WeatherWidget';
import NewsFeed from './NewsFeed';
import ChatWindow from './ChatWindow';
import PostList from './PostList';  // Assure-toi que le chemin d'accès est correct

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="sidebar left-sidebar">
        <WeatherWidget />
      </div>
      <div className="main-content">
        <ChatWindow />
        {/* Ajout de PostList ici pour afficher les posts dans le contenu principal*/}
        <PostList /> 
      </div>
      <div className="sidebar right-sidebar">
        <NewsFeed />
      </div>
    </div>
  );
};

export default HomePage;
