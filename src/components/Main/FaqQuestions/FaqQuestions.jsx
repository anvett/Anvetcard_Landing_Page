import React from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import styles from './FaqQuestions.module.scss'; // Asegúrate de que la ruta sea correcta

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      className={styles.customToggle} // Usando clase SCSS
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const FaqQuestions = () => {
  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Preguntas Frecuentes</h2>
      <p className={styles.faqDescription}>Las tarjetas de presentación digitales están revolucionando la forma en que profesionales y empresas se conectan con su red. Aquí respondemos algunas de las preguntas más comunes sobre cómo nuestras tarjetas digitales pueden ayudarte a destacar y compartir tu información de contacto de manera eficiente y ecológica.</p>
      <Accordion defaultActiveKey="0" className={styles.faqAccordion}>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="0">¿Qué es una tarjeta de presentación digital?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={styles.cardBody}>Una tarjeta de presentación digital es una versión electrónica de una tarjeta de presentación tradicional. Facilita compartir tu información de contacto, redes sociales y profesional de manera rápida y eficiente, todo desde tu smartphone o dispositivo digital.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="1">¿Cómo puedo compartir mi tarjeta digital?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className={styles.cardBody}>Puedes compartir tu tarjeta digital a través de un enlace único, código QR, o incluso integrarla en tu firma de correo electrónico. Esto permite una distribución fácil y rápida con solo un clic o escaneo</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="2">¿Puedo personalizar mi tarjeta digital?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className={styles.cardBody}>Sí, ofrecemos amplias opciones de personalización. Puedes elegir colores, diseños, y qué información quieres incluir, como tus redes sociales, sitio web, y más.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="3">¿Es ecológico usar tarjetas de presentación digitales?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body className={styles.cardBody}>Absolutamente. Al eliminar la necesidad de imprimir tarjetas de presentación tradicionales, no solo ahorras dinero, sino que también contribuyes a reducir el desperdicio de papel y el impacto ambiental</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="4">¿Cuánto cuesta crear una tarjeta de presentación digital?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body className={styles.cardBody}>Ofrecemos diferentes planes adaptados a tus necesidades, desde una versión standard hasta opciones avanzadas con características adicionales. Nuestros planes son anuales con una renovación al 50% del valor.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="5">¿Cómo puedo adquirir la tarjeta?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body className={styles.cardBody}>Llena el formulario que está en la parte inferior de la página o contáctanos a nuestro WhatsApp. Te enviamos un formulario para que llenes los datos de acuerdo a tu plan. En 48 horas te enviamos un modelo preliminar para tu aprobación o cambios. Una vez se hayan realizado todos los cambios si los requieres, se publica la tarjeta y te enviamos el link a tu email y WhatsApp.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="10">¿Cómo actualizo la información en mi tarjeta?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="10">
            <Card.Body className={styles.cardBody}>Puedes actualizar tu información en cualquier momento enviando un mensaje a nuestro número de atención al cliente que lo encuentras más abajo. Los cambios se reflejan inmediatamente, asegurando que tu red siempre tenga acceso a tus datos más recientes.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="6">¿Las actualizaciones tienen costo?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body className={styles.cardBody}>Todos nuestros planes incluyen un número gratuito de actualización. Posterior a ese número, las actualizaciones de datos (télefono, ubicación y enlaces a redes) no tienen costo. Las actualizaciones de imágenes, videos, etc. tienen un costo de 5 usd. </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="7">¿Puedo integrar mi tarjeta digital con otras plataformas?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body className={styles.cardBody}>Sí, nuestras tarjetas digitales se pueden integrar fácilmente con plataformas de redes sociales, aplicaciones de correo electrónico y más, permitiéndote maximizar tu alcance.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="8">¿Ofrecen soporte si tengo problemas o preguntas?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="8">
            <Card.Body className={styles.cardBody}>Por supuesto. Nuestro equipo de soporte está disponible para ayudarte con cualquier pregunta o problema que puedas tener, asegurando que aproveches al máximo tu tarjeta de presentación digital</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className={styles.faqCard}>
          <Card.Header className={styles.cardHeader}>
            <CustomToggle eventKey="9">¿Qué tan seguras son las tarjetas de presentación digitales?</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="9">
            <Card.Body className={styles.cardBody}>Tomamos la seguridad muy en serio. Las tarjetas están alojadas en servidores seguros y tienen certificados SSL. Además, tienes control total sobre qué información compartes y con quién.</Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* Agrega más preguntas y respuestas según sea necesario */}
      </Accordion>
    </div>
  );
};

export default FaqQuestions;
