# Guía de UX móvil guiada v1.1

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión de referencia:** 1.1  
**Tipo de documento:** criterio de experiencia de usuario móvil  
**Carácter:** recurso complementario, no oficial y sin vínculo institucional directo con ICSE ni con el SCE

## 1. Finalidad

La versión 1.1 mejora la comodidad de uso en teléfonos móviles mediante un **modo guiado**.

El objetivo es reducir la sensación de página larga y convertir el recurso en un recorrido más claro:

- un bloque principal por pantalla;
- avance con botones anterior/siguiente;
- progreso visible por pasos;
- posibilidad de volver a la vista completa;
- mantenimiento del funcionamiento estático y local.

## 2. Inspiración metodológica

La referencia de diseño es el paradigma de microaprendizaje usado por aplicaciones como Duolingo: tareas pequeñas, pasos claros, interacción breve y feedback inmediato.

No se copia la estética ni se incorporan elementos de gamificación intensiva como cuentas, rachas, rankings, puntos sociales o seguimiento del alumnado.

## 3. Funcionamiento

En pantallas pequeñas, el recurso activa automáticamente el modo guiado.

El alumnado puede:

1. leer el objetivo;
2. realizar el autodiagnóstico;
3. practicar flashcards;
4. emparejar frases e intenciones;
5. resolver mini-situaciones;
6. preparar el reto final;
7. generar, si procede, el informe local.

La barra inferior permite avanzar o retroceder sin tener que desplazarse por toda la página.

## 4. Vista completa

El botón **Ver todo** permite volver a la página completa.

Esto conserva el uso anterior del recurso para:

- revisión rápida;
- uso en escritorio;
- consulta docente;
- preparación de clase;
- navegación libre por bloques.

## 5. Privacidad y límites

El modo guiado no añade recogida de datos.

Se mantiene:

- sin backend;
- sin login;
- sin analítica;
- sin formularios externos;
- sin grabación de voz del alumnado;
- sin IA ni APIs externas;
- sin dependencias externas.

El progreso continúa guardándose únicamente en el navegador mediante `localStorage`.

## 6. Criterio para futuras mejoras

Antes de pasar a PWA o experiencia instalable, conviene revisar:

- si los textos de cada bloque siguen siendo demasiado largos en móvil;
- si el reto final necesita una pantalla de ayuda previa;
- si el informe debe quedar fuera del recorrido principal;
- si conviene añadir una pantalla inicial de elección: `Uso autónomo` / `Uso en aula`.

