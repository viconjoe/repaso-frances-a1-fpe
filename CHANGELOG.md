# Historial de versiones

Repositorio: `repaso-frances-a1-fpe`  
Autor: Joel Concepción Villanueva

Este historial resume la evolución del recurso didáctico digital complementario de Francés A1. El proyecto se mantiene como herramienta personal de portafolio docente, sin carácter oficial, sin vínculo institucional directo con ICSE ni con el SCE, y sin sustituir programación, materiales ni evaluación oficial.

## v3.1

- Optimiza el repaso rápido para que sea más realista en una práctica breve.
- Añade `EIJ_DIAGNOSTICO_RAPIDO` con 12 preguntas seleccionadas del autodiagnóstico completo.
- Mantiene el recorrido completo con las 18 preguntas.
- Actualiza textos de interfaz para distinguir repaso rápido y recorrido completo.
- Actualiza caché PWA a `repaso-frances-a1-v3.1`.
- Prepara sincronización del despliegue público histórico con v3.1, metadatos del recurso y redacción de privacidad más precisa.

## v3.0

- Consolida las correcciones de auditoría técnica y documental.
- Añade nota operativa de despliegue: la URL publicada se mantiene en `elinversorjunior-lgtm` por continuidad, mientras `viconjoe/repaso-frances-a1-fpe` queda como copia activa de desarrollo.
- Separa los datos educativos en `data-frances-a1.js` sin usar módulos ES ni dependencias externas.
- Mantiene la lógica principal en `index.html` referenciando los mismos nombres de datos.
- Refuerza atributos `lang="fr"` en fragmentos franceses y ajusta opciones dinámicas según idioma detectado.
- Verifica la coherencia del autodiagnóstico con 18 preguntas.
- Verifica recursos PWA y añade `data-frances-a1.js` a la caché básica del service worker.
- Consolida el recorrido a dos velocidades: repaso rápido y recorrido completo.

## v2.8

- Incorpora grabación local opcional para práctica oral.
- La grabación se realiza solo en el navegador del usuario.
- No se sube audio, no se analiza, no se guarda en `localStorage` y no se incorpora al informe.
- Mantiene la privacidad como criterio central.

## v2.7

- Añade rúbrica docente/documental orientativa.
- Refuerza el uso cualitativo del recurso para observación, memoria de pilotaje o portafolio.
- Aclara que no genera acta, nota oficial ni certificación.

## v2.6

- Añade autoevaluación final orientativa.
- Genera una síntesis local de práctica con resultado no oficial.
- Mantiene el enfoque formativo y prudente.

## v2.5

- Añade expresión oral guiada sin grabación.
- Propone modelos, frases de apoyo y checklist de observación personal.
- Evita solicitar datos personales sensibles.

## v2.4

- Introduce redundancia inteligente con variación progresiva.
- Repite situaciones comunicativas esenciales con ligeras variaciones de vocabulario, gramática, lectura, audición y producción.
- Mantiene el margen pedagógico propio de A1 adulto.

## v2.3

- Incorpora comprensión auditiva A1 con audios locales propios del autor.
- Añade transcripción opcional activable por el estudiante.
- Mantiene la ausencia de grabación del alumnado en esta fase.

## v2.2

- Amplía la comprensión lectora A1.
- Añade textos breves, tareas de localización de información y preguntas de comprensión.

## v2.1

- Amplía vocabulario, gramática funcional y situaciones comunicativas.
- Refuerza la escalabilidad del contenido hacia otros idiomas.

## v2.0

- Consolida el recurso como producto demostrativo completo.
- Mantiene el funcionamiento estático, local e instalable.

## v1.5

- Añade capturas, validación y paquete de demo.

## v1.4

- Prepara la experiencia PWA o instalable.
- Añade manifiesto, iconos y service worker sin dependencias externas.

## v1.3

- Prepara la estructura de plantilla multidioma.
- Añade archivos de contenido y plantilla para futuros paquetes de idioma.

## v1.2.4

- Cierra la fase de UX móvil refinada.
- Ajusta la cabecera móvil simplificada y alineada.

## v1.1

- Introduce el recorrido guiado móvil inicial.

## v1.0

- Versión estable/presentable del recurso.
