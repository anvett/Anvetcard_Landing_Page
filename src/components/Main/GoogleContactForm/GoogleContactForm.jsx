// Ejemplo de componente GoogleForm en Next.js

import React from "react";
import { Container } from "react-bootstrap";
import styles from "./GoogleContactForm.module.scss";

const GoogleContactForm = () => {
  const formIframe = `
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf2wnR4XqULRBGlDsUSbPMOGqGkOLJRyWIGnB9Qf7XsWDld-A/viewform?embedded=true" width="640" height="821" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
  `;

  return (
    <Container className={styles.formContainer}>
      <h2 className={styles.title}>Contáctanos</h2>
      <p className={styles.description}>Déjanos tus datos y te contactaremos a la brevedad</p>
      <div className={styles.separator}></div>
      <div
        className={styles.iframeContainer}
        dangerouslySetInnerHTML={{ __html: formIframe }}
        style={{ margin: "auto", maxWidth: "700px" }}
      ></div>
        <div className={styles.separatorDown}></div>
    </Container>
  );
};

export default GoogleContactForm;
