# Estructura de contenidos multidioma

Esta carpeta prepara la fase **v1.3 · Plantilla multidioma**.

Estado actual del recurso: **v2.1**. La ampliación pedagógica incorpora más vocabulario, situaciones y notas de gramática funcional sin cargar datos externos ni añadir servicios.

Los archivos de esta carpeta documentan cómo separar progresivamente los datos lingüísticos de la interfaz sin añadir backend, dependencias, login, analítica, formularios externos ni IA/API.

## Archivos

- `fr-a1-content.json`: inventario estructurado del contenido actual de Francés A1.
- `language-pack-template.json`: plantilla base para crear una variante de otro idioma o nivel inicial.

## Estado técnico

En v1.3, estos archivos funcionan como referencia documental y plantilla de trabajo. El recurso principal sigue funcionando desde `index.html`, de forma local y estática, para conservar la compatibilidad con apertura directa en navegador y GitHub Pages.

Una futura fase podrá decidir si estos datos pasan a cargarse de forma dinámica, siempre que no se rompa el funcionamiento offline/local ni se añadan servicios externos.

## Criterios de adaptación

Al crear una variante para otro idioma:

- mantener frases breves y funcionales;
- evitar datos personales reales;
- adaptar ejemplos a alumnado adulto;
- conservar avisos de privacidad;
- no presentar el recurso como oficial de ninguna entidad;
- revisar que las actividades sigan siendo de nivel A1 o equivalente inicial.
