Documentación del Componente Button
----------------------------------------------------------------------------------


Descripción
----------------------------------------------------------------------------------

El componente Button es un botón personalizable utilizado en varios componentes del proyecto, como en TextoImagen para expandir o contraer texto.


Propiedades
----------------------------------------------------------------------------------

text: String. El texto que se mostrará en el botón.
onClick: Function. La función que se ejecutará cuando se haga clic en el botón.
Estilos Personalizables a través de un className que debe ser incluido como prop al llamar al componente


Uso
-----------------------------------------------------------------------------------

<Button
  text="Mostrar Más"
  onClick={miFuncion}
  className={styles.estilopersonalizado}
/>