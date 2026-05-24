# Guía de grabación local opcional v2.8

**Versión de referencia:** 2.8  
**Autor:** Joel Concepción Villanueva  
**Estado:** función opcional, local y temporal para práctica oral

## 1. Finalidad

La versión v2.8 incorpora una **grabación local opcional** dentro del bloque de expresión oral guiada.

Su finalidad es que el alumnado adulto pueda escucharse después de practicar una respuesta breve de Francés A1 y decidir si quiere repetirla.

No convierte el recurso en una herramienta de evaluación oral, no analiza pronunciación y no sustituye la observación docente.

## 2. Funcionamiento

La grabación:

- solo se activa si el usuario marca el aviso de privacidad;
- solicita permiso de micrófono al navegador;
- graba un audio breve en la propia página;
- permite escucharlo localmente;
- permite borrarlo desde la interfaz;
- puede descargarse como copia local si el usuario lo decide;
- se elimina al cambiar de práctica, reiniciar el bloque, cerrar o recargar la página.

El audio no se guarda en `localStorage`, no se incorpora al informe y no se envía a ningún servidor.

## 3. Privacidad

La grabación local opcional mantiene estos límites:

- sin backend;
- sin login;
- sin analítica;
- sin formularios externos;
- sin IA/API;
- sin subida de audio;
- sin transcripción automática;
- sin almacenamiento de voz del alumnado en el repositorio;
- sin inclusión de audio en el informe local.

Antes de grabar, el recurso recuerda que no deben decirse apellidos, DNI, teléfono, correo, dirección completa ni datos sensibles.

## 4. Uso pedagógico recomendado

La grabación puede usarse como espejo oral:

1. leer la situación;
2. escuchar o leer el modelo;
3. practicar en voz alta una vez sin grabarse;
4. grabarse solo si se desea;
5. escucharse;
6. borrar el audio;
7. repetir la práctica si hace falta;
8. marcar la práctica como realizada.

En aula, conviene presentarla como una opción individual. Nadie debería sentirse obligado a grabarse.

## 5. Limitaciones

La función depende de que el navegador soporte `MediaRecorder` y permita acceso al micrófono.

Puede no funcionar en algunos navegadores, dispositivos o contextos de seguridad. Si no funciona, el bloque de expresión oral sigue siendo útil como práctica sin grabación.

La grabación no evalúa pronunciación, fluidez, corrección ni adecuación. Solo permite autoescucha.

## 6. Criterio documental

Esta fase amplía la expresión oral sin romper el principio de privacidad. La herramienta sigue siendo estática, local, complementaria, no oficial y sin vínculo institucional directo con ICSE ni con el SCE.
