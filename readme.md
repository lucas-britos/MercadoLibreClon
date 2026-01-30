### Documentación de la Aplicación Web MercadoClon (Mercadolibre clon)

Esta documentación proporciona una descripción general de la aplicación web clon de MercadoLibre y explica su funcionamiento, características principales y dependencias utilizadas. La aplicación simula el proceso de compra en línea, permite buscar productos, obtener información de productos desde Firebase, y al finalizar la compra crea una nueva colección en la base de datos para devolver el ID de esa compra. Además, utiliza la API de JSON Placeholder para traer comentarios. La aplicación está desarrollada utilizando React y Vite como entorno de desarrollo rápido.


# Instalación

![](https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2)

- Clona el repositorio de la aplicación desde GitHub:
	`git clone https://github.com/camello3131/MercadoLibreClon`
- Accede al directorio del proyecto:
	`cd vite-project`
- Instala las dependencias necesarias utilizando npm:
	`npm install`


#Uso

- Inicia la aplicación en modo de desarrollo:
	`npm run dev`
- Abre tu navegador y accede a http://localhost:5173 para ver la aplicación web clon de MercadoLibre.

##Características Principales
###Búsqueda de Productos
La aplicación proporciona un buscador para buscar productos. Puedes ingresar palabras clave en el campo de búsqueda y la aplicación mostrará los productos relacionados que coinciden con la búsqueda.

###Obtención de Productos desde Firebase
La aplicación utiliza Firebase para obtener información de productos. Los datos de los productos se almacenan en una base de datos de Firebase y se recuperan mediante consultas.

###Proceso de Compra
La aplicación permite simular el proceso de compra en línea. Una vez que encuentras un producto que deseas comprar, puedes agregarlo al carrito de compras y continuar con el proceso de pago.

###Creación de una Nueva Colección en la Base de Datos
Al finalizar la compra, la aplicación crea una nueva colección en la base de datos de Firebase. Esta colección contiene información sobre la compra realizada, incluido un ID único que se genera y devuelve como resultado de la compra.

###Comentarios de Productos desde JSON Placeholder
La aplicación utiliza la API de JSON Placeholder para obtener comentarios de productos. Estos comentarios se muestran en la página del producto correspondiente y proporcionan información adicional y reseñas de otros usuarios.

###Dependencias Utilizadas
- **React**:  Biblioteca JavaScript para construir interfaces de usuario.
- **React-dom**:  Proporciona métodos específicos del DOM para su uso con React.
- **React-router-dom**:  Proporciona enrutamiento y navegación para aplicaciones React.
- **Firebase**: SDK de Firebase para integrar Firebase en la aplicación web.
- **React-firebase-hooks**: Un conjunto de hooks personalizados para Firebase y React.
- **Bootstrap**:  Framework de CSS y componentes para un diseño visualmente atractivo y responsivo.
- **React-multi-carousel**: Un componente de carrusel altamente personalizable para mostrar varios elementos.



##Imagenes

![](https://i.ibb.co/c6z79dx/1.png)
![](https://i.ibb.co/b3gqtpD/2.png)
![](https://i.ibb.co/N2dszLD/3.png)
![](https://i.ibb.co/2ZYrwnW/4.png)
