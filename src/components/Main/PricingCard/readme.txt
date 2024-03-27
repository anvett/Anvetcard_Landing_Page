Documentación del Componente PricingCard
Descripción
El componente PricingCard se utiliza para mostrar información sobre diferentes planes de precios o productos. Diseñado para ser flexible y fácilmente integrable, este componente presenta de manera clara el nombre del plan, el precio, la periodicidad, una lista de características incluidas y un botón de acción para que el usuario realice una acción específica, como suscribirse o comprar.

Props
planName (string): El nombre del plan de precios. Ejemplo: "Básico", "Premium".
price (string): El costo del plan. Ejemplo: "$9.99".
period (string): La periodicidad del precio. Ejemplo: "mes", "año".
features (Array<string>): Una lista de características o beneficios incluidos en el plan.
buttonText (string): El texto que aparecerá en el botón de acción.
buttonAction (function): La función que se ejecutará cuando el usuario haga clic en el botón. Puede ser una redirección o cualquier otra acción.
Ejemplo de Uso
jsx
Copy code
<PricingCard
  planName="Premium"
  price="$29.99"
  period="mes"
  features={["Acceso ilimitado", "Soporte 24/7", "Backup diario"]}
  buttonText="Comprar Ahora"
  buttonAction={() => console.log('Acción del botón')}
/>
Estilos y Personalización
El componente utiliza módulos SCSS para los estilos, permitiendo una fácil personalización. Se pueden ajustar los estilos predeterminados modificando las variables y clases definidas en PricingCard.module.scss.

Integración
Para integrar el PricingCard en tu proyecto, asegúrate de importar el componente donde deseas utilizarlo y pasar las props correspondientes según tus necesidades. Este componente es ideal para secciones de precios en sitios web de servicios, aplicaciones SaaS, y más.
