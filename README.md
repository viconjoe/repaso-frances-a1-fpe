# Repaso Final Francés A1 · Kit interactivo

Recurso pedagógico digital complementario de repaso para alumnado adulto de **Francés A1**, creado como evidencia de competencia digital docente y diseño instruccional aplicado a la Formación Profesional para el Empleo.

**Autor:** Joel Concepción Villanueva  
**Contexto:** Habilitación docente FPE · Prácticas 2026  
**Versión actual:** 3.2

**Publicación:** GitHub Pages

## Acceso al recurso

> **Nota sobre el despliegue:** La versión publicada y mantenida actualmente está alojada en `viconjoe.github.io`. La URL anterior en `elinversorjunior-lgtm` se conserva solo como referencia histórica de continuidad con materiales ya compartidos, pero puede no reflejar la versión activa.

Versión publicada actual:

https://viconjoe.github.io/repaso-frances-a1-fpe/

Repositorio:

https://github.com/viconjoe/repaso-frances-a1-fpe

URL histórica de continuidad:

https://elinversorjunior-lgtm.github.io/repaso-frances-a1-fpe/

Repositorio histórico de continuidad:

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

## Estado actual: v3.2

La versión **3.2** incorpora ajustes tras feedback docente: lenguaje más directo para alumnado adulto, autoevaluación en lugar de autodiagnóstico visible, recorrido completo para el modo largo, situación comunicativa en lugar de reto final, CTA de preguntas más claro y un informe que distingue bloques realizados, pendientes y no incluidos en el modo rápido. Mantiene las correcciones de auditoría, los datos educativos separados en `data-frances-a1.js` y la **grabación local opcional** incorporada en v2.8 dentro del bloque de expresión oral guiada. El alumnado puede grabarse solo si acepta el aviso de privacidad, escucharse en el propio navegador y borrar el audio. La grabación no se sube, no se analiza, no se incluye en el informe y no se guarda en `localStorage`.

Mantiene también la rúbrica docente/documental de v2.7, la autoevaluación final orientativa de v2.6, la variación comunicativa progresiva de v2.4, los objetivos iniciales claros de v2.3.3, las tarjetas táctiles del itinerario de v2.3.2, los cinco audios locales MP3 de v2.3.1, la comprensión lectora de v2.2, la ampliación pedagógica de v2.1, la UX móvil refinada, la estructura multidioma, la experiencia instalable ligera y el dossier demostrativo.

El recurso incorpora una experiencia **a dos velocidades**:

- **Repaso rápido (20-30 min):** uso breve de la app, autoevaluación reducida de 12 preguntas, flashcards, situaciones comunicativas, situación comunicativa final e informe.
- **Recorrido completo (60 min):** autoevaluación completa de 18 preguntas y todos los bloques del recurso, incluida gramática, lectura, audición, oral guiado, autoevaluación final, ficha docente y rúbrica.

El modo elegido se guarda solo en el navegador mediante `localStorage` (`eij_velocidad`) y no se envía a ningún servidor.

El recurso mantiene el funcionamiento estático y local, pero en móvil ofrece una experiencia más clara:

- portada móvil simplificada;
- descripción inicial y nota institucional en desplegables;
- cabecera móvil breve, alineada y sin redundancias;
- recorrido guiado por bloques;
- bloque **Gramática útil A1** con estructuras funcionales breves;
- bloque **Comprensión lectora A1** con mensajes, avisos, notas y horarios sencillos;
- bloque **Comprensión auditiva A1** con audios locales propios del autor;
- bloque **Expresión oral guiada** con grabación local opcional, temporal y sin subida;
- bloque **Autoevaluación final orientativa** sin valor evaluativo oficial;
- bloque **Rúbrica docente/documental** como apoyo cualitativo no oficial;
- variación comunicativa progresiva: mismas funciones clave en contextos cercanos pero no idénticos;
- tarjetas iniciales del itinerario convertidas en accesos reales a bloques;
- objetivos iniciales rediseñados como lista informativa, sin apariencia de botón;
- vista **Ver todos los bloques** reorganizada como mapa de bloques;
- selector móvil **Ir a...** para saltar a un bloque sin depender del menú horizontal;
- barra inferior de navegación para avanzar, retroceder o volver al recorrido guiado;
- indicación inicial explícita para usar los botones **Atrás/Siguiente** en la parte baja de la pantalla;
- modo presentación independiente para uso en aula;
- informe local de práctica, opcional y no oficial;
- estructura `assets/lang/` actualizada con inventario ampliado de contenidos lingüísticos reutilizables;
- manifiesto web, iconos locales y service worker con caché básica offline;
- capturas actuales para portfolio y presentación;
- checklist de validación y guion breve de demo;
- dossier de producto demostrativo;
- guía de adaptación prudente a contextos FPE y otros idiomas iniciales.

