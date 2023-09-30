import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterFluid() {
  return (
    <Container fluid className="footer">
      <img
        className="footer__img"
        src="https://firebasestorage.googleapis.com/v0/b/cosas-de-dl.appspot.com/o/img-footer.png?alt=media&token=ae9ed667-50e2-454b-bbfb-6a224ce47d4d&_gl=1*3n7apr*_ga*MjY3OTYyODEzLjE2OTYwMTQxMDk.*_ga_CW55HF8NVT*MTY5NjA0MzI2MC41LjAuMTY5NjA0MzI2MC42MC4wLjA."
        alt=""
      />
      <Row className="footer__text">
        <Col>
          <strong>
            {" "}
            Descubre a Tu Compañero Perfecto: Explora Nuestra Galería de
            Adopción
          </strong>
          <p>
            {" "}
            En nuestro refugio, creemos que cada mascota merece un hogar lleno
            de amor y felicidad. ¿Estás listo para encontrar a tu compañero
            perfecto? ¡Entonces, te invitamos a explorar nuestra Galería de
            Adopción!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterFluid;
