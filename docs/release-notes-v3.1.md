# v3.1 · EFJ-001 piloto estable

**Recurso:** Repaso Final Frances A1 · Kit interactivo  
**Proyecto:** El Formador Junior  
**Identificador:** EFJ-001  
**Autor:** Joel Concepcion Villanueva  
**Estado:** estable candidata para cierre de piloto

## Resumen

La version v3.1 consolida el recurso como piloto estable de El Formador Junior para repaso complementario de Frances A1 con alumnado adulto. Cierra la fase de ajuste tecnico-documental, privacidad, accesibilidad practica y coherencia de despliegue.

## Cambios principales

- URL activa migrada y documentada en `https://viconjoe.github.io/repaso-frances-a1-fpe/`.
- URL anterior de `elinversorjunior-lgtm` tratada solo como historica o de continuidad.
- 40 flashcards como numero oficial.
- Repaso rapido con 12 preguntas.
- Recorrido completo con 18 preguntas.
- 5 audios reales de comprension auditiva incluidos en `assets/audio/`.
- Audios locales de flashcards no activos mientras falten sus MP3.
- Privacidad local: sin backend, login, analitica, formularios externos, IA/API ni envio de respuestas.
- Grabacion oral opcional, local y temporal.
- Documentacion de accesibilidad basica sin declarar cumplimiento WCAG formal.
- Checklist de validacion v3.1.
- Metadatos del recurso en `metadata.yml`.
- Licencia dual:
  - codigo: MIT;
  - contenidos: CC BY-NC-SA 4.0.

## Caracter no oficial

El recurso no es oficial de ICSE ni del SCE. No tiene vinculo institucional directo con esas entidades y no sustituye programacion docente, materiales oficiales ni evaluacion oficial.

## Uso recomendado

- Presentacion como recurso piloto EFJ-001.
- Uso complementario en aula durante 20-30 minutos.
- Practica autonoma mediante recorrido completo.
- Evidencia de portfolio tecnico-docente.

## Riesgos residuales

Antes de etiquetar la release, conviene confirmar en navegador real:

- service worker y cache v3.1;
- reproduccion de los cinco audios;
- borrado de progreso local;
- navegacion movil;
- ausencia de scroll horizontal no deseado;
- funcionamiento del informe local.
