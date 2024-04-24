import React from 'react';
import WeatherWidget from './WeatherWidget';
import NewsFeed from './NewsFeed';
import ChatWindow from './ChatWindow';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="sidebar left-sidebar">
        <WeatherWidget />
      </div>
      <div className="main-content">
        <ChatWindow />
      </div>
      <div className="sidebar right-sidebar">
        <NewsFeed />
      </div>
    </div>
  );
};

export default HomePage;
