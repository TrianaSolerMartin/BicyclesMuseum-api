<div align="center">
  <h1>Backend-BicycleMuseum 🚲</h1>
</div>

<p align="center">
  <a href="https://github.com/RaquelLores">
    <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="Raquel Lores">Raquel Lores
  </a>
  <a href="https://github.com/albamartinmz">
    <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="Alba Martín">Alba Martín
  </a>
  <a href="https://github.com/BeatrizCPerez">
    <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="Beatriz Pérez">Beatriz Pérez
  </a>
  <a href="https://github.com/TrianaSolerMartin">
    <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="Triana Soler Martín">Triana Soler Martín
  </a>
</p>

<div align="center">
  <p>¡Bienvenido al Museo de Bicicletas!</p>
</div>

## Descripción

Tomando como referencia nuestro antiguo proyecto Museo de Bicicletas que es una aplicación web desarrollada con React que permite sumergirse en el fascinante mundo de las bicicletas. Con una interfaz intuitiva y atractiva, pudiendo explorar diferentes modelos, agregar nuevos ejemplares, editar detalles y eliminar modelos existentes. Hemos decidido utilizar para el almacenamiento de datos SQL, NODE y Express.

## Instalación

Para comenzar a explorar este maravilloso back-end del Museo de bicicletas en tu propio entorno, sigue estos sencillos pasos:

