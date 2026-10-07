// ============================================
// CONTENIDO DEL PORTAFOLIO CONTABLE
// Carpeta 1: Estados Financieros
// ============================================

const contenidoCarpeta1 = {

  // ============ 1.1 ============
  "1.1": {
    nombre: "Estado de Situación Financiera (Balance General)",
    objetivo: "Presentar la posición financiera de la entidad en una fecha determinada, mostrando de forma clasificada y ordenada sus activos, pasivos y patrimonio neto, cumpliendo con los requisitos de presentación y revelación.",
    normativaInt: "IAS 1 (Presentación de Estados Financieros); Marco Conceptual NIIF; NIIF 9 (instrumentos financieros); NIIF 16 (arrendamientos); NIC 2 (inventarios); NIC 16 (propiedad, planta y equipo); NIC 36 (deterioro); NIC 37 (provisiones); NIC 38 (intangibles).",
    normativaVe: "VEN-NIIF (Versión Venezolana de las NIIF) emitidas por la FCCPV; BA VEN-NIIF (Basadas en NIIF para PYMES); Código de Comercio (art. 32-35, inventario y balance anual).",
    campos: [
      "Encabezado: nombre de la entidad, título, fecha de corte, moneda",
      "Activos corrientes: efectivo, cuentas por cobrar, inventarios, gastos anticipados",
      "Activos no corrientes: PPE (neto), intangibles, inversiones LP",
      "Pasivos corrientes: cuentas por pagar, obligaciones laborales, impuestos",
      "Pasivos no corrientes: préstamos LP, prestaciones sociales, impuestos diferidos",
      "Patrimonio: capital, reservas, resultados acumulados, resultado del ejercicio, ORI",
      "Total pasivo + patrimonio (debe cuadrar con Total Activos)",
      "Firma del gerente general y del contador público con C.P.C.",
      "Referencia a notas"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
ESTADO DE SITUACIÓN FINANCIERA
Al 31 de diciembre de 2024
(Expresado en bolívares)

ACTIVOS
Activos corrientes:
  Efectivo y equivalentes                1.500.000
  Cuentas por cobrar comerciales         2.300.000
  Inventarios                            4.800.000
  Gastos pagados por anticipado            200.000
    Total activos corrientes              8.800.000

Activos no corrientes:
  Propiedades, planta y equipo (neto)   12.000.000
  Activos intangibles                      500.000
    Total activos no corrientes          12.500.000

TOTAL ACTIVOS                            21.300.000

PASIVOS
Pasivos corrientes:
  Cuentas por pagar comerciales          2.100.000
  Obligaciones laborales                   900.000
  Impuestos por pagar                      600.000
    Total pasivos corrientes              3.600.000

Pasivos no corrientes:
  Prestaciones sociales                  1.200.000
  Préstamos a largo plazo                4.000.000
    Total pasivos no corrientes           5.200.000

TOTAL PASIVOS                             8.800.000

PATRIMONIO
  Capital social                         6.000.000
  Reserva legal                            500.000
  Resultados acumulados                  5.000.000
  Resultado del ejercicio                1.000.000
    TOTAL PATRIMONIO                     12.500.000

TOTAL PASIVO + PATRIMONIO                21.300.000

_______________________     _______________________
Gerente General              Contador Público
                             C.P.C. N° 12345`,
    observaciones: [
      "No clasificar correctamente corriente vs. no corriente (error grave)",
      "No presentar el neto de depreciación y amortización acumulada",
      "No revelar en notas las políticas contables aplicadas",
      "No cuadrar el total activo con pasivo + patrimonio (error fatal)",
      "No firmar el contador con su número de colegiatura",
      "Omitir la moneda de presentación",
      "No comparar con el ejercicio anterior (NIC 1 lo exige)",
      "No revelar activos/pasivos contingentes",
      "No documentar la base de medición (costo, valor razonable, etc.)"
    ],
    video: {
      titulo: "Cómo elaborar un Estado de Situación Financiera paso a paso",
      url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
      caratula: "assets/caratulas/balance-general.jpg",
      duracion: "15:42"
    },
    descargas: [
      { nombre: "Plantilla Excel — Balance General", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Balance General",    tipo: "word",  url: "https://drive.google.com/..." },
      { nombre: "Ejemplo PDF — Balance General",    tipo: "pdf",   url: "https://drive.google.com/..." }
    ]
  },

  // ============ 1.2 ============
  "1.2": {
    nombre: "Estado de Resultados Integral",
    objetivo: "Presentar el desempeño financiero de la entidad durante un período determinado, mostrando ingresos, costos, gastos, resultado del ejercicio y otros resultados integrales, hasta llegar a la ganancia o pérdida total.",
    normativaInt: "IAS 1 (presentación); NIIF 15 (ingresos de contratos con clientes); NIIF 9 (instrumentos financieros); NIC 2 (costos); NIC 19 (beneficios a empleados); NIC 12 (impuestos); NIC 21 (moneda extranjera).",
    normativaVe: "VEN-NIIF / BA VEN-NIIF; Código de Comercio (art. 32-35).",
    campos: [
      "Encabezado: nombre, título, período que cubre, moneda",
      "Ingresos de actividades ordinarias",
      "Costo de ventas y ganancia bruta",
      "Otros ingresos operativos",
      "Gastos de ventas, administración y otros",
      "Ganancia (pérdida) de operaciones",
      "Ingresos financieros y costos financieros",
      "Participación en asociadas/negocios conjuntos",
      "Ganancia antes de impuestos",
      "Gasto por impuesto a las ganancias",
      "Ganancia (pérdida) del ejercicio",
      "Otro resultado integral (ORI): partidas que se reclasifican y no se reclasifican",
      "Resultado integral total del ejercicio"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
ESTADO DE RESULTADOS INTEGRAL
Por el período del 01/01/2024 al 31/12/2024
(Expresado en bolívares)

Ingresos de actividades ordinarias         35.000.000
Costo de ventas                           (22.000.000)
GANANCIA BRUTA                             13.000.000

Otros ingresos                                300.000
Gastos de ventas                           (3.200.000)
Gastos de administración                   (5.500.000)
Otros gastos                                 (100.000)
GANANCIA DE OPERACIONES                     4.500.000

Ingresos financieros                          200.000
Costos financieros                           (700.000)
GANANCIA ANTES DE IMPUESTOS                 4.000.000

Gasto por impuesto a las ganancias         (1.200.000)
GANANCIA DEL EJERCICIO                      2.800.000

Otro resultado integral:
  Diferencia por conversión de moneda        (300.000)
  Ganancia actuarial por prestaciones         100.000
RESULTADO INTEGRAL TOTAL                    2.600.000

_______________________     _______________________
Gerente General              Contador Público
                             C.P.C. N° 12345`,
    observaciones: [
      "Confundir gastos de ventas con administración",
      "No separar operaciones continuadas de discontinuadas (NIIF 5)",
      "No reconocer ingresos bajo NIIF 15 (enfoque de 5 pasos)",
      "No presentar el otro resultado integral correctamente clasificado",
      "Omitir el comparativo con el período anterior",
      "No revelar el impuesto diferido",
      "Mezclar 'otros ingresos' con ingresos ordinarios"
    ],
    video: {
      titulo: "Estado de Resultados Integral — NIIF 15",
      url: "https://www.youtube.com/watch?v=YYYYYYYYYYY",
      caratula: "assets/caratulas/resultados.jpg",
      duracion: "18:05"
    },
    descargas: [
      { nombre: "Plantilla Excel — Estado de Resultados", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Estado de Resultados",     tipo: "word",  url: "https://drive.google.com/..." }
    ]
  },

  // ============ 1.3 ============
  "1.3": {
    nombre: "Estado de Cambios en el Patrimonio",
    objetivo: "Mostrar los movimientos y variaciones que sufrió el patrimonio de la entidad durante el período, detallando por cada componente (capital, reservas, resultados, ORI) los saldos iniciales, ajustes, movimientos y saldos finales.",
    normativaInt: "IAS 1 (párrafos 106-110); NIC 32 (instrumentos de patrimonio); NIIF 2 (pagos basados en acciones); NIC 19 (ganancias actuariales).",
    normativaVe: "VEN-NIIF / BA VEN-NIIF; Código de Comercio (art. 254 y siguientes sobre reserva legal).",
    campos: [
      "Encabezado: nombre de la entidad, título, período, moneda",
      "Columnas por cada componente: capital social, prima de emisión, reserva legal, reservas estatutarias, reservas voluntarias, ORI, resultados acumulados",
      "Fila: saldo al inicio del período",
      "Ajustes por cambios de políticas contables",
      "Ajustes por corrección de errores",
      "Saldo reexpresado al inicio",
      "Resultado integral del período",
      "Emisión de acciones / aportes",
      "Dividendos decretados y pagados",
      "Transferencias entre cuentas (reserva legal)",
      "Otros movimientos",
      "Saldo al final del período (por componente y total)"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
ESTADO DE CAMBIOS EN EL PATRIMONIO
Por el período del 01/01/2024 al 31/12/2024
(Expresado en bolívares)

                   Capital   Reserva   Resultados    ORI        Total
                   Social    Legal     Acumulados
Saldo 01/01/2024  6.000.000   400.000   4.000.000  (100.000) 10.300.000

Resultado integral      —         —     2.800.000  (200.000)  2.600.000
Transferencia a
  reserva legal         —     100.000    (100.000)       —          —
Dividendos              —         —    (1.700.000)       —    (1.700.000)

Saldo 31/12/2024  6.000.000   500.000   5.000.000  (300.000) 11.200.000

_______________________     _______________________
Gerente General              Contador Público
                             C.P.C. N° 12345`,
    observaciones: [
      "No presentar el comparativo del período anterior",
      "No desglosar por componente (presentar todo en una sola columna)",
      "No registrar la reserva legal (5% de la ganancia hasta 10% del capital, según Código de Comercio)",
      "No mostrar los ajustes por cambios de políticas o corrección de errores",
      "No vincular el resultado del período con el Estado de Resultados Integral",
      "Omitir el saldo inicial reexpresado cuando hay ajustes"
    ],
    video: {
      titulo: "Estado de Cambios en el Patrimonio — NIC 1",
      url: "https://www.youtube.com/watch?v=ZZZZZZZZZZZ",
      caratula: "assets/caratulas/patrimonio.jpg",
      duracion: "12:20"
    },
    descargas: [
      { nombre: "Plantilla Excel — Cambios en el Patrimonio", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Cambios en el Patrimonio",     tipo: "word",  url: "https://drive.google.com/..." }
    ]
  },

  // ============ 1.4 ============
  "1.4": {
    nombre: "Estado de Flujos de Efectivo",
    objetivo: "Informar sobre los cambios históricos en el efectivo y equivalentes al efectivo, clasificándolos en actividades de operación, inversión y financiamiento, para evaluar la capacidad de generar efectivo y las necesidades de liquidez.",
    normativaInt: "IAS 7 (Estado de Flujos de Efectivo); NIC 21 (efecto de variaciones cambiarias).",
    normativaVe: "VEN-NIIF / BA VEN-NIIF; Código de Comercio (art. 32-35).",
    campos: [
      "Encabezado: nombre, título, período, moneda",
      "Método utilizado (directo o indirecto) — debe declararse",
      "Actividades de operación: resultado del ejercicio + ajustes no monetarios + cambios en capital de trabajo",
      "Actividades de inversión: adquisición/venta de PPE, inversiones, cobros",
      "Actividades de financiamiento: préstamos obtenidos/pagados, emisión de acciones, dividendos",
      "Aumento (disminución) neto de efectivo",
      "Efectivo al inicio del período",
      "Efecto de variación cambiaria sobre el efectivo",
      "Efectivo al final del período (debe coincidir con el Balance General)"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
ESTADO DE FLUJOS DE EFECTIVO
Por el período del 01/01/2024 al 31/12/2024
(Método indirecto - Expresado en bolívares)

FLUJOS DE ACTIVIDADES DE OPERACIÓN
Ganancia del ejercicio                      2.800.000
Ajustes:
  Depreciación                                800.000
  Amortización                                 50.000
  Provisión para prestaciones                 200.000
Cambios en capital de trabajo:
  Aumento cuentas por cobrar                 (300.000)
  Aumento inventarios                        (500.000)
  Aumento cuentas por pagar                   200.000
Efectivo neto de operación                  3.250.000

FLUJOS DE ACTIVIDADES DE INVERSIÓN
Adquisición de PPE                         (1.500.000)
Venta de activos                              100.000
Efectivo neto de inversión                 (1.400.000)

FLUJOS DE ACTIVIDADES DE FINANCIAMIENTO
Préstamos obtenidos                         2.000.000
Pago de préstamos                          (1.500.000)
Dividendos pagados                         (1.700.000)
Efectivo neto de financiamiento            (1.200.000)

AUMENTO NETO DE EFECTIVO                     650.000
Efectivo al inicio                            850.000
Efectivo al final                           1.500.000

_______________________     _______________________
Gerente General              Contador Público
                             C.P.C. N° 12345`,
    observaciones: [
      "Confundir actividades de inversión con financiamiento",
      "No reclasificar correctamente los intereses pagados/recibidos",
      "No revelar transacciones no monetarias (ej: compra de activo con préstamo directo)",
      "No cuadrar el efectivo final con el del Balance General",
      "Omitir el efecto de la variación cambiaria (crítico en Venezuela)",
      "No elegir y declarar el método (directo o indirecto)"
    ],
    video: {
      titulo: "Estado de Flujos de Efectivo — Método Indirecto (IAS 7)",
      url: "https://www.youtube.com/watch?v=AAAAAAAAAAA",
      caratula: "assets/caratulas/flujos.jpg",
      duracion: "20:15"
    },
    descargas: [
      { nombre: "Plantilla Excel — Flujos de Efectivo", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Flujos de Efectivo",     tipo: "word",  url: "https://drive.google.com/..." }
    ]
  },

  // ============ 1.5 ============
  "1.5": {
    nombre: "Notas a los Estados Financieros",
    objetivo: "Revelar información complementaria, cualitativa y cuantitativa, necesaria para que los usuarios comprendan y evalúen la situación financiera, el desempeño y los flujos de efectivo de la entidad.",
    normativaInt: "IAS 1 (párrafos 112-138); NIIF 7 (instrumentos financieros); NIIF 13 (valor razonable); NIC 10 (eventos posteriores); NIC 24 (partes relacionadas); NIC 37 (provisiones y contingencias); NIIF 8 (segmentos).",
    normativaVe: "VEN-NIIF / BA VEN-NIIF; Código de Comercio (art. 32-35); Providencias SENIAT sobre revelación fiscal.",
    campos: [
      "Nota 1: Información general (nombre, constitución, actividad, RIF, domicilio)",
      "Nota 2: Base de preparación (marco normativo VEN-NIIF o BA VEN-NIIF, moneda funcional, base de medición)",
      "Nota 3: Políticas contables significativas (ingresos, inventarios, PPE, intangibles, deterioro, instrumentos financieros, beneficios a empleados, impuestos, moneda extranjera, arrendamientos, provisiones)",
      "Nota 4: Juicios y estimaciones contables críticas",
      "Notas 5 en adelante: Desglose de partidas (efectivo, cuentas por cobrar, inventarios, PPE, intangibles, cuentas por pagar, obligaciones laborales, préstamos, patrimonio, ingresos y gastos)",
      "Instrumentos financieros y gestión de riesgos (NIIF 7)",
      "Valor razonable (NIIF 13)",
      "Partes relacionadas (NIC 24)",
      "Contingencias y compromisos (NIC 37)",
      "Eventos posteriores (NIC 10)",
      "Aprobación de los estados financieros"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
NOTAS A LOS ESTADOS FINANCIEROS
Al 31 de diciembre de 2024

NOTA 1 — INFORMACIÓN GENERAL
Supermercado El Ahorro, C.A. es una sociedad mercantil constituida
en Venezuela, inscrita en el Registro Mercantil del Distrito Capital,
bajo el N° 25, Tomo 10-A, de fecha 15/03/2010, con RIF J-12345678-9.
Su actividad principal es la venta al detal de productos de consumo
masivo. Domicilio fiscal: Av. Principal, Local 5, Caracas.

NOTA 2 — BASE DE PREPARACIÓN
Los estados financieros han sido preparados conforme a la Versión
Venezolana de las Normas Internacionales de Información Financiera
(VEN-NIIF) emitidas por la FCCPV. Moneda funcional: bolívar (Bs.).

NOTA 3 — POLÍTICAS CONTABLES SIGNIFICATIVAS
3.1 Reconocimiento de ingresos: bajo NIIF 15, al transferirse el
    control de los bienes al cliente (punto de venta).
3.2 Inventarios: medidos al menor entre el costo (PEPS) y el valor
    neto de realización (NIC 2).
3.3 PPE: al costo menos depreciación acumulada. Depreciación lineal.
    Vida útil: inmuebles 20 años, mobiliario 10, vehículos 5, equipos 4.
3.4 Deterioro: evaluación anual bajo NIC 36.

NOTA 4 — EFECTIVO Y EQUIVALENTES
  Caja chica                       50.000
  Bancos nacionales             1.200.000
  Efectivo en tránsito            250.000
    Total                       1.500.000

NOTA 5 — PROPIEDADES, PLANTA Y EQUIPO
  Descripción      Costo      Dep. Acum.    Neto
  Inmuebles       8.000.000   1.200.000   6.800.000
  Mobiliario      3.000.000     800.000   2.200.000
  Vehículos       2.500.000     900.000   1.600.000
  Equipos         2.000.000     600.000   1.400.000
    Total        15.500.000   3.500.000  12.000.000

NOTA 6 — PARTES RELACIONADAS
  Saldos con el accionista mayoritario por Bs. 200.000 en cuentas
  por cobrar, sin intereses ni plazos definidos.

NOTA 7 — EVENTOS POSTERIORES
  El 15/01/2025, la Asamblea de Accionistas aprobó los estados
  financieros aquí presentados.

NOTA 8 — APROBACIÓN
  Aprobados por la Junta Directiva el 20/02/2025.

_______________________     _______________________
Gerente General              Contador Público
                             C.P.C. N° 12345`,
    observaciones: [
      "No revelar las políticas contables significativas",
      "Omitir el marco normativo aplicado (VEN-NIIF vs BA VEN-NIIF)",
      "No desglosar partidas importantes (efectivo, PPE, cuentas por cobrar)",
      "No revelar partes relacionadas (NIC 24)",
      "No indicar juicios y estimaciones críticas",
      "No revelar contingencias ni compromisos",
      "Omitir eventos posteriores",
      "No indicar la fecha de aprobación",
      "No vincular cada nota con el rubro correspondiente del balance",
      "Traducir incorrectamente la terminología del inglés (usar terminología FCCPV)"
    ],
    video: {
      titulo: "Cómo redactar Notas a los Estados Financieros (IAS 1)",
      url: "https://www.youtube.com/watch?v=BBBBBBBBBBB",
      caratula: "assets/caratulas/notas.jpg",
      duracion: "22:30"
    },
    descargas: [
      { nombre: "Plantilla Word — Notas a los EEFF", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Ejemplo PDF — Notas a los EEFF",   tipo: "pdf",  url: "https://drive.google.com/..." }
    ]
  }

};