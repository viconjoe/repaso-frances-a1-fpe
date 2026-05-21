# Guia de adaptacion a contextos FPE v2.0

## Repaso Final Frances A1 · Kit interactivo

**Autor:** Joel Concepcion Villanueva  
**Version de referencia:** 2.0  
**Tipo de documento:** guia de adaptacion prudente  
**Caracter:** orientacion para reutilizar el molde sin convertirlo en recurso oficial

## 1. Finalidad

Esta guia explica como adaptar el molde del recurso a otros idiomas iniciales o contextos FPE sin perder sus principios: sencillez tecnica, claridad pedagogica, privacidad y prudencia institucional.

La adaptacion debe entenderse como una variante didactica del mismo modelo, no como una plataforma nueva.

## 2. Que puede adaptarse

Puede adaptarse:

- idioma o nivel inicial;
- banco de frases;
- situaciones comunicativas;
- instrucciones de actividad;
- ficha pedagogica;
- guia de uso en aula;
- capturas de referencia;
- audios locales propios del autor, si se preparan;
- pictogramas o apoyos visuales, manteniendo autoria y licencias claras.

## 3. Que no debe alterarse sin una fase especifica

No se recomienda cambiar en una adaptacion basica:

- ausencia de backend;
- ausencia de login;
- ausencia de analitica;
- ausencia de formularios externos;
- ausencia de IA/API;
- ausencia de recogida de datos personales;
- generacion local del informe;
- uso de `localStorage` solo en navegador;
- nota institucional de caracter no oficial.

## 4. Pasos recomendados para una nueva variante

1. Duplicar el repositorio o crear una rama especifica.
2. Definir idioma, nivel y destinatarios.
3. Preparar un nuevo paquete en `assets/lang/` usando `language-pack-template.json`.
4. Revisar que las frases sean adecuadas al nivel.
5. Ajustar documentacion pedagogica.
6. Sustituir capturas por evidencias de la nueva variante.
7. Revisar privacidad, licencias y nota institucional.
8. Validar en movil real antes de publicar.

## 5. Criterios pedagogicos

Cada variante debe conservar:

- progresion desde reconocimiento hacia produccion breve;
- actividades cortas;
- feedback formativo inmediato;
- vocabulario funcional;
- tono adulto;
- instrucciones claras;
- posibilidad de uso autonomo, guiado o por parejas.

No conviene aumentar mucho el numero de actividades. El valor del molde esta en ser breve, enfocado y facil de usar.

## 6. Adaptacion a contextos FPE

En FPE conviene formular el recurso como:

- apoyo complementario de repaso;
- recurso de aula;
- evidencia de competencia digital docente;
- material reutilizable de practica;
- producto demostrativo gratuito.

Debe evitarse formularlo como:

- evaluacion oficial;
- herramienta institucional;
- plataforma de seguimiento;
- producto del SCE;
- material oficial de una entidad concreta, salvo autorizacion expresa.

## 7. Adaptacion a otros idiomas

Para otros idiomas iniciales, la estructura puede mantenerse:

- diagnostico orientativo;
- frases de supervivencia;
- emparejamiento frase-intencion;
- mini-situaciones;
- reto final;
- informe local;
- ficha docente.

La prioridad debe ser que el alumnado practique actos comunicativos basicos, no que el recurso cubra todo el curriculo del nivel.

## 8. Checklist antes de publicar una variante

Antes de publicar, comprobar:

- version visible actualizada;
- README coherente;
- ficha pedagogica actualizada;
- memoria actualizada;
- roadmap actualizado;
- capturas reales de la variante;
- enlaces internos funcionales;
- JSON valido;
- manifest valido;
- service worker actualizado si cambia la lista de archivos;
- prueba en movil;
- prueba en escritorio;
- texto de privacidad claro;
- ausencia de datos personales en ejemplos y capturas.

## 9. Limites recomendados

No incorporar IA, APIs externas, formularios o analitica hasta que exista una decision tecnica y legal especifica. Para este tipo de recurso, la version estatica y local sigue siendo la opcion mas prudente.

## 10. Resultado esperado

Una adaptacion correcta debe producir un recurso:

- gratuito;
- estatico;
- instalable si el navegador lo permite;
- usable desde movil;
- documentado;
- no oficial;
- sin recogida de datos personales;
- reutilizable como evidencia de portfolio docente o como material complementario de aula.
