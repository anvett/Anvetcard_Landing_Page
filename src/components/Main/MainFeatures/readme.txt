# MainFeatures Component

## Descripción

El componente `MainFeatures` destaca las características principales de AnvetCard, presentando seis beneficios clave del producto. Cada beneficio se muestra en su propia tarjeta con un ícono representativo, un título y una descripción corta. Este componente es esencial para comunicar el valor y las ventajas únicas de AnvetCard a los visitantes de la página.

## Características

- **Diseño Responsive:** Asegura una presentación óptima en todos los dispositivos, desde teléfonos móviles hasta pantallas de escritorio grandes.
- **Efectos Visuales:** Incluye sutiles efectos de sombra y transición para mejorar la interacción del usuario con las tarjetas de características.
- **Íconos Personalizables:** Utiliza React Icons para representar visualmente cada beneficio, facilitando la comprensión y el atractivo visual.

## Uso

Para incorporar el componente `MainFeatures` en tu proyecto, simplemente impórtalo donde necesites mostrar las características principales de AnvetCard:

```jsx
import MainFeatures from './path/to/MainFeatures';

function App() {
  return (
    <div>
      <MainFeatures />
    </div>
  );
}