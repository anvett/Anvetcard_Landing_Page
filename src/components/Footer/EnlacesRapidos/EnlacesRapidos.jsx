import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./EnlacesRapidos.module.scss";

export default function EnlacesRapidos() {
  return (
    <Container className={styles.enlacesRapidosContainer}>
      <Row>
        <Col className={styles.enlacesRapidos} >
          <h4 className={styles.titulo}>Enlaces Rápidos</h4>
          <ul className={styles.listaEnlaces}>
            <li>
              <Link href="#Home">
                <span className={styles.fastLink} >Inicio</span>
              </Link>
            </li>
            <li>
              <Link href="#About">
                <span className={styles.fastLink} >Características</span>
              </Link>
            </li>
            <li>
              <Link href="#Pricing">
                <span className={styles.fastLink} >Precios</span>
              </Link>
            </li>
            <li>
              <Link href="#Testimonios">
                <span className={styles.fastLink} >Testimonios</span>
              </Link>
            </li>
            <li>
              <Link href="#FAQ">
                <span className={styles.fastLink} >Preguntas Frecuentes</span>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
