# 👻 Rulos de Estatua

**TP1 — Desarrollo Web 2025**
🔗 [Ver proyecto desplegado en Vercel](#) ← *completar con el link real*

---

## 📄 Descripción del Proyecto

Rulos de Estatua es el sitio web grupal del equipo de cuatro estudiantes para el Trabajo Práctico 1 de Desarrollo Web. El proyecto consiste en una portada grupal temática (inspirada en Ghostbusters) que presenta al equipo y enlaza a las páginas individuales de cada integrante. Cada página personal muestra la tarjeta de presentación de cada estudiante con su información, intereses y habilidades.

La diversidad de estilos individuales es intencional: refleja que las diferencias del equipo son su fortaleza.

---

## 👥 Integrantes

| Nombre | GitHub |
|--------|--------|
| Agustina Brandemann | [@usuario](https://github.com/) |
| Valeria Natucci | [@usuario](https://github.com/) |
| Matías González | [@usuario](https://github.com/) |
| Luis Specterman | [@usuario](https://github.com/) |

---

## 🛠 Tecnologías Utilizadas

- **HTML5** — estructura semántica
- **CSS3** — estilos, animaciones, responsive design
- **JavaScript (ES6+)** — interactividad dinámica
- **Google Fonts** — Creepster, Oswald, Raleway
- **Vercel** — deploy del proyecto
- **GitHub** — repositorio y control de versiones

---

## 📁 Estructura de Archivos

```
rulos-de-estatua/
├── index.html          # Portada principal
├── bitacora.html       # Sección bitácora
├── agustina.html       # Página individual
├── valeria.html        # Página individual
├── matias.html         # Página individual
├── luis.html           # Página individual
├── css/
│   ├── style.css       # Estilos globales + responsive
│   ├── agustina.css    # Estilos individuales
│   ├── valeria.css     # Estilos individuales
│   ├── matias.css      # Estilos individuales
│   └── luis.css        # Estilos individuales
├── js/
│   ├── main.js         # JS de la portada
│   ├── agustina.js     # JS individual
│   ├── valeria.js      # JS individual
│   ├── matias.js       # JS individual
│   └── luis.js         # JS individual
├── img/                # Imágenes y avatares
└── README.md
```

---

## 🎨 Guía de Estilos

### Paleta de Colores

| Rol | Hex | Descripción |
|-----|-----|-------------|
| Fondo principal | `#0a0a0f` | Negro profundo |
| Superficie | `#111118` | Fondo secundario |
| Cards | `#16161f` | Fondo de tarjetas |
| Borde | `#2a2a3a` | Bordes sutiles |
| Acento slime | `#4dff91` | Verde fosforescente |
| Acento slime oscuro | `#00cc5a` | Verde más oscuro |
| Texto | `#e8e8f0` | Texto principal |
| Texto muted | `#7a7a9a` | Texto secundario |

### Tipografías

- **Creepster** (títulos principales) — [Google Fonts](https://fonts.google.com/specimen/Creepster)
- **Oswald** (encabezados, botones) — [Google Fonts](https://fonts.google.com/specimen/Oswald)
- **Raleway** (cuerpo del texto) — [Google Fonts](https://fonts.google.com/specimen/Raleway)

### Iconografía y Avatares

- Se utilizan emojis nativos para iconografía (👻 🎬 🎵 📍)
- Los avatares son placeholders de iniciales (ej: "MG" para Matías González)
- *Nota: los avatares pueden ser reemplazados por imágenes generadas con IA en TP2*

---

## ⚡ JavaScript — Funciones Dinámicas

### `js/main.js` — Portada (index.html)

| Función | Descripción | Ubicación |
|---------|-------------|-----------|
| `createParticles()` | Genera partículas flotantes de fantasmas y símbolos en el fondo de la página | Background global |
| `initScrollReveal()` | Animación de entrada de las cards de integrantes al hacer scroll (staggered con IntersectionObserver) | Sección "Los Cazadores" |
| `initTeamCounter()` | Al llegar la sección del equipo, cuenta animadamente del 1 al 4 antes de mostrar el título final | Título "Los Cazadores" |
| `initHeroButton()` | Al hacer clic en "Conocé al equipo", genera un emoji 👻 que explota en pantalla | Botón del Hero |

### `js/matias.js` — Página individual de Matías

| Función | Descripción | Ubicación |
|---------|-------------|-----------|
| Modo fantasma | Al hacer clic en el botón, cambia la paleta de colores de la página a tonos naranja | Botón en header |
| Expandir habilidades | Despliega/oculta habilidades extra con animación de entrada | Sección habilidades |

### Páginas individuales restantes

Cada integrante implementa su propia función JS en su archivo `js/nombre.js`. Ver sección correspondiente en cada página.

> 📸 *Capturas de pantalla — completar una vez desplegado el proyecto*

---

## 🚀 Enlace al Proyecto Desplegado

🔗 **Vercel:** [https://tp1-grupal-front-pqer9rce8-agustinabrans-projects.vercel.app/]

---

## 🤖 Uso de Inteligencia Artificial

### Herramientas utilizadas

- **Claude (Anthropic) — claude-sonnet-4** — Asistencia principal en generación de código y estructura del proyecto

### Uso en Contenido y Código

- **Estructura base del proyecto**: Claude generó la estructura de archivos, el CSS global con tema Ghostbusters y la lógica JS de la portada.
- **Debugging CSS responsive**: Se utilizó IA para depurar el comportamiento del grid en breakpoints de 400px.
- **Textos de bitácora**: Los textos de la bitácora fueron generados con ayuda de IA y revisados/adaptados por el equipo.

### Imágenes

- Los avatares actuales son placeholders de iniciales generados con CSS puro.
- En futuras versiones se planea usar imágenes generadas con herramientas como **DALL·E**, **Midjourney** o **Adobe Firefly** con prompts temáticos de Ghostbusters.

---

## 📋 Bitácora

Ver [bitacora.html](bitacora.html) en el sitio o el archivo correspondiente en el repositorio.

---

*Última actualización: TP1 — 2025*
