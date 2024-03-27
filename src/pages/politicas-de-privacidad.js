import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Politicas() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-start flex-column pb-5" >
          <h2 className=" text-primary pt-5">Políticas de Privacidad</h2>

          <h5 className="text-primary">Introducción</h5>
          <p>
            Bienvenido a "Mascotas Sanas", un curso digital dedicado a enseñar sobre la alimentación
            saludable para mascotas. Nos comprometemos a proteger la privacidad y seguridad de la
            información personal de nuestros usuarios.
          </p>

          <h5 className="text-primary">Información Recopilada</h5>

          <p>
            Recopilamos información personal cuando te registras en nuestro curso, como tu nombre,
            dirección de correo electrónico y detalles de pago. También podemos recopilar
            información automáticamente a través de cookies y tecnologías similares cuando visitas
            nuestro sitio web.
          </p>

          <h5 className="text-primary">Uso de la Información</h5>

          <p>
            Utilizamos tu información para procesar tu inscripción en el curso, proporcionar acceso
            al material del curso, y enviarte actualizaciones y ofertas relacionadas. No compartimos
            tu información personal con terceros, excepto como sea necesario para proporcionar el
            servicio (por ejemplo, procesamiento de pagos a través de Hotmart).
          </p>

          <h5 className="text-primary">Seguridad de Datos</h5>
          <p>
            Tomamos medidas para proteger tu información personal contra el acceso no autorizado, la
            alteración y la destrucción. Sin embargo, ninguna transmisión de datos en Internet puede
            garantizar una seguridad del 100%.
          </p>

          <h5 className="text-primary">Derechos del Usuario</h5>
          <p>
            Puedes acceder, corregir o eliminar tu información personal en cualquier momento
            contactándonos directamente.
          </p>

          <h5 className="text-primary">Cambios en la Política de Privacidad</h5>
          <p>
            Nos reservamos el derecho de modificar esta política de privacidad. Los cambios serán
            efectivos inmediatamente después de su publicación en nuestro sitio web.
          </p>

          <h5 className="text-primary">Contacto</h5>

          <p>
            Si tienes preguntas sobre nuestra política de privacidad, contáctanos en
            asistencia@amigopeludito.com.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
