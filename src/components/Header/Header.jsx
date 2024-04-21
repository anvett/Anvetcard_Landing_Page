import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import styles from "./Header.module.scss";


export default function Header() {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Navbar.Brand className={styles.navBrand} href="/">
        <Image
          src="/images/logo.png" 
          alt="Logo Name"
          width={200} // Establece el ancho deseado
          height={50} // Establece la altura deseada
          className={styles.navLogo}
        />
      </Navbar.Brand>
      <Navbar.Toggle className={styles.burguer} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navLinks}>
        <Nav className="mr-auto">
          <Nav.Link className={styles.navLink} href="#Home">
            Inicio
          </Nav.Link>
          <Nav.Link className={styles.navLink} href="#About">
            Características
          </Nav.Link>
          <Nav.Link className={styles.navLink} href="#Pricing">
            Precios
          </Nav.Link>
          <Nav.Link className={styles.navLink} href="#Testimonios">
            Testimonios
          </Nav.Link>
          <Nav.Link className={styles.navLink} href="#FAQ">
            FAQ
          </Nav.Link>
          <Nav.Link className={styles.navLink} href="#Contacto">
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
