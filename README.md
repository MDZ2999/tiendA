# TiendA

Aplicación web de comercio construida con Angular 21.0.5 y Tailwind CSS. Este proyecto está organizado para una tienda básica con autenticación, páginas modulares y rutas bien definidas.

## 🔍 Descripción

`TiendA` es un proyecto Angular que sirve como punto de partida para una tienda en línea. Incluye:

- Interfaz basada en Angular 21
- Rutas y páginas individuales
- Servicios y validadores organizados por módulos
- Soporte de Tailwind CSS a través de PostCSS
- Pruebas unitarias con Vitest

## 🚀 Tecnologías usadas

- Angular 21
- TypeScript
- Tailwind CSS 4
- PostCSS
- Vitest
- RxJS

## 📁 Estructura principal

- `src/main.ts` — punto de entrada de la aplicación
- `src/app/app.ts` — componente principal
- `src/app/app.routes.ts` — configuración general de rutas
- `src/app/pages/home/` — página de inicio
- `src/app/auth/` — autenticación
- `src/app/services/` — lógica de servicios
- `src/app/shared/` — componentes y utilidades compartidas
- `src/app/validators/` — validación de formularios
- `public/` — activos estáticos

## ⚙️ Scripts disponibles

Usa `npm` para ejecutar los comandos siguientes:

- `npm start` — arranca servidor de desarrollo
- `npm run build` — genera la versión de producción
- `npm run watch` — recompila automáticamente en modo desarrollo
- `npm test` — ejecuta pruebas unitarias con Vitest

## 🚧 Cómo ejecutar localmente

1. Instala dependencias:

```bash
npm install
```

2. Inicia la aplicación:

```bash
npm start
```

3. Abre el navegador en:

```text
http://localhost:4200/
```

## 🧪 Pruebas

Ejecuta las pruebas unitarias:

```bash
npm test
```

## 📦 Configuración de build

El proyecto usa `@angular/build:application` y define dos configuraciones principales:

- `development` — sin optimización y con sourcemaps
- `production` — compilación optimizada con hashing de salida

## 💡 Recomendaciones para desarrollo

- Añade nuevos componentes o servicios dentro de `src/app/`
- Mantén las rutas y la navegación en `app.routes.ts`
- Usa `src/app/shared/` para elementos que se repiten en varias páginas
- Revisa `src/styles.css` para estilos globales y la configuración de Tailwind

## 📚 Recursos útiles

- Angular: https://angular.io/
- Tailwind CSS: https://tailwindcss.com/
- Vitest: https://vitest.dev/

---

## 📌 Nota

Este README sustituye el contenido generado automáticamente por Angular CLI y describe los aspectos clave del proyecto actual.
