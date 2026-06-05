# 🚀 Portfolio Profesional — [TU NOMBRE]

> Desarrollador de Aplicaciones Web · Diseñador Gráfico · Técnico en Estética y Bienestar

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-264de4?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat&logo=bootstrap&logoColor=white)

---

## 📋 Descripción del proyecto

Portfolio digital profesional construido con **Bootstrap 5** como parte del módulo
*Lenguajes de Marcas y Sistemas de Gestión Empresarial* (UD5).

El sitio funciona como carta de presentación profesional orientada a reclutadores y
colaboradores, mostrando proyectos, habilidades y formación de manera clara y responsive.

---

## ✅ Requisitos de la tarea cubiertos

| Requisito | Componente Bootstrap usado | Estado |
|---|---|---|
| Grid System responsive | `.container`, `.row`, `.col-*` en todas las secciones | ✅ |
| Navbar con enlaces y CV | `navbar`, `navbar-expand-lg`, `collapse` | ✅ |
| Hero con presentación | `carousel` (cicla roles), utilidades flex/grid | ✅ |
| Tarjetas de proyectos | `card`, `card-body`, `card-img-top` | ✅ |
| Detalle de proyectos | `modal`, `modal-dialog-centered` | ✅ |
| Formulario de contacto | `form`, `form-control`, validación `.was-validated` | ✅ |
| Alertas de feedback | `alert alert-success`, `alert alert-danger` | ✅ |
| Habilidades en tabla | `table table-striped table-hover` | ✅ |
| Diseño responsive | Verificado en xs, sm, md, lg, xl, xxl | ✅ |
| Accesibilidad ARIA | `aria-label`, `aria-labelledby`, roles semánticos | ✅ |
| Código limpio | CSS en archivo separado, clases utilidad Bootstrap | ✅ |

---

## 🗂️ Estructura del proyecto

```
portfolio/
│
├── index.html              ← Página principal (todo el sitio)
│
├── css/
│   └── estilo.css          ← Estilos personalizados (cargados DESPUÉS de Bootstrap)
│
├── img/
│   ├── [TU_FOTO.jpg]       ← Foto de perfil (min. 400×400px, formato JPG/WebP)
│   └── proyectos/
│       ├── [IMAGEN_1.jpg]  ← Capturas de pantalla de proyectos (600×350px aprox)
│       ├── [IMAGEN_2.jpg]
│       └── ...
│
└── cv/
    └── [TU_CV].pdf         ← Tu CV en formato PDF (para el botón de descarga)
```

---

## 🛠️ Tecnologías utilizadas

- **HTML5** — Estructura semántica con etiquetas `<section>`, `<article>`, `<nav>`, `<footer>`
- **CSS3** — Variables CSS custom properties, Flexbox, Grid, animaciones, media queries
- **Bootstrap 5.3.3** — Grid, Navbar, Cards, Modals, Forms, Tables, Carousel, Alerts
- **Font Awesome 6** — Iconografía
- **Google Fonts** — Oxanium (display) + JetBrains Mono (body/código)
- **JavaScript vanilla** — IntersectionObserver, scroll events, validación de formulario

---

## 🚀 Cómo ejecutar el proyecto localmente

No requiere instalación de dependencias ni servidor. Es un proyecto de **frontend estático**.

### Opción 1 — Abrir directamente
```bash
# Clona el repositorio
git clone https://github.com/LemonArte.git

# Entra a la carpeta
cd LemonArte

# Abre el archivo principal en tu navegador
# En Windows:
start index.html
# En macOS:
open index.html
# En Linux:
xdg-open index.html
```

### Opción 2 — Servidor local con VS Code
1. Instala la extensión **Live Server** en VS Code
2. Haz clic derecho sobre `index.html` → *"Open with Live Server"*
3. El sitio se abrirá en `http://127.0.0.1:5500`

---

## 🌐 Despliegue

**URL en producción:** [https://[TU_USUARIO].github.io/[NOMBRE_REPO]]()

### Despliegue en GitHub Pages
1. Sube el proyecto a un repositorio GitHub público
2. Ve a **Settings** → **Pages**
3. En *Source*, selecciona la rama `main` y la carpeta `/ (root)`
4. Guarda — GitHub Pages generará la URL automáticamente

### Alternativas de despliegue
- **[Vercel](https://vercel.com)** — Conecta tu repo y despliega en un clic
- **[Netlify](https://netlify.com)** — Arrastra la carpeta del proyecto a su interfaz

---

---

## 📩 Formulario de contacto — Cómo activarlo

El formulario incluye validación Bootstrap. Para envío real de emails sin backend:

**Recomendado: [Formspree.io](https://formspree.io)** (gratis hasta 50 envíos/mes)

1. Crea cuenta en formspree.io
2. Crea un nuevo formulario → copia tu endpoint (ej: `https://formspree.io/f/xabcdefg`)
3. En `index.html`, cambia el `<form id="formulario-contacto"` añadiendo:
   ```html
   <form id="formulario-contacto" action="https://formspree.io/f/[TU_ID]" method="POST" ...>
   ```

---

## 👩‍💻 Autor

<!-- REEMPLAZA: Tus datos reales -->
**[TU NOMBRE]**
- 🌐 Portfolio: [URL de tu portfolio]
- 💼 LinkedIn: [URL de tu LinkedIn]
- 🐱 GitHub: [URL de tu GitHub]
- 📧 Email: [Tu email]

---

## 📄 Licencia

Este proyecto ha sido desarrollado como entrega académica para el módulo de
**Lenguajes de Marcas y Sistemas de Gestión Empresarial** (CFGS DAW).
El código es de libre uso para fines educativos.

---

*Hecho con Bootstrap 5 y `</código>` · [TU NOMBRE] — [AÑO ACTUAL]*
