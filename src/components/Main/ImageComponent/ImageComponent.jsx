
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from './ImageComponent.module.scss'; // Asegúrate de tener este archivo SCSS en la misma carpeta

const ImageComponent = ({ src, alt, width, height, colProps }) => {
  return (
    <Row className={styles.imageRow}>
      <Col {...colProps} className={styles.imageCol}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive" 
          className={styles.customImage}
        />
      </Col>
    </Row>
  );
};

export default ImageComponent;
