import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useMe } from "../../../hooks";

const NavBar = () => {
const { me, logOut } = useMe()

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/latest-releases" className="nav-link">
              Últimos Estrenos
            </NavLink>
            <NavLink to="/popular" className="nav-link">
              Populares
            </NavLink>
            <NavLink to="/search" className="nav-link">
              Buscar
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/sign-up" className="nav-link">
              SignUp
            </NavLink>
            <Nav.Link onClick={logOut}>
              Cerrar
            </Nav.Link>
            <Navbar.Text>Hola {me?.name}</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { NavBar };
