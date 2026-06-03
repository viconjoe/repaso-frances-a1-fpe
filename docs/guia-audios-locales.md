# Guía de audios locales propios

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión de referencia:** 3.1
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

En v3.1 existen cinco audios locales reales para comprensión auditiva:

- `listen-01-saludo-clase.mp3`
- `listen-02-heure-cours.mp3`
- `listen-03-achat-pommes.mp3`
- `listen-04-bus-gare.mp3`
- `listen-05-repeter.mp3`

Las flashcards incorporan 40 audios locales reales en formato `.m4a`, uno por tarjeta. El botón **Escuchar audio local** queda activado para usar esos archivos estáticos del autor y evitar depender de la pronunciación experimental del navegador.

El inventario está descrito en `assets/audio/audio-manifest.json`, separado entre audios de flashcards y audios de comprensión auditiva.

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

La versión 3.2.4 mantiene este criterio para `assets/audio/`: los audios locales de contenido son archivos estáticos del autor, no grabaciones del alumnado. La grabación oral opcional de v2.8 es temporal, queda en el navegador y no se incorpora a esta carpeta, al informe ni al repositorio.

Si el recurso se instala como PWA, los audios de contenido solo deberían reproducirse como archivos locales estáticos incluidos en el repositorio. La grabación opcional de práctica oral no añade subida de archivos.

Los audios de flashcards quedan activados en `index.html` mediante:

```js
const LOCAL_AUDIO_ENABLED = true;
```

La pronunciación experimental del navegador queda como apoyo secundario de desarrollo, pero la experiencia principal de flashcards usa audios locales.

## 6. Privacidad

No se recomienda guardar grabaciones del alumnado dentro del repositorio ni incorporarlas al informe.

La grabación local opcional de v2.8 solo debe usarse como autoescucha temporal, con consentimiento explícito, borrado visible y sin subida de audio.

Por coherencia con el proyecto, los audios de contenido deben ser únicamente archivos estáticos del autor, incluidos en el repositorio y reproducidos localmente por el navegador.
