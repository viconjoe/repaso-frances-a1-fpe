# Guía de publicación v1.0

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión histórica de referencia:** 1.0  
**Estado actual del recurso:** 1.3  
**Tipo de documento:** checklist de publicación estable  
**Carácter:** recurso complementario, gratuito, no oficial y sin vínculo institucional directo con ICSE ni con el SCE

## 1. Finalidad

Esta guía se conserva como documento histórico de cierre de la versión 1.0 y como checklist de publicación estable en GitHub Pages, portfolio docente o contexto de demostración.

La versión 1.0 consolidó el recurso, la documentación, la licencia y la presentación pública. El estado actual del código, según `index.html`, es **v1.3**, con UX móvil refinada y estructura de plantilla multidioma.

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
- el botón de audio local no aparece mientras no existan audios reales;
- el reto final recomienda usar nombre de pila o ficticio;
- el informe local se genera sin enviar datos;
- la estructura `assets/lang/` contiene inventario y plantilla de contenidos;
- la documentación principal está en `/docs/`;
- la licencia está definida en `LICENSE.md`.

Las capturas de referencia pueden corresponder a versiones anteriores. Tras estabilizar v1.2.4 conviene renovar especialmente las capturas móviles.

## 3. Publicación en GitHub Pages

Configuración recomendada:

```text
Settings → Pages → Deploy from a branch → main → /root
```

La página principal debe cargar `index.html`.

## 4. Presentación del recurso

Formulación recomendada:

> Recurso didáctico digital gratuito y complementario para repaso de Francés A1, creado por Joel Concepción Villanueva como evidencia de competencia digital docente. Está orientado a alumnado adulto en contexto FPE, funciona sin backend ni recogida de datos personales y puede servir como base reutilizable para otros idiomas.

## 5. Límites que deben comunicarse

- No es un recurso oficial de ICSE.
- No tiene vínculo institucional directo con ICSE ni con el SCE.
- No sustituye programación docente.
- No sustituye materiales oficiales.
- No realiza evaluación oficial.
- No recoge datos personales.
- No graba alumnado.

## 6. Próximo ciclo

Estado de ciclos tras v1.0:

- v1.1: UX móvil guiada inicial;
- v1.2.4: UX móvil refinada cerrada;
- v1.3: plantilla multidioma preparada;
- v1.4: PWA o experiencia instalable;
- v2.0: producto demostrativo completo adaptable a distintos idiomas.
