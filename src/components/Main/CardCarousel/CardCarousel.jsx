import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import styles from "./CardCarousel.module.scss"; // Asegúrate de que la ruta al archivo SCSS sea correcta

const CardCarousel = () => {
  const modelosTarjetas = [
    // {
    //   id: 1,
    //   titulo: "Plan Starter",
    //   imagen: "/images/modelos/modelo1.png",
    //   descripcion: "Este es el Starter, ideal para rofesionales.",
    //   caracteristicas: [
    //     "Foto de perfil",
    //     "Enlaces a redes sociales (hasta 4)",
    //     "Iconos de contacto",
    //     "Galería o carrusel de imágenes (Hasta 4 imágenes)",
    //     "Video ó Código QR e Imagen destacada (Hasta 3 imágenes)",
    //   ],
    // },
    // {
    //   id: 2,
    //   titulo: "Plan Profesional",
    //   imagen: "/images/modelos/modelo2.png",
    //   descripcion: "El Modelo 2 es perfecto para empresas emergentes.",
    //   caracteristicas: [
    //     "Foto de perfil",
    //     "Enlaces a redes sociales (hasta 5)",
    //     "Iconos de contacto",
    //     "Galería o carrusel de imágenes (hasta 5 imágenes)",
    //     "Componente de educación y certificaciones",
    //     "Componente de experiencia laboral ó Servicios",
    //     "Productos destacados ó Video y QR Code",
    //     "Componente de métodos de pago",
    //   ],
    // },
    {
      id: 1,
      titulo: "Componentes Disponibles para tu tarjeta digital",
      imagen: "/images/modelos/modelo3.png",
      descripcion: "Modelo 3, diseñado para creativos y diseñadores.",
      caracteristicas: [
        "Barra de navegación",
        "Foto de perfil",
        "Enlaces a redes sociales",
        "Iconos de contacto",
        "Galería o carrusel de imágenes",
        "Componente de Educación y certificaciones",
        "Componente de Experiencia laboral",
        "Componente de Servicios principales",
        "Componente de Productos destacados",
        "Componente de Proyectos",
        "Videos",
        "Imágenes destacadas",
        "QR Code",
        "Componente de información de pago",
      ],
    },
    // Añade más modelos según sea necesario
  ];

  return (
    <>
      <div className={styles.carouselContainer}>
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          className={styles.mySwiper}
        >
          {modelosTarjetas.map((modelo) => (
            // Continuación del componente CardCarousel
            <SwiperSlide key={modelo.id} className={styles.swiperSlide}>
              <div className={styles.slideContainer}>
                <div>
                  <h3 className={styles.modelTitle}>{modelo.titulo}</h3>
                </div>
                <div className={styles.slideContent}>
                  <div className={styles.imageContainer}>
                    <img src={modelo.imagen} alt={modelo.titulo} className={styles.slideImage} />
                  </div>
                  <div className={styles.infoContainer}>
                    <div className={styles.caracteristicasFeature}>
                      {modelo.caracteristicas.map((caracteristica, index) => (
                        <p key={index} className={styles.featureItem}>
                          {caracteristica}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CardCarousel;
