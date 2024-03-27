import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import styles from './Testimonial.module.scss';
import Calificacion from '@/components/Funcionality/Calificacion/Calificacion';

const Testimonial = () => {
  const testimonios = [
    {
      autor: "Eva Doe",
      cargo: "CEO de Innovación S.A.",
      testimonio: "AnvetCard transformó la forma en que hago networking. Su personalización y características interactivas me permiten destacar en cada encuentro. Es más que una tarjeta de presentación; es mi huella digital en el mundo profesional.",
      imagenAutor: "/images/components/testimonial1.jpg",
    },
    {
        autor: "Ericka Veintimilla",
        cargo: "Ingeniera en Marketing",
        testimonio: "La funcionalidad de AnvetCard de agregar un video a mi tarjeta digital ha sido un cambio de juego. Me permite presentarme de manera única y personal, creando conexiones más significativas desde el primer momento.",
        imagenAutor: "/images/components/testimonial2.jpeg",
      },
      {
        autor: "Yulexis Flores",
        cargo: "Médico Cirujano",
        testimonio: "AnvetCard se ha convertido en una herramienta indispensable para mi consultorio, ha mejorado la forma en que me comunico con mis pacientes.",
        imagenAutor: "/images/components/testimonial3.jpeg",
      },
    // Agrega más testimonios según sea necesario
  ];

  return (
    <div className={styles.testimonialContainer}>
      <h2 className={styles.title}>Testimonios</h2>
      <p className={styles.description}>Lo que dicen nuestros clientes sobre nosotros.</p>
      <Row>
        {testimonios.map((testimonio, index) => (
          <Col key={index} sm={12} md={6} lg={4} className={styles.testimonialCol}>
            <div className={styles.testimonio}>
              <div className={styles.imagenAutorWrapper}>
                <Image 
                  src={testimonio.imagenAutor} 
                  alt={`Foto de ${testimonio.autor}`} 
                  width={90} 
                  height={90}
                  layout="fixed" 
                />
              </div>
              <div className={styles.textWrapper}>
                <p className={styles.autor}>{testimonio.autor} - <span className={styles.cargo}>{testimonio.cargo}</span></p>
                <p className={styles.textoTestimonio}>{testimonio.testimonio}</p>
                
              </div>
              <div className={styles.score}><Calificacion /></div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonial;