## EFJ-001 · Recurso piloto estable

La v3.2 cierra el ajuste posterior al feedback docente del piloto **EFJ-001 · Repaso Final Francés A1 · Kit interactivo** dentro de El Formador Junior.

Su uso recomendado es complementario: repaso guiado en aula, práctica autónoma, evidencia de portfolio técnico-docente y modelo reutilizable para futuros recursos de idiomas iniciales. Mantiene carácter no oficial, sin vínculo institucional directo con ICSE ni con el SCE, sin valor evaluativo oficial y sin sustitución de programación, materiales o evaluación del curso.

## Estructura del recurso

El recurso incluye estos bloques principales:

1. **Cómo usar esta app**: presenta la finalidad y los contenidos trabajados.
2. **Autoevaluación orientativa: Francés A1**: test breve de 12 preguntas en repaso rápido o 18 en recorrido completo, con feedback inmediato. No tiene valor evaluativo oficial.
3. **Flashcards de supervivencia**: 40 tarjetas de frases útiles en francés con traducción, navegación directa y pronunciación experimental mediante Web Speech API.
4. **Gramática útil A1**: píldoras breves sobre presentación, preguntas, negación, cortesía y futuro próximo.
5. **Comprensión lectora A1**: textos breves de uso cotidiano con preguntas de información concreta.
6. **Comprensión auditiva A1**: tareas breves con audios locales propios del autor, sin grabar al alumnado.
7. **Empareja frase e intención**: actividad de asociación entre frases francesas y funciones comunicativas, con contador de parejas completadas.
8. **Mini-situaciones comunicativas**: selección de respuestas adecuadas ante situaciones sencillas.
9. **Expresión oral guiada**: práctica en voz alta con modelos, apoyo, checklist local y grabación opcional temporal para escucharse.
10. **Situación comunicativa**: producción breve escrita u oral para presentarse y resolver una situación básica, con banco de frases de apoyo y revisión local.
11. **Autoevaluación final orientativa**: perfil local de práctica y recomendación de repaso, sin calificación oficial.
12. **Informe de práctica del alumno**: vista local preparada para guardar como PDF o descargar como HTML, sin envío de datos a servidores externos.
13. **Ficha docente integrada**: contextualiza el recurso como propuesta pedagógica complementaria.
14. **Rúbrica docente/documental**: matriz cualitativa de observación A1, no oficial y sin valor de calificación.

## Marco de referencia

El diseño toma como referencia pedagógica general el nivel **A1 del MCER**, la formación de personas adultas en contexto FPE y el marco de Formación Profesional regulado por la **Ley Orgánica 3/2022**, siempre de forma prudente y documental. Estas referencias no implican validación oficial ni vinculación institucional directa con ICSE, SCE, SEPE u otra administración.

## Informe de práctica del alumno

El informe local resume:

- progreso local por práctica realizada;
- resultado orientativo de la autoevaluación;
- avance en flashcards, comprensión lectora, comprensión auditiva, emparejar y situaciones;
- práctica oral guiada marcada localmente; la grabación opcional no se incorpora al informe;
- autoevaluación final orientativa local;
- checklist de la situación comunicativa;
- texto escrito en la situación comunicativa;
- orientación local de la situación comunicativa.

El informe:

- se genera en el propio navegador;
- no se envía a ningún servidor;
- no requiere login ni backend;
- se puede guardar como PDF usando el sistema de impresión del navegador;
- también puede descargarse como archivo HTML.

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
- no incorpora IA/API;
- no solicita ni transmite datos personales;
- no guarda grabaciones orales en `localStorage` ni en el informe.

