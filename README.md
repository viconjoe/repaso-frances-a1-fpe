# Repaso Final Francés A1 · Kit interactivo

Recurso pedagógico digital complementario de repaso para alumnado adulto de **Francés A1**, creado como evidencia de competencia digital docente y diseño instruccional aplicado a la Formación Profesional para el Empleo.

**Autor:** Joel Concepción Villanueva  
**Contexto:** Habilitación docente FPE · Prácticas 2026  
**Versión actual:** 0.9  
**Publicación:** GitHub Pages

## Acceso al recurso

Versión publicada:

https://elinversorjunior-lgtm.github.io/repaso-frances-a1-fpe/

Repositorio:

https://github.com/elinversorjunior-lgtm/repaso-frances-a1-fpe

## Qué es este recurso

Este proyecto es una herramienta web estática, construida en **HTML, CSS y JavaScript**, orientada a repasar contenidos básicos de Francés A1 al final de un curso.

Está pensada para:

- repaso final de contenidos básicos;
- uso autónomo o guiado;
- apoyo puntual en aula;
- evidencia de portfolio docente;
- demostración de competencia digital aplicada a formación de personas adultas.

No pretende enseñar todo el nivel A1 desde cero.

## Nota institucional

Este recurso ha sido creado por **Joel Concepción Villanueva** como propuesta pedagógica complementaria durante su itinerario de habilitación docente FPE.

No es un recurso oficial de ICSE.  
No tiene vínculo institucional directo con ICSE ni con el SCE.  
No sustituye la programación docente del curso.  
No sustituye los materiales oficiales ni la evaluación establecida por la docente titular o el centro.  
No tiene valor evaluativo oficial salvo decisión expresa del equipo docente.

## Nivel y enfoque lingüístico

El recurso se orienta a **Francés A1 según el MCER**, especialmente a contenidos funcionales de supervivencia comunicativa:

- saludos y despedidas;
- presentación personal;
- nombre y lugar de residencia;
- frases de cortesía;
- pedir ayuda;
- pedir que repitan;
- expresar que no se entiende;
- preguntar precio;
- preguntar una dirección o ubicación;
- resolver situaciones comunicativas simples.

Algunas expresiones, como `Je voudrais…` o `Pouvez-vous répéter, s’il vous plaît ?`, se tratan como **bloques funcionales útiles para A1**, no como explicación gramatical completa del condicional o de la inversión interrogativa.

## Estructura del recurso

El recurso incluye estos bloques principales:

1. **Objetivo del recurso**: presenta la finalidad y los contenidos trabajados.
2. **Autodiagnóstico orientativo A1**: test breve de 10 preguntas con feedback inmediato. No tiene valor evaluativo oficial.
3. **Flashcards de supervivencia**: tarjetas de frases útiles en francés con traducción, navegación directa y pronunciación experimental mediante Web Speech API.
4. **Empareja frase e intención**: actividad de asociación entre frases francesas y funciones comunicativas, con contador de parejas completadas.
5. **Mini-situaciones comunicativas**: selección de respuestas adecuadas ante situaciones sencillas.
6. **Reto final**: producción breve escrita u oral para presentarse y resolver una situación básica, con banco de frases de apoyo y orientación local.
7. **Informe de práctica del alumno**: vista local preparada para guardar como PDF o descargar como HTML, sin envío de datos a servidores externos.
8. **Ficha docente integrada**: contextualiza el recurso como propuesta pedagógica complementaria.

Desde la versión **0.6**, se refuerza el uso en aula con un itinerario sugerido dentro del recurso y una guía breve específica en `/docs/`.

Desde la versión **0.7**, el repositorio incorpora capturas de referencia y una memoria preparatoria de pilotaje sin datos reales de alumnado.

Desde la versión **0.8**, el recurso añade pictogramas SVG propios como apoyo visual local, sin librerías ni iconos externos.

Desde la versión **0.9**, se incorpora modo presentación para aula y queda preparada la estructura para audios locales propios del autor.

La documentación incorpora además una visión de evolución hacia app educativa empaquetable, gratuita y reutilizable como molde para otros idiomas, siempre sin carácter oficial ni vínculo institucional directo con ICSE o con el SCE.

## Informe de práctica del alumno

Desde la versión **0.5**, el recurso incorpora un bloque específico para generar un **informe local de práctica**.

El informe resume:

