# Campus News Portal

Un portal de noticias universitarias construido con Web Components y Custom Events, siguiendo los principios de componentización y comunicación basada en eventos.

## Características

- Arquitectura modular basada en Web Components
- Shadow DOM para encapsulamiento de estilos
- Comunicación entre componentes mediante Custom Events
- Filtrado dinámico por categorías
- Panel de depuración para mostrar el estado interno
- Diseño responsivo con paleta de colores rosa

## Estructura de Archivos

```
/
├── index.html           # HTML principal
├── style.css            # Estilos globales
├── main.js              # JavaScript principal
├── data.json            # Datos de artículos
└── components/          # Carpeta de componentes
    ├── campus-news-app.js            # Componente principal
    ├── campus-category-filters.js    # Filtros de categorías
    ├── campus-news-list.js           # Lista de noticias
    ├── campus-news-item.js           # Elemento individual de noticia
    ├── campus-news-detail.js         # Detalle de noticia seleccionada
    └── campus-debug-panel.js         # Panel de depuración
```

## Web Components

- **`<campus-news-app>`**: Componente principal que orquesta el estado global.
- **`<campus-category-filters>`**: Muestra y maneja los filtros de categorías.
- **`<campus-news-list>`**: Lista de noticias filtradas.
- **`<campus-news-item>`**: Componente individual para cada noticia en la lista.
- **`<campus-news-detail>`**: Muestra el detalle completo de la noticia seleccionada.
- **`<campus-debug-panel>`**: Panel para depuración que muestra información interna.

## Eventos Personalizados

- **`campus:data-loaded`**: Emitido cuando los datos se han cargado.
- **`campus:category-change`**: Emitido cuando se cambia la categoría seleccionada.
- **`campus:article-select`**: Emitido cuando se selecciona un artículo.
- **`campus:articles-filtered`**: Emitido cuando se han filtrado los artículos.
- **`campus:article-updated`**: Emitido cuando se actualiza el artículo seleccionado.
- **`campus:debug-update`**: Emitido para actualizar la información de depuración.

## Cómo usar

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en un navegador moderno
3. Explora las noticias y utiliza los filtros de categor