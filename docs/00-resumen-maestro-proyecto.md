# Resumen maestro del proyecto

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión de referencia:** 2.6
**Tipo de recurso:** herramienta web estática complementaria  
**Ámbito:** Francés A1 para alumnado adulto en contexto FPE  
**Uso principal:** portfolio docente y evidencia de competencia digital aplicada

## 1. Naturaleza del proyecto

**Repaso Final Francés A1 · Kit interactivo** es una herramienta didáctica digital complementaria creada por **Joel Concepción Villanueva** como recurso personal de portfolio docente.

El proyecto está orientado a la formación de personas adultas en un contexto de Formación Profesional para el Empleo, especialmente para alumnado de **Francés A1** en fase de repaso, consolidación y autoevaluación formativa.

No pretende ser un curso completo de Francés A1 ni sustituir la programación docente, los materiales oficiales o la evaluación establecida por la docente titular, el centro o la entidad responsable de la formación.

## 2. Finalidad pedagógica

El recurso busca ofrecer una práctica breve, clara y accesible para:

- repasar expresiones básicas de supervivencia comunicativa;
- reconocer saludos, presentaciones y frases de cortesía;
- comprender textos breves de nivel A1 con información concreta;
- preparar comprensión auditiva con audios locales propios del autor;
- asociar frases francesas con intenciones comunicativas;
- resolver mini-situaciones de nivel A1;
- preparar una producción breve escrita u oral;
- generar, si se desea, una evidencia local de práctica con valor orientativo.

Su enfoque es formativo y de apoyo. Los resultados que muestra son orientativos y no tienen valor evaluativo oficial.

## 3. Posicionamiento institucional

Este proyecto es una creación personal de **Joel Concepción Villanueva**.

No es un recurso oficial de ICSE.  
No tiene vínculo institucional directo con ICSE ni con el SCE.  
No implica autorización, validación o publicación institucional por parte de dichas entidades.  
No sustituye materiales oficiales, programación docente ni evaluación oficial.

Debe presentarse siempre como herramienta complementaria de repaso y como evidencia de competencia digital docente dentro de un portfolio personal.

## 4. Estado actual del recurso

La versión **2.6** se mantiene como recurso web estático e instalable:

- un archivo principal `index.html`;
- documentación en `/docs/`;
- HTML, CSS y JavaScript vanilla;
- sin backend;
- sin login;
- sin analítica;
- sin formularios externos;
- sin APIs externas de corrección;
- sin IA/API;
- sin dependencias externas;
- publicación compatible con GitHub Pages;
- manifest web;
- service worker con caché básica offline;
- iconos locales para instalación;
- capturas renovadas;
- guía de validación y demo.

El recurso utiliza `localStorage` para conservar progreso únicamente en el navegador del usuario.

El ciclo v1.2 consolidó una **UX móvil refinada**: portada compacta, descripción y nota institucional en desplegables, recorrido guiado, mapa de bloques, selector **Ir a...**, barra inferior persistente y cabecera móvil alineada en v1.2.4.

La versión **1.3** prepara la fase de plantilla multidioma mediante `assets/lang/`, con un inventario del contenido actual de Francés A1 y una plantilla base para adaptar el molde a otros idiomas iniciales.

La versión **1.4** añade una experiencia instalable ligera tipo PWA, manteniendo la ausencia de backend, login, analítica, formularios, IA/API y recogida de datos personales.

La versión **1.5** añade una fase de presentación profesional: capturas actuales, validación técnica ligera, checklist y guion breve de demo.

La versión **2.0** consolida el proyecto como producto demostrativo completo: mantiene la app estática e instalable, documenta su valor como molde reutilizable y añade un dossier de presentación junto a una guía de adaptación prudente a contextos FPE y otros idiomas iniciales.

La versión **2.0.1** incorpora una corrección de UX tras revisión externa: añade una indicación inicial más explícita sobre el uso de **Atrás/Siguiente** y ajusta las flashcards para evitar solapamientos en traducciones largas.

La versión **2.1** amplía el contenido pedagógico de Francés A1: aumenta vocabulario, autodiagnóstico, emparejamientos, situaciones y retos, e incorpora un bloque de gramática útil A1.

La versión **2.2** añade comprensión lectora A1 mediante textos breves, preguntas de localización de información y feedback formativo. El recurso sigue siendo local, estático y sin recogida de datos personales.

La versión **2.3** prepara comprensión auditiva A1 con audios locales propios del autor. No usa micrófono, no graba al alumnado, no sube archivos y no incorpora servicios externos.

La versión **2.3.1** incorpora los cinco MP3 locales de comprensión auditiva y activa la reproducción desde `assets/audio/`.

La versión **2.3.2** convierte las tarjetas iniciales del itinerario en accesos reales, aprovechando la expectativa de interacción detectada en revisiones de usuarios.