- progreso local por bloques iniciados;
- resultado orientativo del autodiagnóstico;
- avance en flashcards, emparejar y situaciones;
- checklist del reto final;
- texto escrito en el reto final;
- orientación local del reto final.

El informe:

- se genera en el propio navegador;
- no se envía a ningún servidor;
- no requiere login ni backend;
- se puede guardar como PDF usando el sistema de impresión del navegador;
- también puede descargarse como archivo HTML.

Para guardarlo como PDF:

```text
Preparar informe PDF → Guardar / imprimir PDF → Guardar como PDF / Microsoft Print to PDF → Guardar
```

## Privacidad

El recurso:

- no solicita nombre completo;
- no solicita email;
- no solicita teléfono;
- no solicita DNI;
- no tiene login;
- no envía respuestas a ningún servidor;
- no usa formularios externos;
- no incorpora analítica;
- no recoge datos personales.

En el reto final se recomienda usar solo un nombre de pila o un nombre ficticio para practicar la frase `Je m'appelle…`. No deben escribirse apellidos, DNI, teléfono, correo electrónico, dirección completa ni otros datos personales.

El progreso se guarda únicamente en el navegador del usuario mediante `localStorage`.

El informe de práctica se genera localmente. En ordenadores compartidos, se recomienda pulsar **“Borrar progreso local”** al terminar.

## Características técnicas

- Un solo archivo principal: `index.html`.
- HTML, CSS y JavaScript vanilla.
- Sin dependencias externas.
- Compatible con GitHub Pages.
- Diseño responsive.
- Uso básico de accesibilidad: skip link, foco visible, `aria-live`, `lang="fr"`, botones táctiles y barras de progreso con atributos ARIA.
- Persistencia local mediante `localStorage`.
- Pronunciación experimental con Web Speech API, si el navegador la soporta.
- Generación de informe local mediante ventana HTML imprimible y descarga alternativa con `Blob`.

## Estructura del repositorio

```text
repaso-frances-a1-fpe/
├── index.html
├── README.md
├── assets/
│   ├── audio/
│   │   ├── README.md
│   │   └── audio-manifest.json
│   ├── capturas/
│   │   ├── 01-portada-objetivo.png
│   │   ├── 02-reto-final-privacidad.png
│   │   ├── 03-informe-ficha-docente.png
│   │   └── 04-modo-presentacion.png
│   └── pictogramas/
│       ├── comprender.svg
│       ├── responder.svg
│       ├── practicar.svg
│       ├── evidencia.svg
│       └── privacidad.svg
└── docs/
    ├── 00-resumen-maestro-proyecto.md
    ├── ficha-pedagogica.md
    ├── guia-audios-locales.md
    ├── guia-modo-presentacion.md
    ├── guia-visual-pictogramas.md
    ├── guia-uso-aula.md
    ├── memoria-pilotaje-preparatoria.md
    ├── memoria-recurso.md
    └── roadmap-producto-multidioma.md
```

La carpeta `assets/audio/` queda preparada para audios propios, pero no incluye grabaciones del alumnado.

## Uso local

Para abrir el recurso en local:

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en el navegador.
3. No requiere servidor local para funcionar.

## Publicación en GitHub Pages

El recurso puede publicarse desde:

```text
Settings → Pages → Deploy from a branch → main → /root
```

La página publicada usa `index.html` como archivo principal.

## Documentación complementaria

- [Resumen maestro del proyecto](docs/00-resumen-maestro-proyecto.md)
- [Ficha pedagógica](docs/ficha-pedagogica.md)
- [Guía de audios locales propios](docs/guia-audios-locales.md)
- [Guía de modo presentación](docs/guia-modo-presentacion.md)
- [Guía visual de pictogramas](docs/guia-visual-pictogramas.md)
- [Guía breve de uso en aula](docs/guia-uso-aula.md)
- [Memoria preparatoria de pilotaje](docs/memoria-pilotaje-preparatoria.md)
- [Memoria breve del recurso](docs/memoria-recurso.md)
- [Roadmap de producto multidioma](docs/roadmap-producto-multidioma.md)

## Capturas de referencia

Las capturas se incluyen como evidencia visual del recurso sin datos reales de alumnado:

- [Portada y objetivo](assets/capturas/01-portada-objetivo.png)
- [Reto final y privacidad](assets/capturas/02-reto-final-privacidad.png)
- [Informe y ficha docente](assets/capturas/03-informe-ficha-docente.png)
- [Modo presentación](assets/capturas/04-modo-presentacion.png)

