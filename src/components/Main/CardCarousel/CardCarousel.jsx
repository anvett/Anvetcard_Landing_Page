import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

import { Modal, Button } from "react-bootstrap";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/effect-fade';
import styles from "./CardCarousel.module.scss"; // Asegúrate de que la ruta al archivo SCSS sea correcta
import ButtonSection from "@/components/ButtonSection/ButtonSection";

const CardCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedModel, setSelectedModel] = useState({});

  const modelosTarjetas = [
    {
      id: 1,
      titulo: "Modelo 1",
      imagen: "/images/modelos/modelo1.png",
      caracteristicas: ["Característica 1", "Característica 2", "Característica 3"],
    },
    {
      id: 2,
      titulo: "Modelo 2",
      imagen: "/images/modelos/modelo2.png",
      caracteristicas: ["Característica A", "Característica B", "Característica C"],
    },
    {
        id: 3,
        titulo: "Modelo 3",
        imagen: "/images/modelos/modelo3.png",
        caracteristicas: ["Característica 1", "Característica 2", "Característica 3"],
      },
      {
        id: 4,
        titulo: "Modelo 4",
        imagen: "/images/modelos/modelo2.png",
        caracteristicas: ["Característica A", "Característica B", "Característica C"],
      },
    // Añade más modelos según sea necesario
  ];

  const handleOpenModal = (modelo) => {
    setSelectedModel(modelo);
    setShowModal(true);
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselText}>
          <h2 className={styles.sectionTitle}>Explora Nuestros Modelos</h2>
          <p className={styles.sectionDescription}>
            Descubre las características únicas de cada modelo.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={2}
          className={styles.mySwiper}
        >
          {modelosTarjetas.map((modelo) => (
            <SwiperSlide key={modelo.id} className={styles.swiperSlide}>
              <div className={styles.slideContent}>
                <h3 className={styles.modelTitle}>{modelo.titulo}</h3>
                <img src={modelo.imagen} alt={modelo.titulo} className={styles.slideImage} />
                <Button className={styles.infoButton} onClick={() => handleOpenModal(modelo)}>
                  Más Información
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.ctaContainer}>
          <ButtonSection text="Acceder" toSectionId="Pricing" buttonClassName={styles.ctaButton} />
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className={styles.customModal}
      >
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title className={styles.modalTitle}>{selectedModel.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <ul>
            {selectedModel.caracteristicas?.map((caracteristica, index) => (
              <li key={index} className={styles.featureItem}>
                {caracteristica}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
            className={styles.closeButton}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardCarousel;
