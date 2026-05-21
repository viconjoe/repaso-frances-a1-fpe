# Memoria breve del recurso didáctico

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión:** 0.4.1  
**Contexto:** Habilitación docente FPE · Prácticas 2026  
**Formato:** HTML/CSS/JavaScript estático  
**Publicación:** GitHub Pages

## 1. Introducción

Esta memoria describe el diseño y desarrollo del recurso **Repaso Final Francés A1 · Kit interactivo**, una herramienta digital ligera creada como propuesta pedagógica complementaria para alumnado adulto de Francés A1 en fase de repaso final.

El recurso nace en el contexto del itinerario de habilitación docente FPE de Joel Concepción Villanueva, con una doble finalidad:

1. aportar una herramienta útil y prudente para el alumnado;
2. generar una evidencia real de competencia digital aplicada a docencia.

El proyecto ha sido diseñado con una premisa clara: crear algo funcional, sobrio y usable, sin convertirlo en una aplicación compleja ni en una plataforma de evaluación.

## 2. Justificación

El alumnado adulto que finaliza un nivel A1 puede beneficiarse de recursos breves que le permitan repasar frases esenciales, comprobar qué recuerda y practicar pequeñas situaciones comunicativas.

En este contexto, el recurso responde a varias necesidades:

- repasar expresiones funcionales;
- reducir el miedo al error;
- practicar con feedback inmediato;
- ofrecer una herramienta accesible desde móvil;
- permitir uso autónomo mediante enlace o QR;
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
7. repasar de forma autónoma o guiada.

## 6. Principios de diseño

### Simplicidad

El recurso debía ser fácil de abrir, usar y entender. Se evitó crear una aplicación compleja con login, backend o recogida de datos.

### Utilidad pedagógica

Cada bloque debía tener una función didáctica clara y no ser solo un elemento visual.

### Progresión

El recurso avanza desde reconocimiento y comprensión hacia producción breve.

### Privacidad

No se recogen datos personales. El progreso se guarda solo en el navegador.

### Accesibilidad básica

Se incorporan medidas simples de accesibilidad y usabilidad, suficientes para una evidencia de portfolio docente inicial.

### Alumnado adulto

El tono, el diseño y las actividades se han planteado para adultos, evitando infantilización o gamificación excesiva.

## 7. Estructura del recurso

El recurso se organiza en seis bloques:

### Bloque 0 · Objetivo del recurso

Presenta la finalidad general y los contenidos trabajados.

### Bloque 1 · Autodiagnóstico orientativo A1

Incluye 10 preguntas de selección con feedback inmediato. El objetivo no es calificar, sino orientar el repaso.

### Bloque 2 · Flashcards de supervivencia

Contiene 10 tarjetas con frases útiles en francés y traducción al español. Incluye navegación directa y un botón experimental de pronunciación basado en Web Speech API.

### Bloque 3 · Empareja frase e intención

Relaciona expresiones francesas con su función comunicativa. Refuerza la comprensión funcional.

### Bloque 4 · Mini-situaciones comunicativas

Plantea situaciones breves y pide elegir la frase más adecuada.

### Bloque 5 · Reto final

Propone una producción breve escrita u oral. Incluye banco de frases de apoyo y revisión orientativa local.

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
- GitHub Pages.

No se utilizan frameworks, backend, formularios, analítica, bases de datos, APIs externas de corrección ni autenticación.

## 10. Privacidad

El recurso no solicita datos personales.

No pide nombre, email, teléfono, DNI, cuenta de usuario, contraseñas ni información sensible.

El texto que el alumnado escribe en el reto final se guarda únicamente en el navegador, para evitar pérdida accidental durante la sesión.

En ordenadores compartidos se recomienda borrar el progreso local al terminar.

## 11. Accesibilidad y UX

Se han incorporado varias decisiones de experiencia de usuario:

- navegación por bloques;
- diseño responsive;
- botones grandes;
- mensajes de feedback visibles;
- progreso general;
- foco visible;
- enlace para saltar al contenido;
- etiquetas ARIA;
- `aria-live` en feedbacks;
- `lang="fr"` en frases francesas;
- navegación directa en flashcards;
- reducción de desplazamientos en móvil.

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

## 13. Feedback recibido

Durante el proceso se recogieron sugerencias de compañeros de aula.

Entre las mejoras aceptadas se incluyeron:

- facilitar la navegación entre flashcards;
- reducir desplazamientos innecesarios;
- mejorar el campo del reto final;
- corregir el botón de limpiar;
- valorar ajustes lingüísticos en frases de dirección o ubicación.

Otras sugerencias se dejaron para versiones futuras:

- rediseño completo del bloque de emparejar;
- incorporación de pictogramas;
- corrector IA/API.

## 14. Limitaciones actuales

El recurso tiene limitaciones deliberadas:

- no corrige todos los errores de producción escrita;
- no ofrece seguimiento docente;
- no recoge resultados;
- no genera informes;
- no incorpora audios humanos;
- no sustituye práctica oral real;
- no sustituye la evaluación docente;
- no funciona como plataforma LMS.

Estas limitaciones son coherentes con el objetivo de mantener un recurso ligero, seguro y útil.

## 15. Mejoras futuras

### v0.5

Posibles mejoras razonables:

- rediseñar el bloque de emparejar para móvil;
- añadir capturas al repositorio;
- crear ficha imprimible;
- mejorar feedback local del reto final;
- añadir pequeña guía de uso para docentes.

### v0.6 / v1.0

Mejoras posteriores:

- pictogramas o SVG propios;
- audios propios locales;
- modo presentación para aula;
- vídeo demo;
- versión PDF de la ficha pedagógica;
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
- documentación pedagógica asociada.

Como portfolio docente, el recurso permite mostrar no solo el producto final, sino también un proceso de diseño, revisión y mejora.

## 17. Conclusión

**Repaso Final Francés A1 · Kit interactivo** es un recurso complementario, prudente y funcional para repaso final de Francés A1. Su principal valor está en combinar sencillez técnica, claridad pedagógica y utilidad práctica para alumnado adulto.

La versión 0.4.1 se considera adecuada para publicación en GitHub Pages y para ser mostrada como evidencia de portfolio docente, siempre con la nota explícita de que no es un recurso oficial ni sustituye la programación o evaluación del curso.
