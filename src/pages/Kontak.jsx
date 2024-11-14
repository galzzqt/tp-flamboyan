import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../dist/css/kontak.css';

const Kontak = () => {
  return (
    <div className="contact-page">
      <Container className="py-5">
        <h1 className="text-center mb-5">Hubungi Kami</h1>
        <Row>
          <Col lg={6} className="mb-4">
            <Card className="contact-card h-100">
              <Card.Body>
                <h3 className="mb-4">Informasi Kontak</h3>
                <div className="contact-info">
                  <p><FaMapMarkerAlt className="icon" /> Dsn Weru RT03/01, Desa Manjung, Kec. Panekan, Kab. Magetan 63352</p>
                  <p><FaPhone className="icon" /> +62895339099571</p>
                  <p><FaEnvelope className="icon" /> tpflamboyan7@gmail.com</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="map-card h-100">
              <Card.Body>
                <h3 className="mb-4">Lokasi Kami</h3>
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5592.646842804218!2d111.28532765450132!3d-7.618589722099322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7993005b15d6eb%3A0x60e4296a877bf296!2sPAUD%20TP%20Flamboyan!5e0!3m2!1sid!2sid!4v1731549719484!5m2!1sid!2sid" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    aria-hidden="false" 
                    tabIndex="0"
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Kontak;
