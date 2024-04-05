import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./HeroText.module.scss";
import ButtonSection from "@/components/ButtonSection/ButtonSection";

const HeroText = () => {
  
  return (
    <div className={styles.hero}>
      <Container>
        <Row>
          <Col className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>Impulsa Tu Presencia en Línea con</h1>
            <h1 className={styles.heroTitle2}>AnvetCard</h1>
            <p className={styles.heroText}>Descubre la nueva era de las tarjetas digitales interactivas. Personalización, eficiencia y estilo al alcance de tu mano.</p>
            <div className={styles.heroImage}>
              <Image
                src="images/components/mockup_modelo1.jpg" 
                alt="Presentación Anvetcard"
                width={500} // Ajusta según las dimensiones de tu imagen
                height={500} // Ajusta según las dimensiones de tu imagen
                //layout="responsive" // Esto hace que la imagen sea responsiva
              />
            </div>
            <div className={styles.buttonSection}>
                <ButtonSection
                text="Conoce más" toSectionId="About"
                />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroText;
