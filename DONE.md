# Taller Cadena — completado

Landing estática en index.html, styles.css y main.js. Sin dependencias de ejecución ni build.

Incluye navegación, hero con corona dentada SVG y fotografía, tres servicios con fotos, proceso, galería, CTA WhatsApp de demostración y aclaración legal del brief. Español rioplatense; sin horarios, precios ni testimonios inventados.

Cuatro PNG reales generados con la herramienta integrada Codex imagegen y copiados a assets/images/: hero-taller.png (1672×941, aproximadamente 16:9), bici-lista.png, banco.png y cadena.png (1448×1086, 4:3). Prompts exactos en assets/images/PROMPTS.md.

Accesibilidad: enlace para saltar al contenido, foco visible, alt de imágenes, HTML semántico, contenido visible sin JS, soporte prefers-reduced-motion. Microinteracciones en fotos y enlaces; entradas con IntersectionObserver; corona y cadena vinculadas al scroll.

SEO demo: title, description, meta robots noindex,nofollow, favicon SVG, robots.txt sin Disallow: /, _headers con X-Robots-Tag: noindex, nofollow. El servidor de producción debe admitir _headers para aplicar ese encabezado HTTP.

Validación: node --check main.js aprobado. Cuatro archivos verificados como PNG con Pillow. Inspección visual de Chrome a 1280×1000 y 390×844; se corrigió el desborde del título móvil. Capturas en qa/. Se verificaron las rutas locales y anclas. El número de WhatsApp es ficticio; no se envió ningún mensaje.

Ver localmente: python3 -m http.server 4173 y abrir http://localhost:4173.

No se inicializó Git, no se hizo push ni se publicó el sitio.