1. **Clona el siguiente repositorio**
   
   ```bash
   git clone <URL_del_repositorio>

**Las dependencias instaladas:**

```npm install cors@^2.8.5```

npm install cross-env@^7.0.3

npm install dotenv@^16.4.5

npm install express@^4.18.3

npm install express-validator@^7.0.1
npm install jest@^29.7.0

npm install mysql2@^3.9.2

npm install sequelize@^6.37.1

npm install supertest@^6.3.4

La aplicación estará disponible en http://localhost:5173/

## Uso

Una vez que la aplicación esté instalada y ejecutándose, puedes hacer lo siguiente:

- Para comprobar la funcionalidad del metodo CRUD en nuestro proyecto, hemos decidido hacer uso de POSTMAN cuya documentación podrás encontrar en el siguiente enlace:
 https://documenter.getpostman.com/view/32563763/2sA2xpTpeU

## Tecnologías Utilizadas

Las tecnologías principales que hemos utilizado para desarrollar esta aplicación web:

MySQL - Express - Nodemond - Cors - Supertest - Jest 

# Organización del Proyecto

El proyecto está estructurado de la siguiente manera:

|-- controllers/
|   |-- BicycleController.js/
|   |
|-- database/
|   |-- connection_db.js/
|   |   |
|-- helpers/
|   |-- ValidateHelper.js/
|   |   |
|-- Model/
|   |--BicycleModel.js
|   |   |
|-- router/
|   |-- router.js
|   |
|-- test/
|   |-- Bicycles.test.js
|
|--validators/
|   |-- bicycleValidator.js
|   
| -- App.js
| -- config.js

## Estructurado:


El proyecto backend está organizado de la siguiente manera:

- **controladores/**
  - `BicycleController.js`: Archivo que contiene la lógica para manejar las acciones relacionadas con las bicicletas.
    - **base de datos/**
      - `conexión_db.js`: Archivo que establece la conexión con la base de datos.
  - **ayudantes/**
    - `ValidateHelper.js`: Archivo con funciones de validación útiles.

- **Modelo/**
  - `BicycleModel.js`: Define la estructura y el comportamiento de los objetos de bicicleta en la aplicación.

- **enrutador/**
  - `enrutador.js`: Define las rutas y la lógica de enrutamiento de la aplicación.

- **prueba/**
  - `Bicicletas.test.js`: Archivo de prueba con casos de prueba para las funciones relacionadas con las bicicletas.

- **validadores/**
  - `bicicletaValidator.js`: Archivo con funciones para validar datos específicos de las bicicletas.

- `App.js`: Archivo principal de la aplicación.
- `config.js`: Archivo de configuración que contiene variables de configuración para la aplicación.

## Código

El código proporcionado se refiere a la configuración y desarrollo de una aplicación web utilizando React.js y Vite.js. Aquí está la lógica general del código:

1. **Configuración del entorno y herramientas**: Se utilizan diversas herramientas y tecnologías para desarrollar la aplicación, incluidos React.js para la creación de interfaces de usuario, Vite.js como herramienta de construcción y servidor de desarrollo, y otras dependencias como react-router-dom y styled-components para estilos.

2. **Estructura del proyecto**: El proyecto se organiza en diferentes carpetas según la función de los archivos, como componentes para los componentes de React, servicios para funciones de servicio como la comunicación con la API, router para definir las rutas de la aplicación, entre otras.

3. **Componentes React**: Se definen varios componentes de React que componen la interfaz de usuario de la aplicación, como Home, NewItem, Edit, Gallery, Card, Nav, Footer, etc. Cada componente tiene su propio propósito y funcionalidad dentro de la aplicación.

4. **Estilos**: Los estilos se definen utilizando styled-components para crear estilos CSS en línea dentro de los componentes de React. Esto permite un desarrollo más modular y mantenible de los estilos.

5. **Gestión de rutas**: Se utiliza react-router-dom para gestionar la navegación y las rutas de la aplicación. Esto permite que la aplicación tenga diferentes vistas y páginas que se renderizan según la URL actual.

6. **Comunicación con la API**: Se definen funciones en el directorio de servicios para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos o en algún backend externo. Estas funciones utilizan fetch para realizar solicitudes HTTP a la API.

7. **Integración de sonidos**: Se integra un archivo de audio para reproducir un sonido cuando se realiza una acción en la aplicación, como agregar un nuevo elemento.

## Cloudinary: Gestión de Imágenes

Hemos integrado la funcionalidad de almacenamiento y gestión de imágenes utilizando Cloudinary. Esto nos permite ofrecer una experiencia óptima a nuestros usuarios al optimizar la carga, almacenamiento, gestión y entrega de los medios.

### ¿Qué es Cloudinary?

Cloudinary es una solución de Software como Servicio (SaaS) que proporciona una solución completa para las necesidades de imágenes y videos en aplicaciones web o móviles.

### Configuración para Nuestro Proyecto

Para integrar Cloudinary en nuestro proyecto de Market Place, hemos seguido estos pasos:

1. **Crea una Cuenta en Cloudinary:**

    Regístrate en Cloudinary de forma gratuita a través del siguiente enlace: [https://cloudinary.com/](https://cloudinary.com/).

2. **Obtén Credenciales de Acceso:**

    Asegúrate de obtener las credenciales necesarias, incluyendo el `Cloudname`, `Api Key` y `Api Secret`.

3. **Configura Cloudinary en el Proyecto:**

    Sigue las instrucciones proporcionadas en la documentación oficial de Cloudinary para configurar la integración en tu proyecto.

## Contribuciones

¡Las contribuciones son bienvenidas! Si quieres contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu función o corrección de errores.
3. Realiza tus cambios y haz commits.
4. Sube tus cambios a tu repositorio.
5. Envía un pull request con tus cambios.

## Contacto

Si tienes alguna pregunta o sugerencia sobre el proyecto, no dudes en ponerte en contacto con nosotros por correo electrónico o a través de nuestras redes sociales. ¡Esperamos que disfrutes explorando el Museo de Bicicletas!

¡Gracias por tu interés y apoyo! Pedalea con nosotros hacia un futuro lleno de aventuras en dos ruedas. 🚲✨





Instalación: 

npm init -y
npm i express
npm i mysql2

Posteriormente modificamos nuestro Package.json

{
  "name": "bicyclesmuseum-api",
  "version": "1.0.0",
  "description": "Backend-BicycleMuseum",
 --> "main": "App.js",
 --> "type":"module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.3",
    "mysql2": "^3.9.2",
    "sequelize": "^6.37.1"
  }
}


Para ocultar los datos sensibles como las credenciales de la base de datos y otros detalles de configuración, puedes usar un archivo .env. Este archivo contendrá variables de entorno que pueden ser cargadas en tu aplicación Node.js utilizando la librería dotenv. Aquí tienes los pasos para hacerlo:

1. Instalar dotenv:
Primero, asegúrate de tener instalada la librería dotenv. Puedes instalarla utilizando npm:

npm install dotenv

