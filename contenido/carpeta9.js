// ============================================
// CARPETA 9: AUDITORÍA INTERNA
// Normativa: IIA (IPPF), NIA 300, 230, 265, COSO
// ============================================

const contenidoCarpeta9 = {

  // ============ 9.1 ============
  "9.1": {
    nombre: "Plan de Auditoría (Plan Anual)",
    objetivo: "Planificar de forma estratégica las actividades de auditoría interna para un ejercicio, priorizando las áreas de mayor riesgo, definiendo el alcance, los recursos, el cronograma y los objetivos, para asegurar una cobertura razonable del universo auditable.",
    normativaInt: "IIA — Norma 2010 (Planeación); Norma 2020 (Comunicación y aprobación); IPPF (Marco Internacional de Prácticas Profesionales); COSO 2013; NIA 300 (Planificación de la auditoría de EEFF, como referencia).",
    normativaVe: "Ley Orgánica de la Administración Financiera del Sector Público (para entes públicos); Providencias de la SUNAI; Ley del Ejercicio de la Contaduría Pública; COSO adoptado por la FCCPV.",
    campos: [
      "Encabezado: entidad, ejercicio, responsable de auditoría interna",
      "Objetivo general del plan",
      "Base normativa y metodológica",
      "Universo auditable (áreas, procesos, unidades)",
      "Evaluación de riesgos por área (matriz previa)",
      "Priorización (alta, media, baja)",
      "Auditorías programadas del ejercicio (nombre, objetivo, alcance, período)",
      "Recursos (equipo, horas estimadas, presupuesto)",
      "Cronograma anual (Gantt)",
      "Indicadores de gestión del plan",
      "Seguimiento de compromisos anteriores",
      "Aprobación de la máxima autoridad o Comité de Auditoría"
    ],
    ejemplo: `PLAN ANUAL DE AUDITORÍA INTERNA 2025
SUPERMERCADO EL AHORRO, C.A.
Auditoría Interna — Aprobado por el Comité de Auditoría el 28/02/2025

1. OBJETIVO
Proporcionar aseguramiento objetivo e independiente sobre la
eficacia del control interno, la gestión de riesgos y los
procesos de gobierno corporativo, contribuyendo al logro de
los objetivos institucionales.

2. BASE NORMATIVA
- IPPF del IIA (Normas 2010, 2020, 2200, 2300)
- COSO 2013
- NIA aplicables como referencia metodológica
- Normas internas de la entidad

3. UNIVERSO AUDITABLE Y PRIORIZACIÓN
| Área / Proceso           | Nivel de riesgo | Prioridad | Frecuencia |
|--------------------------|:---------------:|:---------:|:----------:|
| Ciclo de tesorería       |      Alto       |   Alta    |  Semestral |
| Ciclo de inventarios     |      Alto       |   Alta    |  Semestral |
| Ciclo de compras         |      Medio      |   Media   |   Anual    |
| Ciclo de ventas          |      Medio      |   Media   |   Anual    |
| Nómina y RRHH            |      Medio      |   Media   |   Anual    |
| Tecnología (TI)          |      Alto       |   Alta    |  Semestral |
| Cumplimiento fiscal      |      Alto       |   Alta    |   Anual    |
| Procesos legales         |      Bajo       |   Baja    |  Bienal    |
| Gestión de calidad       |      Bajo       |   Baja    |  Bienal    |

4. AUDITORÍAS PROGRAMADAS 2025
AUD-01 (Abril): Tesorería — Conciliaciones, arqueos, pagos
AUD-02 (Mayo): Inventarios — Conteos cíclicos, mermas, deterioro
AUD-03 (Julio): Compras — Proveedores, aprobaciones, facturación
AUD-04 (Agosto): Cumplimiento fiscal — ISLR, IVA, ISAE
AUD-05 (Octubre): Tesorería — Seguimiento a compromisos AUD-01
AUD-06 (Noviembre): Inventarios — Seguimiento AUD-02
AUD-07 (Diciembre): Nómina y RRHH — Cálculo, deducciones, prestaciones

5. RECURSOS
Auditores internos: 3 (1 senior + 2 asistentes)
Horas estimadas: 4.500 en el año
Presupuesto: Bs. 2.500.000.000 (incluye herramientas, software, capacitación)

6. CRONOGRAMA GENERAL (Gantt resumido)
Ene: Planificación y aprobación del plan
Feb-Abr: Ejecución AUD-01
May-Jun: Ejecución AUD-02
Jul-Ago: Ejecución AUD-03 y AUD-04
Sep: Informe trimestral al Comité
Oct-Dic: AUD-05, AUD-06, AUD-07

7. INDICADORES DEL PLAN
- % de auditorías ejecutadas vs. planificadas: ≥ 95%
- % de recomendaciones implementadas: ≥ 85%
- Horas de capacitación del equipo: ≥ 80 h/año
- Satisfacción de auditados: ≥ 4/5

8. SEGUIMIENTO A COMPROMISOS ANTERIORES
Al cierre 2024 quedaron 7 recomendaciones pendientes:
- 4 en implementación (seguimiento en AUD-05)
- 2 vencidas (escaladas al Comité)
- 1 cerrada

Aprobado por el Comité de Auditoría y la Junta Directiva.`,
    observaciones: [
      "No evaluar riesgos previo al plan (plan sin base objetiva)",
      "No priorizar áreas (todo se vuelve urgente)",
      "No incluir el seguimiento de compromisos anteriores",
      "No documentar los recursos y horas estimadas",
      "No aprobar el plan por el Comité de Auditoría",
      "Confundir auditoría interna con auditoría externa",
      "No actualizar el plan cuando hay cambios relevantes en el año"
    ],
    video: {
      titulo: "Cómo elaborar el Plan Anual de Auditoría Interna",
      url: "https://www.youtube.com/watch?v=PLANAI2025",
      caratula: "assets/caratulas/plan-ai.jpg",
      duracion: "26:40"
    },
    descargas: [
      { nombre: "Plantilla Excel — Plan Anual de Auditoría", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Plan formal", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Cronograma Gantt editable", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 9.2 ============
  "9.2": {
    nombre: "Programa de Auditoría",
    objetivo: "Detallar los procedimientos, pruebas y actividades específicas que se aplicarán en una auditoría particular, indicando el responsable, el alcance, el tiempo estimado y los papeles de trabajo esperados, para asegurar una ejecución ordenada y completa del trabajo.",
    normativaInt: "IIA — Norma 2200 (Planeación del trabajo); Norma 2240 (Programa de trabajo); NIA 300 (Planificación); NIA 330 (Respuestas a los riesgos).",
    normativaVe: "Normas internas de la unidad de auditoría interna; COSO; Ley del Ejercicio de la Contaduría Pública.",
    campos: [
      "Encabezado: auditoría, código, período, auditor responsable",
      "Objetivo de la auditoría",
      "Alcance (período, procesos, unidades)",
      "Normativa aplicable",
      "Procedimientos por etapa: planificación, ejecución, informe, seguimiento",
      "Pruebas específicas (cumplimiento, sustantivas, analíticas)",
      "Técnicas (entrevista, inspección, confirmación, recalculo, observación)",
      "Responsable por procedimiento",
      "Horas estimadas",
      "Papeles de trabajo esperados (referencias)",
      "Aprobación del supervisor"
    ],
    ejemplo: `PROGRAMA DE AUDITORÍA
Código: AUD-01/2025
Área: Ciclo de Tesorería
Período: 01/01/2024 al 31/12/2024
Auditor responsable: [Nombre], CIA

OBJETIVO
Evaluar la eficacia del control interno sobre el manejo de
efectivo, cuentas bancarias, pagos y conciliaciones bancarias.

ALCANCE
Período: ejercicio 2024
Procesos: caja chica, cuentas bancarias, pagos, conciliaciones
Unidades: Administración y Finanzas

NORMATIVA
- IPPF del IIA
- COSO 2013
- Normas internas de la entidad

ETAPA 1 — PLANIFICACIÓN (40 horas)
| # | Procedimiento                                         | Resp. | Horas | PT   |
|---|-------------------------------------------------------|-------|------:|------|
| 1 | Entrevista con el Gerente de Finanzas                  | JS    |     4 | PT-01|
| 2 | Revisión de manuales y políticas de tesorería          | MA    |     8 | PT-02|
| 3 | Análisis de riesgos del ciclo                          | JS    |     8 | PT-03|
| 4 | Elaboración de matriz de riesgos y controles           | JS/MA |    12 | PT-04|
| 5 | Definición de muestras (pagos, conciliaciones)         | MA    |     8 | PT-05|

ETAPA 2 — EJECUCIÓN (120 horas)
| # | Procedimiento                                         | Resp. | Horas | PT   |
|---|-------------------------------------------------------|-------|------:|------|
| 6 | Arqueo sorpresivo de caja chica                        | LP    |     4 | PT-10|
| 7 | Conciliaciones bancarias de las 4 cuentas (12 meses)   | MA    |    24 | PT-11|
| 8 | Prueba de pagos mayores a 100 UT (muestra 40)          | LP    |    20 | PT-12|
| 9 | Confirmación bancaria de saldos al cierre             | JS    |     8 | PT-13|
|10 | Prueba de firmas autorizadas en cheques y transferencias|MA    |    12 | PT-14|
|11 | Revisión de accesos al sistema bancario online         | LP    |     8 | PT-15|
|12 | Análisis de partidas conciliatorias antiguas (> 90 días)|MA   |    12 | PT-16|
|13 | Verificación de segregación de funciones              | JS    |     8 | PT-17|
|14 | Pruebas sobre arqueos periódicos realizados            | LP    |    12 | PT-18|
|15 | Revisión de pólizas de seguro de valores              | MA    |     4 | PT-19|

ETAPA 3 — INFORME (20 horas)
| # | Procedimiento                                         | Resp. | Horas | PT   |
|---|-------------------------------------------------------|-------|------:|------|
|16 | Consolidación de hallazgos y evidencias               | JS    |     8 | PT-30|
|17 | Redacción del informe preliminar                       | JS    |     6 | PT-31|
|18 | Reunión de cierre con auditados (comentarios)          | JS    |     4 | PT-32|
|19 | Emisión del informe final                              | JS    |     2 | PT-33|

ETAPA 4 — SEGUIMIENTO (10 horas)
| # | Procedimiento                                         | Resp. | Horas | PT   |
|---|-------------------------------------------------------|-------|------:|------|
|20 | Elaboración del plan de seguimiento                   | LP    |     4 | PT-40|
|21 | Verificación de implementación de compromisos         | LP    |     6 | PT-41|

TOTAL HORAS ESTIMADAS: 190

Elaborado por: [Auditor Senior]
Aprobado por: [Jefe de Auditoría Interna]
Fecha: 20/03/2025`,
    observaciones: [
      "No vincular el programa con los riesgos identificados",
      "No estimar horas (imposible medir eficiencia)",
      "No definir el papel de trabajo esperado por procedimiento",
      "No asignar responsables específicos",
      "No incluir pruebas sustantivas y de cumplimiento equilibradamente",
      "No actualizar el programa cuando cambian las circunstancias",
      "Confundir programa con plan (el plan es anual, el programa es por auditoría)"
    ],
    video: {
      titulo: "Cómo elaborar un Programa de Auditoría",
      url: "https://www.youtube.com/watch?v=PROGAI2025",
      caratula: "assets/caratulas/programa-ai.jpg",
      duracion: "22:55"
    },
    descargas: [
      { nombre: "Plantilla Word — Programa de Auditoría", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Plantilla Excel — Programa con control de horas", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 9.3 ============
  "9.3": {
    nombre: "Papeles de Trabajo",
    objetivo: "Documentar de forma organizada, completa y verificable la evidencia obtenida durante la auditoría, así como los procedimientos aplicados, las conclusiones alcanzadas y los hallazgos identificados, sirviendo como soporte del informe y como evidencia de la calidad del trabajo realizado.",
    normativaInt: "IIA — Norma 2330 (Documentación de la información); NIA 230 (Documentación de auditoría); NIA 500 (Evidencia de auditoría); NIA 501, 505, 520 (procedimientos específicos).",
    normativaVe: "Normas internas de auditoría interna; Ley del Ejercicio de la Contaduría Pública; COSO.",
    campos: [
      "Encabezado: entidad, auditoría, período, referencia del papel (PT-XX)",
      "Preparado por (iniciales) y fecha",
      "Revisado por (iniciales) y fecha",
      "Objetivo del papel de trabajo",
      "Fuente de la información",
      "Descripción del trabajo realizado",
      "Evidencia obtenida (documentos, cálculos, conciliaciones)",
      "Conclusiones del auditor",
      "Hallazgos identificados (si aplica)",
      "Referencias cruzadas a otros papeles",
      "Anexos (fotos, copias, capturas)"
    ],
    ejemplo: `PAPEL DE TRABAJO
Referencia: PT-11
Auditoría: AUD-01/2025 — Ciclo de Tesorería
Área: Conciliaciones bancarias
Período: Ejercicio 2024

PREPARADO POR: MA — 15/04/2025
REVISADO POR: JS — 17/04/2025

OBJETIVO
Verificar la exactitud y la razonabilidad de las conciliaciones
bancarias mensuales realizadas por la entidad durante el
ejercicio 2024.

FUENTE DE INFORMACIÓN
- Conciliaciones bancarias de la entidad (12 meses × 4 cuentas)
- Estados de cuenta del Banco Nacional de Crédito
- Libro auxiliar de bancos de la contabilidad

TRABAJO REALIZADO
1. Solicité las 48 conciliaciones bancarias (12 meses × 4 cuentas).
2. Verifiqué que cada conciliación estuviera firmada por quien
   elaboró y quien revisó.
3. Recalculé las conciliaciones de 2 meses (marzo y agosto) por
   cuenta, cotejando contra estado de cuenta.
4. Analicé partidas conciliatorias con más de 90 días de antigüedad.
5. Verifiqué el registro contable de los ajustes propuestos.

RESULTADO DEL TRABAJO

| Mes   | Cuenta 1 | Cuenta 2 | Cuenta 3 | Cuenta 4 | Observ.            |
|-------|:--------:|:--------:|:--------:|:--------:|--------------------|
| Ene   | OK       | OK       | OK       | OK       | —                  |
| Feb   | OK       | OK       | OK       | OK       | —                  |
| Mar   | OK       | OK       | OK       | OK       | —                  |
| Abr   | OK       | OK       | OK       | Sin firm.| Hallazgo #1        |
| May   | OK       | OK       | OK       | OK       | —                  |
| Jun   | OK       | OK       | OK       | OK       | —                  |
| Jul   | OK       | OK       | OK       | OK       | —                  |
| Ago   | OK       | OK       | OK       | OK       | —                  |
| Sep   | OK       | Sin revis.| OK      | OK       | Hallazgo #2        |
| Oct   | OK       | OK       | OK       | OK       | —                  |
| Nov   | OK       | OK       | OK       | OK       | —                  |
| Dic   | OK       | OK       | OK       | OK       | —                  |

RECÁLCULO MARZO — CUENTA 1
Saldo según libros:              18.500.000
Ajustes:                        (2.066.080)
Saldo ajustado libros:           16.433.920
Saldo según banco:               16.433.920
DIFERENCIA:                               0
✓ Conciliación correcta.

PARTIDAS CON MÁS DE 90 DÍAS
- Cuenta 3: cheque N° 000892 de Bs. 45.000 con 180 días
  sin cobrar. Se recomendó gestionar la anulación.
- Cuenta 4: depósito en tránsito de Bs. 200.000 con 95 días.
  Se verificó posteriormente su abono en el banco.

CONCLUSIONES
- Las conciliaciones bancarias están actualizadas en su mayoría
  (46 de 48 = 95,8%).
- Los ajustes derivados de conciliaciones están correctamente
  registrados en la contabilidad.
- Se identificaron 2 hallazgos menores (falta de firma y falta
  de revisión) y 2 partidas antiguas pendientes de gestión.

REFERENCIAS CRUZADAS
- Ver PT-10 (arqueo de caja)
- Ver PT-12 (prueba de pagos)
- Ver PT-13 (confirmación bancaria)

CONCLUSIÓN GENERAL
Se ha obtenido evidencia suficiente y apropiada sobre la
correcta elaboración de las conciliaciones bancarias. Los
hallazgos identificados no modifican la conclusión general
sobre el control interno del ciclo.

_____ FIRMA _____           _____ FIRMA _____
MA (Preparó)                JS (Revisó)
Fecha: 15/04/2025           Fecha: 17/04/2025`,
    observaciones: [
      "No referenciar cada papel de trabajo (imposible trazabilidad)",
      "No firmar por quien prepara y quien revisa",
      "No documentar las conclusiones del auditor (queda como archivo muerto)",
      "No vincular el papel con el objetivo del programa de auditoría",
      "No incluir la fuente de la información",
      "No documentar los hallazgos identificados",
      "Alterar los papeles después de la fecha del informe (delito profesional)"
    ],
    video: {
      titulo: "Papeles de trabajo en auditoría — Cómo prepararlos",
      url: "https://www.youtube.com/watch?v=PTAI2025",
      caratula: "assets/caratulas/papeles.jpg",
      duracion: "24:05"
    },
    descargas: [
      { nombre: "Plantilla Excel — Papeles de trabajo", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Cédula de hallazgo", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 9.4 ============
  "9.4": {
    nombre: "Informe de Auditoría Interna",
    objetivo: "Comunicar de manera formal los resultados de la auditoría realizada, incluyendo el alcance, los procedimientos aplicados, los hallazgos identificados, su impacto, las recomendaciones y las respuestas de la administración, para impulsar la mejora continua del control interno.",
    normativaInt: "IIA — Norma 2410 (Criterios de comunicación); Norma 2420 (Calidad de las comunicaciones); Norma 2500 (Seguimiento); NIA 265 (Comunicación de deficiencias); COSO 2013.",
    normativaVe: "Normas internas de auditoría interna; Ley Orgánica de la Administración Financiera del Sector Público (para sector público); COSO adaptado por la FCCPV.",
    campos: [
      "Encabezado: entidad, auditoría, período, destinatario",
      "Resumen ejecutivo",
      "Objetivo y alcance",
      "Metodología aplicada",
      "Normativa de referencia",
      "Hallazgos: condición, criterio, causa, efecto (riesgo), recomendación, respuesta de la administración, fecha compromiso, responsable",
      "Clasificación del hallazgo (alta, media, baja)",
      "Opinión/conclusión general sobre el control interno",
      "Recomendaciones generales",
      "Seguimiento propuesto",
      "Anexos y papeles de trabajo",
      "Firma del jefe de auditoría interna"
    ],
    ejemplo: `INFORME DE AUDITORÍA INTERNA
AUD-01/2025 — CICLO DE TESORERÍA

DESTINATARIOS:
- Comité de Auditoría
- Junta Directiva
- Gerencia General

RESUMEN EJECUTIVO
Se realizó la auditoría del ciclo de tesorería correspondiente
al ejercicio 2024, abarcando caja chica, cuentas bancarias,
pagos y conciliaciones. Se identificaron 5 hallazgos, de los
cuales 1 es de riesgo alto, 2 medio y 2 bajo. El control
interno general se evalúa como ACEPTABLE con oportunidades
de mejora.

OBJETIVO
Evaluar la eficacia del control interno sobre el manejo de
efectivo, cuentas bancarias, pagos y conciliaciones bancarias
del ejercicio 2024.

ALCANCE
Período: 01/01/2024 al 31/12/2024
Procesos: caja chica, cuentas bancarias (4), pagos,
conciliaciones bancarias.
Limitaciones: la entidad no cuenta con políticas formales
de tesorería aprobadas por la Junta Directiva.

METODOLOGÍA
- Entrevistas con Gerente de Finanzas y tesorero
- Revisión documental (conciliaciones, cheques, comprobantes)
- Pruebas sustantivas y de cumplimiento
- Arqueos sorpresivos
- Confirmaciones bancarias

NORMATIVA DE REFERENCIA
- IPPF del IIA
- COSO 2013
- Normas internas

HALLAZGOS

HALLAZGO N° 1 — RIESGO ALTO
Condición: Un usuario (tesorero) tiene acceso total al sistema
bancario online, pudiendo iniciar, aprobar y liberar
transferencias sin intervención de otro usuario.
Criterio: Los controles generales de TI y las buenas prácticas
bancarias exigen segregación de funciones (quien inicia no
debe aprobar).
Causa: Configuración inadecuada del sistema por parte del banco
y ausencia de políticas internas de acceso.
Efecto: Riesgo de fraude o error no detectado; pérdida
potencial ilimitada.
Recomendación: Configurar perfiles separados (iniciador,
aprobador, liberador) con usuarios distintos y aprobación por
el Gerente de Finanzas para transferencias > 50 UT.
Respuesta de la administración: Aceptada. Se coordinará con el
banco la reconfiguración.
Responsable: Gerente de Finanzas
Fecha compromiso: 30/06/2025

HALLAZGO N° 2 — RIESGO MEDIO
Condición: 2 de 48 conciliaciones bancarias (abril cuenta 4 y
septiembre cuenta 2) no cuentan con firma de revisión.
Criterio: Las políticas internas exigen revisión y firma del
Gerente de Finanzas en todas las conciliaciones.
Causa: Omisión del procedimiento por carga de trabajo.
Efecto: Riesgo de que errores u omisiones no sean detectados.
Recomendación: Implementar checklist mensual de cumplimiento
y reentrenamiento del personal.
Responsable: Gerente de Finanzas
Fecha compromiso: 31/05/2025

HALLAZGO N° 3 — RIESGO MEDIO
Condición: Cheque N° 000892 por Bs. 45.000 con 180 días sin
cobrar, sin gestión de anulación.
Criterio: Buenas prácticas de tesorería recomiendan anular
cheques no cobrados después de 90 días.
Causa: Falta de seguimiento.
Efecto: Riesgo de que el cheque sea cobrado posteriormente
en perjuicio de la entidad.
Recomendación: Anular el cheque, restituir el saldo y notificar
al beneficiario.
Responsable: Tesorero
Fecha compromiso: 30/04/2025

HALLAZGO N° 4 — RIESGO BAJO
Condición: Depósito en tránsito de Bs. 200.000 con 95 días de
antigüedad (cuenta 4). Verificado su abono posterior.
Recomendación: Implementar control de partidas conciliatorias
con más de 60 días.

HALLAZGO N° 5 — RIESGO BAJO
Condición: Arqueo de caja chica sin periodicidad definida.
Recomendación: Establecer arqueos sorpresivos mensuales.

CONCLUSIÓN GENERAL
El control interno del ciclo de tesorería se evalúa como
ACEPTABLE. Los hallazgos identificados no afectan de manera
significativa la razonabilidad de los registros contables,
pero deben ser atendidos para fortalecer el ambiente de
control.

SEGUIMIENTO
Se realizará seguimiento a los 5 hallazgos en la auditoría
AUD-05 (octubre 2025).

_____ FIRMA _____
[Nombre del Jefe de Auditoría Interna]
CIA — Certified Internal Auditor
Fecha: 30/04/2025`,
    observaciones: [
      "No incluir la respuesta de la administración (informe incompleto)",
      "No clasificar los hallazgos por riesgo (no se puede priorizar)",
      "No documentar condición, criterio, causa y efecto de cada hallazgo",
      "No indicar responsables ni fechas compromiso",
      "No incluir conclusión general sobre el control interno",
      "No proponer seguimiento (los hallazgos quedan sin verificar)",
      "No firmar por el jefe de auditoría interna",
      "Convertir el informe en un listado de quejas sin evidencia"
    ],
    video: {
      titulo: "Informe de Auditoría Interna — Estructura y redacción",
      url: "https://www.youtube.com/watch?v=INFIAI2025",
      caratula: "assets/caratulas/informe-ai.jpg",
      duracion: "27:30"
    },
    descargas: [
      { nombre: "Plantilla Word — Informe de Auditoría Interna", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Cédula de hallazgo (Excel)", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  }

};