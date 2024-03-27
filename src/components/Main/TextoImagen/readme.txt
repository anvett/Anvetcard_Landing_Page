Documentación del Componente TextoImagen
------------------------------------------------------------------------------------

Descripción:
------------------------------------------------------------------------------------

El componente TextoImagen es un componente de React que muestra un bloque de texto junto a una imagen. Este componente es flexible y permite personalizar la posición del texto (izquierda o derecha), el título, el texto, la imagen y estilos adicionales. Incluye un botón para expandir o contraer el texto.


Propiedades:
------------------------------------------------------------------------------------

ladoTexto: String. Define el lado en el que se mostrará el texto. Valores aceptados: "izquierda" o "derecha".
titulo: String. El título que se mostrará en la sección de texto.
texto: String. El contenido del texto. Puede ser expandido o contraído.
imageUrl: String. La URL de la imagen que se mostrará.
className: String (opcional). Clases adicionales para personalizar estilos.
Funcionalidades
Expansión de Texto: El componente permite mostrar una versión resumida del texto con un botón para expandir o contraer el contenido completo.
Responsividad: La imagen y el texto se ajustan adecuadamente a diferentes tamaños de pantalla.

Uso:
------------------------------------------------------------------------------------

<TextoImagen
  ladoTexto="izquierda"
  titulo="Título del Componente"
  texto="Este es el texto descriptivo del componente."
  imageUrl="/ruta/a/la/imagen.jpg"
  className="clasePersonalizada"
/>
