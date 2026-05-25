# Audios locales propios

Esta carpeta queda preparada para incorporar audios de pronunciación creados previamente por el autor del recurso.

No está pensada para grabar al alumnado ni para recoger voces, nombres o datos personales.

Estado del recurso: v3.1. La comprensión auditiva A1 incorpora cinco audios locales propios del autor, la expresión oral guiada incluye grabación local opcional y temporal para autoescucha, la autoevaluación final es orientativa y la rúbrica docente/documental no requiere audio ni solicitud o transmisión de datos personales. El criterio para esta carpeta no cambia: solo se contemplan audios locales incluidos como archivos estáticos del autor, no grabaciones del alumnado.

## Audios de flashcards

Las flashcards mantienen un inventario técnico de 40 posibles archivos MP3, uno por frase. En v3.1 esos archivos no están incorporados todavía y el botón **Escuchar audio local** permanece oculto para evitar errores 404.

El inventario completo está en `assets/audio/audio-manifest.json` y en los datos del recurso. Los audios de flashcards siguen siendo opcionales y no deben activarse hasta que existan todos los archivos correspondientes o hasta que se implemente una comprobación archivo por archivo.

## Recomendación técnica

- Formato recomendado: MP3.
- Duración: 1-4 segundos por frase.
- Volumen normalizado y sin música de fondo.
- Voz clara, ritmo pausado y pronunciación modelo.
- Sin nombres reales, apellidos, datos personales ni referencias a alumnado.

## Activación en `index.html`

El soporte de comprensión auditiva está activado en el código porque ya existen los cinco audios MP3.

En v2.3.1 se incorporan estos archivos:

- `listen-01-saludo-clase.mp3`
- `listen-02-heure-cours.mp3`
- `listen-03-achat-pommes.mp3`
- `listen-04-bus-gare.mp3`
- `listen-05-repeter.mp3`

Estos audios han sido preparados por el autor y guardados en esta carpeta.

Cuando se incorporen todos los archivos de flashcards, cambiar:

```js
const LOCAL_AUDIO_ENABLED = false;
```

por:

```js
const LOCAL_AUDIO_ENABLED = true;
```

Los audios del bloque de comprensión auditiva están activados mediante:

```js
const LISTENING_AUDIO_ENABLED = true;
```

El recurso seguirá funcionando sin backend, sin login, sin analítica, sin formularios externos y sin enviar datos a ningún servidor.
