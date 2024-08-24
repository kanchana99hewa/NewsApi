import React from 'react';
import { Card } from 'react-bootstrap';

function HeadlineItem({ headline }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={headline.urlToImage} alt="thumbnail" />
            <Card.Body>
                <Card.Title>{headline.title}</Card.Title>
                <Card.Text>
                    {headline.source.name} - {headline.author}<br />
                    {new Date(headline.publishedAt).toDateString()}<br />
                    {headline.description}
                </Card.Text>
                <Link to={`/headline/${headline.id}`}>Read more</Link>
            </Card.Body>
        </Card>
    );
}

export default HeadlineItem;
