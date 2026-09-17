# Combate de Angamos 🇵🇪🚢
[![forthebadge](http://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

[![Video](https://img.youtube.com/vi/nVhoIrpoeBI/0.jpg)](https://www.youtube.com/watch?v=nVhoIrpoeBI)

[![Video Demo](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=nVhoIrpoeBI)

## Descripción

Experiencia web interactiva sobre el Combate de Angamos, construida con HTML, CSS y JavaScript del lado del cliente. La página combina una escena SVG, assets rasterizados, animaciones CSS y plantillas HTML cargadas dinámicamente.

El proyecto no utiliza bundler ni pipeline de compilación. Puede servirse como un sitio estático, pero necesita un servidor HTTP para que `fetch()` cargue correctamente las plantillas.

## Requisitos

- Un navegador moderno con soporte para SVG, `fetch()` y CSS moderno.
- Un servidor HTTP local.
- Python 3, Apache u otra herramienta equivalente.

No es necesario instalar Node.js ni ejecutar `npm install`.

## Puesta en marcha

Desde la raíz del proyecto, inicia un servidor estático:

```powershell
python -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000) en el navegador.

También puede publicarse directamente bajo Apache. En ese caso, la carpeta del proyecto debe quedar dentro del document root y la aplicación debe abrirse mediante `http://`, no con `file://`.

## Arquitectura

```text
index.html                         Punto de entrada y carga de recursos
css/main.css                       Reset, layout, escena y componentes visuales
js/main.js                         Montaje de templates e interacciones
js/click.js                        Librería/soporte de interacción legado
js/jquery-3.1.1.min.js             Dependencia JavaScript incluida localmente
js/jquery-migrate-3.0.0.min.js     Compatibilidad para jQuery legado
templates/fusion-app/hero-shell.html
									Estructura principal de la experiencia
templates/fusion-app/hero-scene.html
									Escena SVG y assets visuales
templates/fusion-app/hero-branding.html
									Logo, título y destellos decorativos
img/                                Imágenes usadas por la escena y el logo
ia-context/                         Reglas de colaboración y frontend
```

### Flujo de carga

1. `index.html` crea el contenedor `#fusion-app` y carga los scripts.
2. `loadFusionApp()` solicita `hero-shell.html` mediante `fetch()`.
3. `mountHeroPartials()` reemplaza los placeholders `data-partial` por sus templates.
4. `initFeature()` conecta parallax, navegación y la interacción del logo.
5. El logo abre un lightbox accesible mediante clic, teclado o `Escape` para cerrar.

Los templates usan rutas relativas a la raíz del sitio, por lo que la aplicación debe servirse desde una ubicación coherente con `index.html`.

## Estructura de la escena

La ilustración principal vive en `hero-scene.html` como un SVG con capas identificadas por clases (`level1`, `level2`, `level3`, `level4`). `main.js` puede modificar el `viewBox` para pantallas pequeñas y aplicar el movimiento parallax sobre los elementos con `data-depth`.

El branding se mantiene separado en `hero-branding.html`. El CSS controla el tamaño del logo, los destellos minimalistas y el lightbox sin requerir componentes externos.

## Desarrollo

Para trabajar localmente:

1. Sirve el directorio raíz con un servidor HTTP.
2. Edita el template o asset correspondiente.
3. Recarga el navegador con la caché deshabilitada si modificas CSS o JavaScript.
4. Revisa la consola del navegador cuando falle la carga de un parcial.

Comprobaciones rápidas:

```powershell
node --check .\js\main.js
```

En el navegador, confirma que las solicitudes a `templates/fusion-app/` y `img/` devuelvan estado HTTP `200`.

## Convenciones de mantenimiento

- Mantener la carga de templates compatible con servidores estáticos.
- Preferir cambios acotados a la capa responsable: template, CSS o interacción.
- No introducir rutas absolutas dependientes de una máquina local.
- Mantener atributos `alt`, roles y controles de teclado en interacciones visuales.
- Evitar añadir dependencias o un sistema de build sin justificar el coste operativo.
- Actualizar el parámetro de versión de `main.css` o de los scripts cuando sea necesario invalidar caché en despliegues estáticos.

## Solución de problemas

### La página muestra un bloque de fallback

Comprueba que el servidor se inició desde la raíz del proyecto y que estas rutas responden correctamente:

```text
/templates/fusion-app/hero-shell.html
/templates/fusion-app/hero-scene.html
/templates/fusion-app/hero-branding.html
```

### La escena o el logo aparecen sin estilos

Verifica la carga de `css/main.css`, limpia la caché del navegador y confirma que no haya errores de sintaxis en la consola.

### El logo no abre el lightbox

Confirma que `main.js` se cargue después de jQuery y que el template de branding se haya montado antes de ejecutar `initFeature()`.
