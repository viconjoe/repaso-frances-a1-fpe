# Audios locales propios

Esta carpeta queda preparada para incorporar audios de pronunciación creados previamente por el autor del recurso.

No está pensada para grabar al alumnado ni para recoger voces, nombres o datos personales.

Estado del recurso: v2.4. La comprensión auditiva A1 incorpora cinco audios locales propios del autor. El criterio no cambia: solo se contemplan audios locales incluidos como archivos estáticos, sin grabar al alumnado.

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

En v2.4 se añaden nuevas frases al inventario de flashcards. Sus audios de flashcard siguen siendo opcionales y no están activados hasta que existan todos los archivos correspondientes.

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

Cuando se incorporen todos los archivos, cambiar:

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
