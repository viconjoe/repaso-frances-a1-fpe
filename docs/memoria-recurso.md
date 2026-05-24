# Memoria breve del recurso didáctico

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión:** 2.5
**Contexto:** Habilitación docente FPE · Prácticas 2026  
**Formato:** HTML/CSS/JavaScript estático  
**Publicación:** GitHub Pages

## 1. Introducción

Esta memoria describe el diseño y desarrollo del recurso **Repaso Final Francés A1 · Kit interactivo**, una herramienta digital ligera creada como propuesta pedagógica complementaria para alumnado adulto de Francés A1 en fase de repaso final.

El recurso nace en el contexto del itinerario de habilitación docente FPE de Joel Concepción Villanueva, con una doble finalidad:

1. aportar una herramienta útil y prudente para el alumnado;
2. generar una evidencia real de competencia digital aplicada a docencia.

El proyecto ha sido diseñado con una premisa clara: crear algo funcional, sobrio y usable, sin convertirlo en una aplicación compleja ni en una plataforma de evaluación.

El recurso no es oficial, no tiene vínculo institucional directo con ICSE ni con el SCE y se presenta como herramienta personal de portfolio docente.

## 2. Justificación

El alumnado adulto que finaliza un nivel A1 puede beneficiarse de recursos breves que le permitan repasar frases esenciales, comprobar qué recuerda y practicar pequeñas situaciones comunicativas.

En este contexto, el recurso responde a varias necesidades:

- repasar expresiones funcionales;
- reducir el miedo al error;
- practicar con feedback inmediato;
- ofrecer una herramienta accesible desde móvil;
- permitir uso autónomo mediante enlace o QR;
- generar una evidencia local de práctica cuando sea útil;
- demostrar competencia digital docente sin depender de plataformas complejas.

La herramienta se ha desarrollado como recurso estático para que pueda alojarse en GitHub Pages, compartirse fácilmente y conservarse como evidencia de portfolio profesional.

## 3. Destinatarios

El recurso está dirigido a alumnado adulto de Francés A1, especialmente en fase final de curso.

No está pensado para alumnado infantil ni para aprendizaje autónomo completo desde cero.

Perfil previsto:

- personas adultas;
- nivel A1 inicial o A1 final;
- necesidad de repaso;
- posible diversidad de competencia digital;
- uso probable desde teléfono móvil;
- necesidad de instrucciones claras y actividades breves.

## 4. Objetivo general

Reforzar contenidos básicos de Francés A1 mediante una herramienta digital interactiva, breve y accesible, orientada a la práctica funcional de frases útiles.

## 5. Principios de diseño

### Simplicidad

El recurso debe ser fácil de abrir, usar y entender. Se evita crear una aplicación compleja con login, backend o recogida de datos.

### Utilidad pedagógica

Cada bloque tiene una función didáctica clara y no es solo un elemento visual.

### Progresión

El recurso avanza desde reconocimiento y comprensión hacia producción breve.

### Privacidad

No se recogen datos personales. El progreso se guarda solo en el navegador.

### Alumnado adulto

El tono, el diseño y las actividades se han planteado para adultos, evitando infantilización o gamificación excesiva.

## 6. Estructura del recurso

El recurso se organiza en estos bloques:

- **Objetivo del recurso**.
- **Autodiagnóstico orientativo A1**.
- **Flashcards de supervivencia**.
- **Gramática útil A1**.
- **Comprensión lectora A1**.
- **Comprensión auditiva A1 preparada con audios locales propios del autor**.
- **Empareja frase e intención**.
- **Mini-situaciones comunicativas**.
- **Expresión oral guiada sin grabación**.
- **Reto final**.
- **Informe de práctica**.
- **Ficha docente**.

El informe permite preparar una vista limpia con resultados orientativos, checklist y texto del reto final. Puede guardarse como PDF desde el diálogo de impresión del navegador o descargarse como HTML.

## 7. Decisiones lingüísticas

El recurso está orientado a Francés A1 final.

Se han incluido frases como:

