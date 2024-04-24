import React, { useEffect, useState } from 'react';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('URL_DE_L_API_NEWS');
      const data = await response.json();
      setNews(data.articles);
    };

    fetchNews();
  }, []);

  return (
    <div className="news-feed">
      <h2>Dernières Nouvelles</h2>
      {news.map((article, index) => (
        <p key={index}>{article.title}</p>
      ))}
    </div>
  );
};

export default NewsFeed;
