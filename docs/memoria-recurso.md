# Memoria breve del recurso didáctico

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión:** 0.9  
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

## 5. Objetivos específicos

El recurso busca que el alumnado pueda:

1. reconocer expresiones básicas de Francés A1;
2. asociar frases con funciones comunicativas;
3. elegir respuestas adecuadas en situaciones simples;
4. practicar una presentación breve;
5. pedir ayuda o repetición en francés;
6. ganar seguridad en el uso de frases básicas;
7. repasar de forma autónoma o guiada;
8. preparar un informe local de práctica sin enviar datos a terceros.

## 6. Principios de diseño

### Simplicidad

El recurso debía ser fácil de abrir, usar y entender. Se evitó crear una aplicación compleja con login, backend o recogida de datos.

### Utilidad pedagógica

Cada bloque debía tener una función didáctica clara y no ser solo un elemento visual.

### Progresión

El recurso avanza desde reconocimiento y comprensión hacia producción breve.

### Privacidad

No se recogen datos personales. El progreso se guarda solo en el navegador.

### Evidencia local

Desde la versión 0.5, el recurso permite generar un informe local de práctica. Esta evidencia es orientativa, no oficial, y se guarda mediante el navegador del usuario.

### Accesibilidad básica

Se incorporan medidas simples de accesibilidad y usabilidad, suficientes para una evidencia de portfolio docente inicial.

### Alumnado adulto

El tono, el diseño y las actividades se han planteado para adultos, evitando infantilización o gamificación excesiva.

## 7. Estructura del recurso

El recurso se organiza en estos bloques:

### Bloque 0 · Objetivo del recurso

Presenta la finalidad general y los contenidos trabajados.

### Bloque 1 · Autodiagnóstico orientativo A1

Incluye 10 preguntas de selección con feedback inmediato. El objetivo no es calificar, sino orientar el repaso.

### Bloque 2 · Flashcards de supervivencia

Contiene 10 tarjetas con frases útiles en francés y traducción al español. Incluye navegación directa y un botón experimental de pronunciación basado en Web Speech API.

### Bloque 3 · Empareja frase e intención

Relaciona expresiones francesas con su función comunicativa. Refuerza la comprensión funcional. Desde la versión 0.5 añade contador de parejas completadas.

### Bloque 4 · Mini-situaciones comunicativas

Plantea situaciones breves y pide elegir la frase más adecuada.

### Bloque 5 · Reto final

Propone una producción breve escrita u oral. Incluye banco de frases de apoyo y revisión orientativa local.

### Bloque 6 · Informe de práctica

Permite preparar una vista limpia de informe del alumno/a, con resultados orientativos, checklist y texto del reto final. Puede guardarse como PDF desde el diálogo de impresión del navegador o descargarse como HTML.

### Bloque docente

Integra información para contextualizar el recurso como propuesta pedagógica, no como evaluación oficial.

## 8. Decisiones lingüísticas

El recurso está orientado a Francés A1 final.

Se han incluido frases como:

- `Je voudrais…`
- `Pouvez-vous répéter, s’il vous plaît ?`
- `Je ne comprends pas`
- `Combien ça coûte ?`
- `Où est la gare ?`

Aunque algunas estructuras podrían analizarse gramaticalmente en niveles superiores, se presentan como **expresiones funcionales memorizables**, adecuadas para un alumno A1 que necesita desenvolverse en situaciones reales.

La prioridad es la comunicación básica, no el análisis gramatical exhaustivo.

## 9. Decisiones técnicas

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

No se utilizan frameworks, backend, formularios, analítica, bases de datos, APIs externas de corrección ni autenticación.

## 10. Privacidad

El recurso no solicita datos personales.

No pide nombre completo, email, teléfono, DNI, cuenta de usuario, contraseñas ni información sensible.

En el reto final se recomienda practicar con un nombre de pila o con un nombre ficticio. No deben escribirse apellidos, DNI, teléfono, correo electrónico, dirección completa ni otros datos personales.

El texto que el alumnado escribe en el reto final se guarda únicamente en el navegador, para evitar pérdida accidental durante la sesión.

El informe de práctica se genera en local. No se envía a ningún servidor.

En ordenadores compartidos se recomienda borrar el progreso local al terminar.

## 11. Accesibilidad y UX

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
- reducción de desplazamientos en móvil;
- vista limpia A4 para el informe local.

Estas medidas no sustituyen una auditoría WCAG completa, pero ofrecen una base razonable para un recurso docente inicial.

## 12. Evolución del proyecto

### v0.1

Primera versión funcional del recurso: estructura base, diagnóstico, flashcards, emparejamiento, situaciones, reto final, ficha docente y `localStorage`.

### v0.2

Se corrigió el posicionamiento institucional y el progreso: autodiagnóstico orientativo, nota de no oficialidad, progreso real por interacción, mejoras básicas de accesibilidad y advertencia de privacidad.

### v0.3

Se añadieron mejoras técnicas y de apoyo: indicador de scroll móvil, persistencia del orden en emparejamiento, refactor de estado, banco de frases de apoyo y pronunciación experimental.

### v0.4

Se incorporaron sugerencias de compañeros de aula: banco de frases clicable, botones de flashcards más accesibles en móvil, mejora del reto final, feedback local sin IA y corrección del botón limpiar.

### v0.4.1

