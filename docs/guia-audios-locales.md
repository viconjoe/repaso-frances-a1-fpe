# Guía de audios locales propios

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión de referencia:** 2.2
**Tipo de documento:** preparación de audios locales propios  
**Carácter:** recurso complementario, no oficial y sin vínculo institucional directo con ICSE ni con el SCE

## 1. Qué significa "audios locales propios"

En este proyecto, **audios locales propios** significa archivos de pronunciación creados previamente por el autor y guardados dentro del repositorio.

No significa que el alumnado se grabe.  
No significa recoger voces del alumnado.  
No implica subir archivos, usar formularios, crear cuentas ni enviar datos a servidores externos.

## 2. Finalidad pedagógica

Los audios locales servirían como modelo de pronunciación para las frases principales de las flashcards.

Su función sería complementar:

- la lectura de la frase;
- la práctica oral en voz alta;
- la pronunciación experimental del navegador;
- el uso proyectado en aula;
- el recorrido guiado móvil, sin grabar ni solicitar voz del alumnado.

## 3. Archivos previstos

La carpeta preparada es `assets/audio/`.

Los archivos previstos son:

- `bonjour.mp3`
- `bonsoir.mp3`
- `au-revoir.mp3`
- `je-mappelle.mp3`
- `jhabite-a.mp3`
- `je-voudrais.mp3`
- `combien-ca-coute.mp3`
- `ou-est.mp3`
- `je-ne-comprends-pas.mp3`
- `pouvez-vous-repeter.mp3`

El inventario está descrito también en `assets/audio/audio-manifest.json`.

## 4. Criterios de grabación

Recomendaciones:

- grabar una frase por archivo;
- usar voz clara y ritmo pausado;
- evitar música, ruido o efectos;
- mantener una duración breve, entre 1 y 4 segundos;
- revisar que el volumen sea similar en todos los archivos;
- no incluir nombres reales, apellidos ni datos personales.

## 5. Activación técnica

El soporte está preparado en `index.html`, pero queda desactivado mientras no existan audios reales.

La versión 1.5 mantiene la UX móvil refinada y no cambia este criterio: los audios locales serían archivos estáticos del autor, no grabaciones del alumnado. La estructura `assets/lang/` permite documentar nombres de audio previstos para futuras variantes de idioma.

Si el recurso se instala como PWA, los audios solo deberían reproducirse como archivos locales estáticos incluidos en el repositorio. No se añade grabación ni subida de archivos.

Cuando se incorporen todos los audios, se puede activar cambiando:

```js
const LOCAL_AUDIO_ENABLED = false;
```

por:

```js
const LOCAL_AUDIO_ENABLED = true;
```

Si no se activa, el recurso sigue usando la pronunciación experimental del navegador cuando esté disponible.

## 6. Privacidad

No se recomienda grabar al alumnado dentro de este recurso.

La grabación de usuarios introduciría necesidades adicionales de consentimiento, almacenamiento, borrado, gestión de dispositivos compartidos y protección de datos.

Por coherencia con el proyecto, los audios deben ser únicamente archivos estáticos del autor, incluidos en el repositorio y reproducidos localmente por el navegador.
