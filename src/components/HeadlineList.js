import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeadlineList() {
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
        <Row className="g-3 p-3">
            {headlines.map((headline, index) => (
                <Col key={index} sm={12} md={6} lg={4}>
                    <Card as={Link} to={`/headline/${index}`} className="text-decoration-none">
                        <Card.Img variant="top" src={headline.urlToImage} />
                        <Card.Body>
                            <Card.Title>{headline.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                By {headline.author} - {headline.source.name}
                            </Card.Subtitle>
                            <Card.Text>
                                {new Date(headline.publishedAt).toLocaleDateString()}
                            </Card.Text>
                            <Card.Text>
                                {headline.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default HeadlineList;
