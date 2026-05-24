# Roadmap de producto multidioma

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión de referencia:** 2.8
**Tipo de documento:** visión de evolución a producto educativo gratuito  
**Carácter actual:** recurso personal de portfolio docente, no oficial y sin vínculo institucional directo con ICSE ni con el SCE

## 1. Finalidad estratégica

El proyecto nace como recurso complementario de repaso de Francés A1 para alumnado adulto en contexto FPE, pero puede evolucionar a largo plazo hacia una **app educativa empaquetada, gratuita y reutilizable**.

La finalidad no sería crear una plataforma cerrada ni una herramienta de evaluación oficial, sino un producto didáctico ligero, seguro y adaptable que sirva como:

- apoyo de repaso para alumnado adulto;
- evidencia de competencia digital docente;
- herramienta de aula para formación presencial o semipresencial;
- molde reutilizable para otros idiomas y niveles iniciales;
- base para una experiencia de usuario profesional, clara y accesible.

## 2. Encaje prudente con el Servicio Canario de Empleo

A largo plazo, el recurso podría prepararse para presentarse como propuesta demostrativa alineada con necesidades habituales de formación para el empleo en Canarias.

Este planteamiento debe hacerse con prudencia:

- no debe presentarse como recurso oficial del Servicio Canario de Empleo;
- no debe implicar validación institucional si no existe;
- no debe usar identidad visual institucional sin autorización;
- no debe sustituir materiales oficiales, programación docente ni evaluación;
- debe conservar su carácter gratuito, complementario y respetuoso con la privacidad.

La formulación adecuada sería: **recurso adaptable a contextos de formación para el empleo en Canarias**, no recurso oficial del SCE.

## 3. Estado actual

La versión **1.2.4** cerró la fase de UX móvil refinada:

- recorrido guiado por bloques;
- portada móvil simplificada;
- cabecera móvil breve y alineada;
- descripción y nota institucional en desplegables;
- vista **Ver todos los bloques** como mapa;
- selector móvil **Ir a...**;
- barra inferior persistente;
- modo presentación independiente para aula.

La versión **1.3** abre la fase de plantilla multidioma:

- crea `assets/lang/`;
- documenta el contenido actual en `fr-a1-content.json`;
- incorpora `language-pack-template.json`;
- añade una guía para adaptar el molde a otros idiomas;
- mantiene `index.html` funcionando de forma local y estática.

Esta etapa no añade nuevas actividades ni cambia la lógica principal. Prepara el recurso para futuras variantes de idioma sin introducir dependencias.

La versión **1.4** añade una experiencia instalable ligera:

- manifest web;
- iconos locales;
- service worker;
- caché básica offline;
- guía de instalación PWA.

Esta instalación no cambia el carácter complementario del recurso ni añade seguimiento del alumnado.

La versión **1.5** cierra una fase de validación y presentación:

- capturas renovadas;
- checklist de revisión;
- validación técnica ligera;
- guion breve de demo;
- preparación para portfolio docente.

La versión **2.0** cierra la fase de producto demostrativo completo:

- dossier profesional de presentación;
- guía de adaptación a contextos FPE y otros idiomas iniciales;
- posicionamiento prudente para portfolio y demostraciones;
- mantenimiento del enfoque gratuito, estático, instalable y sin recogida de datos personales.

La versión **2.0.1** corrige dos detalles detectados en revisión externa antes de avanzar a nuevas variantes: orientación inicial del recorrido guiado y solapamiento visual en flashcards.

La versión **2.1** amplía la base pedagógica de Francés A1 antes de crear variantes: vocabulario, gramática útil, situaciones y retos. Esta decisión refuerza el molde para que otros idiomas no partan de una versión demasiado mínima.

La versión **2.2** añade comprensión lectora A1 con textos breves. Esta fase completa una destreza básica que conviene replicar en futuras variantes de idioma.

La versión **2.3** prepara comprensión auditiva A1 con audios locales propios del autor, manteniendo el principio de no grabar alumnado ni depender de servicios externos.

La versión **2.3.1** incorpora los cinco MP3 locales de comprensión auditiva y activa su reproducción en la app.

La versión **2.3.2** ajusta la UX inicial convirtiendo las tarjetas del itinerario en accesos reales.

La versión **2.3.3** separa visualmente objetivos pedagógicos y elementos navegables en el Bloque 0.

La versión **2.4** cierra una fase de variación comunicativa progresiva: mantiene funciones A1 esenciales y las reutiliza en contextos adultos cercanos para preparar mejor futuras variantes de idioma.

La versión **2.5** añade expresión oral guiada sin grabación, como paso prudente antes de plantear cualquier función futura de grabación local opcional.

La versión **2.6** añade autoevaluación final orientativa, manteniendo la separación entre evidencia formativa local y evaluación oficial.

