import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeadlineDetail({ headlines }) {
    const { id } = useParams();
    const headlineIndex = parseInt(id, 10); // Convert id to integer
    const headline = headlines[headlineIndex];

    if (!headline) return <div>Headline not found</div>;

    return (
        <Container className="my-4">
            <Row>
                <Col md={8}>
                    <img src={headline.urlToImage} alt="Thumbnail" className="img-fluid mb-3" />
                    <h1>{headline.title}</h1>
                    <p><strong>By {headline.author} - {headline.source.name}</strong></p>
                    <p>{new Date(headline.publishedAt).toLocaleDateString()}</p>
                    <p>{headline.content}</p>
                    <Button variant="primary" href={headline.url} target="_blank" rel="noopener noreferrer">
                        Read Full Article
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default HeadlineDetail;
