# Guía de plantilla multidioma v1.3

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión de referencia:** 1.3  
**Tipo de documento:** preparación de plantilla multidioma  
**Carácter:** recurso complementario, no oficial y sin vínculo institucional directo con ICSE ni con el SCE

**Nota de estado:** esta guía documenta la fase v1.3. El estado actual del recurso es v2.0, que conserva esta estructura, añade una experiencia instalable ligera, incorpora capturas de validación y consolida un producto demostrativo completo.

## 1. Finalidad

La versión **1.3** prepara el proyecto para funcionar como molde reutilizable para otros idiomas iniciales, sin cambiar la lógica principal de la aplicación ni añadir dependencias externas.

El objetivo es separar de forma progresiva:

- estructura de actividades;
- banco de frases;
- situaciones comunicativas;
- textos de apoyo;
- audios locales;
- documentación pedagógica.

## 2. Qué se incorpora en v1.3

Se crea la carpeta `assets/lang/` con:

- `fr-a1-content.json`: inventario estructurado del contenido actual de Francés A1;
- `language-pack-template.json`: plantilla base para crear otros paquetes lingüísticos;
- `README.md`: criterios de uso y adaptación.

Estos archivos sirven como referencia documental y técnica para futuras variantes.

## 3. Por qué no se carga JSON dinámico todavía

El recurso actual funciona abriendo directamente `index.html` en el navegador, además de GitHub Pages.

Para conservar esa sencillez, v1.3 no hace que la app dependa de cargar archivos JSON externos mediante `fetch`, ya que algunos navegadores bloquean esa carga al abrir archivos locales con `file://`.

La plantilla queda preparada sin romper:

- uso local;
- GitHub Pages;
- privacidad;
- ausencia de backend;
- ausencia de dependencias.

## 4. Cómo crear una variante de idioma

Proceso recomendado:

1. Copiar `assets/lang/language-pack-template.json`.
2. Renombrarlo con el idioma y nivel, por ejemplo `en-a1-content.json`.
3. Completar metadatos de idioma, nivel y audiencia.
4. Adaptar flashcards con frases funcionales.
5. Adaptar preguntas de autodiagnóstico.
6. Adaptar parejas de frase e intención.
7. Adaptar mini-situaciones y retos finales.
8. Revisar que todas las frases sean adecuadas para A1.
9. Mantener avisos de privacidad y carácter no oficial.
10. Crear o adaptar ficha pedagógica del idioma.

## 5. Criterios pedagógicos

Cada variante debe conservar:

- enfoque para alumnado adulto;
- frases breves y funcionales;
- progresión desde reconocimiento hasta producción guiada;
- feedback formativo;
- ausencia de valor evaluativo oficial;
- posibilidad de uso autónomo o guiado.

No conviene añadir listas largas de vocabulario sin contexto. El valor del molde está en la práctica funcional.

## 6. Criterios de privacidad

Toda variante debe mantener:

- sin backend;
- sin login;
- sin analítica;
- sin formularios externos;
- sin IA/API;
- sin solicitud ni transmisión de datos personales;
- progreso local mediante `localStorage`;
- recomendación de usar nombre de pila o ficticio en actividades de presentación.

## 7. Siguiente paso técnico

La fase posterior ya se completó como **v1.4 · PWA o experiencia instalable**.

Antes de llegar a v1.4, conviene validar que la estructura `assets/lang/` es suficiente para crear al menos una variante piloto de otro idioma sin duplicar documentación innecesaria.
