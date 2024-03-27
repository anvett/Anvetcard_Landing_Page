Componente Slider (Carousel)
----------------------------
----------------------------

Descripción:
----------------------------

El componente Slider, implementado con Carousel de React-Bootstrap, permite mostrar una serie de imágenes con títulos y descripciones opcionales. Es ideal para destacar características clave, promociones o una galería de imágenes.

Estructura JSX:
----------------------------
El componente utiliza Carousel de React-Bootstrap. Cada Carousel.Item representa un slide individual con una imagen (usando Image de Next.js para optimización), un título y una descripción.


import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import styles from './Slider.module.scss';

const Slider = ({ slides }) => {
  return (
    <Carousel className={styles.slider}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            width={800}
            height={600}
            layout="responsive"
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;



Estilos SCSS:
----------------------------------
Los estilos para el componente Slider están diseñados para ser responsivos. Se pueden personalizar los estilos para el título, la descripción y el contenedor del Carousel.


.slider {
  // Estilos para el contenedor del Carousel
}

.slider .carousel-caption {
  // Estilos para el título y la descripción en cada slide
}

// Puedes agregar estilos adicionales según sea necesario



Uso del Componente:
------------------------------------

Para usar el componente Slider, pasa un array de objetos slides, donde cada objeto tiene imageUrl, title y description.

<Slider
  slides={[
    {
      imageUrl: '/path/to/image1.jpg',
      title: 'Título del Slide 1',
      description: 'Descripción del Slide 1',
    },
    {
      imageUrl: '/path/to/image2.jpg',
      title: 'Título del Slide 2',
      description: 'Descripción del Slide 2',
    },
    // ... más slides
  ]}
/>
