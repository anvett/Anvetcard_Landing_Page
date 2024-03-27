import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles}>{children}</main>
      <Footer/>
    </>
  );
}
