# Checklist de validacion v3.1

**Recurso:** Repaso Final Frances A1 · Kit interactivo  
**Identificador:** EFJ-001  
**Version:** 3.1  
**URL activa:** https://viconjoe.github.io/repaso-frances-a1-fpe/  
**URL historica:** https://elinversorjunior-lgtm.github.io/repaso-frances-a1-fpe/

## 1. Despliegue

- [ ] Abrir la URL activa en navegador normal.
- [ ] Abrir la URL activa en ventana privada/incognito.
- [ ] Confirmar que la URL activa pertenece a `viconjoe.github.io`.
- [ ] Confirmar que la URL historica se trata solo como referencia de continuidad.
- [ ] Confirmar que no aparece `Version 2.8`.
- [ ] Confirmar que no aparece `18 preguntas rapidas` como texto unico del modo rapido.

## 2. Version y recorridos

- [ ] Confirmar que el footer o informe muestra version 3.1.
- [ ] Confirmar que el boton de repaso rapido indica 20-30 min.
- [ ] Confirmar que el recorrido completo indica 60 min.
- [ ] En movil, confirmar que el selector del panel guiado muestra:
  - Repaso rapido · 20-30 min · 6 pasos.
  - Recorrido completo · 60 min · 14 pasos.
- [ ] Confirmar que el repaso rapido usa 12 preguntas.
- [ ] Confirmar que el recorrido completo usa 18 preguntas.

## 3. Flashcards

- [ ] Confirmar que el contador de flashcards muestra 40 tarjetas.
- [ ] Confirmar que el banco de frases permite saltar a una tarjeta.
- [ ] Confirmar que el boton de pronunciacion experimental funciona solo si el navegador soporta Web Speech API.
- [ ] Confirmar que el boton de audio local de flashcards no aparece mientras `LOCAL_AUDIO_ENABLED` sea `false`.
- [ ] Confirmar que no hay intento visible de cargar `bonjour.mp3`, `bonsoir.mp3` u otros MP3 de flashcards inexistentes.

## 4. Audios de comprension auditiva

- [ ] Confirmar que existen estos cinco archivos:
  - `assets/audio/listen-01-saludo-clase.mp3`
  - `assets/audio/listen-02-heure-cours.mp3`
  - `assets/audio/listen-03-achat-pommes.mp3`
  - `assets/audio/listen-04-bus-gare.mp3`
  - `assets/audio/listen-05-repeter.mp3`
- [ ] Reproducir cada audio desde el bloque de audicion.
- [ ] Confirmar que la transcripcion de apoyo es opcional.
- [ ] Confirmar que no se solicita microfono en este bloque.

## 5. Privacidad

- [ ] Confirmar que no hay login.
- [ ] Confirmar que no hay backend.
- [ ] Confirmar que no hay formularios externos.
- [ ] Confirmar que no hay analitica.
- [ ] Confirmar que no hay IA/API externa.
- [ ] Confirmar que no se envian respuestas del alumnado a servidores.
- [ ] Confirmar que el progreso se guarda solo en `localStorage`.
- [ ] Confirmar que `Borrar progreso local` elimina el progreso y la preferencia de recorrido.
- [ ] Confirmar que se recomienda no introducir apellidos, DNI, telefono, correo ni datos sensibles.

## 6. Grabacion oral opcional

- [ ] Confirmar que la practica oral puede hacerse sin grabarse.
- [ ] Confirmar que la grabacion local requiere aceptar aviso de privacidad.
- [ ] Confirmar que el navegador pide permiso de microfono solo al iniciar la grabacion.
- [ ] Confirmar que el audio no se sube.
- [ ] Confirmar que el audio no se analiza.
- [ ] Confirmar que el audio no se guarda en `localStorage`.
- [ ] Confirmar que el audio no se incluye en el informe.
- [ ] Confirmar que existe boton para borrar la grabacion local.

## 7. PWA y cache

- [ ] Confirmar que `sw.js` usa `repaso-frances-a1-v3.1`.
- [ ] Confirmar que `data-frances-a1.js` esta en `CORE_ASSETS`.
- [ ] En DevTools > Application > Service Workers, confirmar que el service worker activo corresponde a la version actual.
- [ ] En DevTools > Application > Cache Storage, confirmar que no quedan caches antiguas relevantes.
- [ ] Si aparece contenido antiguo, usar `Unregister`, `Clear site data` y recargar.
- [ ] Probar la instalacion o anadir a pantalla de inicio si el navegador lo ofrece.

## 8. Accesibilidad practica

- [ ] Navegar con teclado por botones, enlaces, tarjetas y campos.
- [ ] Confirmar foco visible.
- [ ] Confirmar que los botones tactiles son comodos en movil.
- [ ] Confirmar que los mensajes no dependen solo del color.
- [ ] Confirmar que se puede usar el recurso sin sonido.
- [ ] Confirmar que las frases francesas principales usan `lang="fr"` cuando se generan.
- [ ] Confirmar que las regiones `aria-live` no resultan excesivamente intrusivas.
- [ ] Confirmar que el informe imprimible se abre o se descarga como HTML alternativo.

## 9. Resultado

- [ ] Validacion completada en escritorio.
- [ ] Validacion completada en movil.
- [ ] Incidencias documentadas.
- [ ] Capturas actualizadas si procede.
