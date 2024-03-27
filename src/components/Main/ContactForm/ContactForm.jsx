import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./ContactForm.module.scss"; // Asegúrate de que este es tu archivo de módulo SCSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbwcWFZSdkV1iMNauTHwv7CyIfVbGNUNQeJVm6FOAgGZzTf69tzhPGh38K6-FXlkaa37/exec', {
        method: 'POST',
        mode: 'no-cors', // Importante para evitar problemas de CORS
        body: new URLSearchParams(formData),
      })
      .then(response => console.log('Form successfully submitted'))
      .catch(error => console.error('Error:', error));
    
    console.log(formData);
  };

  return (
    <Container className={styles.formContainer}>
      <h2 className={styles.title}>Contáctanos</h2>
      <p className={styles.description}>Déjanos tus datos y te contactaremos a la brevedad</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Form.Label className={styles.formLabel} column sm={2}>
            Nombre
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className={styles.input}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPhone">
          <Form.Label className={styles.formLabel} column sm={2}>
            Teléfono
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Tu teléfono"
              className={styles.input}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label className={styles.formLabel} column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo electrónico"
              className={styles.input}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formInquiry">
          <Form.Label className={styles.formLabel} column sm={2}>
            Consulta
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              placeholder="Tu consulta"
              className={styles.textarea}
            />
          </Col>
        </Form.Group>
        <div className={styles.buttonContainer}>
          <Button type="submit" className={styles.submitButton}>
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactForm;
