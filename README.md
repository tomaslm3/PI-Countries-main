# API COUNTRIES

## Introduction

Proyecto individual realizado para presentar en HenryBootcamp. Un sitio web consume una API (REST Countries) para traerse información de países y las guarda en su propia base de datos (PostgreSQL). Luego utilizamos esta información en diferentes rutas para permitirle al usuario interactuar y poder llevar registro de sus actividades (Puede crear las mismas a través de un formulario controlado y asignarlas a distintos países mediante una tabla intermedia) realizadas, donde las llevo a cabo, el tiempo tomado y otros datos de interés. En otras funcionalidades el usuario también puede buscar países por nombre y filtrarlos (Si tiene actividades (y cuales son), por cantidad de población, y alfabéticamente).

Tecnologias utilizadas:
<br>
Lenguaje: JavaScript
<br>
Base de datos: PostgreSQL
<br>
Back-End: NodeJs, ExpressJs, Sequelize
<br>
Front-End: React, Redux, CSS

## Para Probar el proyecto

Despues de clonar el repositorio.
- Crear un archivo .env con las variables de entorno necesarias para la conexion a la base de datos en la carpeta api.
- Crear una base de datos con el nombre de la aplicacion y la contraseña.
abrir la consola de postgres y ejecutar el comando:
```
CREATE USER "usuario" WITH PASSWORD 'contraseña';
CREATE DATABASE "countries" WITH OWNER = "usuario";
```
- Volver al proyecto y dividir la terminal en dos
- En la primer terminal ejecutar el comando: `cd api` y ejecutar el comando: `npm install` para instalar las dependencias y ejecutar el comando: `npm start` para iniciar el servidor.
- En la segunda terminal ejecutar el comando: `cd client` y ejecutar el comando: `npm install` para instalar las dependencias y ejecutar el comando: `npm start` para iniciar el servidor.


## Imagenes

- Landing Page

![landingPage](/images/LandingPage.png)


- Home

![home](/images/Home.png)


- Filters

![filtes](/images/filters.png)

- Country Detail

![details](/images/CountryDetails.png)

- New Activity

![newActivity](/images/NewActivity.png)