La versión **2.3.3** rediseña los objetivos iniciales como lista informativa para reducir la ambigüedad visual en el Bloque 0.

La versión **2.4** introduce redundancia inteligente con variación progresiva: se repiten funciones esenciales de A1, pero en contextos más variados como entrevista, centro de formación, estación, dirección y disponibilidad.

La versión **2.5** incorpora expresión oral guiada sin grabación: modelos, apoyo paso a paso y checklist oral local, sin micrófono, sin audio del alumnado y sin envío de datos.

La versión **2.6** incorpora autoevaluación final orientativa: un perfil local de práctica y una recomendación de repaso sin calificación oficial ni envío de datos.

## 5. Privacidad y prudencia

El proyecto se ha diseñado con criterio de minimización de datos. No recoge datos personales ni los envía a servidores externos.

En el reto final se recomienda que el alumnado use solo un **nombre de pila** o un **nombre ficticio** para practicar la frase `Je m'appelle...`.

No deben escribirse:

- apellidos;
- DNI;
- teléfono;
- correo electrónico;
- dirección completa;
- contraseñas;
- datos de salud;
- información laboral o familiar sensible;
- cualquier otro dato personal innecesario.

Si se usa en equipos compartidos, se recomienda borrar el progreso local al finalizar.

## 6. Estado documental

La documentación principal del proyecto queda organizada en:

- `README.md`: presentación general, acceso, estructura, privacidad y evolución de versiones;
- `LICENSE.md`: licencia del código y de los contenidos didácticos;
- `docs/00-resumen-maestro-proyecto.md`: síntesis maestra y posicionamiento del proyecto;
- `docs/ficha-pedagogica.md`: descripción didáctica y orientaciones de uso;
- `docs/guia-audios-locales.md`: preparación de audios estáticos del autor sin grabar alumnado;
- `docs/guia-modo-presentacion.md`: uso del modo presentación para aula;
- `docs/guia-pwa-instalacion-v1-4.md`: guía de instalación PWA ligera;
- `docs/guia-plantilla-multidioma-v1-3.md`: guía para adaptar el molde a otros idiomas;
- `docs/guia-publicacion-v1.md`: checklist histórico de publicación estable v1.0, con nota de estado actual v2.0;
- `docs/guia-ux-movil-v1-2-4.md`: criterio y funcionamiento de la experiencia móvil refinada;
- `docs/guia-validacion-demo-v1-5.md`: checklist de validación y guion breve de demostración;
- `docs/guia-ampliacion-pedagogica-v2-1.md`: criterio de ampliación de vocabulario y gramática A1;
- `docs/guia-comprension-lectora-v2-2.md`: criterio de lectura A1 con textos breves y feedback formativo;
- `docs/guia-comprension-auditiva-v2-3.md`: criterio de audición A1 con audios locales propios del autor;
- `docs/dossier-producto-demostrativo-v2.md`: dossier de presentación del producto demostrativo;
- `docs/guia-adaptacion-contextos-fpe-v2.md`: guía para adaptar el molde a otros idiomas o contextos FPE;
- `docs/guia-visual-pictogramas.md`: descripción del apoyo visual SVG local;
- `docs/guia-uso-aula.md`: secuencia breve para uso guiado, autónomo o por parejas;
- `docs/memoria-pilotaje-preparatoria.md`: marco prudente para un futuro pilotaje sin datos reales de alumnado;
- `docs/memoria-recurso.md`: memoria breve de diseño, decisiones técnicas y evolución;
- `docs/roadmap-producto-multidioma.md`: visión de evolución hacia app gratuita, empaquetable y reutilizable para otros idiomas.

También se incluyen capturas de referencia en `assets/capturas/`, pictogramas SVG propios en `assets/pictogramas/`, iconos PWA en `assets/icons/`, estructura preparada para audios locales en `assets/audio/` y estructura de contenidos multidioma en `assets/lang/`.

## 7. Criterio de continuidad

La versión 2.6 mantiene el proyecto como recurso didáctico digital prudente, documentado, instalable y coherente para portfolio docente, añadiendo autoevaluación final orientativa, expresión oral guiada sin grabación, variación comunicativa progresiva y ajustes UX basados en feedback real sin cambiar el modelo técnico local.

A largo plazo, el proyecto puede evolucionar hacia una app educativa empaquetable y gratuita, adaptable a contextos de formación para el empleo en Canarias y reutilizable como molde para otros idiomas, siempre sin presentarse como recurso oficial del SCE ni de ninguna entidad sin autorización expresa.

Las siguientes fases deberían centrarse en:

- pilotaje real documentado, si procede y si existe autorización;
- ampliación gradual de audios de flashcards, si se considera útil;
- creación de variantes de idioma a partir de la plantilla multidioma.

Debe mantenerse el principio de privacidad y evitar añadir backend, analítica, formularios, IA, APIs externas o recogida de datos personales.