Corrección previa a uso externo: versión visible corregida, respuestas correctas de mini-situaciones redistribuidas y frase de repetición unificada con `s’il vous plaît`.

### v0.5

Mejora del informe local:

- informe del alumno separado de la impresión general de la página;
- vista A4 limpia con resultados y práctica;
- instrucciones para guardar como PDF desde navegador;
- descarga alternativa en HTML;
- contador de parejas en emparejar;
- documentación reorganizada en `/docs`.

### v0.6

Consolidación pedagógica y visual ligera:

- itinerario sugerido de uso en aula dentro del recurso;
- refuerzo visible de privacidad antes del reto final;
- secuencia breve recomendada en la ficha docente integrada;
- creación de `docs/guia-uso-aula.md`;
- actualización de documentación complementaria;
- mantenimiento del enfoque sin backend, sin login, sin analítica, sin formularios externos, sin IA/API y sin dependencias externas.

### v0.7

Consolidación para publicación y portfolio:

- creación de `assets/capturas/`;
- incorporación de capturas de portada, reto final con privacidad e informe/ficha docente;
- creación de `docs/memoria-pilotaje-preparatoria.md`;
- actualización de README, resumen maestro, ficha pedagógica y guía de aula;
- preparación de un marco de pilotaje sin datos reales de alumnado;
- mantenimiento del enfoque sin backend, sin login, sin analítica, sin formularios externos, sin IA/API y sin dependencias externas.

### v0.8

Mejora visual y pedagógica ligera:

- creación de `assets/pictogramas/`;
- incorporación de cinco pictogramas SVG propios;
- integración de pictogramas en tarjetas de objetivo, itinerario sugerido y aviso de privacidad;
- creación de `docs/guia-visual-pictogramas.md`;
- mantenimiento del enfoque local sin librerías de iconos, sin backend, sin login, sin analítica, sin formularios externos, sin IA/API y sin dependencias externas.

### v0.9

Mejoras de aula y preparación de audio:

- incorporación de modo presentación para aula;
- botón de activación/desactivación y salida con tecla `Escape`;
- creación de `assets/audio/`;
- creación de `assets/audio/audio-manifest.json`;
- preparación de soporte para audios locales propios del autor, desactivado hasta incorporar archivos reales;
- creación de `docs/guia-audios-locales.md`;
- creación de `docs/guia-modo-presentacion.md`;
- mantenimiento del enfoque sin grabar alumnado, sin backend, sin login, sin analítica, sin formularios externos, sin IA/API y sin dependencias externas.

## 13. Feedback recibido

Durante el proceso se recogieron sugerencias de compañeros de aula y revisiones posteriores del recurso.

Entre las mejoras aceptadas se incluyeron:

- facilitar la navegación entre flashcards;
- reducir desplazamientos innecesarios;
- mejorar el campo del reto final;
- corregir el botón de limpiar;
- valorar ajustes lingüísticos en frases de dirección o ubicación;
- mejorar la salida del informe para que no imprima toda la página.
- incorporar pictogramas SVG propios;
- preparar modo presentación para aula;
- preparar estructura de audios locales propios del autor.

Otras sugerencias se dejaron para versiones futuras:

- corrector IA/API, descartado por ahora.

## 14. Limitaciones actuales

El recurso tiene limitaciones deliberadas:

- no corrige todos los errores de producción escrita;
- no ofrece seguimiento docente;
- no recoge resultados en servidor;
- no genera un PDF técnico con librería externa, sino una vista imprimible que el navegador guarda como PDF;
- no incorpora audios humanos;
- no sustituye práctica oral real;
- no sustituye la evaluación docente;
- no funciona como plataforma LMS.

Estas limitaciones son coherentes con el objetivo de mantener un recurso ligero, seguro y útil.

## 15. Mejoras futuras

### v1.0

Mejoras razonables:

- vídeo demo;
- memoria de pilotaje tras uso real.

### No recomendable por ahora

No se recomienda añadir corrector IA/API en esta fase.

Motivos:

- requiere enviar texto a terceros;
- exige mayor control de privacidad;
- puede necesitar backend;
- puede implicar costes;
- puede exponer claves si se implementa mal;
- complica un recurso cuyo valor actual está en la sencillez.

## 16. Valor como evidencia de portfolio

El recurso demuestra:

- diseño instruccional aplicado;
- creación de recurso digital desde cero;
- adaptación al nivel A1;
- enfoque para alumnado adulto;
- sensibilidad institucional;
- criterios básicos de accesibilidad;
- despliegue en GitHub Pages;
- mejora iterativa a partir de feedback;
- documentación pedagógica asociada;
- generación prudente de evidencia local sin servidor ni recogida de datos.

Como portfolio docente, el recurso permite mostrar no solo el producto final, sino también un proceso de diseño, revisión, documentación y mejora.

## 17. Conclusión

**Repaso Final Francés A1 · Kit interactivo** es un recurso complementario, prudente y funcional para repaso final de Francés A1. Su principal valor está en combinar sencillez técnica, claridad pedagógica, utilidad práctica para alumnado adulto y respeto por la privacidad.

La versión 0.9 se considera adecuada para publicación en GitHub Pages y para ser mostrada como evidencia de portfolio docente, siempre con la nota explícita de que no es un recurso oficial ni sustituye la programación o evaluación del curso.
