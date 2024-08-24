import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HeadlineList.css';

function HeadlineList() {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        const fetchHeadlines = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/everything?q=tesla&from=2024-07-24&sortBy=publishedAt&apiKey=e1d71f292111457db63b8cde736c269c`
                );
                setHeadlines(response.data.articles);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchHeadlines();
    }, []);

    return (
        <div className="headline-list">
            {headlines.map((headline, index) => (
                <Link to={`/headline/${index}`} key={index} className="headline-card">
                    <img src={headline.urlToImage} alt="Thumbnail" className="headline-image" />
                    <div className="headline-content">
                        <h2 className="headline-title">{headline.title}</h2>
                        <p className="headline-source">By {headline.author} - {headline.source.name}</p>
                        <p className="headline-date">{new Date(headline.publishedAt).toLocaleDateString()}</p>
                        <p className="headline-description">{headline.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default HeadlineList;
