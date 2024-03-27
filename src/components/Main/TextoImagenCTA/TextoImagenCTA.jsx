import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import styles from "./TextoImagenCTA.module.scss";
import { FiCheck } from "react-icons/fi";
import ButtonSection from "@/components/ButtonSection/ButtonSection";

const TextoImagenCTA = ({
  ladoTexto,
  titulo,
  texto,
  imageUrl,
  ctaUrl,
  ctaTexto,
  className,
  caracteristicas,
  titulosConDescripcion,
}) => {
  const esTextoIzquierda = ladoTexto === "izquierda";

  const handleCTAClick = () => {
    const section = document.getElementById(ctaUrl);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container fluid className={`${styles.textoImagenContainer} ${className}`}>
      <Row>
        {esTextoIzquierda ? (
          <>
            <Col md={6} className={styles.textoImagenCol}>
              <div className={styles.izquierdaCol1}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <p className={styles.texto}>{texto}</p>
                {caracteristicas && (
                  <>
                    <div className={styles.caracteristicas}>
                      <ul className={styles.customList}>
                        {caracteristicas.columna1.map((item, index) => (
                          <li key={index}>
                            <FiCheck className={styles.checkIcon} />
                            <span className={styles.listText}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className={styles.customList}>
                        {caracteristicas.columna2.map((item, index) => (
                          <li key={index}>
                            <FiCheck className={styles.checkIcon} />
                            <span className={styles.listText}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
                <Button
                  text={ctaTexto}
                  onClick={handleCTAClick}
                  className={styles.estiloImagenButton}
                />
              </div>
            </Col>
            <Col md={6} className={styles.textoImagenCol}>
              <Image className={styles.imagen} src={imageUrl} alt="Imagen" fluid />
            </Col>
          </>
        ) : (
          <>
            <Col md={6} className={styles.textoImagenCol}>
              <Image className={styles.imagen} src={imageUrl} alt="Imagen" fluid />
            </Col>
            <Col md={6} className={styles.textoImagenCol}>
              {/* <h2 className={styles.titulo}>{titulo}</h2> */}
              {titulosConDescripcion &&
                titulosConDescripcion.map((item, index) => (
                  <div className={styles.featuresRight} key={index}>
                    <h3 className={styles.subtitulo}>{item.subtitulo}</h3>
                    <p className={styles.textoDes}>{item.descripcion}</p>
                  </div>
                ))}
              <ButtonSection text="Accede ahora" toSectionId="Pricing" />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

TextoImagenCTA.propTypes = {
  ladoTexto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string.isRequired,
  ctaTexto: PropTypes.string.isRequired,
  className: PropTypes.string,
  caracteristicas: PropTypes.shape({
    columna1: PropTypes.arrayOf(PropTypes.string),
    columna2: PropTypes.arrayOf(PropTypes.string),
  }),
  titulosConDescripcion: PropTypes.arrayOf(
    PropTypes.shape({
      subtitulo: PropTypes.string,
      descripcion: PropTypes.string,
    })
  ),
};

export default TextoImagenCTA;
