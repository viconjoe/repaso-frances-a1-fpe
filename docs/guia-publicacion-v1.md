# Guía de publicación v1.0

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión histórica de referencia:** 1.0  
**Estado actual del recurso:** 3.2
**Tipo de documento:** checklist de publicación estable  
**Carácter:** recurso complementario, gratuito, no oficial y sin vínculo institucional directo con ICSE ni con el SCE

## 1. Finalidad

Esta guía se conserva como documento histórico de cierre de la versión 1.0 y como checklist de publicación estable en GitHub Pages, portfolio docente o contexto de demostración.

La versión 1.0 consolidó el recurso, la documentación, la licencia y la presentación pública. El estado actual del código, según `index.html`, es **v3.2**, con datos didácticos separados, auditoría técnica consolidada, UX móvil refinada, estructura de plantilla multidioma, experiencia instalable ligera, capturas de validación, dossier de producto demostrativo, ampliación pedagógica de Francés A1, comprensión lectora A1, comprensión auditiva A1 con audios locales propios, expresión oral guiada con grabación local opcional, autoevaluación final orientativa, rúbrica docente/documental, tarjetas iniciales táctiles, objetivos iniciales más claros, variación comunicativa progresiva y ajustes tras feedback docente.

## 2. Comprobaciones antes de publicar

Antes de publicar o actualizar la versión visible, revisar:

- `index.html` abre correctamente en navegador;
- la versión visible coincide con la versión actual del recurso;
- el modo presentación se activa y se desactiva;
- el recorrido guiado móvil funciona;
- la vista **Ver todos los bloques** actúa como mapa de navegación;
- el selector móvil **Ir a...** permite saltar a bloques;
- las flashcards funcionan;
- la pronunciación experimental se muestra como apoyo aproximado;
- el bloque de audición informa que los audios deben ser archivos locales propios del autor y no grabaciones del alumnado;
- la grabación oral opcional informa de privacidad, no sube audio y permite borrar la grabación local;
- el reto final recomienda usar nombre de pila o ficticio;
- el informe local se genera sin enviar datos;
- la estructura `assets/lang/` contiene inventario y plantilla de contenidos;
- `manifest.webmanifest` es válido;
- `sw.js` no registra servicios externos ni analítica;
- los iconos de `assets/icons/` existen;
- las capturas v1.5 existen;
- la guía de validación y demo está actualizada;
- la documentación principal está en `/docs/`;
- la licencia está definida en `LICENSE.md`.

Las capturas de referencia pueden corresponder a versiones anteriores. Las capturas v1.5 son las capturas actuales de validación para la fase demostrativa.

## 3. Publicación en GitHub Pages

Configuración recomendada:

```text
Settings → Pages → Deploy from a branch → main → /root
```

La página principal debe cargar `index.html`.

## 4. Presentación del recurso

Formulación recomendada:

> Recurso didáctico digital gratuito y complementario para repaso de Francés A1, creado por Joel Concepción Villanueva como evidencia de competencia digital docente. Está orientado a alumnado adulto en contexto FPE, funciona sin backend ni solicitud o transmisión de datos personales y puede servir como base reutilizable para otros idiomas.

## 5. Límites que deben comunicarse

- No es un recurso oficial de ICSE.
- No tiene vínculo institucional directo con ICSE ni con el SCE.
- No sustituye programación docente.
- No sustituye materiales oficiales.
- No realiza evaluación oficial.
- No solicita ni transmite datos personales.
- Solo permite grabación local opcional para autoescucha; no sube audio ni lo incorpora al informe.

## 6. Próximo ciclo

Estado de ciclos tras v1.0:

- v1.1: UX móvil guiada inicial;
- v1.2.4: UX móvil refinada cerrada;
- v1.3: plantilla multidioma preparada;
- v1.4: PWA o experiencia instalable preparada;
- v1.5: capturas, validación y demo preparadas;
- v2.0: producto demostrativo completo adaptable a distintos idiomas, con dossier y guía de adaptación;
- v2.7: rúbrica docente/documental de observación A1, sin valor evaluativo oficial;
- v2.8: grabación local opcional para autoescucha oral, sin subida de audio ni inclusión en informe.
- v3.0: datos educativos separados, auditoría técnica consolidada y nota operativa de despliegue.
- v3.1: repaso rápido optimizado con autodiagnóstico reducido de 12 preguntas.
