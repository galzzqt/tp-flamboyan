import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChalkboardTeacher, FaBookReader, FaTree, FaMedkit, FaPalette, FaPuzzlePiece } from 'react-icons/fa';
import '../dist/css/fasilitas.css';

const facilities = [
    { icon: <FaChalkboardTeacher />, title: 'Ruang Kelas Modern', description: 'Ruang kelas yang nyaman dan dilengkapi dengan teknologi pembelajaran terkini.' },
    { icon: <FaBookReader />, title: 'Perpustakaan', description: 'Koleksi buku yang luas untuk mendukung pembelajaran dan mengembangkan minat baca.' },
    { icon: <FaTree />, title: 'Area Bermain', description: 'Taman bermain yang aman dan menyenangkan untuk aktivitas luar ruangan.' },
    { icon: <FaMedkit />, title: 'Fasilitas P3K', description: 'Ruang kesehatan dan peralatan pertolongan pertama untuk menjaga keselamatan siswa.' },
    { icon: <FaPalette />, title: 'Ruang Seni', description: 'Ruangan khusus untuk mengekspresikan kreativitas melalui seni dan kerajinan.' },
    { icon: <FaPuzzlePiece />, title: 'Alat Permainan Edukasi', description: 'Berbagai permainan edukatif untuk merangsang perkembangan kognitif dan motorik anak.' },
  ];

function Facilities() {
  return (
    <div className="facilities-page">
      <section className="hero-section text-center text-white py-5">
        <Container>
          <h1 className="display-4">Fasilitas TP Flamboyan</h1>
          <p className="lead">Mendukung Pembelajaran dan Pengembangan Anak</p>
        </Container>
      </section>

      <section className="facilities-list py-5">
        <Container>
          <Row>
            {facilities.map((facility, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 facility-card">
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <div className="icon-wrapper mb-3">
                      {facility.icon}
                    </div>
                    <Card.Title>{facility.title}</Card.Title>
                    <Card.Text>{facility.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="cta-section text-center py-5 bg-light">
        <Container>
          <h2>Ingin Melihat Fasilitas Kami Secara Langsung?</h2>
          <p className="lead mb-4">Kami dengan senang hati akan memandu Anda dalam kunjungan sekolah.</p>
          <a 
            href="https://wa.me/62895339099571?text=Halo,%20saya%20ingin%20menjadwalkan%20kunjungan%20ke%20TP%20Flamboyan." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-lg"
          >
            Jadwalkan Kunjungan
          </a>
        </Container>
      </section>
    </div>
  );
}

export default Facilities;
