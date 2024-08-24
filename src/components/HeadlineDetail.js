import React from 'react';
import { useParams } from 'react-router-dom';

function HeadlineDetail({ headlines }) {
    const { id } = useParams();
    const headline = headlines[id];

    if (!headline) return <div>Headline not found</div>;

    return (
        <div className="headline-detail">
            <img src={headline.urlToImage} alt="Thumbnail" className="headline-detail-image" />
            <h1>{headline.title}</h1>
            <p><strong>By {headline.author} - {headline.source.name}</strong></p>
            <p>{new Date(headline.publishedAt).toLocaleDateString()}</p>
            <p>{headline.content}</p>
            <a href={headline.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
        </div>
    );
}

export default HeadlineDetail;