La versión **2.7** añade una rúbrica docente/documental para observación cualitativa A1, manteniendo la separación entre apoyo pedagógico, portfolio y evaluación oficial.

La versión **2.8** añade grabación local opcional para autoescucha oral, sin subida de audio, sin análisis automático, sin almacenamiento en `localStorage` y sin inclusión en el informe.

## 4. Visión de app empaquetada

Una evolución natural sería convertir el recurso en una app empaquetada o instalable, manteniendo la simplicidad técnica.

Opciones posibles:

- versión web estática mejorada para GitHub Pages;
- PWA instalable desde navegador;
- paquete offline para centros o aulas sin conexión estable;
- plantilla clonable para otros idiomas;
- versión demostrativa para portfolio profesional.

La prioridad debería ser que funcione bien sin servidor, sin cuentas y sin recogida de datos personales.

## 5. Molde para otros idiomas

El proyecto puede convertirse en una plantilla para:

- Inglés A1;
- Alemán A1;
- Italiano A1;
- Español para extranjeros A1;
- competencias comunicativas básicas en otros contextos FPE.

Para facilitarlo, convendría separar progresivamente:

- estructura de actividades;
- banco de frases;
- textos de interfaz;
- pictogramas;
- audios locales;
- documentación pedagógica;
- fichas específicas por idioma.

## 6. Principios no negociables

La evolución del producto debería mantener:

- gratuidad;
- uso sin login;
- ausencia de analítica invasiva;
- ausencia de formularios externos;
- no recogida de datos personales;
- funcionamiento local o estático siempre que sea posible;
- transparencia sobre límites pedagógicos;
- separación clara entre recurso complementario y evaluación oficial.

## 7. Próximas etapas sugeridas

### v1.3 · Plantilla multidioma completada

- separar datos lingüísticos de la interfaz;
- preparar estructura de carpetas por idioma;
- documentar cómo crear una nueva variante;
- crear plantilla base para otros idiomas;
- mantener la UX móvil v1.2.4 como referencia inicial.

### v1.4 · Experiencia instalable completada

- estudiar PWA ligera;
- iconos de instalación;
- manifest web;
- funcionamiento offline básico;
- revisión de accesibilidad;
- mantener ausencia de backend, login y analítica.

### v1.5 · Capturas, validación y demo completada

- renovar capturas principales;
- preparar checklist de validación;
- documentar guion de demo breve;
- comprobar manifest y service worker;
- mantener enfoque no oficial y privacidad.

### v2.0 · Producto demostrativo completo

Estado: completada como cierre demostrativo del proyecto.

- app web estática e instalable como PWA ligera;
- documentación profesional consolidada;
- dossier de producto demostrativo;
- guía de adaptación a contextos FPE;
- base multidioma preparada mediante `assets/lang/`;
- presentación prudente para entidades formativas, sin afirmaciones institucionales oficiales.

### Etapas posteriores posibles

- incorporación real de los archivos `.mp3` propios del autor;
- variantes reales de otros idiomas iniciales;
- pilotaje real documentado, si procede y si existe autorización;
- uso de la rúbrica v2.7 para ordenar observaciones agregadas durante un pilotaje;
- observación prudente del uso de grabación local opcional de v2.8;
- mejora visual o empaquetado adicional solo si no compromete privacidad ni sencillez.

## 8. Riesgos a evitar

- convertir el recurso en una plataforma compleja demasiado pronto;
- recoger datos personales sin necesidad;
- usar marcas institucionales sin autorización;
- prometer valor oficial o evaluativo;
- depender de servicios externos;
- añadir IA/API sin resolver privacidad, coste y gobernanza;
- perder la sencillez que hace útil el recurso.

## 9. Formulación recomendada del proyecto

Una formulación prudente para portfolio o presentación sería:

> Recurso didáctico digital gratuito, creado por Joel Concepción Villanueva, orientado al repaso de Francés A1 para alumnado adulto en contexto FPE. Actualmente funciona como herramienta complementaria y evidencia de competencia digital docente. A largo plazo, se proyecta como molde reutilizable para otros idiomas y como app educativa empaquetable, manteniendo privacidad, gratuidad y ausencia de recogida de datos personales.

## 10. Conclusión

La etapa actual deja el proyecto consolidado como producto demostrativo de portfolio docente en versión **2.8**, con experiencia móvil refinada, estructura multidioma, opción de instalación ligera, capturas, guion de demostración, dossier profesional, guía de adaptación, ampliación A1, destrezas básicas, autoevaluación orientativa, rúbrica docente/documental y grabación local opcional para autoescucha. Los siguientes pasos razonables ya no requieren añadir muchas funciones, sino validar el recurso en uso real o crear variantes controladas para otros idiomas.
