import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function CardEvent({ image, title, description, link}) {
  return (
    <Card className="ms-4 me-4 border">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Link to={link} >
              <Card.Title>{title}</Card.Title>
            </Link>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
    </Card>
  );
}

export default CardEvent;
