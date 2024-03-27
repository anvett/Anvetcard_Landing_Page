

import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import styles from "./TextoImagen.module.scss";

const TextoImagen = ({ ladoTexto, titulo, texto, imageUrl, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 100; // Ajusta este valor según tus necesidades
  const textoResumido = texto.length > MAX_LENGTH ? texto.slice(0, MAX_LENGTH) + "..." : texto;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const esTextoIzquierda = ladoTexto === "izquierda";

  return (
    <Container fluid className={`${styles.textoImagenContainer} ${className}`}>
      <Row>
        {esTextoIzquierda && (
          <Col md={6} className={styles.textoImagenCol}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.texto}>{isExpanded ? texto : textoResumido}</p>
            {isExpanded && <p>Más contenido aquí...</p>}
            <Button
              text={isExpanded ? "Mostrar Menos" : "Mostrar Más"}
              onClick={toggleExpand}
              className={styles.estiloImagenButton}
            />
          </Col>
        )}
        <Col md={6} className={styles.textoImagenCol}>
          <Image className={styles.imagen} src={imageUrl} alt="Imagen" fluid />
        </Col>
        {!esTextoIzquierda && (    
          <Col md={6} className={styles.textoImagenCol}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.texto}>{isExpanded ? texto : textoResumido}</p>
            {isExpanded && <p>Más contenido aquí...</p>}
            <Button
              text={isExpanded ? "Mostrar Menos" : "Mostrar Más"}
              onClick={toggleExpand}
              className={styles.estiloImagenButton2}
            />
          </Col>
        )}
      </Row>
    </Container>
  );
};

TextoImagen.propTypes = {
  ladoTexto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextoImagen;