En la situación comunicativa se recomienda usar solo un nombre de pila o un nombre ficticio para practicar la frase `Je m'appelle...`. No deben escribirse apellidos, DNI, teléfono, correo electrónico, dirección completa ni otros datos personales.

La grabación oral de v2.8 es opcional y temporal. Solo funciona si el usuario acepta el aviso de privacidad y concede permiso de micrófono al navegador. El audio queda en memoria local de la página para escucharlo, borrarlo o descargar una copia local. No se sube, no se analiza, no se añade al informe y desaparece al borrar, cambiar de práctica o cerrar/recargar la página.

Este recurso no solicita ni transmite datos personales. El progreso y el texto que escribas quedan únicamente en este navegador. Si usas un dispositivo compartido, borra el progreso local al terminar.

## Características técnicas

- Un solo archivo principal: `index.html`.
- HTML, CSS y JavaScript vanilla.
- Sin dependencias externas.
- Compatible con GitHub Pages.
- Diseño responsive con enfoque mobile-first en v1.2.4.
- Recorrido guiado móvil con navegación anterior/siguiente.
- Vista completa reorganizada como mapa de bloques.
- Selector móvil **Ir a...**.
- Bloque de gramática funcional A1 sin teoría extensa.
- Bloque de comprensión lectora A1 con textos breves integrados localmente.
- Bloque de comprensión auditiva A1 preparado para audios estáticos locales.
- Bloque de expresión oral guiada con grabación local opcional mediante MediaRecorder, si el navegador lo permite.
- Bloque de autoevaluación final orientativa, sin valor evaluativo oficial.
- Bloque de rúbrica docente/documental, sin valor de calificación oficial.
- Modo presentación independiente para aula.
- Uso básico de accesibilidad: skip link, foco visible, `aria-live`, `lang="fr"`, botones táctiles y barras de progreso con atributos ARIA.
- Persistencia local mediante `localStorage`.
- Pronunciación experimental con Web Speech API, si el navegador la soporta.
- Generación de informe local mediante ventana HTML imprimible y descarga alternativa con `Blob`.
- Datos educativos principales separados en `data-frances-a1.js` para facilitar mantenimiento.
- Carpeta `assets/lang/` con inventario de contenidos y plantilla de paquete lingüístico.
- `manifest.webmanifest` para instalación como PWA ligera.
- `sw.js` para caché offline básica en navegadores compatibles.
- Iconos locales en `assets/icons/`.

## Estructura del repositorio

```text
repaso-frances-a1-fpe/
├── index.html
├── data-frances-a1.js
├── LICENSE.md
├── README.md
├── manifest.webmanifest
├── sw.js
├── assets/
│   ├── audio/
│   │   ├── README.md
│   │   └── audio-manifest.json
│   ├── icons/
│   │   ├── icon.svg
│   │   ├── icon-192.png
│   │   └── icon-512.png
│   ├── lang/
│   │   ├── README.md
│   │   ├── fr-a1-content.json
│   │   └── language-pack-template.json
│   ├── capturas/
│   │   ├── 01-portada-objetivo.png
│   │   ├── 02-reto-final-privacidad.png
│   │   ├── 03-informe-ficha-docente.png
│   │   ├── 04-modo-presentacion.png
│   │   ├── 05-modo-guiado-movil.png
│   │   ├── 06-v1-5-movil-portada-guiada.png
│   │   ├── 07-v1-5-movil-mapa-bloques.png
│   │   ├── 08-v1-5-escritorio-portada.png
│   │   └── 09-v1-5-modo-presentacion.png
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
    ├── guia-pwa-instalacion-v1-4.md
    ├── guia-plantilla-multidioma-v1-3.md
    ├── guia-publicacion-v1.md
    ├── guia-ux-movil-v1-2-4.md
    ├── guia-validacion-demo-v1-5.md
    ├── guia-ampliacion-pedagogica-v2-1.md
    ├── guia-comprension-lectora-v2-2.md
    ├── guia-comprension-auditiva-v2-3.md
    ├── guia-variacion-comunicativa-v2-4.md
    ├── guia-expresion-oral-guiada-v2-5.md
    ├── guia-autoevaluacion-final-v2-6.md
    ├── guia-rubrica-docente-v2-7.md
    ├── guia-grabacion-local-opcional-v2-8.md
    ├── auditoria-accesibilidad-basica-v3-1.md
    ├── checklist-validacion-v3-1.md
    ├── checklist-cierre-v3.1.md
    ├── caso-uso-aula-20-min.md
    ├── evidencia-portfolio-efj001.md
    ├── release-notes-v3.1.md
    ├── dossier-producto-demostrativo-v2.md
    ├── guia-adaptacion-contextos-fpe-v2.md
    ├── guia-visual-pictogramas.md
    ├── guia-uso-aula.md
    ├── memoria-pilotaje-preparatoria.md
    ├── memoria-recurso.md
    └── roadmap-producto-multidioma.md
```

