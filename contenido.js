// ============================================
// CONTENIDO DEL PORTAFOLIO
// ============================================

const contenidoDocs = {

  // ============ CARPETA 1: ESTADOS FINANCIEROS ============

  "1.1": {
    nombre: "Estado de Situación Financiera (Balance General)",
    objetivo: "Presentar la posición financiera de la entidad en una fecha determinada, mostrando de forma clasificada y ordenada sus activos, pasivos y patrimonio neto.",
    normativaInt: "IAS 1; Marco Conceptual NIIF; NIIF 9; NIIF 16; NIC 2; NIC 16; NIC 36; NIC 37; NIC 38.",
    normativaVe: "VEN-NIIF (FCCPV); BA VEN-NIIF; Código de Comercio (art. 32-35).",
    campos: [
      "Encabezado: nombre, título, fecha de corte, moneda",
      "Activos corrientes y no corrientes (netos)",
      "Pasivos corrientes y no corrientes",
      "Patrimonio (capital, reservas, resultados, ORI)",
      "Total pasivo + patrimonio",
      "Firmas: gerente y contador con C.P.C.",
      "Notas referenciadas"
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

TOTAL PASIVO + PATRIMONIO                21.300.000`,
    observaciones: [
      "No clasificar corriente vs. no corriente (error grave)",
      "No presentar el neto de depreciación",
      "No revelar políticas contables en notas",
      "No cuadrar activo con pasivo + patrimonio (fatal)",
      "No firmar contador con C.P.C.",
      "Omitir la moneda de presentación",
      "No comparar con ejercicio anterior",
      "No revelar contingencias"
    ],
    // ---- VIDEO EXPLICATIVO ----
    video: {
      titulo: "Cómo elaborar un Estado de Situación Financiera paso a paso",
      url: "https://www.youtube.com/watch?v=jozoRDeLPhA",
      caratula: "assets/caratulas/balance-general.jpg",
      duracion: "15:42"
    },
    // ---- ARCHIVOS DESCARGABLES ----
    descargas: [
      { nombre: "Plantilla Excel — Balance General", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Balance General",    tipo: "word",  url: "https://drive.google.com/..." },
      { nombre: "Ejemplo PDF — Balance General",    tipo: "pdf",   url: "https://drive.google.com/..." }
    ]
  },

  "1.2": {
    nombre: "Estado de Resultados Integral",
    objetivo: "Presentar el desempeño financiero de la entidad durante un período, mostrando ingresos, costos, gastos y resultado integral.",
    normativaInt: "IAS 1; NIIF 15; NIIF 9; NIC 2; NIC 19; NIC 12; NIC 21.",
    normativaVe: "VEN-NIIF / BA VEN-NIIF; Código de Comercio (art. 32-35).",
    campos: [
      "Encabezado: nombre, título, período, moneda",
      "Ingresos de actividades ordinarias",
      "Costo de ventas y ganancia bruta",
      "Gastos de ventas, administración y otros",
      "Resultado de operaciones",
      "Ingresos y costos financieros",
      "Impuesto a las ganancias",
      "Otro resultado integral",
      "Resultado integral total"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
ESTADO DE RESULTADOS INTEGRAL
Del 01/01/2024 al 31/12/2024
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
RESULTADO INTEGRAL TOTAL                    2.600.000`,
    observaciones: [
      "Confundir gastos de ventas con administración",
      "No separar operaciones continuadas de discontinuadas",
      "No reconocer ingresos bajo NIIF 15 (5 pasos)",
      "No clasificar el otro resultado integral",
      "Omitir comparativo con período anterior",
      "No revelar impuesto diferido",
      "Mezclar otros ingresos con ingresos ordinarios"
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
  }

  // ... aquí seguimos agregando 1.3, 1.4, 1.5, y luego carpetas 2-11
};