- `Je voudrais...`
- `Pouvez-vous répéter, s'il vous plaît ?`
- `Je ne comprends pas`
- `Combien ça coûte ?`
- `Où est la gare ?`

Aunque algunas estructuras podrían analizarse gramaticalmente en niveles superiores, se presentan como **expresiones funcionales memorizables**, adecuadas para un alumno A1 que necesita desenvolverse en situaciones reales.

La prioridad es la comunicación básica, no el análisis gramatical exhaustivo.

En v2.2 se incorpora comprensión lectora A1 mediante textos muy breves y cotidianos. La actividad se centra en localizar información concreta: hora, día, precio, lugar o acción principal.

En v2.3 se prepara comprensión auditiva A1 mediante tareas breves asociadas a archivos locales del autor. La herramienta no solicita micrófono, no graba voz del alumnado y no envía audio a ningún servidor.

En v2.4 se introduce una fase de **redundancia inteligente con variación progresiva**. Se mantienen funciones comunicativas esenciales, pero se amplían los contextos para evitar una repetición demasiado literal: entrevista, centro de formación, estación, confirmación de dirección y disponibilidad.

En v2.5 se incorpora expresión oral guiada sin grabación. El alumnado practica en voz alta con modelos, apoyo paso a paso y checklist, pero la herramienta no solicita micrófono, no graba voz y no envía audio.

## 8. Decisiones técnicas

El recurso se ha construido como un único archivo `index.html`, con CSS y JavaScript integrados.

Motivos:

- facilidad de publicación en GitHub Pages;
- menor fricción técnica;
- facilidad de revisión;
- ausencia de dependencias;
- portabilidad;
- estabilidad.

Tecnologías utilizadas:

- HTML5;
- CSS3;
- JavaScript vanilla;
- `localStorage`;
- Web Speech API;
- `window.print()` para la salida PDF mediante navegador;
- `Blob` para descarga alternativa de informe HTML;
- GitHub Pages.

No se utilizan frameworks, backend, formularios, analítica, bases de datos, APIs externas de corrección, IA ni autenticación.

## 9. Privacidad

El recurso no solicita datos personales.

No pide nombre completo, email, teléfono, DNI, cuenta de usuario, contraseñas ni información sensible.

En el reto final se recomienda practicar con un nombre de pila o con un nombre ficticio. No deben escribirse apellidos, DNI, teléfono, correo electrónico, dirección completa ni otros datos personales.

El texto que el alumnado escribe en el reto final se guarda únicamente en el navegador, para evitar pérdida accidental durante la sesión.

El informe de práctica se genera en local. No se envía a ningún servidor.

En ordenadores compartidos se recomienda borrar el progreso local al terminar.

## 10. Accesibilidad y UX

Se han incorporado varias decisiones de experiencia de usuario:

- navegación por bloques;
- diseño responsive;
- botones grandes;
- mensajes de feedback visibles;
- progreso general;
- contador de parejas en emparejar;
- foco visible;
- enlace para saltar al contenido;
- etiquetas ARIA;
- `aria-live` en feedbacks;
- `lang="fr"` en frases francesas;
- navegación directa en flashcards;
- vista limpia A4 para el informe local.
- bloque de comprensión lectora con textos cortos y opciones claras.
- bloque de comprensión auditiva preparado para audios locales estáticos del autor.

En v1.2.4, la UX móvil se refina a partir de revisión en móvil real:

- portada móvil simplificada;
- descripción inicial y nota institucional en desplegables;
- recorrido guiado por pasos;
- vista **Ver todos los bloques** como mapa de bloques;
- selector móvil **Ir a...**;
- barra inferior persistente;
- ocultación progresiva de elementos superiores durante el recorrido guiado;
- cabecera móvil breve, alineada y sin repeticiones innecesarias.

Estas medidas no sustituyen una auditoría WCAG completa, pero ofrecen una base razonable para un recurso docente inicial.

## 11. Evolución del proyecto

### v0.1-v0.9

