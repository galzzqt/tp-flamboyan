import React from 'react';
import { Container, Row, Col, Button, Card, Image as BootstrapImage } from 'react-bootstrap';
import { FaPlayCircle, FaBook, FaPaintBrush, FaBaseballBall } from 'react-icons/fa';
import '../dist/css/home.css';

import foto1 from '../assets/img/foto1.jpg';
import foto2 from '../assets/img/foto2.jpg';
import foto3 from '../assets/img/foto3.jpg';
import foto4 from '../assets/img/foto4.jpg';
import foto5 from '../assets/img/foto5.jpg';
import foto6 from '../assets/img/foto6.jpg';


const facilities = [
    { icon: <FaPlayCircle />, title: 'Ruang Kelas', description: 'Memiliki ruang kelas yang luas dan bersih sehingga dapat menciptakan suasana belajar mengajar yang kondusif dan menyenangkan.' },
    { icon: <FaBaseballBall />, title: 'Media Pembelajaran', description: 'Memiliki media-media pembelajaran yang lengkap sebagai sarana penunjang belajar mengajar.' },
    { icon: <FaPaintBrush />, title: 'Ruang Kreativitas dan Seni', description: 'Ruang untuk aktivitas seni seperti menggambar, mewarnai, melukis, dan membuat kerajinan tangan.' },
    { icon: <FaBook />, title: 'Perpustakaan', description: 'memiliki perpustakaan yang digunakan sebagai penunjang siswa dalam meningkatkan literasi minat baca' },
  ];

  const galleryImages = [
    { src: foto1, alt: 'Gallery image 1' },
    { src: foto2, alt: 'Gallery image 2' },
    { src: foto4, alt: 'Gallery image 3' },
    { src: foto3, alt: 'Gallery image 4' },
    { src: foto5, alt: 'Gallery image 5' },
    { src: foto6, alt: 'Gallery image 6' },
  ];

  function Home() {
    const phoneNumber = '62895339099571'; // Replace with your actual WhatsApp number
  const message = 'Halo, saya ingin informasi lebih lanjut tentang TP Flamboyan.'; // Pre-filled message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
      <div>
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <Container fluid>
            <Row>
              <Col lg={12}>
                <div className="hero-content">
                  <h1>Selamat Datang di Web resmi TP Flamboyan</h1>
                  <p>
                  Temukan pendidikan usia dini terbaik bagi buah hati Anda! Kami mengutamakan perkembangan anak secara menyeluruh melalui program bermain sambil belajar yang menyenangkan, aman, dan penuh kasih sayang. Bersama kami, anak Anda akan tumbuh dengan bahagia dan siap menghadapi masa depan!
                  </p>
                  <Button 
                  variant="primary" 
                  size="lg" 
                  className="contact-btn"
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kontak Kami
                </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      <section className="facilities-section">
        <Container>
          <h2 className="text-center mb-5">Ada apa aja sih di TP Flamboyan?</h2>
          <Row>
            {facilities.map((facility, index) => (
              <Col key={index} md={6} lg={3} className="mb-4">
                <Card className="facility-card h-100">
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <div className="facility-icon mb-3">{facility.icon}</div>
                    <Card.Title>{facility.title}</Card.Title>
                    <Card.Text>{facility.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="gallery-section">
        <Container>
          <h2 className="text-center mb-5">Galery Foto</h2>
          <Row>
            {galleryImages.map((image, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <div className="gallery-item">
                  <BootstrapImage src={image.src} alt={image.alt} fluid />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
