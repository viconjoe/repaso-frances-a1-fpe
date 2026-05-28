# Guía de comprensión auditiva v2.3

> Nota de estado: el estado actual del recurso es **v3.2**. Ya incorpora los cinco archivos MP3 locales, reproducción activada, tarjetas iniciales como accesos reales, objetivos iniciales como lista informativa, variación comunicativa progresiva, expresión oral guiada con grabación local opcional, autoevaluación final orientativa, rúbrica docente/documental, repaso rápido de 12 preguntas y recorrido completo de 18 preguntas.

## 1. Finalidad

La versión **2.3** prepara un bloque de comprensión auditiva A1 basado en **audios locales propios del autor**.

La finalidad es practicar escucha básica en Francés A1 sin convertir el recurso en una plataforma, sin usar micrófono y sin recoger voz del alumnado.

## 2. Qué significa en esta fase

El bloque incluye cinco tareas auditivas breves:

- saludo y residencia;
- hora de inicio de un curso;
- compra básica;
- transporte;
- petición de repetición.

Cada tarea contiene:

- nombre del audio previsto;
- transcripción de apoyo docente;
- pregunta de comprensión;
- opciones de respuesta;
- feedback formativo.

## 3. Audios locales propios

Los archivos deben ser grabaciones o producciones preparadas previamente por el autor y guardadas en `assets/audio/`.

No se contempla:

- grabar voz del alumnado;
- pedir permisos de micrófono;
- subir archivos;
- enviar audio a servidores;
- usar servicios externos de reconocimiento o síntesis;
- incorporar IA/API.

## 4. Estado técnico

El bloque está preparado en `index.html` y, desde v2.3.1, la reproducción queda activada porque ya existen los cinco audios MP3 locales.

La activación se controla con:

```js
const LISTENING_AUDIO_ENABLED = true;
```

Los nombres previstos están documentados en `assets/audio/audio-manifest.json`.

## 5. Uso en aula

Se recomienda trabajar este bloque después de lectura A1 y antes de emparejar o situaciones.

Secuencia breve:

1. Escuchar una vez sin mirar la transcripción.
2. Responder la pregunta.
3. Escuchar de nuevo.
4. Revisar la pista con ayuda docente.
5. Abrir la transcripción solo como apoyo final.

## 6. Privacidad

Este recurso no solicita ni transmite datos personales. El resultado queda solo en este navegador mediante `localStorage` y aparece en el informe local como evidencia orientativa.

No tiene valor evaluativo oficial salvo decisión expresa del equipo docente responsable.
