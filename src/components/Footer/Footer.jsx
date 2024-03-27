import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.scss";
import ContactInfo from "./ContactInfo/ContactInfo";
import RedesSociales from "./RedesSociales/RedesSociales";
import LegalInfo from "./LegalInfo/LegalInfo";
import EnlacesRapidos from "./EnlacesRapidos/EnlacesRapidos";

export default function Footer() {
 
  return (
    <footer>
      <Container fluid className={styles.container}>
        <Row className={styles.components}>
          <Col sm={12} md={4} lg={4} className={styles.modules1}>
            <ContactInfo
              address="Abdón Calderón 181 y Angel Acosta, Conocoto, Quito, Ecuador"
              phoneNumbers={["+593939154014", "+593992543979"]}
              email="anvetcard@businessdigicards.com"
              whatsappNumber="+593939154014"
              googleMapsUrl="https://maps.app.goo.gl/JdqQXVdUW2W4ej76A"
            />
          </Col>
          <Col sm={12} md={4} lg={4} className={styles.modules2}>
            <RedesSociales/>
          </Col>
          <Col sm={12} md={4} lg={4} className={styles.modules3}>
            <EnlacesRapidos/>
          </Col>
        </Row>
        <Row>
          <LegalInfo/>
        </Row>
      </Container>
    </footer>
  );
}
