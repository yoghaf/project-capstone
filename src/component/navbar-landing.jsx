import "../assets/navbar-landing.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="#home">Trash Hunter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link id="login" href="#deets">Log in</Nav.Link>
            <Button variant="dark" href="#deets" id="signup" >Sign Up</Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;