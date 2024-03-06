# flamespa.dev

![Build](https://img.shields.io/badge/Build-Passing-green) ![tests](https://img.shields.io/badge/Tests-Passing-green)

Flame Spa es un ERP para la gestión de empresas, principalmente asociado a empresas del rubro del transporte de carga por carretera. Incluye módulos como seguimiento de flota, facturación, contabilidad, gestión de recursos humanos, entre otros.  

![cover](/docs/images/cover.png)

## Instalación

### Requisitos

[![Laravel](https://img.shields.io/badge/PHP-8.X-blue)](#) [![Laravel](https://img.shields.io/badge/Laravel-11-blue)](#) [![Node](https://img.shields.io/badge/Node-18-blue)](#) [![Postgres](https://img.shields.io/badge/Postgres-16-blue)](#) [![Redis](https://img.shields.io/badge/Redis-6-blue)](#) [![Nginx](https://img.shields.io/badge/Nginx-2-blue)](#)  

### Instalación con Docker

> Dentro del proyecto hemos creado un archivo `docker-compose.yml` que contiene la configuración necesaria para levantar el proyecto en un entorno de desarrollo con Docker. Esto le evitará tener que instalar todas las dependencias en su máquina.  

```bash
docker-compose up -d
```

### Instalación manual

Descargue el repositorio:  

```bash
git clone https://github.com/geekhadev/flamespa.dev.git
```

Instale las dependencias de PHP:

```bash
composer install
```  

Instale las dependencias de Node:

```bash
npm install
```

Compile los assets:

```bash
npm run dev
```

Cree un archivo `.env` a partir del archivo `.env.example` y modifique las variables de entorno necesarias.  

Genere una nueva clave de aplicación:

```bash
php artisan key:generate
```

Ejecute las migraciones:  

```bash
php artisan migrate
```

Ejecute los seeders:

```bash
php artisan db:seed
```

Inicie el servidor:

```bash
php artisan serve
```        

## Commandos

### PHP

- Lint

Verifica que el código PHP cumpla con las reglas de codificación definidas y que no contenga errores de sintaxis.  

```bash
composer lint
```

## Autores

- [![GitHub](https://img.shields.io/badge/GitHub-@geekhadev-blue)](https://github.com/geekhadev) Irwing Naranjo 
- [![GitHub](https://img.shields.io/badge/GitHub-@rodolfom-blue)](https://github.com/rodolfom) Rodolfo medina