La carpeta `assets/audio/` incluye cinco audios locales reales de comprensión auditiva A1. Las flashcards mantienen referencias de inventario para posibles audios futuros, pero el botón de audio local de flashcards permanece oculto mientras esos MP3 no existan. Las grabaciones orales opcionales de v2.8 no se guardan en esa carpeta ni forman parte del repositorio.

## Documentación complementaria

- [Historial de versiones](CHANGELOG.md)
- [Resumen maestro del proyecto](docs/00-resumen-maestro-proyecto.md)
- [Ficha pedagógica](docs/ficha-pedagogica.md)
- [Guía de audios locales propios](docs/guia-audios-locales.md)
- [Guía de modo presentación](docs/guia-modo-presentacion.md)
- [Guía PWA e instalación v1.4](docs/guia-pwa-instalacion-v1-4.md)
- [Guía de plantilla multidioma v1.3](docs/guia-plantilla-multidioma-v1-3.md)
- [Guía de publicación v1.0](docs/guia-publicacion-v1.md)
- [Guía de UX móvil refinada v1.2.4](docs/guia-ux-movil-v1-2-4.md)
- [Guía visual de pictogramas](docs/guia-visual-pictogramas.md)
- [Guía breve de uso en aula](docs/guia-uso-aula.md)
- [Guía de validación y demo v1.5](docs/guia-validacion-demo-v1-5.md)
- [Guía de ampliación pedagógica v2.1](docs/guia-ampliacion-pedagogica-v2-1.md)
- [Guía de comprensión lectora v2.2](docs/guia-comprension-lectora-v2-2.md)
- [Guía de comprensión auditiva v2.3](docs/guia-comprension-auditiva-v2-3.md)
- [Guía de variación comunicativa v2.4](docs/guia-variacion-comunicativa-v2-4.md)
- [Guía de expresión oral guiada v2.5](docs/guia-expresion-oral-guiada-v2-5.md)
- [Guía de autoevaluación final v2.6](docs/guia-autoevaluacion-final-v2-6.md)
- [Guía de rúbrica docente/documental v2.7](docs/guia-rubrica-docente-v2-7.md)
- [Guía de grabación local opcional v2.8](docs/guia-grabacion-local-opcional-v2-8.md)
- [Auditoría de accesibilidad básica v3.1](docs/auditoria-accesibilidad-basica-v3-1.md)
- [Checklist de validación v3.1](docs/checklist-validacion-v3-1.md)
- [Checklist de cierre v3.1](docs/checklist-cierre-v3.1.md)
- [Caso de uso en aula 20-30 min](docs/caso-uso-aula-20-min.md)
- [Evidencia de portfolio EFJ-001](docs/evidencia-portfolio-efj001.md)
- [Ficha de caso EFJ-001](docs/ficha-caso-efj-001.md)
- [Checklist de cierre v3.2](docs/checklist-cierre-v3.2.md)
- [Notas de release v3.2](docs/release-notes-v3.2.md)
- [Release notes v3.1](docs/release-notes-v3.1.md)
- [Dossier de producto demostrativo v2.0](docs/dossier-producto-demostrativo-v2.md)
- [Guía de adaptación a contextos FPE v2.0](docs/guia-adaptacion-contextos-fpe-v2.md)
- [Memoria preparatoria de pilotaje](docs/memoria-pilotaje-preparatoria.md)
- [Memoria breve del recurso](docs/memoria-recurso.md)
- [Roadmap de producto multidioma](docs/roadmap-producto-multidioma.md)

