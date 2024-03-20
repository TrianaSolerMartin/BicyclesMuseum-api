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

Tomando como referencia nuestro proyecto "Museo de Bicicletas" que es una aplicación web desarrollada con React, que te traslada al fascinante mundo de las bicicletas, hemos desarrollado nuestra API para el almacenamiento de datos con MySQL, NODE y Express, entre otras tecnologías, para un mejor manejo de errores (con Jest y Supertest).

## Instalación

Para comenzar a explorar este maravilloso back-end del Museo de bicicletas en tu propio entorno, sigue estos sencillos pasos:

1. **Clona el siguiente repositorio**
   
   ```bash
   git clone https://github.com/TrianaSolerMartin/BicyclesMuseum-api.git

**Las dependencias instaladas:**

```npm install cors@^2.8.5```

```npm install cross-env@^7.0.3```

```npm install dotenv@^16.4.5```

```npm install express@^4.18.3```

```npm install express-validator@^7.0.1```

```npm install jest@^29.7.0```

```npm install mysql2@^3.9.2```

```npm install sequelize@^6.37.1```

```npm install supertest@^6.3.4```

La aplicación estará disponible en http://localhost:5173/

## Uso

Una vez que la aplicación esté instalada y ejecutándose, puedes hacer lo siguiente:

- Para comprobar la funcionalidad del metodo CRUD en nuestro proyecto, hemos decidido hacer uso de POSTMAN cuya documentación podrás encontrar en el siguiente enlace:
 https://documenter.getpostman.com/view/32563763/2sA2xpTpeU

## Tecnologías Utilizadas

Las tecnologías principales que hemos utilizado para desarrollar esta aplicación web:

<p align="center">  
MySQL - Express - Nodemond - Cors - Supertest - Jest 
</p>

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

### Consideraciones Adicionales
- La aplicación se estructura siguiendo buenas prácticas de organización de código.
- Se implementa una arquitectura MVC (Modelo-Vista-Controlador) para separar las preocupaciones y mejorar la mantenibilidad del código.
- Se pueden agregar más funcionalidades y módulos según las necesidades específicas del proyecto, permitiendo así continuar permitiendo la escalabilidad de nuestro proyecto. 

## Contribuciones

¡Las contribuciones son bienvenidas! Si quieres contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu función o corrección de errores.
3. Realiza tus cambios y haz commits.
4. Sube tus cambios a tu repositorio.
5. Envía un pull request con tus cambios.

## Contacto

Si tienes alguna pregunta o sugerencia sobre el proyecto, no dudes en ponerte en contacto con nosotros por correo electrónico o a través de nuestras redes sociales. ¡Esperamos que disfrutes explorando el Museo de Bicicletas!.

¡Gracias por tu interés y apoyo! Pedalea con nosotros hacia un futuro lleno de aventuras en dos ruedas. 🚲✨
