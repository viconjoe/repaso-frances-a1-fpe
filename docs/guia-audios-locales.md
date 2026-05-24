# Guía de audios locales propios

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión de referencia:** 2.5
**Tipo de documento:** preparación de audios locales propios  
**Carácter:** recurso complementario, no oficial y sin vínculo institucional directo con ICSE ni con el SCE

## 1. Qué significa "audios locales propios"

En este proyecto, **audios locales propios** significa archivos de pronunciación creados previamente por el autor y guardados dentro del repositorio.

No significa que el alumnado se grabe.  
No significa recoger voces del alumnado.  
No implica subir archivos, usar formularios, crear cuentas ni enviar datos a servidores externos.

## 2. Finalidad pedagógica

Los audios locales pueden servir como modelo de pronunciación para las frases principales de las flashcards y como base del bloque de comprensión auditiva A1.

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

El inventario está descrito también en `assets/audio/audio-manifest.json`, separado entre audios de flashcards y audios de comprensión auditiva.

## 4. Criterios de grabación

Recomendaciones:

- grabar una frase por archivo;
- usar voz clara y ritmo pausado;
- evitar música, ruido o efectos;
- mantener una duración breve, entre 1 y 4 segundos;
- revisar que el volumen sea similar en todos los archivos;
- no incluir nombres reales, apellidos ni datos personales.

## 5. Activación técnica

El soporte de comprensión auditiva está activado en `index.html` desde v2.3.1 porque ya existen los cinco audios locales reales.

La versión 2.3.1 mantiene la UX móvil refinada y no cambia este criterio: los audios locales son archivos estáticos del autor, no grabaciones del alumnado. La estructura `assets/lang/` permite documentar nombres de audio previstos para futuras variantes de idioma.

Si el recurso se instala como PWA, los audios solo deberían reproducirse como archivos locales estáticos incluidos en el repositorio. No se añade grabación ni subida de archivos.

Para los audios de flashcards, que siguen siendo opcionales, se puede activar cambiando:

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
