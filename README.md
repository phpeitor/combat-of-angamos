# Combate de Angamos 🇵🇪🚢
[![forthebadge](http://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

## � Descripción del proyecto

Combate de Angamos es una pequeña experiencia web inspirada en la historia naval peruana, desarrollada como una demo interactiva con HTML, CSS y JavaScript puro. El objetivo principal es ofrecer una presentación visual atractiva, con narrativa y elementos de interacción que simulan una escena de batalla o mockup de juego.

La estructura del proyecto está pensada para ser simple, ligera y fácil de ejecutar localmente, sin dependencias complejas ni procesos de compilación.

## 🏗️ Estructura del repositorio

```text
combat-of-angamos/
├── index.html
├── css/
│   └── main.css
├── js/
│   ├── click.js
│   ├── jquery-3.1.1.min.js
│   ├── jquery-migrate-3.0.0.min.js
│   └── main.js
├── img/
├── templates/
│   └── fusion-app/
│       ├── hero-branding.html
│       ├── hero-scene.html
│       └── hero-shell.html
├── ia-context/
│   ├── AGENTS_ROLES.md
│   └── FRONTEND_RULES.md
├── README.md
└── LICENSE (si aplica en tu caso)
```

## 🚀 Inicio rápido

1. Clona el repositorio:

```bash
git clone https://github.com/phpeitor/combat-of-angamos.git
cd combat-of-angamos
```

2. Abre el archivo principal en tu navegador:

```bash
index.html
```

3. Si prefieres ejecutar un servidor local para evitar problemas de carga de assets, puedes usar una opción simple como:

```bash
python -m http.server 8000
```

Luego visita:

```text
http://localhost:8000
```

## 🎯 Características

- Interfaz visual enfocada en branding y narrativa.
- Uso de templates modularizados para reutilizar secciones.
- Lógica ligera basada en JavaScript y eventos DOM.
- Fácil mantenimiento y extensión.
- Sin dependencias externas de build tools.

## 🔧 Consideraciones de desarrollo

Este proyecto está diseñado como una maqueta o demo frontend. Si vas a continuar desarrollándolo, se recomienda:

- separar la lógica de la presentación en módulos más claros;
- centralizar estilos y variables de diseño;
- mantener los assets en carpetas consistentes;
- documentar cualquier flujo interactivo para facilitar futuras iteraciones.

## 📹 Demo

[![Video](https://img.youtube.com/vi/nVhoIrpoeBI/0.jpg)](https://www.youtube.com/watch?v=nVhoIrpoeBI)

[Ver demo en YouTube](https://www.youtube.com/watch?v=nVhoIrpoeBI)

## 📝 Notas

El proyecto funciona como una base rápida para prototipos visuales o presentaciones estáticas. Para una versión más robusta, se puede evolucionar hacia una arquitectura modular con componentes, un sistema de build y mejores prácticas de accesibilidad y rendimiento.
