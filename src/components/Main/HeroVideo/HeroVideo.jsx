import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./HeroVideo.module.scss";
import ButtonSection from "@/components/ButtonSection/ButtonSection";

const HeroVideo = ({title, description, src} ) => {
 

  return (
    <div className="hero">
      <Container>
        <Row>
          <Col className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>{title} </h1>
            
            <p className={styles.heroText}>
              {description}
            </p>
            <div className={styles.videoSection}>
              <video className={styles.heroVideo} controls>
                <source src={src} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>
            <div>
              <ButtonSection text="Conoce nuestros planes" toSectionId="Pricing" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroVideo;
