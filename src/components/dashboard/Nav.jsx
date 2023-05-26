import "../../assets/style/nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar className="nav-dashboard" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="logo-dashboard" to={"/dashboard"}>
          Trash Hunter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="links">
            <Link to={"/dashboard"}>Dashboard</Link>
            <Link to={"/dashboard/news"}>News</Link>
            <Link to={"/dashboard/save"}>Save</Link>
            <Link to={"/dashboard/registeredevent"}>Registered</Link>
            <Link to={"/login"}>
              <img src="./images/content/log-out.png" alt="" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
