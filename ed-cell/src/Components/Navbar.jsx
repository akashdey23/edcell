import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import edcell_img from '../assets/edcell_img.jpeg';
import './Navbar.css';

function NavScrollExample() {
  return (
    <div className="navbar1">
      <Navbar expand="lg" className="bg-gray">
        <Container fluid>
          <Navbar.Brand href="#"><img src={edcell_img} className='imged' alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Gallery</Nav.Link>
              <Nav.Link href="#action2">Event</Nav.Link>
              <Nav.Link href="#action2">Team</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Register</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
