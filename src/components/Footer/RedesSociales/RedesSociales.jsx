import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./RedesSociales.module.scss";

const RedesSociales = () => {
  return (
    <>
      <Row>
        <Col>
          <h1 className={styles.title}>Redes Sociales</h1>
          <p className={styles.text}>
            Tecnología e inovación para tu presencia digital.  
          </p>
          {/* <p className={styles.text}>
            ¡Síguenos en nuestras redes sociales!  
          </p> */}
        </Col>
      </Row>
      <Row>
        <Col className={styles.socialMedia}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/facebook_w.png" alt="Facebook" width={30} height={30} />
          </a>
          {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/xtwitter_b.png" alt="Twitter" width={30} height={30} />
          </a> */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/instagram_w.png" alt="Instagram" width={30} height={30} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/youtube_w.jpeg" alt="YouTube" width={30} height={30} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/icons/tiktok_w.png" alt="TikTok" width={30} height={30} />
          </a>
        </Col>
      </Row>
    </>
  );
};

export default RedesSociales;
