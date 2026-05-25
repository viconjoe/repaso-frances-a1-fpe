# Guía PWA e instalación v1.4

## Repaso Final Francés A1 · Kit interactivo

**Autor:** Joel Concepción Villanueva  
**Versión de referencia:** 1.4  
**Tipo de documento:** experiencia instalable ligera  
**Carácter:** recurso complementario, no oficial y sin vínculo institucional directo con ICSE ni con el SCE

**Nota de estado:** esta guía documenta la fase v1.4. El estado actual del recurso es v3.1, que conserva la PWA ligera, añade audios locales, comprensión lectora y auditiva, expresión oral guiada con grabación local opcional, autoevaluación, rúbrica docente/documental y revisión de auditoría con acceso a dos velocidades.

## 1. Finalidad

La versión **1.4** prepara el recurso como una PWA ligera o experiencia instalable desde navegador.

El objetivo es mejorar el acceso desde móvil o escritorio sin convertir el recurso en una plataforma:

- no hay backend;
- no hay login;
- no hay analítica;
- no hay formularios externos;
- no hay IA/API;
- no hay solicitud ni transmisión de datos personales.

## 2. Elementos añadidos

La fase v1.4 incorpora:

- `manifest.webmanifest`: metadatos de instalación;
- `sw.js`: service worker con caché básica offline;
- `assets/icons/icon.svg`: icono vectorial local;
- `assets/icons/icon-192.png`: icono PNG para instalación;
- `assets/icons/icon-512.png`: icono PNG para instalación;
- metadatos en `index.html` para `theme-color`, manifest e iconos;
- registro prudente del service worker solo en `http` o `https`.

La revisión v2.8 confirma que estos archivos existen en el repositorio. La instalación sigue siendo ligera y no añade backend, cuentas, analítica ni envío de datos.

## 3. Funcionamiento esperado

En GitHub Pages o servidor local, el navegador puede ofrecer la opción de instalar el recurso como app.

Según el navegador, puede aparecer como:

- **Instalar aplicación**;
- **Añadir a pantalla de inicio**;
- icono de instalación en la barra de direcciones;
- opción dentro del menú del navegador.

Al abrir `index.html` directamente como archivo local, el recurso sigue funcionando, aunque el service worker no se registre. Esto es intencional para conservar compatibilidad local.

## 4. Caché offline

El service worker guarda una caché básica de:

- `index.html`;
- manifest;
- iconos;
- pictogramas;
- manifiesto de audio;
- archivos de estructura multidioma.

La finalidad es permitir una experiencia más estable después de la primera carga en navegadores compatibles.

No se cachean respuestas de formularios ni datos personales porque el recurso no los envía ni los recoge.

## 5. Privacidad

La PWA no cambia la política de privacidad del recurso.

Se mantiene:

- progreso local mediante `localStorage`;
- informe generado en el navegador;
- ausencia de envío de respuestas a servidores externos;
- ausencia de seguimiento de uso;
- ausencia de cuentas de usuario.

## 6. Límites

La instalación depende del navegador y del sistema operativo.

GitHub Pages sirve el recurso por HTTPS, por lo que es un entorno adecuado para probar la instalación.

En modo archivo local (`file://`), no debe esperarse instalación PWA ni caché mediante service worker.

## 7. Comprobación recomendada

Tras publicar en GitHub Pages:

1. Abrir el recurso desde la URL publicada.
2. Comprobar que carga correctamente.
3. Abrir herramientas del navegador o menú de instalación.
4. Verificar que aparece como instalable.
5. Instalarlo.
6. Abrirlo desde el icono instalado.
7. Probar navegación básica, modo guiado e informe local.