## Evolución de versiones

### v0.9

Mejoras de uso en aula y preparación de audio:

- incorporación de modo presentación para proyección en aula;
- botón para activar y desactivar el modo presentación;
- salida rápida del modo presentación con tecla `Escape`;
- creación de carpeta `assets/audio/`;
- creación de `assets/audio/audio-manifest.json`;
- preparación de soporte para audios locales propios del autor, desactivado hasta incorporar archivos reales;
- creación de `docs/guia-audios-locales.md`;
- creación de `docs/guia-modo-presentacion.md`;
- incorporación de `docs/roadmap-producto-multidioma.md` como visión de evolución;
- mantenimiento del enfoque local: sin grabar alumnado, sin backend, sin login, sin analítica, sin formularios externos, sin IA/API y sin dependencias externas.

### v0.8

Mejoras visuales y pedagógicas:

- creación de carpeta `assets/pictogramas/`;
- incorporación de cinco pictogramas SVG propios;
- integración de pictogramas en tarjetas de objetivo, itinerario de uso y aviso de privacidad;
- creación de `docs/guia-visual-pictogramas.md`;
- mantenimiento del enfoque local: sin backend, sin login, sin analítica, sin formularios externos, sin IA/API, sin librerías de iconos y sin dependencias externas.

### v0.7

Mejoras de publicación y portfolio:

- creación de carpeta `assets/capturas/`;
- incorporación de tres capturas de referencia del recurso;
- creación de `docs/memoria-pilotaje-preparatoria.md`;
- actualización de estructura documental y enlaces del README;
- mantenimiento del enfoque prudente: sin datos reales de alumnado, sin backend, sin login, sin analítica, sin formularios externos, sin IA/API y sin dependencias externas.

### v0.6

Mejoras pedagógicas y visuales ligeras:

- itinerario sugerido de uso en aula dentro del bloque de objetivo;
- refuerzo visible de privacidad antes del reto final;
- secuencia breve recomendada en la ficha docente integrada;
- nueva guía documental `docs/guia-uso-aula.md`;
- actualización de documentación complementaria;
- mantenimiento del enfoque estático: sin backend, sin login, sin analítica, sin formularios externos, sin IA/API y sin dependencias externas.

### v0.5

Mejoras de informe local y documentación:

- informe del alumno separado de la impresión general de la página;
- botón **Preparar informe PDF** con vista limpia A4;
- instrucciones claras para guardar con **Guardar como PDF** o **Microsoft Print to PDF**;
- descarga alternativa de informe HTML;
- feedback visible para evitar confusión entre imprimir y guardar;
- contador de parejas en el bloque de emparejar;
- mantenimiento del enfoque sin backend, sin login, sin analítica y sin APIs externas.

### v0.4.1

Correcciones menores antes de mostrar el recurso:

- corrección de versión visible en créditos;
- redistribución de respuestas correctas en mini-situaciones;
- unificación de la frase `Pouvez-vous répéter, s’il vous plaît ?`.

### v0.4

Mejoras de experiencia de usuario:

- banco de frases clicable en flashcards;
- botones de navegación colocados junto a la tarjeta;
- mejora del bloque de reto final;
- feedback local sin IA;
- corrección del botón limpiar para borrar texto y checklist.

### v0.3

Mejoras técnicas y de accesibilidad:

- indicador visual de desplazamiento en navegación móvil;
- persistencia del orden en la actividad de emparejar;
- refactor del estado de quiz y situaciones;
- banco de frases de apoyo;
- pronunciación experimental con Web Speech API.

### v0.2

Primera versión depurada:

- tono institucional prudente;
- autodiagnóstico orientativo;
- progreso real por interacción;
- nota de privacidad;
- accesibilidad básica.

## Futuras mejoras previstas

Las siguientes mejoras se consideran posibles para versiones posteriores:

- vídeo demo de 60–90 segundos;
- memoria de pilotaje tras uso real en aula, si procede y si se autoriza, tomando como base la memoria preparatoria.

No se recomienda incorporar por ahora un corrector IA/API, porque implicaría envío de texto a terceros, mayor complejidad técnica, posible backend y gestión de privacidad.

## Licencia

Por el momento, este recurso se publica como evidencia de portfolio docente. La licencia de reutilización puede definirse más adelante según el uso previsto.

## Autor

**Joel Concepción Villanueva**  
Recurso pedagógico digital complementario · Portfolio docente FPE
