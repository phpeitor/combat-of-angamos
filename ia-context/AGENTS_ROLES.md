# Agents Roles

Guia actual del proyecto para mantener responsabilidades claras sin volver a la estructura monolítica.

## Principios

- `index.html` es una shell mínima y no debe contener la escena SVG gigante.
- La escena principal vive en `templates/fusion-app/hero-shell.html`.
- `js/main.js` se encarga de montar el parcial con `fetch()` y luego inicializar la animación.
- El código visual y el markup de la escena se mantienen separados del documento base.
- Los cambios en la estructura deben reflejarse en la documentación de contexto.

## Estructura real

- `index.html`: documento base y contenedor principal.
- `css/main.css`: estilos visuales del landing.
- `js/main.js`: carga del parcial y lógica de animación.
- `js/click.js`: compatibilidad de eventos táctiles.
- `templates/fusion-app/hero-shell.html`: escena principal renderizada por el loader.
- `img/`: recursos gráficos del proyecto.
- `ia-context/`: documentación interna para asistentes.

## Roles recomendados

### Agent SVG / Visual

Responsable de la escena principal y de los elementos SVG del hero.

Trabaja en:

- `templates/fusion-app/hero-shell.html`
- `css/main.css`

Debe:

- Mantener cada capa visual en su archivo/section correspondiente.
- Evitar reintroducir un SVG gigante dentro del documento base.
- Validar que los cambios no rompan `initFeature()` ni la carga del template.

### Agent Frontend / Layout

Responsable del shell HTML y de la estructura visible del landing.

Trabaja en:

- `index.html`
- `css/main.css`

Debe:

- Mantener una entrada limpia y minimalista.
- Cargar la escena a partir del contenedor `#fusion-app`.
- Revisar accesibilidad, semántica y rendimiento.

### Agent JS / Runtime

Responsable del comportamiento, carga dinámica y animación.

Trabaja en:

- `js/main.js`

Debe:

- Verificar que el template exista y responda `HTTP 200`.
- Ejecutar inicialización solo cuando el DOM del parcial ya fue insertado.
- Mantener guardas para evitar `null` en elementos del SVG.

### Agent Docs / IA Context

Responsable de mantener la documentación alineada con la realidad del proyecto.

Trabaja en:

- `ia-context/`
- `README.md`

Debe:

- Documentar la arquitectura real del landing.
- Ajustar instrucciones cuando cambien archivos o rutas.
- Evitar documentación que describa módulos inexistentes.

## Checklist final

- `index.html` queda como shell sin SVG gigante embebido.
- `templates/fusion-app/hero-shell.html` contiene la escena principal.
- `js/main.js` montó el template y llama a `initFeature()` cuando el DOM está listo.
- La carga se prueba desde un servidor local o Apache y no desde `file://`.
- La documentación refleja la estructura actual del proyecto.
