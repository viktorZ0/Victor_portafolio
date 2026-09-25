# Portafolio de Víctor

Portafolio web profesional, construido como una aplicación 100% frontend.
Funciona como carta de presentación y vitrina de proyectos: quién soy, mi
formación, mis habilidades técnicas, los proyectos que he desarrollado y
cómo contactarme.

## Perfil profesional

Profesional en Ingeniería de Sistemas en etapa final de titulación (todas
las materias completadas, pendiente únicamente la defensa para obtener el
título), con formación previa como Técnico Superior y experiencia en el
desarrollo de proyectos tecnológicos.

Este README y el código fuente usan placeholders (`[NOMBRE DE LA
UNIVERSIDAD]`, `[TU EMAIL]`, etc.) donde falta información personal
específica. Complétalos con tus propios datos siguiendo la guía más abajo.

## Tecnologías utilizadas

- **React 18** + **TypeScript**
- **Vite** como bundler y servidor de desarrollo
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones y microinteracciones
- **Lucide React** para iconografía
- **Git / GitHub** para control de versiones

No hay backend: todo el sitio es estático y puede desplegarse en
GitHub Pages o Vercel sin infraestructura adicional.

## Arquitectura

Arquitectura basada en componentes, con los datos completamente separados
de la presentación:

```
src/
├── assets/              # Fotos, capturas de proyectos, favicon (ver assets/README.md)
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Education/
│   ├── Skills/
│   ├── Projects/
│   ├── ProjectCard/
│   ├── Experience/
│   ├── Contact/
│   ├── Footer/
│   └── shared/          # Reveal (animación al hacer scroll) y SectionHeading
├── data/
│   ├── profile.ts        # Nombre, bio, email, redes, links del navbar
│   ├── education.ts       # Formación académica y experiencia/proyectos
│   ├── skills.ts           # Categorías y tecnologías
│   └── projects.ts          # Proyectos del portafolio
├── pages/
│   └── Home.tsx           # Ensambla todas las secciones
├── types/
│   └── index.ts             # Tipos: Project, SkillCategory, EducationEntry, etc.
├── App.tsx
├── main.tsx
└── index.css
```

Cada sección visual (`components/*`) solo se encarga de renderizar; toda
la información editable vive en `src/data/`.

## Instalación

Requiere Node.js 18 o superior.

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Compilar para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar. Puedes previsualizarla con:

```bash
npm run preview
```

## Cómo personalizar mi información

### Datos personales, contacto y redes

Edita `src/data/profile.ts`:

- `name`, `fullName`, `role`, `tagline`, `heroDescription`,
  `aboutDescription`
- `email`, `social.github`, `social.linkedin`
- `photo`: ruta a tu foto (ver `src/assets/README.md`)

Estos valores alimentan automáticamente el Navbar, el Hero, "Sobre mí",
Contacto y el Footer.

### Formación académica

Edita `src/data/education.ts`, arreglo `education`. Cada entrada usa el
tipo `EducationEntry`:

```ts
{
  id: 'ingenieria-sistemas',
  degree: 'Ingeniería de Sistemas',
  institution: '[NOMBRE DE LA UNIVERSIDAD]',
  period: '[AÑO DE INICIO] - [AÑO DE FINALIZACIÓN]',
  status: 'in-progress', // 'in-progress' | 'completed'
  statusLabel: 'Materias completadas | En proceso de titulación',
  description: '...',
}
```

Reemplaza los placeholders (`[NOMBRE DE LA UNIVERSIDAD]`,
`[NOMBRE DEL INSTITUTO]`, `[ESPECIALIDAD DE TÉCNICO SUPERIOR]`, fechas)
por tu información real.

### Experiencia y proyectos académicos

En el mismo archivo, `src/data/education.ts`, arreglo `experience`.
Actualmente contiene placeholders (`isPlaceholder: true`) porque no se ha
proporcionado información laboral. Agrega tus propias entradas con el tipo
`ExperienceEntry` (`type` puede ser `laboral`, `practicas`, `freelance`,
`academico` o `personal`) y quita `isPlaceholder` cuando la información sea
real.

### Habilidades y tecnologías

Edita `src/data/skills.ts`. Cada categoría (`SkillCategory`) tiene un
`title` y un arreglo `skills` de strings. Agrega, quita o reordena
libremente; no se muestran niveles ni porcentajes de dominio.

### Agregar un nuevo proyecto

Edita `src/data/projects.ts` y agrega un objeto al arreglo `projects`
siguiendo el tipo `Project`:

```ts
{
  id: 'mi-nuevo-proyecto',
  title: 'Nombre del proyecto',
  description: 'Descripción del problema que resuelve y tu rol en él.',
  image: null, // o '/src/assets/projects/mi-proyecto.png'
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  liveUrl: 'https://mi-proyecto.com', // o null si no tiene demo
  githubUrl: 'https://github.com/usuario/repo', // o null
  featured: true, // true = mayor protagonismo visual
}
```

No es necesario tocar ningún componente: la sección "Proyectos" se genera
automáticamente a partir de este archivo.

### Imágenes: foto de perfil, capturas y favicon

No se incluyen imágenes descargadas de internet. Mientras no agregues las
tuyas, se muestran gradientes/placeholders. Consulta
`src/assets/README.md` para ver dónde colocar:

- Foto de perfil
- Capturas de proyectos
- Favicon (`public/favicon.svg`, actualmente un placeholder generado)

### SEO

El `<title>`, la meta `description` y las etiquetas Open Graph están en
`index.html`. Edítalas directamente ahí.

## Subir los cambios a GitHub

```bash
git add .
git commit -m "Actualiza información del portafolio"
git push
```

## Desplegar

### Vercel

1. Importa el repositorio en [vercel.com](https://vercel.com/new).
2. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`.
3. Cada push a la rama principal genera un nuevo despliegue automático.

### GitHub Pages

1. En `vite.config.ts`, cambia `base: '/'` por
   `base: '/<nombre-del-repositorio>/'`.
2. Genera el build: `npm run build`.
3. Publica el contenido de `dist/` en la rama `gh-pages` (por ejemplo con
   el paquete `gh-pages`, o mediante un workflow de GitHub Actions que
   suba el artefacto de `dist/` a Pages).
4. Habilita GitHub Pages en la configuración del repositorio, apuntando a
   la rama/origen donde publicaste `dist/`.

## Calidad de código

```bash
npm run lint
```

El proyecto usa ESLint + TypeScript ESLint con las reglas recomendadas
para React. `npm run build` ejecuta además la verificación de tipos de
TypeScript antes de compilar.