## Capturas de referencia

Las capturas se incluyen como evidencia visual del recurso sin datos reales de alumnado:

- [Portada y objetivo](assets/capturas/01-portada-objetivo.png)
- [Situación comunicativa y privacidad](assets/capturas/02-reto-final-privacidad.png)
- [Informe y ficha docente](assets/capturas/03-informe-ficha-docente.png)
- [Modo presentación](assets/capturas/04-modo-presentacion.png)
- [Modo guiado móvil](assets/capturas/05-modo-guiado-movil.png)
- [v1.5 · Móvil portada guiada](assets/capturas/06-v1-5-movil-portada-guiada.png)
- [v1.5 · Móvil mapa de bloques](assets/capturas/07-v1-5-movil-mapa-bloques.png)
- [v1.5 · Escritorio portada](assets/capturas/08-v1-5-escritorio-portada.png)
- [v1.5 · Modo presentación](assets/capturas/09-v1-5-modo-presentacion.png)

Las capturas 06-09 corresponden a la fase v1.5. Las capturas anteriores se conservan como evidencia histórica de evolución.

## Verificación PWA

La revisión v3.1 confirma la existencia de los recursos básicos de instalación ligera: `manifest.webmanifest`, `assets/icons/icon.svg`, `assets/icons/icon-192.png`, `assets/icons/icon-512.png`, `data-frances-a1.js` y `sw.js`. La PWA no añade backend, cuentas, analítica ni envío de datos.

## Evolución de versiones

### v3.2 · Ajustes tras feedback docente

- Ajustes de microcopy tras feedback docente: autoevaluación, recorrido completo, situación comunicativa y revisión de texto.
- Reparto más variado de la posición de las respuestas correctas en actividades de opción múltiple.
- Informe diferenciado para repaso rápido y recorrido completo.
- CTA de preguntas más claro: comprobar respuesta antes de avanzar.
- Informe local ajustado para no atribuir como evaluados bloques no realizados o no incluidos en repaso rápido.
- Actualización de caché PWA a `repaso-frances-a1-v3.2.1`.

### v3.1

- Optimización del **Repaso rápido** para una duración más realista de 20-30 minutos.
- Creación de `EIJ_DIAGNOSTICO_RAPIDO` con 12 preguntas seleccionadas.
- Mantenimiento del recorrido completo con autodiagnóstico de 18 preguntas.
- Ajuste de mensajes de interfaz e informe para usar el conjunto de preguntas activo.
- Actualización de caché PWA a `repaso-frances-a1-v3.1`.

### v3.0

- Consolidación de correcciones de auditoría técnica y documental.
- Separación de datos educativos en `data-frances-a1.js` sin módulos ES ni dependencias externas.
- Nota operativa de despliegue para distinguir la URL pública activa en `viconjoe.github.io` de la URL histórica en `elinversorjunior-lgtm`.
- Refuerzo de `lang="fr"` en contenido francés.
- Verificación de autodiagnóstico con 18 preguntas y recursos PWA.
- Recorrido a dos velocidades: repaso rápido y recorrido completo.

### v2.8

- Incorporación de **grabación local opcional** en expresión oral guiada.
- Aviso de privacidad antes de solicitar permiso de micrófono.
- Reproducción del audio en la propia pantalla para autoescucha.
- Borrado manual de la grabación local y eliminación automática al cambiar de práctica.
- Sin subida de audio, sin análisis automático, sin IA/API, sin inclusión en informe y sin almacenamiento en `localStorage`.
- Correcciones de auditoría: historial separado en `CHANGELOG.md`, autodiagnóstico coherente con 18 preguntas, verificación de recursos PWA y recorrido a dos velocidades.

### v2.7

- Incorporación del bloque **Rúbrica docente/documental**.
- Matriz cualitativa de observación A1 con dimensiones de comprensión, interacción, expresión y autonomía.
- Niveles descriptivos: `Inicial`, `En desarrollo` y `Consolidado orientativo`.
- Uso previsto para portfolio, memoria de pilotaje y observación docente agregada.
- Sin calificación oficial, sin solicitud ni transmisión de datos personales, sin backend, sin login y sin envío de información.

