### README para `HeroVideo`

```markdown
# HeroVideo Component

## Descripción

El componente `HeroVideo` es similar al componente `HeroText`, pero incluye un video de demostración en lugar de un botón. Está diseñado para proporcionar a los visitantes una introducción visual e interactiva al producto o servicio ofrecido.

## Características

- **Integración de Video:** Permite incorporar un video de demostración directamente en la sección hero de la página.
- **Responsive:** Optimizado para funcionar en todos los dispositivos, garantizando que el video se muestre correctamente en cualquier tamaño de pantalla.
- **Controles de Video:** Incluye controles estándar para reproducir, pausar y ajustar el volumen del video.

## Uso

Para usar el componente `HeroVideo`, necesitarás tener un archivo de video disponible. Asegúrate de especificar la ruta correcta al archivo de video en el atributo `src` del elemento `video` dentro del componente:

```jsx
import HeroVideo from './path/to/HeroVideo';

function App() {
  return (
    <div>
      <HeroVideo />
    </div>
  );
}