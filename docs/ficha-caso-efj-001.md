# Ficha de caso EFJ-001

## Identificacion

**Codigo:** EFJ-001  
**Nombre:** Repaso Final Frances A1 · Kit interactivo  
**Proyecto paraguas:** El Formador Junior  
**Autor:** Joel Concepcion Villanueva  
**Version de cierre:** v3.2  
**Tipo:** recurso pedagogico digital interactivo  
**Publicacion:** GitHub Pages  
**Repositorio:** https://github.com/viconjoe/repaso-frances-a1-fpe

## Problema abordado

El alumnado adulto de Frances A1 puede necesitar un repaso final sencillo, accesible desde movil y centrado en frases utiles, comprension basica y pequenas situaciones comunicativas.

El recurso responde a esa necesidad sin exigir registro, instalacion compleja ni competencias digitales altas.

## Solucion

EFJ-001 es una app web estatica en HTML, CSS y JavaScript vanilla. Ofrece dos recorridos:

- **Repaso rapido:** practica breve de 20-30 minutos.
- **Recorrido completo:** revision mas amplia de unos 60 minutos.

Incluye autoevaluacion, flashcards, gramatica funcional, lectura, audicion con audios locales, emparejamientos, mini-situaciones, expresion oral guiada, situacion comunicativa, informe local y rubrica docente/documental.

## Valor pedagogico

- Tono adulto, claro y no infantil.
- Actividades breves y funcionales.
- Feedback inmediato.
- Practica oral opcional sin envio de audio.
- Informe orientativo local.
- Uso posible en aula, en casa o como repaso guiado.

## Valor tecnico

- Recurso estatico compatible con GitHub Pages.
- Sin backend, login, analitica, IA/API ni formularios externos.
- Datos educativos separados en `data-frances-a1.js`.
- PWA ligera con service worker y cache basica.
- Progreso local mediante `localStorage`.

## Mejora incorporada en v3.2

La version v3.2 incorpora feedback docente real:

- lenguaje mas directo para alumnado;
- renombrado de secciones clave;
- mejor flujo de comprobar respuesta y avanzar;
- informe diferenciado por modo de uso;
- progreso basado en practica realizada;
- barra fija de progreso mas compacta en movil;
- aviso de uso y privacidad mas claro.

## Limites

EFJ-001 no es un curso completo de Frances A1. No es oficial, no sustituye programacion docente, materiales oficiales ni evaluacion del curso. Su uso recomendado es complementario, formativo y orientativo.

## Evidencia recomendada

Para presentar el caso en portfolio conviene conservar:

- enlace publico;
- repositorio;
- README;
- ficha pedagogica;
- guia de uso en aula;
- memoria del recurso;
- checklist de cierre v3.2;
- capturas actualizadas;
- notas de release v3.2.

La seleccion de capturas de movil y ordenador se conserva en `docs/capturas/v3.2/`.
