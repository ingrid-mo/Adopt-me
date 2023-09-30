import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'; 
import PropTypes from 'prop-types';
function Header({title}) {

  Header.propTypes = {
    title: PropTypes.string.isRequired,}


  return (
    <div>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid className="navbar">
            <Navbar.Brand href="">
              <img className="logo"
                src="https://firebasestorage.googleapis.com/v0/b/cosas-de-dl.appspot.com/o/Group%2054.png?alt=media&token=19c6a3db-111a-4601-bea2-29c7470882ae&_gl=1*ktnmls*_ga*MjY3OTYyODEzLjE2OTYwMTQxMDk.*_ga_CW55HF8NVT*MTY5NjA0NTYwOS42LjEuMTY5NjA0NzM0OC41MS4wLjA."
                alt=""
              />
            </Navbar.Brand>
            <Nav className="justify-content-end warning" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className="text-warning" >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="text-warning" href="#card">Galeria</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="text-warning" href="#footer" >Footer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
       
        </Nav.Item>
      </Nav>



          </Container>
        </Navbar>
      </div>
      <div>
        <Container fluid>
          <Row>
            <Col className="title_bighero">
           
              <h1> {title} </h1>
              <Button variant="warning" className="button-warning" href="#card"> ver carchorritos</Button>{' '}
            </Col>
            <Col>
        
              <img
                className="bighero"
                src="https://firebasestorage.googleapis.com/v0/b/cosas-de-dl.appspot.com/o/Group%2052.png?alt=media&token=1d150f49-47a7-47f1-897d-61bbd00b69b8&_gl=1*y224ul*_ga*MjY3OTYyODEzLjE2OTYwMTQxMDk.*_ga_CW55HF8NVT*MTY5NjAxOTA2NC4yLjEuMTY5NjAxOTA4OC4zNi4wLjA."
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Header;
