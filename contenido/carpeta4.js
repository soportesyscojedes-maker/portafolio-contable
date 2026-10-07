// ============================================
// CARPETA 4: DECLARACIONES FISCALES (VENEZUELA)
// Normativa: COT, Ley de ISLR, Ley de IVA, Providencias SENIAT
// ============================================

const contenidoCarpeta4 = {

  // ============ 4.1 ============
  "4.1": {
    nombre: "Declaración de ISLR — Persona Natural (Forma DP-11 / Actual)",
    objetivo: "Determinar y declarar el enriquecimiento neto anual obtenido por una persona natural residente o no residente en Venezuela, aplicando las rebajas, desgravámenes y tarifas progresivas previstas en la Ley de ISLR, para liquidar el impuesto a pagar o la devolución correspondiente.",
    normativaInt: "No existe equivalente directo internacional. Se rige por el principio de renta mundial (OCDE, art. 7 Modelo de Convenio) y NIC 12 (impuesto a las ganancias) desde la perspectiva contable.",
    normativaVe: "Ley de ISLR (art. 1 al 55); Reglamento de la Ley de ISLR; Código Orgánico Tributario (COT); Providencia SNAT/2015/0073 y sus actualizaciones; Providencia del Calendario de Sujetos Pasivos Especiales; Providencias de Facturación.",
    campos: [
      "Datos del contribuyente: nombre, C.I., RIF, domicilio fiscal, teléfono, correo",
      "Ejercicio fiscal declarado (año)",
      "Cédula de enriquecimiento (ingresos brutos totales)",
      "Costos y gastos deducibles",
      "Enriquecimiento neto",
      "Desgravámenes (vivienda, educación, salud, seguros HCM, intereses hipotecarios)",
      "Rebajas (por sueldos y salarios, por dependientes)",
      "Enriquecimiento neto gravable",
      "Cálculo del impuesto según tarifa del art. 50 Ley de ISLR (tarifa N° 1 o N° 2)",
      "Sustracciones (retenciones, anticipos, impuestos pagados)",
      "Impuesto a pagar o devolución",
      "Firma del contribuyente o representante legal",
      "Firma del contador público (con C.P.C.) en caso de llevar contabilidad"
    ],
    ejemplo: `DECLARACIÓN DEFINITIVA DE IMPUESTO SOBRE LA RENTA
PERSONA NATURAL — EJERCICIO 2024
(Formulario DP-11 según Providencia vigente)

DATOS DEL CONTRIBUYENTE
Nombre:    MARÍA GÓMEZ
C.I.:      V-12.345.678
RIF:       V-12345678-9
Domicilio: Av. Principal, Qta. Ana, Caracas
Teléfono:  0212-555-1234

CÁLCULO DEL ENRIQUECIMIENTO NETO
Ingresos brutos (sueldos + honorarios)         240.000.000
(-) Costos y gastos deducibles                 (18.000.000)
(-) Desgravámenes                               (12.000.000)
= Enriquecimiento neto                         210.000.000

(-) Rebajas:
   Por sueldos y salarios (art. 55)             (3.600.000)
   Por dependientes (2 hijos × 8 UT)              (640.000)
= Enriquecimiento neto gravable                 205.760.000

CÁLCULO DEL IMPUESTO
Aplicando tarifa N° 2 (art. 50 Ley de ISLR):
  Hasta 2.000 UT: 15% sobre el excedente
  Más de 2.000 UT: 34% sobre excedente de 3.000 UT
  [cálculo según UT vigente al cierre]

Impuesto causado                                 X.XXX.XXX
(-) Retenciones ISLR del ejercicio              (X.XXX.XXX)
(-) Anticipos pagados                           (X.XXX.XXX)
= IMPUESTO A PAGAR                                X.XXX.XXX

_____ FIRMA _____           _____ FIRMA _____
María Gómez                 [Contador Público]
V-12.345.678                C.P.C. N° 12345

Fecha de presentación: 31/03/2025 (según calendario SENIAT)`,
    observaciones: [
      "No declarar el ejercicio fiscal completo (enero a diciembre)",
      "Olvidar sumar ingresos por honorarios, alquileres o actividades independientes",
      "No aplicar correctamente los desgravámenes (límites establecidos en la Ley)",
      "No restar las rebajas de sueldos y dependientes (art. 55)",
      "Confundir la tarifa N° 1 (personas no residentes) con la N° 2 (residentes)",
      "No declarar rentas exentas o exoneradas por separado",
      "No firmar con C.P.C. cuando se lleva contabilidad",
      "No pagar en el plazo del calendario SENIAT (genera intereses y multas)",
      "No presentar declaración por internet cuando el contribuyente está obligado",
      "Utilizar formatos obsoletos (verificar siempre el vigente)"
    ],
    video: {
      titulo: "Cómo declarar ISLR Persona Natural en el SENIAT paso a paso",
      url: "https://www.youtube.com/watch?v=ISLRPN2024",
      caratula: "assets/caratulas/islr-pn.jpg",
      duracion: "28:15"
    },
    descargas: [
      { nombre: "Plantilla Excel — Cálculo ISLR Persona Natural", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Guía PDF — Desgravámenes y Rebajas vigentes", tipo: "pdf", url: "https://drive.google.com/..." },
      { nombre: "Calendario SENIAT de presentación", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 4.2 ============
  "4.2": {
    nombre: "Declaración de ISLR — Persona Jurídica (Forma DP-12 / Actual)",
    objetivo: "Declarar el enriquecimiento neto anual de una sociedad mercantil o entidad jurídica, aplicando la alícuota proporcional del 34% prevista en la Ley de ISLR, incluyendo ajustes por inflación, costos, gastos, rebajas, exenciones y desgravámenes, para liquidar el impuesto a pagar o la pérdida fiscal del ejercicio.",
    normativaInt: "NIC 12 (Impuesto a las Ganancias); NIIF 12 (Revelación de participaciones); OCDE — Modelo de Convenio Tributario.",
    normativaVe: "Ley de ISLR (art. 7, 9, 22, 25 al 45); Reglamento de la Ley de ISLR; Providencia SNAT/2015/0073; Providencias de precios de transferencia; Código Orgánico Tributario.",
    campos: [
      "Identificación de la sociedad: razón social, RIF, domicilio fiscal, actividad",
      "Datos del representante legal y del contador",
      "Ejercicio económico declarado (fecha inicio - fecha cierre)",
      "Ingresos brutos (operacionales y no operacionales)",
      "Costos y gastos deducibles",
      "Enriquecimiento neto contable",
      "Ajustes fiscales (partidas no deducibles, ajustes por inflación si aplica)",
      "Rebajas (inversiones, actividades de investigación, utilidades invertidas)",
      "Enriquecimiento neto fiscal",
      "Pérdidas de ejercicios anteriores (si aplica)",
      "Enriquecimiento neto gravable",
      "Impuesto (34% sobre enriquecimiento neto)",
      "Retenciones, anticipos y pagos a cuenta",
      "Sustracciones y subsidios (por contratación de personas con discapacidad, entre otros)",
      "Impuesto a pagar o saldo a favor",
      "Pago del 1% de utilidades (art. 63 Ley de ISLR - ICET)",
      "Firma del representante legal y del contador con C.P.C."
    ],
    ejemplo: `DECLARACIÓN DEFINITIVA DE IMPUESTO SOBRE LA RENTA
PERSONA JURÍDICA — EJERCICIO 2024
(Formulario DP-12 según Providencia vigente)

DATOS DE LA SOCIEDAD
Razón social:   SUPERMERCADO EL AHORRO, C.A.
RIF:            J-12345678-9
Domicilio:      Av. Principal, Local 5, Caracas
Actividad:      Venta al detal de productos de consumo masivo
Representante:  [Nombre], C.I. V-XX.XXX.XXX
Contador:       [Nombre], C.P.C. N° XXXXX

RESULTADO FISCAL DEL EJERCICIO
Ingresos brutos operacionales             1.200.000.000
(-) Costos y gastos deducibles             (920.000.000)
= Enriquecimiento neto contable             280.000.000

(+) Ajustes fiscales:
    Gastos no deducibles                     12.000.000
    Depreciación fiscal vs contable           8.000.000
(-) Ingresos no gravados                     (5.000.000)
= Enriquecimiento neto fiscal               295.000.000

(-) Rebajas por inversiones                 (10.000.000)
(-) Pérdidas de ejercicios anteriores       (25.000.000)
= ENRIQUECIMIENTO NETO GRAVABLE             260.000.000

IMPUESTO (34%)
Impuesto causado                             88.400.000
(-) Retenciones ISLR                        (15.000.000)
(-) Anticipos pagados                       (30.000.000)
= IMPUESTO A PAGAR                           43.400.000

1% de utilidades (Art. 63)                   2.800.000
(pago al Fisco Nacional para programas sociales)

_____ FIRMA _____           _____ FIRMA _____
[Representante Legal]       [Contador Público]
C.I. V-XX.XXX.XXX           C.P.C. N° XXXXX

Fecha de presentación: dentro de los 3 meses siguientes al cierre`,
    observaciones: [
      "No presentar dentro de los 3 meses siguientes al cierre fiscal",
      "No aplicar correctamente los ajustes fiscales (partidas no deducibles, no gravadas)",
      "No considerar el 1% de utilidades del art. 63 Ley de ISLR",
      "No declarar correctamente el ajuste por inflación (cuando aplique por Providencia)",
      "No presentar el informe de precios de transferencia cuando se superan los umbrales",
      "No firmar el representante legal y el contador con C.P.C.",
      "No pagar el impuesto dentro del plazo (intereses moratorios)",
      "No presentar la declaración por internet (obligatorio para la mayoría de contribuyentes)",
      "Confundir enriquecimiento contable con enriquecimiento fiscal",
      "No llevar contabilidad conforme al Código de Comercio y VEN-NIIF"
    ],
    video: {
      titulo: "ISLR Persona Jurídica — Cálculo y presentación SENIAT",
      url: "https://www.youtube.com/watch?v=ISLRPJ2024",
      caratula: "assets/caratulas/islr-pj.jpg",
      duracion: "32:40"
    },
    descargas: [
      { nombre: "Plantilla Excel — Cálculo ISLR Persona Jurídica", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Conciliación fiscal vs contable", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Guía de ajustes fiscales", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 4.3 ============
  "4.3": {
    nombre: "Declaración de IVA (Formulario 30 / Actual)",
    objetivo: "Declarar mensualmente el Impuesto al Valor Agregado causado en las operaciones de venta de bienes y prestación de servicios, así como el IVA crédito fiscal por compras y gastos, para determinar el impuesto a pagar o el saldo a favor del contribuyente.",
    normativaInt: "Directiva 2006/112/CE (UE, como referencia comparada); no existe NIIF específica sobre IVA. NIC 12 se aplica para el reconocimiento contable.",
    normativaVe: "Ley de IVA (Decreto N° 1.436 con rango de Ley); Reglamento General de la Ley de IVA; Providencia SNAT/2015/0073 y sus actualizaciones; Providencias sobre retenciones y facturación; Código Orgánico Tributario.",
    campos: [
      "Identificación del contribuyente: RIF, razón social, período",
      "Ventas internas gravadas y exentas",
      "Ventas de exportación (alícuota 0%)",
      "Débito fiscal (IVA sobre ventas)",
      "Compras y gastos internos",
      "Crédito fiscal (IVA sobre compras)",
      "Ajustes (devoluciones, notas de crédito, IVA en importaciones)",
      "Retenciones de IVA sufridas",
      "IVA a pagar o saldo a favor",
      "Pago en bolívares o en divisas (según normativa vigente)",
      "Firma del contribuyente o representante legal",
      "Firma del contador cuando aplica"
    ],
    ejemplo: `DECLARACIÓN MENSUAL DE IMPUESTO AL VALOR AGREGADO
PERÍODO: NOVIEMBRE 2024
(Formulario 30 según Providencia vigente)

IDENTIFICACIÓN DEL CONTRIBUYENTE
Razón social: SUPERMERCADO EL AHORRO, C.A.
RIF:          J-12345678-9
Período:      Noviembre 2024

OPERACIONES DEL PERÍODO
Ventas internas gravadas (16%)              300.000.000
Ventas exentas                                5.000.000
Exportaciones                                10.000.000
Base imponible general                      300.000.000

IVA DÉBITO FISCAL
Débito fiscal (16% sobre ventas)             48.000.000

IVA CRÉDITO FISCAL
Compras internas gravadas                   180.000.000
Crédito fiscal (16% sobre compras)           28.800.000
IVA en importaciones                          2.500.000
(-) Retenciones de IVA sufridas              (1.200.000)
Crédito fiscal total                         30.100.000

LIQUIDACIÓN
Débito fiscal                                48.000.000
(-) Crédito fiscal                          (30.100.000)
= IVA A PAGAR                                17.900.000

Forma de pago: Declaración electrónica vía portal SENIAT
Fecha límite: según calendario del noveno dígito del RIF

_____ FIRMA _____           _____ FIRMA _____
[Representante Legal]       [Contador Público]
C.I. V-XX.XXX.XXX           C.P.C. N° XXXXX`,
    observaciones: [
      "No declarar dentro de los primeros 15 días del mes siguiente (según dígito del RIF)",
      "Omitir operaciones de exportación (tienen tratamiento especial 0%)",
      "No calcular correctamente el crédito fiscal por importaciones",
      "No restar las retenciones de IVA sufridas",
      "No declarar cuando hay saldo a favor (es obligatorio declarar, aunque no se pague)",
      "No actualizar la alícuota vigente (varía por providencias temporales)",
      "Confundir contribuyentes ordinarios con formales",
      "No llevar libro de ventas y libro de compras conforme al Reglamento",
      "No emitir facturas conforme a la Providencia de Facturación",
      "No pagar en la moneda exigida por la normativa vigente"
    ],
    video: {
      titulo: "Declaración de IVA mensual — Formulario 30 SENIAT",
      url: "https://www.youtube.com/watch?v=IVA2024",
      caratula: "assets/caratulas/iva.jpg",
      duracion: "22:35"
    },
    descargas: [
      { nombre: "Plantilla Excel — Declaración IVA mensual", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Libro de ventas formato SENIAT", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Libro de compras formato SENIAT", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 4.4 ============
  "4.4": {
    nombre: "Declaración de ISAE (Impuesto sobre Actividades Económicas)",
    objetivo: "Declarar y pagar el impuesto municipal sobre actividades económicas, industriales, comerciales o de servicios, calculado sobre los ingresos brutos del período, aplicando la alícuota establecida en la ordenanza del municipio correspondiente al domicilio fiscal del contribuyente.",
    normativaInt: "No existe equivalente directo. Se asimila a los impuestos locales sobre actividades económicas en otros países.",
    normativaVe: "Ley Orgánica del Poder Público Municipal (art. 178-186); Ordenanzas municipales (Alcaldía Metropolitana de Caracas, Municipio Chacao, Baruta, Sucre, etc.); Providencias municipales; Código Orgánico Tributario.",
    campos: [
      "Identificación del contribuyente (RIF, razón social, actividad)",
      "Municipio donde declara",
      "Período declarado (mensual, trimestral o anual según ordenanza)",
      "Ingresos brutos del período",
      "Alícuota aplicable (varía por actividad y municipio)",
      "Mínimo tributable (establecido por ordenanza en UT)",
      "Impuesto causado",
      "Retenciones sufridas (si aplica)",
      "Sustracciones y exoneraciones",
      "Impuesto a pagar",
      "Firma del representante legal y del contador"
    ],
    ejemplo: `DECLARACIÓN DE IMPUESTO SOBRE ACTIVIDADES ECONÓMICAS
MUNICIPIO CHACAO — PERÍODO: NOVIEMBRE 2024

IDENTIFICACIÓN DEL CONTRIBUYENTE
Razón social: SUPERMERCADO EL AHORRO, C.A.
RIF:          J-12345678-9
Actividad:    Comercio al detal — Código 5211
Domicilio:    Av. Principal, Local 5, Chacao

CÁLCULO DEL IMPUESTO
Ingresos brutos del mes                   300.000.000
Alícuota aplicable (Ordenanza Chacao)            0,20%
Mínimo tributable (según ordenanza)          (2,5 UT)
Impuesto causado                              600.000
(-) Retenciones ISAE sufridas              (100.000)
= IMPUESTO A PAGAR                            500.000

PRESENTACIÓN
Modalidad: declaración en línea en portal de la Alcaldía
Frecuencia: mensual (según ordenanza vigente)
Fecha límite: 10 días hábiles del mes siguiente

_____ FIRMA _____           _____ FIRMA _____
[Representante Legal]       [Contador Público]
C.I. V-XX.XXX.XXX           C.P.C. N° XXXXX`,
    observaciones: [
      "No declarar en el municipio correcto donde tiene domicilio fiscal",
      "No verificar la ordenanza vigente (cambia cada año en cada alcaldía)",
      "Omitir ingresos brutos por servicios adicionales",
      "No aplicar el mínimo tributable (algunos municipios eximen el pago si está por debajo)",
      "Confundir ISAE con ISLR (son impuestos distintos, no se compensan)",
      "No presentar aún cuando no haya actividad (muchos municipios exigen declaración informativa)",
      "No conservar las declaraciones anteriores (necesarias para fiscalizaciones)",
      "No verificar si hay convenios con otros municipios por actividades itinerantes"
    ],
    video: {
      titulo: "Cómo declarar ISAE en la Alcaldía — paso a paso",
      url: "https://www.youtube.com/watch?v=ISAE2024",
      caratula: "assets/caratulas/isae.jpg",
      duracion: "18:50"
    },
    descargas: [
      { nombre: "Plantilla Excel — Cálculo ISAE", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Resumen de alícuotas por municipio", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 4.5 ============
  "4.5": {
    nombre: "Declaración de Retenciones de ISLR e IVA",
    objetivo: "Reportar mensualmente al SENIAT las retenciones de ISLR e IVA practicadas a terceros (proveedores, empleados, arrendadores) por parte de un agente de retención designado, así como enterar los montos retenidos al Fisco Nacional.",
    normativaInt: "No existe equivalente exacto. Se asimila a los sistemas de retenciones en la fuente (withholding tax) aplicados en distintos países según convenios OCDE.",
    normativaVe: "Código Orgánico Tributario (art. 12, 25, 27); Ley de ISLR (art. 75-87); Decreto de Retenciones de ISLR; Ley de IVA (art. 11); Providencia SNAT/2015/0073; Providencias sobre agentes de retención; Providencia de Facturación.",
    campos: [
      "Identificación del agente de retención (RIF, razón social)",
      "Período declarado (mes)",
      "Tipo de retención: ISLR (sueldos, honorarios, arrendamientos, comisiones) o IVA",
      "Listado de sujetos retenidos: RIF, nombre, monto bruto, % retención, monto retenido",
      "Total retenido por concepto",
      "Total a enterar al Fisco Nacional",
      "Forma de pago y fecha",
      "Comprobante de retención emitido",
      "Firma del representante y del contador"
    ],
    ejemplo: `DECLARACIÓN MENSUAL DE RETENCIONES DE ISLR
AGENTE DE RETENCIÓN
PERÍODO: NOVIEMBRE 2024

IDENTIFICACIÓN DEL AGENTE
Razón social: SUPERMERCADO EL AHORRO, C.A.
RIF:          J-12345678-9
Providencia:  SNAT/2015/0073 — Agente de retención

DETALLE DE RETENCIONES PRACTICADAS

| RIF del sujeto  | Nombre         | Concepto        | Bruto (Bs.) | % | Retenido (Bs.) |
|-----------------|----------------|-----------------|-------------|---|----------------|
| J-98765432-1    | Proveedor A    | Honorarios      | 20.000.000  | 5 | 1.000.000      |
| V-11111111-1    | Arrendador X   | Alquiler        | 15.000.000  | 3 |   450.000      |
| J-55555555-5    | Comisiones B   | Comisiones      | 10.000.000  | 5 |   500.000      |
|-----------------|----------------|-----------------|-------------|---|----------------|
| TOTAL                                                       | 1.950.000      |

ENTERAMIENTO AL FISCO NACIONAL
Monto total retenido de ISLR:                1.950.000
Monto total retenido de IVA:                   320.000
MONTO TOTAL A ENTERAR:                       2.270.000

Forma de pago: Portal SENIAT — declaración electrónica
Fecha límite: dentro de los 3 días hábiles siguientes al cierre

COMPROBANTES DE RETENCIÓN
Se emitieron 3 comprobantes de retención conforme a la Providencia
de Facturación vigente.

_____ FIRMA _____           _____ FIRMA _____
[Representante Legal]       [Contador Público]
C.I. V-XX.XXX.XXX           C.P.C. N° XXXXX`,
    observaciones: [
      "No enterar las retenciones dentro de los plazos (genera intereses y multas)",
      "No emitir los comprobantes de retención a cada sujeto retenido",
      "No declarar las retenciones de IVA cuando se está designado como agente",
      "Confundir los porcentajes de retención (varían por tipo de enriquecimiento)",
      "No aplicar retención por falta de Providencia de Facturación del proveedor",
      "No llevar registro cronológico de las retenciones practicadas",
      "No conservar los comprobantes por 6 años (plazo de prescripción)",
      "No considerar retenciones sobre pagos al exterior (tarifa especial)"
    ],
    video: {
      titulo: "Retenciones de ISLR e IVA — Cómo declarar en el SENIAT",
      url: "https://www.youtube.com/watch?v=RETENC2024",
      caratula: "assets/caratulas/retenciones.jpg",
      duracion: "20:10"
    },
    descargas: [
      { nombre: "Plantilla Excel — Registro de retenciones ISLR", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo de comprobante de retención", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Tabla de alícuotas de retención vigentes", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  }

};