### v2.6

- Incorporación del bloque **Autoevaluación final orientativa**.
- Perfil local de práctica con resultado sobre 100 como síntesis formativa.
- Niveles orientativos: `Necesita repaso`, `Preparación inicial`, `Base A1 en desarrollo`, `Buen dominio orientativo A1`.
- Inclusión de recomendación de repaso e informe local.
- Sin calificación oficial, sin backend, sin login, sin analítica y sin envío de datos.

### v2.5

- Incorporación del bloque **Expresión oral guiada**.
- Cinco prácticas orales: presentarse, pedir repetición, entrevista/cita, estación y centro de formación.
- Modelos breves en francés, apoyo paso a paso y checklist oral.
- Sin uso de micrófono, sin grabación de voz, sin subida de audio y sin IA/API.
- Inclusión de la práctica oral en el informe local como evidencia orientativa.

### v2.4

- Redundancia inteligente con variación progresiva.
- Se amplían vocabulario, lectura, emparejamientos, mini-situaciones y retos finales.
- Nuevos contextos A1 adultos: entrevista, centro de formación, estación, confirmación de dirección y disponibilidad.
- Se mantiene la comprensión auditiva con los cinco audios locales existentes, sin desincronizar archivos.
- Sin nuevas dependencias, sin backend, sin login, sin analítica, sin formularios externos y sin solicitud ni transmisión de datos personales.

### v2.3.3

- Ajuste visual del Bloque 0 basado en feedback de uso.
- **Comprender**, **Responder** y **Practicar** dejan de presentarse como tarjetas y pasan a una lista informativa.
- Se reduce la ambigüedad entre objetivos pedagógicos y elementos navegables.

### v2.3.2

- Ajuste UX basado en feedback externo.
- Las tarjetas **Detectar**, **Repasar**, **Aplicar** y **Guardar evidencia** pasan a funcionar como accesos reales.
- Se mantiene el recorrido guiado y la barra inferior.

### v2.3.1

- Incorporación de cinco archivos MP3 locales para comprensión auditiva A1.
- Activación de `LISTENING_AUDIO_ENABLED`.
- Inclusión de audios en la caché PWA básica.
- Mantenimiento de privacidad: sin micrófono, sin grabación del alumnado y sin envío de audio.

### v2.3

- Preparación de bloque **Comprensión auditiva A1**.
- Cinco tareas auditivas breves con archivo local previsto, transcripción de apoyo docente, pregunta y feedback.
- Actualización de `assets/audio/audio-manifest.json` con audios de flashcards y audios de comprensión auditiva.
- Inclusión de la audición en el informe local y en `assets/lang/fr-a1-content.json`.
- Sin uso de micrófono, sin grabación del alumnado, sin subida de archivos y sin servicios externos.

### v2.2

- Incorporación de bloque **Comprensión lectora A1**.
- Cinco textos breves: mensaje de clase, aviso, correo, nota de restaurante y transporte.
- Preguntas de localización de información concreta: hora, día, precio, lugar y acción.
- Feedback formativo sin valor evaluativo oficial.
- Inclusión de la lectura en el informe local y en `assets/lang/fr-a1-content.json`.
- Mantenimiento del funcionamiento estático, local, sin backend, sin login, sin analítica, sin formularios externos y sin IA/API.

### v2.1

- Ampliación pedagógica de Francés A1.
- Autodiagnóstico ampliado de 10 a 15 preguntas.
- Flashcards ampliadas progresivamente hasta 40 frases y expresiones en v3.1.
- Nuevo bloque **Gramática útil A1**.
- Más emparejamientos, mini-situaciones y retos finales.
- Inventario `assets/lang/fr-a1-content.json` actualizado para facilitar futuras variantes.
- Preparación conceptual para próximas fases de audición y variantes de idioma.

### v2.0.1

