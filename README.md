# Repaso Final Francés A1 · Kit interactivo

Recurso pedagógico digital complementario de repaso para alumnado adulto de **Francés A1**, creado como evidencia de competencia digital docente y diseño instruccional aplicado a la Formación Profesional para el Empleo.

**Autor:** Joel Concepción Villanueva  
**Contexto:** Habilitación docente FPE · Prácticas 2026  
**Versión actual:** 1.3  
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

## Estado actual: v1.3

La versión **1.3** conserva la UX móvil refinada de v1.2.4 y prepara el proyecto como plantilla multidioma.

El recurso mantiene el funcionamiento estático y local, pero en móvil ofrece una experiencia más clara:

- portada móvil simplificada;
- descripción inicial y nota institucional en desplegables;
- cabecera móvil breve, alineada y sin redundancias;
- recorrido guiado por bloques;
- vista **Ver todos los bloques** reorganizada como mapa de bloques;
- selector móvil **Ir a...** para saltar a un bloque sin depender del menú horizontal;
- barra inferior de navegación para avanzar, retroceder o volver al recorrido guiado;
- modo presentación independiente para uso en aula;
- informe local de práctica, opcional y no oficial;
- estructura `assets/lang/` para documentar contenidos lingüísticos reutilizables.

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

## Informe de práctica del alumno

El informe local resume:

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
- no recoge datos personales.

En el reto final se recomienda usar solo un nombre de pila o un nombre ficticio para practicar la frase `Je m'appelle...`. No deben escribirse apellidos, DNI, teléfono, correo electrónico, dirección completa ni otros datos personales.

El progreso se guarda únicamente en el navegador del usuario mediante `localStorage`.

## Características técnicas

- Un solo archivo principal: `index.html`.
- HTML, CSS y JavaScript vanilla.
- Sin dependencias externas.
- Compatible con GitHub Pages.
- Diseño responsive con enfoque mobile-first en v1.2.4.
- Recorrido guiado móvil con navegación anterior/siguiente.
- Vista completa reorganizada como mapa de bloques.
- Selector móvil **Ir a...**.
- Modo presentación independiente para aula.
- Uso básico de accesibilidad: skip link, foco visible, `aria-live`, `lang="fr"`, botones táctiles y barras de progreso con atributos ARIA.
- Persistencia local mediante `localStorage`.
- Pronunciación experimental con Web Speech API, si el navegador la soporta.
- Generación de informe local mediante ventana HTML imprimible y descarga alternativa con `Blob`.
- Carpeta `assets/lang/` con inventario de contenidos y plantilla de paquete lingüístico.

## Estructura del repositorio

```text
repaso-frances-a1-fpe/
├── index.html
├── LICENSE.md
├── README.md
├── assets/
│   ├── audio/
│   │   ├── README.md
│   │   └── audio-manifest.json
│   ├── lang/
│   │   ├── README.md
│   │   ├── fr-a1-content.json
│   │   └── language-pack-template.json
│   ├── capturas/
│   │   ├── 01-portada-objetivo.png
│   │   ├── 02-reto-final-privacidad.png
│   │   ├── 03-informe-ficha-docente.png
│   │   ├── 04-modo-presentacion.png
│   │   └── 05-modo-guiado-movil.png
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
    ├── guia-plantilla-multidioma-v1-3.md
    ├── guia-publicacion-v1.md
    ├── guia-ux-movil-v1-2-4.md
    ├── guia-visual-pictogramas.md
    ├── guia-uso-aula.md
    ├── memoria-pilotaje-preparatoria.md
    ├── memoria-recurso.md
    └── roadmap-producto-multidioma.md
```

La carpeta `assets/audio/` queda preparada para audios propios, pero no incluye grabaciones del alumnado.

## Documentación complementaria

- [Resumen maestro del proyecto](docs/00-resumen-maestro-proyecto.md)
- [Ficha pedagógica](docs/ficha-pedagogica.md)
- [Guía de audios locales propios](docs/guia-audios-locales.md)
- [Guía de modo presentación](docs/guia-modo-presentacion.md)
- [Guía de plantilla multidioma v1.3](docs/guia-plantilla-multidioma-v1-3.md)
- [Guía de publicación v1.0](docs/guia-publicacion-v1.md)
- [Guía de UX móvil refinada v1.2.4](docs/guia-ux-movil-v1-2-4.md)
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
- [Modo guiado móvil](assets/capturas/05-modo-guiado-movil.png)

Algunas capturas pueden corresponder a versiones anteriores del recurso. Tras estabilizar v1.2.4, conviene renovar especialmente las capturas móviles para reflejar la cabecera simplificada, el selector **Ir a...** y la vista **Ver todos los bloques**.

## Evolución de versiones

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

- v1.4: PWA o experiencia instalable;
- v2.0: producto demostrativo completo adaptable a distintos idiomas;
- vídeo demo de 60-90 segundos;
- memoria de pilotaje tras uso real en aula, si procede y si se autoriza.

No se recomienda incorporar por ahora un corrector IA/API, porque implicaría envío de texto a terceros, mayor complejidad técnica, posible backend y gestión de privacidad.

## Licencia

El código del recurso se publica bajo licencia MIT.

Los contenidos didácticos, documentación, capturas y recursos visuales se publican bajo licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0).

Ver [LICENSE.md](LICENSE.md).

## Autor

**Joel Concepción Villanueva**  
Recurso pedagógico digital complementario · Portfolio docente FPE
