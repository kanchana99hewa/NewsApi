import React from 'react';
import { Link } from 'react-router-dom';

function HeadlineItem({ headline }) {
  return (
    <div className="headline-item">
      <img src={headline.urlToImage} alt="thumbnail" />
      <div className="headline-info">
        <h2>{headline.title}</h2>
        <p>{headline.source.name} - {headline.author}</p>
        <p>{new Date(headline.publishedAt).toDateString()}</p>
        <p>{headline.description}</p>
        <Link to={`/headline/${headline.id}`}>Read more</Link>
      </div>
    </div>
  );
}

export default HeadlineItem;
