import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeadlineItem from './HeadlineItem';

function HeadlineList() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
      setHeadlines(response.data.articles);
    }
    fetchData();
  }, []);

  return (
    <div className="headline-list">
      {headlines.map((headline, index) => (
        <HeadlineItem key={index} headline={headline} />
      ))}
    </div>
  );
}

export default HeadlineList;