Las primeras versiones construyeron la base del recurso: diagnóstico, flashcards, emparejamiento, situaciones, reto final, ficha docente, `localStorage`, informe local, pictogramas, modo presentación y preparación de audios locales propios del autor.

Desde el inicio se mantuvo el enfoque sin backend, sin login, sin analítica, sin formularios externos, sin IA/API y sin dependencias externas.

### v1.0

Consolidación estable/presentable:

- definición de licencia en `LICENSE.md`;
- creación de `docs/guia-publicacion-v1.md`;
- actualización de versión visible a 1.0;
- cierre documental del recurso como publicación estable de portfolio docente.

### v1.1

Modo guiado móvil inicial:

- incorporación de recorrido paso a paso;
- activación automática en pantallas pequeñas;
- navegación inferior con anterior/siguiente;
- posibilidad de volver a vista completa;
- creación de la guía de UX móvil inicial.

### v1.2

UX móvil refinada:

- portada móvil simplificada;
- descripción y nota institucional en desplegables;
- reducción de botones visibles en la primera pantalla móvil;
- vista **Ver todos los bloques** reorganizada como mapa de bloques;
- selector móvil **Ir a...**;
- barra inferior persistente para volver al recorrido guiado desde la vista completa;
- mantenimiento del modo presentación para aula;
- mantenimiento del funcionamiento estático y local.

### v1.2.1

Cabecera guiada compacta:

- en móvil, dentro del recorrido guiado, se ocultan elementos superiores innecesarios;
- a partir del paso 2 se oculta la cabecera completa;
- la barra inferior queda como navegación principal;
- se reduce la altura vertical inicial.

### v1.2.2-v1.2.3

Cabecera móvil simplificada:

- se elimina texto redundante;
- se evita repetir varias veces `Repaso final`, `Francés A1` y `alumnado adulto`;
- se deja una identificación breve y clara del recurso.

### v1.2.4

Cabecera móvil alineada:

- se corrige la simetría visual de la cabecera móvil;
- la cabecera superior deja de quedar recogida hacia un lado;
- la tarjeta superior se alinea mejor con la lógica visual del resto de bloques;
- se mantiene una identificación breve y coherente: `Repaso final · Francés A1` y `Alumnado adulto`.

### v1.3

Plantilla multidioma:

- creación de `assets/lang/`;
- creación de `assets/lang/fr-a1-content.json` como inventario estructurado del contenido actual;
- creación de `assets/lang/language-pack-template.json` como plantilla base para otros idiomas;
- creación de `assets/lang/README.md`;
- creación de `docs/guia-plantilla-multidioma-v1-3.md`;
- mantenimiento del funcionamiento local y estático de `index.html`.

En esta fase no se carga JSON dinámico desde la app para no romper la apertura directa del archivo en navegador. La separación queda preparada de forma documental y estructural.

### v1.4

Experiencia instalable ligera:

- creación de `manifest.webmanifest`;
- creación de `sw.js`;
- creación de `assets/icons/icon.svg`;
- creación de `assets/icons/icon-192.png`;
- creación de `assets/icons/icon-512.png`;
- incorporación de metadatos PWA en `index.html`;
- registro prudente del service worker solo en entornos `http` o `https`;
- caché básica offline de archivos esenciales.

La PWA no añade seguimiento, cuentas, backend, analítica, formularios externos ni IA/API. Su finalidad es facilitar el acceso desde pantalla de inicio y mejorar la disponibilidad tras la primera carga.

### v1.5

Capturas, validación y demo:

- creación de capturas v1.5 de portada móvil guiada;
- creación de captura v1.5 del mapa de bloques en móvil;
- creación de captura v1.5 de portada en escritorio;
- creación de captura v1.5 del modo presentación;
- creación de `docs/guia-validacion-demo-v1-5.md`;
- validación técnica ligera de manifest, service worker, versión visible e informe local;
- preparación de guion breve de vídeo demo.

### v2.0

Producto demostrativo completo:

