# Guía de UX móvil refinada v1.2.4

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión de referencia:** 1.2.4  
**Tipo de documento:** criterio de experiencia de usuario móvil refinada  
**Carácter:** recurso complementario, no oficial y sin vínculo institucional directo con ICSE ni con el SCE

**Nota de estado:** esta guía documenta la fase histórica v1.2.4. El estado actual del recurso es v3.1, que conserva esta UX móvil, añade preparación de plantilla multidioma, experiencia instalable ligera, capturas de validación, producto demostrativo completo, ampliación pedagógica, comprensión lectora, comprensión auditiva con audios locales, variación comunicativa, expresión oral guiada con grabación local opcional, autoevaluación final orientativa y rúbrica docente/documental.

## 1. Finalidad

Esta guía documenta la evolución de la experiencia móvil del recurso hasta la versión **1.2.4**.

La guía original nació en v1.1 para explicar el modo guiado móvil. Desde v1.2, el recurso incorpora una UX móvil más refinada, con portada compacta, mapa de bloques, selector **Ir a...** y cabecera móvil simplificada.

El objetivo sigue siendo el mismo: facilitar el uso desde teléfonos sin añadir backend, login, analítica, formularios, IA/API ni recogida de datos personales.

## 2. Problema detectado

La revisión móvil mostró varios puntos de fricción:

- la página completa podía sentirse demasiado larga;
- la cabecera inicial repetía varias veces la idea de `Repaso final`, `Francés A1` y `alumnado adulto`;
- el menú horizontal desplazable podía pasar desapercibido o resultar incómodo;
- algunos elementos superiores ocupaban demasiado espacio durante el recorrido guiado;
- el alumnado podía perderse al alternar entre actividades.

Estos problemas no afectaban a la lógica de actividades, pero sí a la comodidad de uso en móvil, especialmente para alumnado adulto con competencia digital baja o media.

## 3. Solución aplicada

La versión 1.2.4 conserva el recurso estático y reorganiza la experiencia móvil:

- **Recorrido guiado:** muestra un bloque principal por paso y mantiene navegación anterior/siguiente.
- **Mapa de bloques:** la vista **Ver todos los bloques** funciona como orientación general, no como una página larga sin estructura.
- **Selector móvil `Ir a...`:** permite saltar directamente a un bloque sin depender del menú horizontal.
- **Cabecera móvil simplificada:** reduce repeticiones y deja una identificación breve del recurso.
- **Ocultación progresiva de cabecera:** durante el recorrido, los elementos superiores se reducen y la barra inferior pasa a ser la navegación principal.
- **Barra inferior persistente:** ayuda a avanzar, retroceder o volver al recorrido guiado desde la vista completa.
- **Modo presentación independiente:** sigue disponible para uso en aula y no se mezcla con el modo guiado móvil.

## 4. Criterios de diseño

La mejora no busca decorar más la interfaz, sino hacerla más clara.

Los criterios aplicados son:

- claridad antes que decoración;
- alumnado adulto, no infantilizado;
- una idea principal por pantalla;
- menor saturación vertical;
- botones visibles y comprensibles;
- navegación persistente;
- compatibilidad con uso autónomo, uso guiado en aula y consulta docente;
- mantenimiento de privacidad y funcionamiento local.

## 5. Relación con modelos de microaprendizaje

El paradigma de referencia es el microaprendizaje: pasos pequeños, feedback inmediato, navegación clara y reducción de decisiones simultáneas.

No se copia la estética de ninguna aplicación concreta ni se incorporan elementos de gamificación intensiva como cuentas, rachas, rankings, puntos sociales o seguimiento del alumnado.

## 6. Privacidad y límites

La UX móvil refinada no añade recogida de datos.

Se mantiene:

- sin backend;
- sin login;
- sin analítica;
- sin formularios externos;
- sin subida de voz del alumnado; la grabación local opcional de v2.8 es temporal y debe poder borrarse;
- sin IA ni APIs externas;
- sin dependencias externas.

El progreso continúa guardándose únicamente en el navegador mediante `localStorage`. El informe local se genera en el navegador y no se envía a servidores externos.

## 7. Criterio para futuras mejoras

Tras estabilizar v1.2.4, conviene revisar:

- si las capturas móviles deben renovarse;
- si el reto final necesita una pantalla de ayuda previa;
- si el informe debe quedar fuera del recorrido principal;
- si conviene añadir una pantalla inicial de elección: `Uso autónomo` / `Uso en aula`;
- si la futura plantilla multidioma debe conservar exactamente esta estructura móvil.
