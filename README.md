# CDA Los Andes Premium

## Ejecutar

```bash
npm install
npm run dev
```

## Validar producción

```bash
npm run check
npm run build
npm run preview
```

Los datos provisionales se editan en `src/data/site.ts`. El encabezado parte de la configuración de `Header.astro` indicada por el desarrollador.

## Refinamientos visuales

- Se retiró la franja superior multicolor.
- Se redujeron los títulos principales y de páginas internas.
- Se revisaron titulares y textos para corregir puntuación y mejorar fluidez.
- Contacto usa una imagen independiente de la imagen de Sede.
- Se restauró el botón flotante de WhatsApp con diseño redondeado e ícono.

## Ajustes finales

- Se eliminó la línea verde inferior de los encabezados fotográficos.
- WhatsApp ahora usa un botón circular, únicamente con el ícono.
- El hero está preparado para usar un MP4 opcional mediante `HeroMedia.astro`.

## Logo transparente y video del hero

- El encabezado utiliza `logo-principal-cda-los-andes-transparente.png`, con transparencia real en el fondo exterior.
- El encabezado sticky usa fondo blanco sólido, sin desenfoque, para evitar cambios de tono al hacer scroll.
- El inicio reproduce `public/videos/hero-cda.mp4`, un movimiento cinematográfico sutil creado a partir de la imagen conceptual del hero. No representa una grabación real de la sede.

## Hero definitivo

El inicio utiliza únicamente `public/images/hero-inicio.webp`. Se retiró el video y el componente opcional de video.
