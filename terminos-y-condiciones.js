import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Terminos() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-start flex-column pb-5">
          <h2 className=" text-primary pt-5">Términos y Condiciones</h2>

          <h5 className="text-primary">Introducción</h5>
          <p>
            Al utilizar nuestro sitio web y registrarte en el curso "Mascotas Sanas", aceptas estos
            términos y condiciones.
          </p>

          <h5 className="text-primary">Uso del Sitio Web</h5>

          <p>
            El contenido de "Mascotas Sanas" está protegido por derechos de autor y es solo para tu
            uso personal y no comercial. No está permitido redistribuir o reproducir parte del
            contenido.
          </p>

          <h5 className="text-primary">Limitación de Responsabilidad</h5>

          <p>
            "Mascotas Sanas" no se hace responsable de decisiones tomadas en base a la información
            proporcionada en el curso. El contenido es informativo y no sustituye el consejo
            profesional veterinario.
          </p>

          <h5 className="text-primary">Enlaces a Terceros</h5>
          <p>
            Nuestro sitio puede contener enlaces a sitios web de terceros, sobre los cuales no
            tenemos control ni responsabilidad.
          </p>

          <h5 className="text-primary">Modificaciones al Servicio y Precios</h5>
          <p>
            Nos reservamos el derecho de modificar o descontinuar el curso en cualquier momento.
          </p>

          <h5 className="text-primary">Gobernanza y Ley Aplicable</h5>
          <p>Estos términos se rigen por las leyes de [tu país/jurisdicción].</p>

          <h5 className="text-primary">Contacto</h5>

          <p>
            Para preguntas relacionadas con estos términos, contáctanos en
            asistencia@amigopeludito.com.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
