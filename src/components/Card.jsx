import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function CardEvent({ event }) {
  return (
    <Card className="ms-4 me-4 border">
          <Card.Img variant="top" src={event.image} />
          <Card.Body>
            <Link to={"/event/"+event.id} >
              <Card.Title>{event.name}</Card.Title>
            </Link>
            <Card.Text>{event.description}</Card.Text>
          </Card.Body>
    </Card>
  );
}

export default CardEvent;
