# Reglas frontend del proyecto

## Contexto

- Proyecto: landing estática del Combate de Angamos.
- Objetivo: mantener un sitio visual fuerte, con iconografía SVG y animaciones ligeras, sin necesidad de build tools.
- Tecnologías actuales: HTML, CSS, JavaScript vanilla y librerías legacy jQuery/TweenMax ya integradas.

## Estructura real del repositorio

- `index.html`: documento base con una shell mínima.
- `css/main.css`: estilos principales del landing.
- `js/main.js`: lógica de carga del parcial y animaciones del SVG.
- `js/click.js`: compatibilidad para eventos táctiles.
- `img/`: recursos visuales del proyecto.
- `templates/fusion-app/hero-shell.html`: escena principal montada dinámicamente.
- `ia-context/`: contexto para asistentes y documentación interna.

## Reglas de desarrollo

### HTML

- Mantener `index.html` como vista base y no incluir el SVG gigante directamente.
- Usar semántica básica con `header`, `section`, `nav` y `article` cuando aplique.
- Mantener `lang="es"` en la etiqueta principal.
- Priorizar accesibilidad y `alt` en imágenes.

### CSS

- Mantener el estilo centrado en `css/main.css`.
- No mezclar reglas de estilo dentro del HTML.
- Usar clases descriptivas y evitar excesiva especificidad.
- Mantener compatibilidad con layouts responsivos y con la escena SVG.

### JavaScript

- Mantener JavaScript en archivos separados y sin frameworks adicionales.
- No dejar un SVG grande en una constante ni dentro del documento principal.
- Inicializar funciones solo cuando los elementos del template estén presentes.
- Si se usa `fetch` para cargar templates, validar la respuesta antes de inyectar el HTML.

### Templates

- La escena principal debe vivir en `templates/fusion-app/hero-shell.html`.
- El contenedor de montaje es `#fusion-app` en `index.html`.
- El archivo debe cargarse mediante `fetch("./templates/fusion-app/hero-shell.html")` desde `js/main.js`.
- Si se agregan nuevos parciales, deben mantenerse con propósito claro y orden de composición.
- La escena debe cargarse por HTTP desde Apache o un servidor local, no depender únicamente de `file://`.

## Recomendaciones

- Mantener la escena modular: capas, personajes, humo, banderas y texto separados si es posible.
- Evitar reescribir bloques grandes sin revisar cómo impactan las animaciones.
- La documentación del contexto debe reflejar el estado real del proyecto y los archivos existentes.

## QA mínima

- Verificar que `index.html` carga sin el SVG gigante embebido.
- Verificar que `templates/fusion-app/hero-shell.html` responde correctamente.
- Revisar que la escena se monta y que `main.js` no falla por elementos nulos.
- Probar la página en un servidor local o Apache antes de cerrar cambios visuales grandes.
