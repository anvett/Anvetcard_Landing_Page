import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styles from "./Header.module.scss";
import { FaRegIdCard } from "react-icons/fa6";

export default function Header() {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Navbar.Brand className={styles.navBrand} href="/">
        <FaRegIdCard className={styles.navIcon} />
        <span className={styles.navTitle} >AnvetCard</span>
      </Navbar.Brand>
      <Navbar.Toggle className={styles.burguer} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navLinks}>
        <Nav className="mr-auto">
          <Nav.Link className={styles.navLink} href="#Home">Inicio</Nav.Link>
          <Nav.Link className={styles.navLink} href="#About">Características</Nav.Link>
          <Nav.Link className={styles.navLink} href="#Pricing">Precios</Nav.Link>
          <Nav.Link className={styles.navLink} href="#Testimonios">Testimonios</Nav.Link>
          <Nav.Link className={styles.navLink} href="#FAQ">FAQ</Nav.Link>
          <Nav.Link className={styles.navLink} href="#Contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
