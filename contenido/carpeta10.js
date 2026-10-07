// ============================================
// CARPETA 10: PERITAJE Y FORENSE
// Normativa: CPC, NIA 240, ACFE, NIIF 13
// ============================================

const contenidoCarpeta10 = {

  // ============ 10.1 ============
  "10.1": {
    nombre: "Informe de Peritaje Contable",
    objetivo: "Presentar de manera técnica, objetiva y fundamentada el análisis, cálculo, verificación o valoración realizado por un contador público designado como perito por un tribunal o por las partes, para servir como prueba en un proceso judicial o arbitral.",
    normativaInt: "Normas Internacionales de Auditoría como referencia metodológica; Código de Ética IESBA; ACFE (Association of Certified Fraud Examiners) para casos forenses.",
    normativaVe: "Código de Procedimiento Civil (art. 451-461 sobre peritaje); Ley Orgánica del Poder Judicial; Ley del Ejercicio de la Contaduría Pública; Código de Ética del Contador Público Venezolano; Ley Orgánica Procesal del Trabajo (en materia laboral).",
    campos: [
      "Encabezado: tribunal, expediente, partes, fecha",
      "Identificación del perito (nombre, C.P.C., dirección)",
      "Motivo de la designación (punto de cuenta o designación de parte)",
      "Objeto del peritaje (qué se va a analizar)",
      "Documentos examinados (listado)",
      "Metodología aplicada (técnicas y procedimientos)",
      "Análisis y cálculos realizados (cuadros, conciliaciones, soportes)",
      "Resultados y conclusiones técnicas",
      "Cuantificación (si aplica)",
      "Anexos (documentos, cálculos, fotografías)",
      "Firma del perito, C.P.C., fecha",
      "Juramento del cargo (dependiendo del proceso)"
    ],
    ejemplo: `INFORME DE PERITAJE CONTABLE

TRIBUNAL: Juzgado Tercero de Primera Instancia en lo Civil,
Mercantil y Tránsito de la Circunscripción Judicial del Área
Metropolitana de Caracas.

EXPEDIENTE: N° AP11-M-2023-000456

PARTES:
  Demandante: COMERCIAL LA ECONOMÍA, C.A.
  Demandada:   DISTRIBUIDORA DEL CENTRO, C.A.

PERITO: [Nombre], Contador Público Colegiado, C.P.C. N° 12345,
designado por el tribunal en fecha 15/01/2025.

MOTIVO DE LA DESIGNACIÓN
Determinar el monto real de las deudas pendientes entre las
partes, conforme a los libros contables, facturas y
documentos aportados al proceso.

DOCUMENTOS EXAMINADOS
1. Libros de contabilidad de ambas partes (2022-2023)
2. Facturas emitidas y recibidas (2022-2023)
3. Estados de cuenta bancarios
4. Notas de entrega y recibos
5. Contratos de suministro
6. Conciliaciones y comunicaciones entre las partes

METODOLOGÍA
- Revisión documental
- Conciliación de operaciones entre las partes
- Análisis de facturas, notas de débito y crédito
- Cotejo con estados de cuenta
- Entrevistas con los representantes legales
- Verificación de registros contables

ANÁLISIS Y RESULTADOS

1. OPERACIONES ENTRE LAS PARTES
   Total facturado por la demandante:     850.000.000
   Total facturado por la demandada:      120.000.000
   Operaciones netas en el período:       730.000.000

2. PAGOS REALIZADOS
   Pagos comprobados por la demandada:    615.000.000
   Créditos otorgados:                     15.000.000
   Total abonado:                         630.000.000

3. DIFERENCIA COMPROBADA
   Operaciones netas – Pagos =             100.000.000

4. PARTIDAS EN DISCUSIÓN
   Facturas no reconocidas por la demandada:
     Factura N° 001234:                    3.500.000
     Factura N° 001245:                    2.800.000
     Factura N° 001301:                    4.200.000
   Total no reconocido:                   10.500.000
   (Verificadas: las 3 facturas cuentan con nota de entrega
   firmada por el receptor autorizado de la demandada.)

CONCLUSIÓN TÉCNICA
Con base en el análisis realizado, se determina que la deuda
líquida y exigible de la demandada a favor de la demandante
asciende a CIEN MILLONES DE BOLÍVARES (Bs. 100.000.000,00),
correspondiente a la diferencia entre las operaciones netas
y los pagos comprobados, según se detalla en los anexos.

ANEXOS
1. Cuadro de operaciones netas
2. Cuadro de pagos comprobados
3. Análisis de facturas en discusión
4. Copia de facturas y notas de entrega
5. Estados de cuenta bancarios
6. Conciliación final

_____ FIRMA _____
[Nombre del Perito]
Contador Público Colegiado
C.P.C. N° 12345
Firma y sello

Caracas, 30 de marzo de 2025`,
    observaciones: [
      "No fundamentar técnicamente las conclusiones (debilita el informe)",
      "No listar los documentos examinados (impide verificar el alcance)",
      "Emitir opiniones jurídicas (el perito se limita a su área técnica)",
      "No incluir la cuantificación cuando corresponda",
      "No firmar con C.P.C. y sello profesional",
      "No adjuntar los anexos que soportan los cálculos",
      "No jurar el cargo cuando el procedimiento lo exige",
      "Parcializarse hacia una de las partes (falta de objetividad)"
    ],
    video: {
      titulo: "Cómo elaborar un Informe de Peritaje Contable",
      url: "https://www.youtube.com/watch?v=PERITAJE2025",
      caratula: "assets/caratulas/peritaje.jpg",
      duracion: "30:15"
    },
    descargas: [
      { nombre: "Plantilla Word — Informe de Peritaje Contable", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Anexos modelo (Excel)", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 10.2 ============
  "10.2": {
    nombre: "Informe de Auditoría Forense",
    objetivo: "Documentar los resultados de una investigación sobre presuntos fraudes, irregularidades o delitos económicos dentro de una organización, aplicando técnicas contables, de auditoría y de investigación forense para identificar responsables, cuantificar el daño y sustentar acciones legales.",
    normativaInt: "NIA 240 (Responsabilidad del auditor respecto al fraude); ACFE — Manual de Fraude (Fraud Examiners Manual); ACFE — Normas profesionales; AICPA — SAS 99 (referencia); Código de Ética IESBA.",
    normativaVe: "Código Penal (delitos contra la propiedad, estafa, apropiación indebida); Ley contra la Corrupción; Código Orgánico Procesal Penal; Ley del Ejercicio de la Contaduría Pública; Código de Ética del Contador Público Venezolano.",
    campos: [
      "Encabezado: entidad contratante, fecha, referencia",
      "Objetivo de la investigación",
      "Alcance (período, áreas, procesos investigados)",
      "Metodología (entrevistas, revisión documental, análisis de datos, técnicas forenses)",
      "Marco legal y normativo aplicable",
      "Descripción del presunto fraude",
      "Análisis de la evidencia obtenida (documental, testimonial, digital)",
      "Cuantificación del daño",
      "Identificación de los presuntos responsables (si aplica)",
      "Esquema del fraude (cómo se produjo)",
      "Conclusiones",
      "Recomendaciones (preventivas y de acción legal)",
      "Anexos: evidencias, cadenas de custodia",
      "Firma del auditor forense"
    ],
    ejemplo: `INFORME DE AUDITORÍA FORENSE

CONTRATANTE: SUPERMERCADO EL AHORRO, C.A.
CASO: FOR-2025-001
FECHA DEL INFORME: 15/03/2025
AUDITOR FORENSE: [Nombre], Contador Público Colegiado, C.P.C.
N° 12345, CFE (Certified Fraud Examiner)

OBJETIVO
Investigar la presunta sustracción de efectivo en la caja N° 3
de la sucursal principal, detectada durante el arqueo sorpresivo
del 15/02/2025.

ALCANCE
Período investigado: 01/09/2024 al 15/02/2025
Áreas: Caja N° 3 y registros de ventas
Procesos: Cobro, registro y depósito

METODOLOGÍA
- Entrevistas al personal de caja, supervisores y gerente
- Revisión documental (facturas, arqueos, comprobantes)
- Análisis de datos (sistema POS y sistema contable)
- Inspección de videos de seguridad
- Análisis de patrones de faltantes
- Rastreo de depósitos bancarios

MARCO LEGAL APLICABLE
- Código Penal (art. 468 — hurto)
- Código Orgánico Procesal Penal
- LOTTT (causales de despido justificado)
- Normativa interna de la entidad

DESCRIPCIÓN DEL PRESUNTO FRAUDE
Se detectó durante el arqueo sorpresivo del 15/02/2025 un
faltante de Bs. 1.850.000 en la caja N° 3, operada por el
cajero Juan Pérez.

EVIDENCIA OBTENIDA

1. EVIDENCIA DOCUMENTAL
   - 42 faltantes registrados entre septiembre 2024 y febrero
     2025 en la caja N° 3, por un total de Bs. 12.450.000.
   - Anulación inusual de 128 facturas sin justificación
     documental (promedio: 21 anulaciones/mes, muy por encima
     del promedio de las otras cajas: 3/mes).
   - El 100% de las anulaciones fueron realizadas por el mismo
     cajero.

2. EVIDENCIA DIGITAL
   - Análisis del sistema POS: patrón de anulación de facturas
     exactamente 20 minutos antes del cierre de cada turno.
   - Análisis de videos: en 8 ocasiones se observa al cajero
     guardando efectivo en su bolso personal sin registrar la
     operación.
   - Bitácora del sistema: los usuarios y contraseñas del cajero
     y su supervisor eran compartidos, permitiendo anulación
     sin trazabilidad real.

3. EVIDENCIA TESTIMONIAL
   - 3 compañeros manifestaron haber visto al cajero con montos
     importantes de efectivo fuera de caja.
   - El supervisor admitió haber prestado su clave por "confianza".

ESQUEMA DEL FRAUDE
1. El cajero recibía el efectivo del cliente.
2. Anulaba la factura en el sistema POS.
3. Guardaba el efectivo sin registrarlo.
4. Se beneficiaba personalmente.

CUANTIFICACIÓN DEL DAÑO
Suma de faltantes comprobados:        12.450.000
Anulaciones no justificadas (estimado): 8.200.000
TOTAL ESTIMADO DEL DAÑO:              20.650.000

CONCLUSIONES
1. Existe evidencia suficiente y apropiada para concluir que
   el cajero Juan Pérez sustrajo efectivo de la caja N° 3 por
   un monto estimado de Bs. 20.650.000 durante el período.
2. La ausencia de segregación de funciones (compartir claves)
   fue un factor habilitante del fraude.
3. Las políticas de arqueo sorpresivo no se aplicaban con la
   regularidad requerida.

RECOMENDACIONES

Preventivas:
- Implementar usuarios individuales con claves personales.
- Arqueos sorpresivos mensuales (mínimo).
- Rotación periódica de cajeros.
- Conciliación diaria entre POS, arqueo y depósito.

Acción legal:
- Remitir el presente informe al departamento legal para
  iniciar las acciones penales correspondientes.
- Iniciar el procedimiento de despido justificado.

ANEXOS
1. Detalle de faltantes por fecha (Excel)
2. Detalle de facturas anuladas
3. Capturas del sistema POS
4. Copia de videos (cadena de custodia)
5. Entrevistas firmadas
6. Cuantificación del daño

_____ FIRMA _____
[Nombre del Auditor Forense]
CFE — Certified Fraud Examiner
C.P.C. N° 12345
Firma y sello

Caracas, 15 de marzo de 2025`,
    observaciones: [
      "No documentar la cadena de custodia de las evidencias",
      "No cuantificar el daño (debilita la acción legal)",
      "Emitir juicios de valor sobre la culpabilidad (el perito técnico no juzga)",
      "No preservar la confidencialidad del caso",
      "No aplicar técnicas forenses (solo auditoría tradicional)",
      "No coordinar con el departamento legal antes de emitir el informe",
      "No incluir las recomendaciones preventivas (solo sancionatorias)",
      "No firmar con la certificación forense correspondiente"
    ],
    video: {
      titulo: "Auditoría Forense — Metodología y casos prácticos",
      url: "https://www.youtube.com/watch?v=FORENSE2025",
      caratula: "assets/caratulas/forense.jpg",
      duracion: "34:20"
    },
    descargas: [
      { nombre: "Plantilla Word — Informe Forense", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Matriz de esquema del fraude (Excel)", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Cadena de custodia (modelo)", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 10.3 ============
  "10.3": {
    nombre: "Avalúo de Empresas",
    objetivo: "Determinar el valor razonable o económico de una empresa, unidad de negocio o participación accionaria, mediante la aplicación de métodos de valoración reconocidos, para fines de compraventa, fusiones, sucesiones, litigios o decisiones estratégicas.",
    normativaInt: "NIIF 13 (Medición del Valor Razonable); NIIF 3 (Combinaciones de negocios); IVS (International Valuation Standards); práctica de valoración (métodos DCF, múltiplos, activos).",
    normativaVe: "VEN-NIIF; Código de Comercio; práctica de valoración venezolana; Providencias del SENIAT sobre avalúos fiscales.",
    campos: [
      "Encabezado: entidad solicitante, empresa objeto de avalúo, fecha",
      "Objetivo del avalúo y base de valor (valor razonable, valor de mercado, valor en uso)",
      "Información financiera base (EEFF auditados, últimos 3-5 años)",
      "Ajustes normalizantes (partidas no recurrentes, exceso de sueldos, gastos personales)",
      "Métodos aplicados: flujo de caja descontado, múltiplos comparables, valor patrimonial ajustado",
      "Supuestos clave: tasa de descuento (WACC), crecimiento perpetuo, proyecciones",
      "Análisis de sensibilidad",
      "Rango de valor y valor concluido",
      "Limitaciones del avalúo",
      "Firma del perito valorador"
    ],
    ejemplo: `AVALÚO DE EMPRESA

SOLICITANTE: SUPERMERCADO EL AHORRO, C.A.
EMPRESA OBJETO: DISTRIBUIDORA DEL CENTRO, C.A.
FECHA DEL AVALÚO: 31/12/2024
PERITO VALORADOR: [Nombre], Contador Público Colegiado C.P.C.
N° 12345, CVA (Certified Valuation Analyst)

OBJETIVO Y BASE DE VALOR
Determinar el valor razonable del 100% del capital accionario
de Distribuidora del Centro, C.A. al 31/12/2024, bajo el
estándar de Valor Razonable (NIIF 13) y Valor de Mercado (IVS).

INFORMACIÓN FINANCIERA BASE
Estados financieros auditados 2020-2024 (opinión sin salvedades).
Ingresos promedio últimos 3 años:   800.000.000
EBITDA promedio últimos 3 años:     120.000.000
Utilidad neta promedio:              75.000.000
Patrimonio al 31/12/2024:           420.000.000

AJUSTES NORMALIZANTES
(+) Sueldos excesivos socios:        20.000.000
(-) Gastos personales:              (15.000.000)
(-) Ingresos extraordinarios:       (10.000.000)
EBITDA normalizado:                 115.000.000

MÉTODOS APLICADOS

Método 1 — Flujo de Caja Descontado (DCF)
  Proyección 5 años: crecimiento 5% anual
  WACC: 22%
  Crecimiento perpetuo: 3%
  Valor presente flujos 5 años:      400.000.000
  Valor presente perpetuidad:        350.000.000
  Valor de la empresa:               750.000.000
  (-) Deuda neta:                    (200.000.000)
  VALOR DEL EQUITY (DCF):            550.000.000

Método 2 — Múltiplos Comparables
  EBITDA normalizado:                115.000.000
  Múltiplo EV/EBITDA sector:          4,5x
  Valor de la empresa:               517.500.000
  (-) Deuda neta:                    (200.000.000)
  VALOR DEL EQUITY (Múltiplos):      317.500.000

Método 3 — Valor Patrimonial Ajustado
  Patrimonio contable:               420.000.000
  (+) Ajuste a valor de mercado PPE:  80.000.000
  (-) Pasivos contingentes:          (20.000.000)
  VALOR DEL EQUITY (Patrimonial):    480.000.000

RESUMEN DE VALORES
  DCF:                              550.000.000
  Múltiplos:                        317.500.000
  Patrimonial:                      480.000.000

PONDERACIÓN
  DCF: 50%, Múltiplos: 30%, Patrimonial: 20%
  Valor ponderado:                  471.250.000

RANGO DE VALOR
  Mínimo:                           400.000.000
  Máximo:                           550.000.000
  VALOR CONCLUIDO:                  470.000.000

ANÁLISIS DE SENSIBILIDAD
  Si WACC sube a 25%:               500.000.000
  Si WACC baja a 20%:               445.000.000
  Si EBITDA sube 10%:               485.000.000
  Si EBITDA baja 10%:               455.000.000

LIMITACIONES
- El avalúo se basa en información suministrada por la
  administración y no auditada específicamente para este fin.
- Los múltiplos comparables se tomaron de empresas del sector
  en la región.
- No se incluyó análisis de contingencias legales en curso.

_____ FIRMA _____
[Nombre del Perito Valorador]
C.P.C. N° 12345
Firma y sello

Caracas, 31 de diciembre de 2024`,
    observaciones: [
      "No normalizar los estados financieros (valor distorsionado)",
      "Aplicar un solo método (falta triangulación)",
      "No documentar los supuestos (WACC, crecimiento, múltiplos)",
      "No hacer análisis de sensibilidad",
      "No indicar la base de valor (razonable vs mercado vs libros)",
      "No documentar las limitaciones del avalúo",
      "Confundir valor de la empresa (EV) con valor del equity",
      "No firmar con credenciales de valoración"
    ],
    video: {
      titulo: "Avalúo de empresas — Métodos DCF, Múltiplos y Patrimonial",
      url: "https://www.youtube.com/watch?v=AVALUO2025",
      caratula: "assets/caratulas/avaluo.jpg",
      duracion: "38:15"
    },
    descargas: [
      { nombre: "Plantilla Excel — Avalúo DCF", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Informe de Avalúo", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Análisis de sensibilidad (Excel)", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  }

};