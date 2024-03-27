import React, { useState } from 'react';
import styles from './Calificacion.module.scss'; // Importa el módulo SCSS

export default function Calificacion() {
    const [calificacion, setCalificacion] = useState(null);

    return (
        <div className={styles.calificacionContainer}>
            <div className={styles.estrellas}>
                {[1, 2, 3, 4, 5].map((numero) => (
                    <button
                        key={numero}
                        onClick={() => setCalificacion(numero)}
                        className={`${styles.estrella} ${numero <= calificacion ? styles.llena : ''}`}
                    >
                        {numero <= calificacion ? '★' : '☆'}
                    </button>
                ))}
            </div>
            <p className={styles.textoCalificacion}>Calificación seleccionada: {calificacion}</p>
        </div>
    );
}
