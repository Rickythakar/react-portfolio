import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export default function Project({ data }) {
    const { title, image, linkTitle, link, summary } = data
    return (
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
        {summary}
    </Card.Text>
    <a href={link}>
    <Button variant="primary">{linkTitle}</Button></a>
  </Card.Body>
</Card>
    )
}
