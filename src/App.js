import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeadlineList from './components/HeadlineList';
import HeadlineDetail from './components/HeadlineDetail';
import axios from 'axios';

function App() {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        const fetchHeadlines = async () => {
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/everything?q=tesla&from=2024-07-24&sortBy=publishedAt&apiKey=e1d71f292111457db63b8cde736c269c'
                );
                setHeadlines(response.data.articles);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchHeadlines();
    }, []);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>News Headlines</h1>
                </header>
                <Routes>
                    <Route path="/" element={<HeadlineList headlines={headlines} />} />
                    <Route path="/headline/:id" element={<HeadlineDetail headlines={headlines} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
