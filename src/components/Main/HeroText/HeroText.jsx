import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./HeroText.module.scss";
import ButtonSection from "@/components/ButtonSection/ButtonSection";

const HeroText = () => {
  const scrollToPlanes = () => {
    const section = document.getElementById("Pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className={styles.hero}>
      <Container>
        <Row>
          <Col className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>Impulsa Tu Presencia en Línea con</h1>
            <h1 className={styles.heroTitle}>AnvetCard</h1>
            <p className={styles.heroText}>Descubre la nueva era de las tarjetas digitales interactivas. Personalización, eficiencia y estilo al alcance de tu mano.</p>
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
