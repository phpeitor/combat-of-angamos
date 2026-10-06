# Combate de Angamos 🚢
[![forthebadge](http://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

[![Video](https://img.youtube.com/vi/nVhoIrpoeBI/0.jpg)](https://www.youtube.com/watch?v=nVhoIrpoeBI)

[![Video Demo](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=nVhoIrpoeBI)

## Descripción

Landing interactiva conmemorativa del Combate de Angamos. La experiencia combina una ilustración SVG por capas, imágenes PNG, animaciones CSS, una introducción en video y plantillas HTML cargadas en el navegador.

El sitio es estático: no requiere backend, gestor de paquetes ni compilación. Sí necesita servirse por HTTP porque carga sus plantillas con `fetch()`.

## Funcionalidades

- Introducción en video desde `resources/ai.mp4`, con opción para saltarla y transición a la escena principal.
- Ilustración SVG con capas, movimiento parallax y animaciones.
- Movimiento sutil de la imagen del personaje y del Huáscar.
- Logo ampliable en un lightbox con soporte de teclado.
- Respeto por la preferencia del sistema `prefers-reduced-motion`.

## Requisitos

- Navegador moderno con soporte para SVG, CSS, JavaScript y reproducción MP4.
- Servidor HTTP local o web server, como Apache.
- Python 3 es opcional para iniciar un servidor local rápido.

No se necesita instalar dependencias ni ejecutar `npm install`.

## Ejecución local

Desde la raíz del repositorio, inicia un servidor estático con Python:

```bash
python -m http.server 8000
```

Abre <http://localhost:8000>. También puedes servir el directorio desde Apache. No abras `index.html` directamente con `file://`, ya que el navegador bloqueará la carga de plantillas.

## Estructura del proyecto

```text
index.html                         Entrada de la aplicación y recursos globales
css/main.css                       Estilos, layout y animaciones
js/main.js                         Carga de plantillas y comportamiento de la escena
js/click.js                        Soporte de interacción incluido en el proyecto
js/jquery-3.1.1.min.js             jQuery, distribución local
js/jquery-migrate-3.0.0.min.js     Compatibilidad para código jQuery legado
templates/fusion-app/hero-shell.html
                                   Estructura de la landing y placeholders
templates/fusion-app/hero-scene.html
                                   Ilustración SVG y capas de la escena
templates/fusion-app/hero-branding.html
                                   Logo, título y elementos decorativos
img/                               Logo y PNG del personaje y el Huáscar
resources/ai.mp4                   Video de introducción
.ia-context/                       Guías de contexto para herramientas de IA
```

## Arquitectura y flujo de carga

1. `index.html` muestra la introducción en video y crea el contenedor `#fusion-app`.
2. `js/main.js` carga `hero-shell.html` mediante `fetch()`.
3. `mountHeroPartials()` reemplaza los nodos `data-partial` por las plantillas de escena y branding.
4. `initFeature()` inicializa animaciones, parallax e interacciones cuando las plantillas están montadas.
5. Al terminar el video (o al saltarlo), la landing queda visible con la escena SVG.

Las rutas de recursos y plantillas son relativas a la raíz del sitio. Publica el proyecto manteniendo la estructura de directorios y sirve `index.html` desde esa raíz.

## Desarrollo y validación

1. Inicia el servidor desde la raíz del proyecto.
2. Modifica el template, estilo o script responsable de la parte que estás cambiando.
3. Recarga sin caché si cambias archivos CSS o JavaScript; `index.html` versiona esos recursos mediante query strings.
4. Revisa la consola y la pestaña Network del navegador para detectar errores de carga.

Comprobación de sintaxis JavaScript:

```bash
node --check js/main.js
```

Comprobación de formato del diff:

```bash
git diff --check
```

## Mantenimiento

- Conserva la carga de plantillas compatible con un servidor estático.
- Mantén los recursos organizados por responsabilidad: HTML en `templates/`, estilos en `css/`, lógica en `js/` y medios en `img/` o `resources/`.
- Usa rutas relativas y evita referencias dependientes de una máquina local.
- Mantén textos alternativos, controles de teclado y soporte de movimiento reducido en interacciones y animaciones.
- Evita dependencias o herramientas de build mientras no aporten una necesidad concreta.
- Actualiza el parámetro de versión de CSS o JavaScript cuando un despliegue estático necesite invalidar caché.

## Solución de problemas

### La escena muestra un fallback o queda incompleta

Confirma que el servidor se ejecuta desde la raíz y que las plantillas responden correctamente:

```text
/templates/fusion-app/hero-shell.html
/templates/fusion-app/hero-scene.html
/templates/fusion-app/hero-branding.html
```

### El video no se reproduce

La reproducción automática requiere que el video esté silenciado. Si el formato o el navegador impiden reproducirlo, la introducción se cierra y se muestra la escena; también puedes usar **Saltar introducción**.

### Los estilos o cambios recientes no aparecen

Verifica que `css/main.css` responda con HTTP 200 y recarga sin caché. Comprueba también la consola por errores de CSS o SVG.
