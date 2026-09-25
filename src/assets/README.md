# Assets

Coloca aquí tus archivos reales. Mientras no los agregues, el portafolio
usa gradientes y placeholders generados por CSS (no se descargan imágenes
de internet).

- `profile-photo.jpg` — tu foto de perfil. Se referencia desde
  `src/data/profile.ts` (`profile.photo`). Tamaño recomendado: 500x500px,
  formato cuadrado.
- `projects/` — capturas de tus proyectos. Cada proyecto en
  `src/data/projects.ts` tiene un campo `image` que debe apuntar aquí
  (por ejemplo `/src/assets/projects/gimnasio.png`) o a una URL propia.
- Favicon real: reemplaza `/public/favicon.svg` (o agrega un `.ico`/`.png`
  y actualiza el `<link rel="icon">` en `index.html`).

Mientras no agregues estos archivos, los componentes muestran un
placeholder con gradiente e iniciales/ícono, por lo que el sitio funciona
igual sin ellos.
