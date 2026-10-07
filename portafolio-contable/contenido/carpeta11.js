// ============================================
// CARPETA 11: REGULACIÓN VENEZOLANA
// Normativa: SUNAVAL, SUDEBAN, SUDECA, SENIAT
// ============================================

const contenidoCarpeta11 = {

  // ============ 11.1 ============
  "11.1": {
    nombre: "Informe para la SUNAVAL (Superintendencia Nacional de Valores)",
    objetivo: "Presentar a la SUNAVAL la información financiera, contable y de gobierno corporativo exigida a los sujetos regulados (emisores de valores, casas de bolsa, fondos mutuales, sociedades administradoras), para acreditar el cumplimiento de la Ley de Mercado de Valores y las normas dictadas por el regulador.",
    normativaInt: "IOSCO (Principios para la regulación de valores); NIIF (base contable); IFRS 9 y NIIF 7 (instrumentos financieros); NIIF 13 (valor razonable).",
    normativaVe: "Ley de Mercado de Valores (2011); Normas de la SUNAVAL; Providencias SUNAVAL sobre información financiera; Ley del BCV; Código de Comercio; VEN-NIIF.",
    campos: [
      "Encabezado: sujeto regulado, RIF, tipo de entidad",
      "Período reportado (trimestral o anual)",
      "Estados financieros dictaminados o auditados",
      "Informe de gestión",
      "Índices de solvencia, liquidez y endeudamiento",
      "Composición de la cartera de inversiones",
      "Patrimonio neto ajustado",
      "Revelaciones de gobierno corporativo",
      "Revelaciones de operaciones con partes relacionadas",
      "Hechos relevantes del período",
      "Declaración del representante legal",
      "Firma del contador público colegiado"
    ],
    ejemplo: `INFORME TRIMESTRAL A LA SUNAVAL
Sociedad Administradora: FONDOS CARACAS, C.A.
RIF: J-98765432-1
Período: Cuarto trimestre 2024

1. ESTADOS FINANCIEROS
Activos totales:                    850.000.000
Patrimonio neto ajustado:           420.000.000
Cartera de inversiones:             600.000.000
Disponibilidades:                   150.000.000
Pasivos totales:                    430.000.000

2. ÍNDICES REGULATORIOS
Solvencia (patrimonio/activos):              49,4%
(mínimo requerido SUNAVAL: 30%) ✓ Cumple
Liquidez (disponible/pasivos corrientes):    85,2%
(mínimo requerido: 60%) ✓ Cumple
Endeudamiento (pasivos/patrimonio):          102,4%
(máximo requerido: 150%) ✓ Cumple

3. COMPOSICIÓN DE LA CARTERA
Títulos de deuda pública:           300.000.000 (50%)
Acciones cotizadas:                 150.000.000 (25%)
Fondos del mercado monetario:       100.000.000 (16,7%)
Otros títulos autorizados:           50.000.000  (8,3%)
TOTAL                               600.000.000

4. OPERACIONES CON PARTES RELACIONADAS
No se realizaron operaciones con partes relacionadas
fuera del curso ordinario del negocio en el trimestre.

5. HECHOS RELEVANTES
Se recibió autorización de SUNAVAL para lanzar un nuevo
fondo de renta fija a partir del 15/01/2025.

6. GOBIERNO CORPORATIVO
Composición de la Junta Directiva: 5 miembros
Comisario: [Nombre], C.P.C. N° XXXXX
Comité de Auditoría: conformado en el trimestre

7. DECLARACIÓN
Declaro que la información contenida en este informe es
veraz y refleja fielmente la situación financiera de la
sociedad al cierre del trimestre.

_____ FIRMA _____           _____ FIRMA _____
[Representante Legal]       [Contador Público]
                            C.P.C. N° 12345

Caracas, 15 de enero de 2025`,
    observaciones: [
      "No presentar dentro del plazo (15 días del mes siguiente al trimestre)",
      "No cumplir los índices regulatorios (causa sanciones y multas)",
      "No revelar las operaciones con partes relacionadas",
      "No incluir la declaración del representante legal",
      "No firmar por el contador público colegiado",
      "No reportar los hechos relevantes del período",
      "Presentar estados financieros sin dictamen de auditor cuando aplique"
    ],
    video: {
      titulo: "Cómo preparar el informe trimestral a la SUNAVAL",
      url: "https://www.youtube.com/watch?v=SUNAVAL2025",
      caratula: "assets/caratulas/sunaval.jpg",
      duracion: "22:40"
    },
    descargas: [
      { nombre: "Plantilla Excel — Informe SUNAVAL trimestral", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Guía SUNAVAL — Requisitos vigentes", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 11.2 ============
  "11.2": {
    nombre: "Informe para la SUDEBAN (Superintendencia de las Instituciones del Sector Bancario)",
    objetivo: "Presentar a la SUDEBAN la información financiera, contable, prudencial y de riesgo exigida a los bancos, entidades de ahorro y préstamo, y otras instituciones del sector bancario, para acreditar el cumplimiento de la Ley de Instituciones del Sector Bancario y las normas prudenciales del regulador.",
    normativaInt: "Basilea III (Acuerdos de Capital, Liquidez y Riesgo); NIIF 9 (instrumentos financieros); NIIF 7 (revelaciones); NIIF 13 (valor razonable); IOSCO.",
    normativaVe: "Ley de Instituciones del Sector Bancario (2010); Providencias SUDEBAN sobre: índices de solvencia, liquidez, cartera de créditos, riesgo operacional, riesgo de mercado, prevención de legitimación de capitales; Ley del BCV; Código de Comercio; VEN-NIIF.",
    campos: [
      "Encabezado: banco, RIF, tipo de institución, período",
      "Balance general y estado de resultados",
      "Índices regulatorios: patrimonio, solvencia, liquidez, cartera",
      "Clasificación de la cartera de créditos por categoría de riesgo",
      "Cobertura de provisiones por cartera",
      "Riesgo operacional (eventos de pérdida)",
      "Riesgo de mercado (posición de cambio, tasas)",
      "Prevención de legitimación de capitales (PLC/FT)",
      "Operaciones con vinculados",
      "Concentración de créditos por sector y por deudor",
      "Declaración del representante legal",
      "Firma del contador público colegiado"
    ],
    ejemplo: `INFORME MENSUAL A LA SUDEBAN
Institución: BANCO NACIONAL DE CRÉDITO, C.A. BANCO UNIVERSAL
RIF: J-30012345-6
Período: Noviembre 2024

1. SITUACIÓN FINANCIERA
Activos totales:                  15.000.000.000
Cartera de créditos neta:          9.500.000.000
Inversiones en títulos:            3.500.000.000
Disponibilidades:                  1.500.000.000
Pasivos totales:                  13.200.000.000
Patrimonio neto:                   1.800.000.000

2. ÍNDICES REGULATORIOS (Providencia SUDEBAN)
Patrimonio sobre activos y contingentes ponderados:  12,5%
(mínimo requerido: 8% — Basilea III) ✓
Índice de liquidez:                                   62,5%
(mínimo requerido: 30%) ✓
Cartera de créditos / patrimonio:                      5,3x
(máximo recomendado: 10x) ✓
Provisiones / cartera vencida:                          150%
(mínimo requerido: 100%) ✓

3. CARTERA POR CATEGORÍA DE RIESGO
| Categoría                  | Monto (Bs.)     | %      | Provisión |
|----------------------------|-----------------|--------|-----------|
| Categoría A (vigente)      | 8.500.000.000   | 89,5%  | 1%        |
| Categoría B (riesgo bajo)  |   500.000.000   |  5,3%  | 3%        |
| Categoría C (riesgo medio) |   300.000.000   |  3,2%  | 20%       |
| Categoría D (riesgo alto)  |   150.000.000   |  1,6%  | 50%       |
| Categoría E (irrecuperable)|    50.000.000   |  0,5%  | 100%      |
| TOTAL CARTERA              | 9.500.000.000   | 100%   |           |

4. RIESGO OPERACIONAL
Eventos de pérdida reportados en el mes: 1
  - Falla tecnológica en cajero automático: pérdida Bs. 5.000.000
  - Mitigado con seguro vigente.

5. RIESGO DE MERCADO
Posición neta de cambio:                0,8% del patrimonio
(máximo permitido: 10%) ✓
Brecha de tasas:                        controlada

6. PREVENCIÓN DE LEGITIMACIÓN DE CAPITALES
Reportes de operaciones sospechosas (ROS) emitidos: 2
Capacitación del personal: 100% completado en el mes
Oficial de cumplimiento: [Nombre], designado
Auditoría interna de PLC: sin observaciones materiales

7. OPERACIONES CON VINCULADOS
Créditos otorgados a vinculados:    2,1% del patrimonio
(máximo permitido: 10%) ✓

8. DECLARACIÓN
Declaro que la información suministrada es veraz y refleja
la situación de la institución al cierre del mes.

_____ FIRMA _____           _____ FIRMA _____
[Representante Legal]       [Contador Público]
                            C.P.C. N° XXXXX

Caracas, 10 de diciembre de 2024`,
    observaciones: [
      "Incumplir los índices regulatorios (causa intervención del banco)",
      "No presentar la información dentro del plazo establecido",
      "No reportar los ROS (delito grave)",
      "No clasificar correctamente la cartera por categoría de riesgo",
      "Ocultar eventos de riesgo operacional",
      "No designar oficial de cumplimiento (obligación legal)",
      "No revelar operaciones con vinculados",
      "No firmar por el contador público colegiado",
      "Presentar estados financieros sin dictamen cuando aplique"
    ],
    video: {
      titulo: "Informes regulatorios a la SUDEBAN — Guía práctica",
      url: "https://www.youtube.com/watch?v=SUDEBAN2025",
      caratula: "assets/caratulas/sudeban.jpg",
      duracion: "28:35"
    },
    descargas: [
      { nombre: "Plantilla Excel — Informe SUDEBAN mensual", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Providencias SUDEBAN aplicables (PDF)", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 11.3 ============
  "11.3": {
    nombre: "Informe para la SUDECA (Superintendencia de la Actividad Aseguradora)",
    objetivo: "Presentar a la SUDECA la información financiera, técnica y actuarial exigida a las empresas de seguros, reaseguros, sociedades de corretaje y demás sujetos regulados, para acreditar el cumplimiento de la Ley de la Actividad Aseguradora y las normas dictadas por el regulador.",
    normativaInt: "IAIS (Principios básicos de seguros); Solvencia II (referencia UE); NIIF 4 (Contratos de Seguro — reemplazada por NIIF 17 desde 2023); NIIF 17 (Contratos de Seguro); NIIF 9 (instrumentos financieros); NIIF 13 (valor razonable).",
    normativaVe: "Ley de la Actividad Aseguradora (2015); Providencias SUDECA sobre: margen de solvencia, patrimonio neto mínimo, reservas técnicas, inversiones representativas; Ley del BCV; Código de Comercio; VEN-NIIF (NIIF 17 en proceso de adopción).",
    campos: [
      "Encabezado: empresa, RIF, ramo (vida, patrimoniales, ambos)",
      "Estados financieros auditados",
      "Margen de solvencia (patrimonio neto mínimo)",
      "Reservas técnicas: matemáticas, de riesgos en curso, de siniestros",
      "Inversiones representativas de reservas",
      "Índices técnicos: siniestralidad, gastos, combinado",
      "Cartera de pólizas por ramo",
      "Siniestros pendientes de liquidación",
      "Reaseguro cedido y retrocedido",
      "Declaración del representante legal y del actuario",
      "Firma del contador público colegiado"
    ],
    ejemplo: `INFORME TRIMESTRAL A LA SUDECA
Empresa: SEGUROS PROTECCIÓN, C.A.
RIF: J-31098765-4
Ramo: Patrimoniales y Vida
Período: Cuarto trimestre 2024

1. SITUACIÓN FINANCIERA
Activos totales:                  4.500.000.000
Inversiones representativas:      3.000.000.000
Pasivos totales:                  3.200.000.000
Patrimonio neto:                  1.300.000.000

2. MARGEN DE SOLVENCIA (Providencia SUDECA)
Patrimonio neto mínimo requerido: 1.000.000.000
Patrimonio neto real:             1.300.000.000
Excedente:                          300.000.000
Índice de solvencia:                    130%
(mínimo requerido: 100%) ✓

3. RESERVAS TÉCNICAS
Reservas matemáticas (vida):      1.200.000.000
Reservas de riesgos en curso:       600.000.000
Reservas de siniestros:             400.000.000
TOTAL RESERVAS:                   2.200.000.000

4. INVERSIONES REPRESENTATIVAS
Títulos de deuda pública:         1.500.000.000
Bonos corporativos:                 800.000.000
Acciones cotizadas:                 400.000.000
Inmuebles productivos:              300.000.000
TOTAL INVERSIONES:                3.000.000.000
Cobertura de reservas:                  136%
(mínimo requerido: 100%) ✓

5. ÍNDICES TÉCNICOS
Siniestralidad (siniestros/primas):      62,5%
Gastos (gastos/primas):                  22,3%
Índice combinado:                        84,8%
(Óptimo: < 100%) ✓

6. CARTERA POR RAMO
| Ramo                     | Primas emitidas  | Siniestros pagados |
|--------------------------|------------------|--------------------|
| Automóvil                | 1.200.000.000    |   720.000.000      |
| Incendio                 |   800.000.000    |   450.000.000      |
| Vida individual          |   600.000.000    |   380.000.000      |
| Vida grupo               |   400.000.000    |   280.000.000      |
| Responsabilidad civil    |   300.000.000    |   180.000.000      |
| TOTAL                    | 3.300.000.000    | 2.010.000.000      |

7. REASEGURO
Primas cedidas:                     600.000.000
Siniestros recuperados:             350.000.000
Contrato de exceso de pérdida:      vigente

8. SINIESTROS PENDIENTES DE LIQUIDACIÓN
Al cierre del trimestre: 245 casos por Bs. 380.000.000
Reserva constituida:              400.000.000 (105%)

9. DECLARACIÓN
Declaramos que la información suministrada es veraz y refleja
fielmente la situación financiera y técnica al cierre del
trimestre.

_____ FIRMA _____        _____ FIRMA _____       _____ FIRMA _____
[Representante Legal]    [Actuario]             [Contador]
                                                 C.P.C. N° XXXXX

Caracas, 15 de enero de 2025`,
    observaciones: [
      "Incumplir el margen de solvencia (causa intervención del regulador)",
      "No constituir adecuadamente las reservas técnicas",
      "Invertir en activos no admisibles para cubrir reservas",
      "No presentar el informe del actuario cuando aplica",
      "No revelar los siniestros pendientes de liquidación",
      "Reportar primas sin considerar el reaseguro cedido",
      "No firmar por el contador público colegiado",
      "No actualizar las provisiones de siniestros por desarrollo desfavorable"
    ],
    video: {
      titulo: "Cómo preparar los informes trimestrales a la SUDECA",
      url: "https://www.youtube.com/watch?v=SUDECA2025",
      caratula: "assets/caratulas/sudeca.jpg",
      duracion: "26:15"
    },
    descargas: [
      { nombre: "Plantilla Excel — Informe SUDECA trimestral", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Providencias SUDECA aplicables (PDF)", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 11.4 ============
  "11.4": {
    nombre: "Informe para el SENIAT (Providencias y Fiscalizaciones)",
    objetivo: "Presentar al SENIAT la información requerida en procesos de fiscalización, verificación o cruces de información, así como los informes especiales exigidos por providencias (por ejemplo, informes de precios de transferencia, informes de sujetos pasivos especiales, o informes de retenciones), para acreditar el cumplimiento tributario.",
    normativaInt: "OCDE — Directrices de Precios de Transferencia; Modelo de Convenio Tributario OCDE; NIC 12 (Impuesto a las Ganancias).",
    normativaVe: "Código Orgánico Tributario (COT); Ley de ISLR (arts. 100-135 sobre precios de transferencia); Ley de IVA; Providencias del SENIAT sobre: sujetos pasivos especiales, retenciones, precios de transferencia, facturación; Providencia SNAT/2015/0073 y actualizaciones.",
    campos: [
      "Encabezado: contribuyente, RIF, tipo de informe",
      "Período reportado",
      "Base legal (providencia aplicable)",
      "Información financiera y tributaria del período",
      "Cálculos de impuestos (ISLR, IVA, ISAE, retenciones)",
      "Detalle de operaciones con partes relacionadas (si aplica precios de transferencia)",
      "Análisis de métodos de precios de transferencia",
      "Anexos: estados financieros, declaraciones, libros",
      "Declaración del representante legal",
      "Firma del contador público colegiado"
    ],
    ejemplo: `INFORME DE PRECIOS DE TRANSFERENCIA
Contribuyente: GRUPO INDUSTRIAL CARACAS, C.A.
RIF: J-12345678-9
Ejercicio fiscal: 2024
Base legal: Art. 100 al 135 Ley de ISLR y Providencia SNAT/2015/0073

1. INFORMACIÓN GENERAL
Operaciones con partes relacionadas en el exterior:
- Compra de materias primas a RELATED USA CORP (EE.UU.)
- Venta de productos terminados a RELATED SPAIN S.L. (España)
- Regalías pagadas a RELATED CAYMAN LTD (Islas Caimán)
Total operaciones vinculadas: Bs. 2.500.000.000
Total operaciones totales:    Bs. 8.000.000.000
% operaciones vinculadas:     31,25%
(Supera el umbral del 20% — obligado a presentar informe)

2. OPERACIONES DETALLADAS

Operación 1: Compra de materias primas a RELATED USA CORP
  Monto:                                1.200.000.000
  Método aplicado: Precio Comparable No Controlado (PCNC)
  Rango intercuartil de comparables:    1.100.000.000 – 1.350.000.000
  Precio de la operación:               dentro del rango ✓

Operación 2: Venta a RELATED SPAIN S.L.
  Monto:                                  800.000.000
  Método aplicado: Precio de Reventa (PR)
  Margen bruto de reventa:                       18%
  Rango intercuartil comparables:            15% – 22%
  Margen de la operación:                dentro del rango ✓

Operación 3: Regalías a RELATED CAYMAN LTD
  Monto:                                  500.000.000
  Método aplicado: Transacción No Controlada Comparable
  Regalías comparables en el mercado:         3% - 5% de ventas
  Regalías pagadas:                             4,2%
  Dentro del rango ✓

3. ANÁLISIS ECONÓMICO
Se utilizó la base de datos ORBIS para identificar comparables
del sector. Se aplicaron ajustes por diferencias en funciones,
activos y riesgos asumidos.

4. DOCUMENTACIÓN SOPORTE
- Contratos con partes relacionadas
- Facturas y comprobantes
- Análisis de comparables (documentado)
- Estados financieros auditados 2024

5. CONCLUSIÓN
Las operaciones con partes relacionadas se realizaron a valores
de mercado, dentro de los rangos intercuartiles de comparables
independientes, conforme a las Directrices OCDE y la Ley de ISLR
venezolana.

6. DECLARACIÓN
Declaro que la información suministrada es veraz y que los
estudios fueron realizados conforme a la normativa aplicable.

_____ FIRMA _____           _____ FIRMA _____
[Representante Legal]       [Contador Público]
                            C.P.C. N° XXXXX

Caracas, 30 de junio de 2025 (dentro del plazo legal)`,
    observaciones: [
      "No presentar el informe dentro del plazo (6 meses después del cierre)",
      "No documentar adecuadamente los comparables",
      "Aplicar métodos incorrectos según el tipo de operación",
      "No hacer los ajustes por diferencias funcionales",
      "No conservar la documentación soporte por 6 años",
      "No declarar operaciones con partes relacionadas que superan el umbral",
      "Confundir el informe de precios de transferencia con la declaración informativa",
      "No firmar por el contador público colegiado"
    ],
    video: {
      titulo: "Precios de transferencia en Venezuela — Informe SENIAT",
      url: "https://www.youtube.com/watch?v=PT2025",
      caratula: "assets/caratulas/seniat.jpg",
      duracion: "30:40"
    },
    descargas: [
      { nombre: "Plantilla Excel — Análisis de comparables", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Informe de Precios de Transferencia", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Directrices OCDE (resumen)", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  }

};