- actualización de la versión visible y de los metadatos internos a 2.0;
- creación de `docs/dossier-producto-demostrativo-v2.md`;
- creación de `docs/guia-adaptacion-contextos-fpe-v2.md`;
- consolidación del proyecto como molde gratuito, estático, instalable y reutilizable para otros idiomas iniciales;
- refuerzo del posicionamiento prudente: recurso personal de portfolio, no oficial, sin vínculo institucional directo con ICSE ni con el SCE.

### v2.0.1

Corrección de UX tras revisión externa:

- se añade una indicación inicial explícita para usar los botones **Atrás/Siguiente** de la parte baja de la pantalla;
- se reorganiza la estructura visual de las flashcards para que la etiqueta de idioma y el contador no se solapen con traducciones largas;
- se ajusta el tamaño y el ajuste de línea del texto principal de las flashcards en móvil.

### v2.1

Ampliación pedagógica de Francés A1:

- autodiagnóstico ampliado de 10 a 15 preguntas;
- flashcards ampliadas de 10 a 32 expresiones;
- incorporación de un bloque de gramática útil A1;
- ampliación de emparejamientos frase-intención;
- ampliación de mini-situaciones comunicativas;
- ampliación de retos finales;
- actualización de `assets/lang/fr-a1-content.json` como inventario reutilizable.

Esta fase responde al objetivo de aproximar el recurso a un repertorio A1 más aceptable y escalable, antes de añadir destrezas específicas.

### v2.2

Comprensión lectora A1:

- incorporación de un bloque específico de lectura;
- cinco textos breves: mensaje de clase, aviso de tienda, correo sencillo, nota de restaurante y transporte;
- preguntas centradas en localizar información concreta;
- feedback formativo basado en una pista visible del texto;
- inclusión del resultado en el informe local;
- actualización de `assets/lang/fr-a1-content.json` y de la plantilla multidioma.

Esta fase refuerza la progresión desde reconocimiento de frases hacia comprensión de textos breves, sin añadir backend, login, analítica, formularios externos, IA/API ni dependencias.

### v2.3

Comprensión auditiva A1 con audios locales propios:

- incorporación de un bloque específico de audición;
- cinco tareas auditivas breves con archivo local previsto;
- transcripción de apoyo docente para preparar o revisar los audios;
- actualización de `assets/audio/audio-manifest.json`;
- inclusión del resultado en el informe local;
- actualización de `assets/lang/fr-a1-content.json` y de la plantilla multidioma;
- mantenimiento explícito de privacidad: sin micrófono, sin grabación del alumnado y sin subida de archivos.

En v2.3.1 se incorporan los cinco archivos MP3 reales en `assets/audio/` y se activa la reproducción local. El recurso sigue sin solicitar micrófono ni recoger voz del alumnado.

### v2.3.2

Ajuste UX de tarjetas iniciales:

- las tarjetas **Detectar**, **Repasar**, **Aplicar** y **Guardar evidencia** pasan a funcionar como accesos reales;
- el cambio responde a feedback externo: varias personas percibían esas tarjetas como botones;
- se mantiene el recorrido guiado y no se añade ninguna dependencia ni servicio externo.

### v2.3.3

Claridad visual del Bloque 0:

- los objetivos **Comprender**, **Responder** y **Practicar** dejan de mostrarse como tarjetas;
- se presentan como lista informativa de capacidades;
- el cambio reduce la confusión entre objetivos pedagógicos y elementos navegables.

### v2.4

Variación comunicativa progresiva:

- el autodiagnóstico pasa a 18 preguntas;
- las flashcards pasan a 40 expresiones;
- la comprensión lectora pasa a 8 textos breves;
- los emparejamientos incorporan nuevas intenciones comunicativas;
- las mini-situaciones pasan a 14 situaciones;
- los retos finales pasan a 12 propuestas;
- se refuerzan contextos adultos: entrevista, disponibilidad, centro de formación, estación, dirección y gestión cotidiana.

