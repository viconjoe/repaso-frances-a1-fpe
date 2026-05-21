# Audios locales propios

Esta carpeta queda preparada para incorporar audios de pronunciación creados previamente por el autor del recurso.

No está pensada para grabar al alumnado ni para recoger voces, nombres o datos personales.

## Archivos previstos

Los nombres esperados por el recurso son:

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

## Recomendación técnica

- Formato recomendado: MP3.
- Duración: 1-4 segundos por frase.
- Volumen normalizado y sin música de fondo.
- Voz clara, ritmo pausado y pronunciación modelo.
- Sin nombres reales, apellidos, datos personales ni referencias a alumnado.

## Activación en `index.html`

El soporte está preparado en el código, pero desactivado mientras no existan audios reales.

Cuando se incorporen todos los archivos, cambiar:

```js
const LOCAL_AUDIO_ENABLED = false;
```

por:

```js
const LOCAL_AUDIO_ENABLED = true;
```

El recurso seguirá funcionando sin backend, sin login, sin analítica, sin formularios externos y sin enviar datos a ningún servidor.
