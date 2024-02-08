# Proyecto notaria Henriette Larrère

- Repositorio público en [Repositorio Github]
- Deploy de esta [Github Pages]


 ## Documentacion de commits:

### Commit (07/01/2024)
- Agrega contenedor para elementos de index.html
- Agrega funcionalidad de busqueda para tarjetas de tramites
- Cambia el despliegue de imagenes por script para inyectarlas dinámicamente
- Quita acceso a indice-documentos
- Re-estiliza página contacto

### Commit (23/10/2023)
- Aumenta contraste para footer y tabs.
- Agrega ruta absoluta para imagenes y estilo página 404.
- Agrega Animacióon en página 404

### Commit (22/10/2023)
- Revisa codigo, eliminando comentarios y espacios innecesarios.
- Revisa links al css desde los html.
- Revisa enlaces a imagenes de background.
- Agrega Página 404.html.
- Revisa y ajusta margenes y paddings en todas las páginas.
- Elimina Carrusel redundante para página enlaces.


### Commit (19/10/2023)
- Revisa, organiza en carpetas y vuelve a linkear cada una de las imágenes.
- Agrega metadata a cada página.
- Afina margenes y layouts pagina trámites.
- Agrega 1 nueva carta en página tramites, ahora son 8. 
- Elimina y desvincula archivos no utilizados.
- Crea y vincula media queries en partial conteniendo todas en un solo archivo.
- Afina ubicación despliegue de menú hamburguesa.
- Revisa y corrige detalles de visualización, margenes y padding en todas las páginas.
- Corrige footer página enlaces.

### Commit (15/10/2023)
- Arregla menu hamburguesa que se sobreponía.
- Revisa y mejora estilos responsive en todas las paginas.
- Despliega mas elementos en menu carrusel de la pagina enlaces.
- Actualiza icono SII pagina enlaces.
- Agrega efecto blur y opacity a imagen de fondo global.

### Commit (09/10/2023)
- Agrega descripcion realista páginas Trámites y Noticias.
- Anida y parametriza con scss estilos de páginas Trámites y Enlaces.
- Anida y parametriza con scss estilos de páginas Indice-documentos y Contacto.
- Agrega metadata en página Index.

### Commit (08/10/2023)
- Agrega favicon en todas las paginas.
- Agrega descripcion realista página index.
- Agrega accordions al index.
- Anida y parametriza header y componentes.
- Anida y parametriza navbars.
- Anida y parametriza header y footers.
- Replica header y footer a paginas hijas,

### Commit (06/10/2023)
- Inicia documentación en el archivo README
- Instala paquete sanitize para hacer reset de estilos
- Comienza a trabajar con sass en el archivo /styles/scss/main.scss moviendo su procesamiento a /styles/css/style.css
- linkea nuevas rutas en archivo index.html
- Corrige nombre de Section a section donde estaba fuera de norma.
- Quita h1 extra de pagina de contactos.
- Quita mayusculas de los nombres de archivos.
- Separa el codigo css original en un import por cada pagina.
- Genera layouts generales para todo el sitio y especificos para header y footer.
- Genera partial para las fuentes base de todo el sitio para sus h1, h2, h3, h4, h5, h6 y parrafos.
- Genera ultils con descripciones para containers.
- Genera partial de componentes cards y tabs.
- Inicia pruebas de accordions para pagina de inicio.

## Variables `CSS` personalizadas:

```scss
:root {
$chevron: var(--#{$prefix}-chevron, url("data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 20 14' fill='none' stroke='rgb(244, 202, 88)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")) !default;


$font-sans: Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
$font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !default;

$color-amarillo-primario: rgb(225,171,24);
$color-amarillo-secundario: rgb(244,202,88);
$color-amarillo-terciario:  rgb(255, 234, 0);
$color-contraste-primario: #575249;
$color-contraste-suave: #837e74e7;
$color-fondo-primario:#5752498d;
$color-fondo-suave: #ddddddbe;
}
```

### Ambiente de desarrollo

- Dependencias
-- npm install

- Estilos
-- npm install -g sass
-- sass --watch ./style/scss/main.scss ./style/css/style.css



[Repositorio Github]: https://github.com/rroldanb/notariaHLR.git
[Github Pages]: https://rroldanb.github.io/notariaHLR/

