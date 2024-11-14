import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../dist/css/footer.css';

function FooterComponent() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>TP Flamboyan</h5>
            <p>Membentuk Generasi Cerdas, Kreatif, dan Berkarakter</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/facilities">Facilities</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Kontak Kami</h5>
            <p>Dsn Weru RT03/01, Desa Manjung, Kec. Panekan, Kab. Magetan 63352</p>
            <p>Phone: +62895339099571</p>
            <p>Email: tpflamboyan7@gmail.com</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center copyright">
            <p>&copy; 2024 TP Flamboyan. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterComponent;
