import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import styles from './TestimonialCaroussel.module.scss';
import Calificacion from '@/components/Funcionality/Calificacion/Calificacion';
import { motion } from 'framer-motion';


const TestimonialCarousel = () => {
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
    ];
  
    return (
      <div className={styles.testimonialContainer}>
        <h2 className={styles.title}>Testimonios</h2>
        <p className={styles.description}>Lo que dicen nuestros clientes sobre nosotros.</p>
        <Carousel interval={null}>
          {testimonios.map((testimonio, index) => (
            <Carousel.Item key={index}>
              <div className={styles.testimonio}>
                <div className={styles.imagenAutorWrapper}>
                  <Image 
                    src={testimonio.imagenAutor} 
                    alt={`Foto de ${testimonio.autor}`} 
                    roundedCircle 
                    fluid
                  />
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.autor}>{testimonio.autor}  </p>
                  <span className={styles.cargo}>{testimonio.cargo}</span>
                  <p className={styles.textoTestimonio}>{testimonio.testimonio}</p>
                </div>
                <div className={styles.score}><Calificacion /></div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  };
  
  export default TestimonialCarousel;