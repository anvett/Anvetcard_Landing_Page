import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "./LegalInfo.module.scss";

export default function LegalInfo() {
  return (
    <Container className={styles.legalContainer}>
      <Row>
        <Col className={styles.legalContent}>
          <p className={styles.copyRight}>
            © {new Date().getFullYear()} Anvetcorp SAS Derechos Reservados{" "}
          </p>
          <p>
            <a className={styles.outLink} href="https://www.anvetcorp.com" target="_blank" rel="noopener noreferrer">
              www.anvetcorp.com
            </a>
          </p>
          {/* <p className={styles.legalLinks}>
            <Link href="/politicas-de-privacidad" passHref>
              <span className={styles.legalLink}>Políticas de Privacidad</span>
            </Link>
            {' | '}
            <Link href="/terminos-y-condiciones" passHref>
              <span className={styles.legalLink}>Términos y Condiciones</span>
            </Link>
          </p> */}
        </Col>
      </Row>
    </Container>
  );
}
