# Auditoria de accesibilidad basica v3.1

**Recurso:** Repaso Final Frances A1 · Kit interactivo  
**Identificador:** EFJ-001  
**Version revisada:** 3.1  
**Caracter:** revision practica, no certificacion WCAG completa

## Alcance

Esta auditoria recoge comprobaciones basicas de uso, accesibilidad practica y experiencia movil. No declara conformidad WCAG completa. Sirve como evidencia documental para mantenimiento del recurso y futuras revisiones.

## Pruebas documentadas

### Navegacion por teclado

- El recurso incluye enlace inicial para saltar al contenido.
- Botones, enlaces, tarjetas interactivas, campos de texto y controles principales son alcanzables mediante teclado.
- Las flashcards se pueden activar con teclado mediante `Enter` o barra espaciadora.
- La navegacion guiada dispone de botones anteriores/siguientes visibles y con texto comprensible.

### Foco visible

- Existen estilos `:focus-visible` para enlaces, botones, campos de texto y flashcards.
- El foco se refuerza con contorno visible y sombra, no solo con cambio de color.

### Contraste basico

- El recurso usa texto oscuro sobre fondos claros.
- Los botones principales tienen contraste alto entre texto y fondo.
- Las zonas informativas usan fondos suaves, pero el texto principal mantiene color oscuro.
- No se ha realizado medicion formal con herramienta WCAG; se recomienda comprobar contraste con una herramienta externa antes de una publicacion institucional.

### Uso movil

- La interfaz prioriza lectura vertical, botones grandes y barra inferior de navegacion.
- En modo guiado movil se muestra un selector visible de duracion:
  - Repaso rapido: 20-30 min, 6 pasos.
  - Recorrido completo: 60 min, 14 pasos.
- La vista completa ofrece mapa de bloques y selector movil `Ir a...`.

### Botones tactiles

- Los controles principales tienen altura tactil razonable.
- La barra inferior mantiene botones separados y con etiquetas textuales.
- Los botones de recorrido guiado se presentan como opciones grandes, no como enlaces pequeños.

### Mensajes no dependientes solo del color

- El feedback se expresa con texto explicativo.
- Las respuestas correctas o incorrectas no dependen solo del color.
- Los estados de progreso se muestran con texto y contadores, ademas de indicadores visuales.

### Uso sin sonido

- El recurso puede completarse sin escuchar audio.
- Los audios de comprension auditiva tienen transcripcion de apoyo desplegable.
- La pronunciacion experimental y la grabacion local son apoyos opcionales, no requisitos para usar el recurso.

### Idioma y fragmentos en frances

- El documento principal usa `lang="es"`.
- Las frases francesas generadas dinamicamente se marcan con `lang="fr"` cuando corresponde.
- Se recomienda mantener esta pauta en futuras ampliaciones de contenido.

### Regiones dinamicas y `aria-live`

- Los mensajes de feedback usan `aria-live="polite"`.
- Los contadores y estados principales se actualizan sin interrumpir de forma agresiva.
- No se detecta uso excesivo de regiones `assertive`.

### Informe imprimible

- El informe se genera en una vista HTML limpia.
- No se envia a servidores externos.
- Puede guardarse como PDF mediante la funcion de impresion del navegador.
- La grabacion oral opcional no se incorpora al informe.

## Riesgos pendientes

- Revisar contraste con herramienta especializada antes de una presentacion formal.
- Probar con lector de pantalla en al menos un navegador principal.
- Verificar en movil real Android/iOS tras cada cambio de interfaz.
- Revisar que la cache PWA no sirva versiones antiguas durante auditorias externas.

## Conclusion

La version 3.1 presenta una base razonable de accesibilidad practica para un recurso estatico de apoyo. No debe comunicarse como recurso certificado WCAG, sino como herramienta ligera con criterios basicos de navegacion, foco, lectura movil, privacidad y uso sin audio obligatorio.
