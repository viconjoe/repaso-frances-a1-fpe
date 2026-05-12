# Repaso Final Francés A1 · Kit interactivo

Recurso pedagógico digital complementario de repaso para alumnado adulto de **Francés A1**, creado como evidencia de competencia digital docente y diseño instruccional aplicado a la Formación Profesional para el Empleo.

**Autor:** Joel Concepción Villanueva  
**Contexto:** Habilitación docente FPE · Prácticas 2026  
**Versión actual:** 0.4.1  
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

El recurso incluye seis bloques principales:

1. **Objetivo del recurso**: presenta la finalidad y los contenidos trabajados.
2. **Autodiagnóstico orientativo A1**: test breve de 10 preguntas con feedback inmediato. No tiene valor evaluativo oficial.
3. **Flashcards de supervivencia**: tarjetas de frases útiles en francés con traducción, navegación directa y pronunciación experimental mediante Web Speech API.
4. **Empareja frase e intención**: actividad de asociación entre frases francesas y funciones comunicativas.
5. **Mini-situaciones comunicativas**: selección de respuestas adecuadas ante situaciones sencillas.
6. **Reto final**: producción breve escrita u oral para presentarse y resolver una situación básica, con banco de frases de apoyo y orientación local.

También incluye una **ficha docente integrada** para contextualizar el uso pedagógico.

## Privacidad

El recurso:

- no solicita nombre;
- no solicita email;
- no solicita teléfono;
- no solicita DNI;
- no tiene login;
- no envía respuestas a ningún servidor;
- no usa formularios externos;
- no incorpora analítica;
- no recoge datos personales.

El progreso se guarda únicamente en el navegador del usuario mediante `localStorage`.

En ordenadores compartidos, se recomienda pulsar **“Borrar progreso local”** al terminar.

## Características técnicas

- Un solo archivo principal: `index.html`.
- HTML, CSS y JavaScript vanilla.
- Sin dependencias externas.
- Compatible con GitHub Pages.
- Diseño responsive.
- Uso básico de accesibilidad: skip link, foco visible, `aria-live`, `lang="fr"`, botones táctiles y barras de progreso con atributos ARIA.
- Persistencia local mediante `localStorage`.
- Pronunciación experimental con Web Speech API, si el navegador la soporta.

## Estructura del repositorio

```text
repaso-frances-a1-fpe/
├── index.html
├── README.md
└── docs/
    ├── ficha-pedagogica.md
    └── memoria-recurso.md
```

Futuras ampliaciones podrían añadir:

```text
assets/
├── capturas/
└── audio/
```

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

- [Ficha pedagógica](docs/ficha-pedagogica.md)
- [Memoria breve del recurso](docs/memoria-recurso.md)

## Evolución de versiones

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

- rediseño del bloque de emparejar con interacción tipo tarjetas;
- incorporación de pictogramas o SVG propios de apoyo visual;
- audios propios locales en `/assets/audio/`;
- mejora del feedback local del reto final;
- capturas de pantalla para el repositorio;
- vídeo demo de 60–90 segundos;
- ficha imprimible en PDF.

No se recomienda incorporar por ahora un corrector IA/API, porque implicaría envío de texto a terceros, mayor complejidad técnica, posible backend y gestión de privacidad.

## Licencia

Por el momento, este recurso se publica como evidencia de portfolio docente. La licencia de reutilización puede definirse más adelante según el uso previsto.

## Autor

**Joel Concepción Villanueva**  
Recurso pedagógico digital complementario · Portfolio docente FPE
