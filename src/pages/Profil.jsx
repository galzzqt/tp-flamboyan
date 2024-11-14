import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../dist/css/profil.css';

function Profile() {
  return (
    <div className="profile-page">
      <section className="hero-section text-center text-white">
        <Container>
          <h1 className="display-4 mb-4">Profil TP Flamboyan</h1>
          <p className="lead">Membentuk Generasi Cerdas, Kreatif, dan Berkarakter</p>
        </Container>
      </section>

      <section className="school-profile py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Image src="/src/assets/img/foto1.jpg" alt="TP Flamboyan Logo" fluid />
            </Col>
            <Col md={6}>
              <h2 className="mb-4" style={{ color: '#000000' }}>Tentang Sekolah Kami</h2>
              <p className="lead" style={{ color: '#000000' }}>
                TP Flamboyan adalah taman pendidikan yang didedikasikan untuk memberikan 
                pengalaman belajar terbaik bagi anak-anak usia dini.
              </p>
              <p>
                Didirikan pada tahun 2013, sekolah kami telah berkomitmen untuk mengembangkan 
                potensi setiap anak melalui pendekatan holistik yang menggabungkan pembelajaran 
                akademik, pengembangan sosial-emosional, dan eksplorasi kreatif.
              </p>
              <blockquote className="blockquote">
                <p className="mb-0">
                  "Visi kami adalah menjadi lembaga pendidikan anak usia dini terkemuka yang 
                  menginspirasi cinta belajar seumur hidup."
                </p>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="principal-profile py-5 bg-light">
        <Container>
        <h2 className="text-center mb-5" style={{ color: '#000000' }}>Pengelola Sekolah</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="border-0 shadow">
                <Row className="no-gutters">
                  <Col md={4}>
                    <Image src="/src/assets/img/guru.jpg" alt="Kepala Sekolah TP Flamboyan" fluid className="card-img" />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <h3 className="card-title" style={{ color: '#000000' }}>Ibu Purwati & Ibu Lasminah</h3>
                      <p className="card-text">
                        Ibu Purwati dan Ibu Lasminah telah mengelola TP Flamboyan sejak tahun 2013. Dengan 
                        pengalaman anak usia dini, beliau 
                        membawa visi dan dedikasi yang kuat untuk pengembangan setiap anak.
                      </p>
                      <blockquote className="blockquote text-right">
                        <p className="mb-0">
                          "Setiap anak adalah bintang yang unik. Tugas kita adalah membantu mereka 
                          bersinar dengan caranya masing-masing."
                        </p>
                        <footer className="blockquote-footer">Ibu Purwati & Ibu Lasminah</footer>
                      </blockquote>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Profile;