La mejora responde a una revisión pedagógica: repetir funciones clave es útil en A1, pero conviene introducir variaciones pequeñas para que el alumnado transfiera lo aprendido a situaciones cercanas.

### v2.5

Expresión oral guiada sin grabación:

- se añade un bloque específico de práctica oral;
- se proponen cinco situaciones breves de nivel A1;
- cada práctica incluye modelo, apoyo paso a paso y checklist;
- se permite marcar la práctica como realizada;
- el informe local recoge solo el estado orientativo de práctica oral;
- no se usa micrófono, no se graba voz del alumnado y no se sube ningún audio.

Esta fase permite trabajar la producción oral sin introducir riesgos de privacidad ni complejidad técnica.

## 12. Feedback recibido

Durante el proceso se recogieron sugerencias de compañeros de aula y revisiones posteriores del recurso.

Entre las mejoras aceptadas se incluyeron:

- facilitar la navegación entre flashcards;
- reducir desplazamientos innecesarios;
- mejorar el campo del reto final;
- corregir el botón de limpiar;
- mejorar la salida del informe para que no imprima toda la página;
- incorporar pictogramas SVG propios;
- preparar modo presentación para aula;
- preparar estructura de audios locales propios del autor;
- reducir la longitud percibida en móvil mediante una experiencia guiada;
- simplificar cabecera, mapa de bloques y navegación móvil tras revisión en móvil real.

## 13. Limitaciones actuales

El recurso tiene limitaciones deliberadas:

- no corrige todos los errores de producción escrita;
- no ofrece seguimiento docente;
- no recoge resultados en servidor;
- no genera un PDF técnico con librería externa, sino una vista imprimible que el navegador guarda como PDF;
- no desarrolla seguimiento docente de audición;
- no sustituye práctica oral real;
- no sustituye la evaluación docente;
- no funciona como plataforma LMS.

Estas limitaciones son coherentes con el objetivo de mantener un recurso ligero, seguro y útil.

## 14. Mejoras futuras

Las siguientes mejoras quedan para versiones posteriores:

- pilotaje real documentado, si procede y si se autoriza;
- ampliación gradual de audios de flashcards, si se considera necesario;
- creación de variantes de idioma a partir de la plantilla multidioma;
- memoria de pilotaje tras uso real, si procede y si se autoriza.

No se recomienda añadir corrector IA/API en esta fase.

Motivos:

- requiere enviar texto a terceros;
- exige mayor control de privacidad;
- puede necesitar backend;
- puede implicar costes;
- puede exponer claves si se implementa mal;
- complica un recurso cuyo valor actual está en la sencillez.

## 15. Valor como evidencia de portfolio

El recurso demuestra:

- diseño instruccional aplicado;
- creación de recurso digital desde cero;
- adaptación al nivel A1;
- enfoque para alumnado adulto;
- sensibilidad institucional;
- criterios básicos de accesibilidad;
- mejora real de UX móvil;
- despliegue en GitHub Pages;
- mejora iterativa a partir de feedback;
- documentación pedagógica asociada;
- generación prudente de evidencia local sin servidor ni recogida de datos.

Como portfolio docente, el recurso permite mostrar no solo el producto final, sino también un proceso de diseño, revisión, documentación y mejora.

## 16. Conclusión

**Repaso Final Francés A1 · Kit interactivo** es un recurso complementario, prudente y funcional para repaso final de Francés A1. Su principal valor está en combinar sencillez técnica, claridad pedagógica, utilidad práctica para alumnado adulto, mejora progresiva de experiencia móvil, preparación multidioma, experiencia instalable ligera, evidencias visuales y respeto por la privacidad.

La versión **2.5** se considera adecuada para publicación en GitHub Pages y para ser mostrada como producto demostrativo de portfolio docente con ampliación pedagógica inicial, comprensión lectora A1, comprensión auditiva con audios locales propios del autor, expresión oral guiada sin grabación, variación comunicativa progresiva y mejoras UX basadas en feedback real, siempre con la nota explícita de que no es un recurso oficial ni sustituye la programación o evaluación del curso.
