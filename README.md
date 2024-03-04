# backend-BicyclesMuseum
Backend-BicycleMuseum

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