- Mejora de orientación inicial en móvil: se indica explícitamente el uso de **Atrás/Siguiente**.
- Ajuste visual de flashcards para evitar solapamientos entre etiqueta, contador y traducciones largas.
- Mantenimiento del enfoque estático, local, sin backend, sin login, sin analítica, sin formularios, sin IA/API y sin solicitud ni transmisión de datos personales.

### v2.0

- Consolidación como producto demostrativo completo para portfolio docente.
- Dossier de presentación profesional del recurso.
- Guía de adaptación prudente a contextos FPE y otros idiomas iniciales.
- Cierre del molde gratuito, estático, instalable y reutilizable.
- Mantenimiento del enfoque no oficial, sin vínculo institucional directo, sin backend, sin login, sin analítica, sin formularios, sin IA/API y sin solicitud ni transmisión de datos personales.

### v1.5

- Capturas renovadas de móvil, mapa de bloques, escritorio y modo presentación.
- Guía de validación y demo.
- Checklist antes de presentar el recurso.
- Guion breve de vídeo demo de 60-90 segundos.
- Validación técnica ligera de manifest, service worker y versión visible.

### v1.4

- Experiencia instalable ligera tipo PWA.
- Creación de `manifest.webmanifest`.
- Creación de `sw.js` con caché offline básica.
- Creación de iconos locales en `assets/icons/`.
- Registro prudente de service worker solo en `http` o `https`.
- Mantenimiento del enfoque sin backend, sin login, sin analítica, sin formularios, sin IA/API y sin solicitud ni transmisión de datos personales.

### v1.3

- Preparación de plantilla multidioma.
- Creación de `assets/lang/`.
- Inventario estructurado del contenido actual en `assets/lang/fr-a1-content.json`.
- Plantilla base para nuevos idiomas en `assets/lang/language-pack-template.json`.
- Guía documental `docs/guia-plantilla-multidioma-v1-3.md`.
- Mantenimiento del funcionamiento estático: sin backend, sin login, sin analítica, sin formularios, sin IA/API y sin dependencias.

### v1.2.4

- Alineación final de la cabecera móvil.
- Corrección de simetría visual en la tarjeta superior.
- Identificación breve y sobria: `Repaso final · Francés A1` y `Alumnado adulto`.
- Mantenimiento del recorrido guiado, mapa de bloques y funcionamiento local.

### v1.2.3

- Simplificación de cabecera móvil.
- Reducción de repeticiones de `Repaso final`, `Francés A1` y `alumnado adulto`.
- Identificación inicial más clara y menos saturada.

### v1.2.1

- Cabecera guiada compacta.
- En móvil, durante el recorrido guiado, se ocultan elementos superiores innecesarios.
- A partir del paso 2, la cabecera deja paso a la barra inferior como navegación principal.

### v1.2

- UX móvil refinada con enfoque mobile-first.
- Portada móvil simplificada.
- Descripción inicial y nota institucional convertidas en desplegables.
- Vista **Ver todos los bloques** reorganizada como mapa de bloques.
- Selector móvil **Ir a...**.
- Barra inferior persistente para volver al recorrido guiado desde la vista completa.
- Mantenimiento del modo presentación para aula.

### v1.1

- Modo guiado móvil inicial.
- Activación automática en pantallas pequeñas.
- Navegación inferior anterior/siguiente.
- Vista completa opcional.

### v1.0

- Versión estable/presentable.
- Licencia definida en `LICENSE.md`.
- Guía de publicación v1.0.
- Consolidación del proyecto como recurso publicable de portfolio docente.

## Futuras mejoras previstas

Las siguientes mejoras se consideran posibles para versiones posteriores:

- pilotaje real documentado, si procede y si existe autorización;
- variantes de idioma creadas a partir de la plantilla multidioma;
- memoria de pilotaje tras uso real en aula, si procede y si se autoriza.

No se recomienda incorporar por ahora un corrector IA/API, porque implicaría envío de texto a terceros, mayor complejidad técnica, posible backend y gestión de privacidad.

## Licencia

El código del recurso se publica bajo licencia MIT.

Los contenidos didácticos, documentación, capturas y recursos visuales se publican bajo licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0).

Ver [LICENSE.md](LICENSE.md).

## Autor

**Joel Concepción Villanueva**  
Recurso pedagógico digital complementario · Portfolio docente FPE
