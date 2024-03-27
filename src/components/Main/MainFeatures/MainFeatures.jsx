import React from 'react';
import styles from './MainFeatures.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FiEdit } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { FiSmartphone } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import { MdOutlineWifiLock } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";


const MainFeatures = () => {
    return (
        <Container fluid className={styles.mainFeatureContainer}>
            <h1 className={styles.title}>Descubre las Ventajas de Anvetcards</h1>
            <p className={styles.description}>Anvetcards no es solo una tarjeta digital; es una herramienta de cambio. Con características avanzadas y un enfoque sostenible, te ofrecemos todo lo que necesitas para destacar en el mundo digital.</p>
            <Row >
                <Col sm={6} md={4} lg={4} className={styles.gridContainer}> 
                    <div className={styles.gridCell}>
                        <i className={styles.icon}><FiEdit /></i>
                        <h2 className={styles.gridTitle}>Personalización Avanzada</h2>
                        <p className={styles.gridDescription}>Crea tarjetas que reflejen tu identidad única con nuestras herramientas de personalización avanzada.</p>
                    </div>
                </Col>
                <Col sm={6} md={4} lg={4} className={styles.gridContainer}> 
                    <div className={styles.gridCell}>
                        <i className={styles.icon}><FiShare2 /></i>
                        <h2 className={styles.gridTitle}>Fácil Compartir</h2>
                        <p className={styles.gridDescription}>Compartir tu tarjeta nunca ha sido tan fácil, con opciones integradas para redes sociales, email y más.</p>
                    </div>
                </Col>
                <Col sm={6} md={4} lg={4} className={styles.gridContainer}> 
                    <div className={styles.gridCell}>
                        <i className={styles.icon}><FiSmartphone /></i>
                        <h2 className={styles.gridTitle}>Accesibilidad Total</h2>
                        <p className={styles.gridDescription}>Diseñadas para la era digital, nuestras tarjetas aseguran que estés siempre al alcance, sin importar el dispositivo.</p>
                    </div>
                </Col>
                <Col sm={6} md={4} lg={4}  className={styles.gridContainer}> 
                    <div className={styles.gridCell}>
                        <i className={styles.icon}><FiLink /></i>
                        <h2 className={styles.gridTitle}>Integraciones Útiles</h2>
                        <p className={styles.gridDescription}>Conecta tu tarjeta con las herramientas que ya amas, para una experiencia sin interrupciones y más productiva.</p>
                    </div>
                </Col>
                <Col sm={6} md={4} lg={4} className={styles.gridContainer}>
                    <div className={styles.gridCell}>
                        <i className={styles.icon}><MdOutlineWifiLock /></i>
                        <h2 className={styles.gridTitle}>Seguridad y Privacidad</h2>
                        <p className={styles.gridDescription}>Tu privacidad es nuestra prioridad. Mantén tus datos seguros con tarjetas digitales construidas sobre una fundación de confianza.</p>
                    </div>
                </Col>
                <Col sm={6} md={4} lg={4}  className={styles.gridContainer}>
                    <div className={styles.gridCell}>
                        <i className={styles.icon}><FiBarChart2 /></i>
                        <h2 className={styles.gridTitle}>Eco-Amigable</h2>
                        <p className={styles.gridDescription}>Contribuye a un planeta más verde con tarjetas digitales, reduciendo la necesidad de tarjetas físicas.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default MainFeatures;