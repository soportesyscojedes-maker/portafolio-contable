// ============================================
// CARPETA 5: DOCUMENTOS LABORALES
// Normativa: LOTTT, Reglamento LOTTT, NIC 19, IVSS, INCES, FAOV
// ============================================

const contenidoCarpeta5 = {

  // ============ 5.1 ============
  "5.1": {
    nombre: "Nómina de Pago",
    objetivo: "Registrar de forma ordenada y cronológica los salarios, deducciones legales y contractuales, aportes patronales y neto a pagar a cada trabajador en un período determinado, sirviendo como soporte contable, fiscal y laboral.",
    normativaInt: "NIC 19 (Beneficios a los empleados); NIIF 2 (pagos basados en acciones, si aplica); OIT — Convenios ratificados por Venezuela.",
    normativaVe: "Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras (LOTTT); Reglamento de la LOTTT; Ley del IVSS; Ley del INCES; Ley del FAOV (Decreto con rango de Ley); Ley del Seguro Social; Providencias del BCV.",
    campos: [
      "Encabezado: razón social, RIF, período (mensual, quincenal, semanal)",
      "Datos de cada trabajador: nombres, apellidos, C.I., cargo, fecha de ingreso, departamento",
      "Sueldo básico mensual y sueldo diario",
      "Salario normal (sueldo + primas + bonos regulares)",
      "Salario integral (normal + alícuota utilidades + alícuota bono vacacional)",
      "Días trabajados y días de descanso",
      "Horas extras, bono nocturno, feriados trabajados",
      "Asignaciones: sueldo, primas, bonos, comisiones",
      "Deducciones: SSO (IVSS), RPE (paro forzoso), FAOV (ahorro habitacional), ISLR, préstamos, caja de ahorro, sindicato",
      "Aportes patronales: IVSS, RPE, FAOV, INCES, prestaciones",
      "Neto a pagar",
      "Firmas: gerente, contador C.P.C., y de cada trabajador (acuse de recibo)"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
NÓMINA DE PAGO — PERÍODO: NOVIEMBRE 2024
RIF: J-12345678-9

| # | Nombre y Apellido    | C.I.       | Cargo        | Sueldo Bs. | Días | Asignaciones | Deducciones | Neto Bs. |
|---|----------------------|------------|--------------|-----------:|------|-------------:|------------:|---------:|
| 1 | Juan Pérez           | V-11.111.111 | Cajero      | 8.000.000  | 30   | 8.000.000    | 1.200.000   | 6.800.000|
| 2 | María Rodríguez      | V-22.222.222 | Supervisora | 15.000.000 | 30   | 15.000.000   | 2.400.000   | 12.600.000|
| 3 | Pedro González       | V-33.333.333 | Almacenista | 9.500.000  | 30   | 9.500.000    | 1.400.000   | 8.100.000|
|----------------------|------------|--------------|-----------:|------|-------------:|------------:|---------:|
| TOTALES                                                    | 32.500.000 |      | 32.500.000   | 5.000.000   | 27.500.000|

DEDUCCIONES DETALLADAS
  IVSS (4%)             1.300.000
  RPE (0,5%)              162.500
  FAOV (1%)               325.000
  ISLR (según tarifa)     900.000
  Caja de ahorro (3%)     975.000
  Préstamos              1.337.500

APORTES PATRONALES
  IVSS (9%)             2.925.000
  RPE (2%)                650.000
  FAOV (2%)               650.000
  INCES (2%)              650.000
  Prestaciones (art. 142) 5.416.667

_____ FIRMA _____           _____ FIRMA _____
[Gerente General]           [Contador Público]
                            C.P.C. N° XXXXX`,
    observaciones: [
      "No calcular el salario integral correctamente (incluye alícuotas de utilidades y bono vacacional)",
      "No incluir el bono nocturno (recargo del 30% sobre hora normal)",
      "No pagar horas extras al 50% (diurnas) o 100% (nocturnas) según LOTTT",
      "No retener IVSS, RPE, FAOV, ISLR cuando corresponde",
      "No registrar la provisión de prestaciones sociales mensualmente (art. 142)",
      "No discriminar los aportes patronales de las deducciones al trabajador",
      "No firmar el acuse de recibo del trabajador",
      "No conservar la nómina por 6 años (obligación legal)",
      "No pagar en la fecha acordada (genera intereses moratorios)"
    ],
    video: {
      titulo: "Cómo elaborar la nómina bajo la LOTTT 2024",
      url: "https://www.youtube.com/watch?v=NOMINA2024",
      caratula: "assets/caratulas/nomina.jpg",
      duracion: "30:25"
    },
    descargas: [
      { nombre: "Plantilla Excel — Nómina LOTTT", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Calculadora de salario integral", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Guía de deducciones y aportes vigentes", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 5.2 ============
  "5.2": {
    nombre: "Recibo de Pago",
    objetivo: "Documentar individualmente el pago del salario y demás beneficios al trabajador, detallando asignaciones, deducciones y neto recibido, sirviendo como comprobante legal, laboral y contable.",
    normativaInt: "NIC 19 (Beneficios a los empleados); OIT Convenio 95 (protección del salario).",
    normativaVe: "LOTTT art. 106 (obligación de entregar recibo); Reglamento de la LOTTT; Providencia del IVSS y FAOV.",
    campos: [
      "Identificación del trabajador (nombre, C.I., cargo)",
      "Período de pago",
      "Asignaciones detalladas: sueldo, horas extras, primas, bonos, comisiones",
      "Deducciones detalladas: IVSS, RPE, FAOV, ISLR, préstamos, caja de ahorro",
      "Neto pagado",
      "Forma de pago (efectivo, transferencia, cheque)",
      "Firma y cédula del trabajador (acuse de recibo)",
      "Firma del patrono o representante",
      "Sello de la empresa"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
RECIBO DE PAGO
RIF: J-12345678-9

TRABAJADOR
Nombre:    Juan Pérez
C.I.:      V-11.111.111
Cargo:     Cajero
Período:   01/11/2024 al 30/11/2024

ASIGNACIONES
  Sueldo básico                        8.000.000
  Horas extras                           400.000
  Bono nocturno                          150.000
  Prima por antigüedad                   200.000
  TOTAL ASIGNACIONES                    8.750.000

DEDUCCIONES
  IVSS (4%)                               320.000
  RPE (0,5%)                               40.000
  FAOV (1%)                                80.000
  ISLR (según tarifa)                     200.000
  Caja de ahorro (3%)                     240.000
  TOTAL DEDUCCIONES                       880.000

NETO PAGADO                            7.870.000

Forma de pago: Transferencia bancaria
Banco: Banco Nacional de Crédito
Cuenta: 0134-XXXX-XX-XXXXXXXXXX

Recibí conforme:

_____ FIRMA _____
Juan Pérez
C.I. V-11.111.111

_____ FIRMA _____
Por SUPERMERCADO EL AHORRO, C.A.
[Representante Legal]

Caracas, 30 de noviembre de 2024`,
    observaciones: [
      "No entregar recibo al trabajador (obligación legal art. 106 LOTTT)",
      "No detallar cada asignación y deducción",
      "No indicar la forma de pago (efectivo, transferencia, cheque)",
      "No firmar el trabajador el acuse de recibo",
      "Emitir un solo recibo mensual cuando hay pagos quincenales (debe haber uno por cada pago)",
      "No conservar los recibos por 6 años",
      "No incluir el cálculo del salario integral cuando corresponde"
    ],
    video: {
      titulo: "Recibo de pago LOTTT — Requisitos formales",
      url: "https://www.youtube.com/watch?v=RECIBO2024",
      caratula: "assets/caratulas/recibo.jpg",
      duracion: "12:40"
    },
    descargas: [
      { nombre: "Plantilla Word — Recibo de Pago", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Plantilla Excel — Recibo automatizado", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 5.3 ============
  "5.3": {
    nombre: "Liquidación de Prestaciones Sociales",
    objetivo: "Calcular y documentar el monto total a pagar al trabajador al término de la relación laboral, incluyendo prestaciones sociales, intereses sobre prestaciones, vacaciones y bono vacacional fraccionados, utilidades fraccionadas y demás conceptos derivados.",
    normativaInt: "NIC 19 (Beneficios a los empleados); NIC 37 (Provisiones).",
    normativaVe: "LOTTT art. 142 (garantía y retroactivo); LOTTT art. 143 (depósito trimestral); LOTTT art. 190 (vacaciones); LOTTT art. 131 (utilidades); LOTTT art. 92 (causas de terminación); Reglamento de la LOTTT.",
    campos: [
      "Datos del trabajador: nombre, C.I., cargo, fecha de ingreso, fecha de egreso",
      "Motivo de terminación (renuncia, despido justificado, injustificado, mutuo acuerdo)",
      "Tiempo de servicio (años, meses, días)",
      "Salario integral del último mes",
      "Cálculo del método retroactivo (art. 142.c): 30 días por año o fracción",
      "Cálculo del método de garantía (art. 142.a-b): 15 días por trimestre",
      "Comparación: se paga el monto mayor entre garantía + intereses vs retroactivo",
      "Intereses sobre prestaciones (tasa promedio BCV)",
      "Vacaciones fraccionadas",
      "Bono vacacional fraccionado",
      "Utilidades fraccionadas",
      "Días adicionales (art. 142.d, si aplica)",
      "Total a pagar",
      "Firma del trabajador (finiquito) y del patrono"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
LIQUIDACIÓN DE PRESTACIONES SOCIALES

DATOS DEL TRABAJADOR
Nombre:      Juan Pérez
C.I.:        V-11.111.111
Cargo:       Cajero
Ingreso:     15/03/2019
Egreso:      30/11/2024
Tiempo:      5 años, 8 meses, 15 días
Motivo:      Renuncia voluntaria

SALARIO INTEGRAL AL EGRESO
Sueldo mensual                          8.000.000
Alícuota utilidades (30 días / 12)        666.667
Alícuota bono vacacional (30 días / 12)   666.667
Salario integral diario                    311.111

CÁLCULO RETROACTIVO (art. 142.c)
5 años × 30 días = 150 días
Fracción 8 meses × 2,5 días = 20 días
Total retroactivo = 170 días × 311.111 = 52.888.870

CÁLCULO GARANTÍA + INTERESES (art. 142.a-b)
Depósitos trimestrales: 23 trimestres × 15 días = 345 días
Menos 150 días ya considerados
Saldo garantía = 195 días × salario promedio histórico = 48.500.000
Intereses sobre prestaciones acumulados = 6.200.000
Total garantía + intereses = 54.700.000

APLICABLE AL TRABAJADOR: método GARANTÍA (monto mayor)

OTROS CONCEPTOS
Vacaciones fraccionadas (8 meses) = 20 días × 311.111 = 6.222.220
Bono vacacional fraccionado = 16 días × 311.111 = 4.977.776
Utilidades fraccionadas (8 meses) = 20 días × 311.111 = 6.222.220

TOTAL A PAGAR = 72.122.216

Recibí conforme el monto total de esta liquidación:

_____ FIRMA _____           _____ FIRMA _____
Juan Pérez                  [Representante Legal]
C.I. V-11.111.111           SUPERMERCADO EL AHORRO, C.A.

Caracas, 30 de noviembre de 2024`,
    observaciones: [
      "No comparar método retroactivo vs garantía (se debe pagar el mayor)",
      "No calcular correctamente el salario integral (incluye alícuotas)",
      "No aplicar los días adicionales (2 días por año después del primer año, art. 142.d)",
      "No calcular intereses sobre prestaciones con la tasa del BCV",
      "No fraccionar vacaciones, bono vacacional y utilidades al egreso",
      "No entregar el finiquito firmado por el trabajador",
      "No depositar las prestaciones trimestralmente (art. 143)",
      "No considerar el preaviso cuando aplica (art. 104-106)",
      "No incluir el pago de salarios pendientes y otras deudas laborales"
    ],
    video: {
      titulo: "Liquidación de prestaciones sociales bajo la LOTTT 2024",
      url: "https://www.youtube.com/watch?v=LIQ2024",
      caratula: "assets/caratulas/liquidacion.jpg",
      duracion: "35:20"
    },
    descargas: [
      { nombre: "Plantilla Excel — Cálculo de prestaciones", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Finiquito laboral", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Tabla de tasas BCV históricas", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 5.4 ============
  "5.4": {
    nombre: "Constancia de Trabajo",
    objetivo: "Certificar la relación laboral vigente entre el patrono y el trabajador, indicando cargo, fecha de ingreso, sueldo y demás condiciones, para uso del trabajador en trámites bancarios, migratorios, educativos o personales.",
    normativaInt: "No aplica directamente.",
    normativaVe: "LOTTT (relación laboral); Código de Comercio (representación); Ley del Ejercicio de la Contaduría Pública (firma del contador cuando certifica sueldos).",
    campos: [
      "Encabezado: razón social, RIF, domicilio del patrono",
      "Datos del trabajador: nombres, apellidos, C.I., cargo",
      "Fecha de ingreso",
      "Tipo de contrato (indefinido, determinado, por obra)",
      "Sueldo básico mensual y salario normal",
      "Tipo de jornada (diurna, nocturna, mixta)",
      "Dirigida a quién corresponda (ente o institución)",
      "Firma del representante legal",
      "Sello de la empresa",
      "Firma del contador cuando certifica ingresos",
      "Fecha de emisión"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
CONSTANCIA DE TRABAJO

Quien suscribe, [Nombre del Gerente], en su carácter de Gerente
General de SUPERMERCADO EL AHORRO, C.A., RIF J-12345678-9,
domiciliada en Av. Principal, Local 5, Caracas, hace constar que:

El (la) ciudadano(a) JUAN PÉREZ, titular de la Cédula de Identidad
N° V-11.111.111, presta servicios en esta empresa desde el
15/03/2019, desempeñando el cargo de CAJERO, con un sueldo
básico mensual de OCHO MILLONES DE BOLÍVARES (Bs. 8.000.000,00)
y un salario normal mensual de OCHO MILLONES CUATROCIENTOS MIL
BOLÍVARES (Bs. 8.400.000,00), con una jornada de trabajo diurna
de lunes a viernes.

Constancia que se expide a los fines que el interesado tenga
bien determinar, en Caracas, a los 30 días del mes de noviembre
de 2024.

_____ FIRMA _____           _____ FIRMA _____
[Gerente General]           [Contador Público]
                            C.P.C. N° XXXXX
                            (firma y sello)

Sello de la empresa`,
    observaciones: [
      "No indicar el sueldo o indicarlo en términos vagos",
      "No especificar la fecha de ingreso (dato esencial)",
      "No incluir el cargo exacto que desempeña el trabajador",
      "No firmar por el representante legal autorizado",
      "No incluir sello de la empresa",
      "No indicar la finalidad de la constancia (deja abierto el uso)",
      "Firmar el contador sin haber verificado con la nómina",
      "Emitir constancia a personas no autorizadas sin consentimiento del trabajador"
    ],
    video: {
      titulo: "Constancia de trabajo — Cómo redactarla correctamente",
      url: "https://www.youtube.com/watch?v=CT2024",
      caratula: "assets/caratulas/constancia.jpg",
      duracion: "10:15"
    },
    descargas: [
      { nombre: "Plantilla Word — Constancia de Trabajo", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 5.5 ============
  "5.5": {
    nombre: "Cálculo de Vacaciones y Bono Vacacional",
    objetivo: "Determinar los días de vacaciones y el bono vacacional que corresponden al trabajador por cada año de servicio, así como su pago oportuno, conforme a los mínimos establecidos en la LOTTT y a las mejoras contractuales si existen.",
    normativaInt: "NIC 19 (Beneficios a los empleados — vacaciones como beneficio acumulable).",
    normativaVe: "LOTTT art. 190 (15 días hábiles de vacaciones + 1 día adicional por año hasta 15 adicionales, y bono vacacional de 15 días + 1 por año hasta 30); LOTTT art. 192 (pago); LOTTT art. 194 (vacaciones fraccionadas); Reglamento de la LOTTT.",
    campos: [
      "Datos del trabajador: nombre, C.I., cargo, fecha de ingreso",
      "Año de servicio que se calcula",
      "Días de vacaciones que corresponden (mínimo 15 + 1 por año adicional)",
      "Salario normal del mes anterior al disfrute",
      "Cálculo del pago de vacaciones = días × salario diario",
      "Días de bono vacacional (mínimo 15 + 1 por año)",
      "Cálculo del bono vacacional = días × salario diario",
      "Total a pagar",
      "Período de disfrute (fecha inicio y fin)",
      "Firma del trabajador (acuse de recibo)"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
CÁLCULO DE VACACIONES Y BONO VACACIONAL

DATOS DEL TRABAJADOR
Nombre:          Juan Pérez
C.I.:            V-11.111.111
Cargo:           Cajero
Fecha de ingreso: 15/03/2019
Período calculado: 15/03/2024 al 14/03/2025 (6to año)

DÍAS QUE CORRESPONDEN
Vacaciones (art. 190):
  15 días hábiles base + 5 días adicionales (por 5 años cumplidos)
  = 20 días hábiles

Bono vacacional (art. 192):
  15 días base + 5 días adicionales (por 5 años cumplidos)
  = 20 días

SALARIO BASE
Salario normal mensual                  8.400.000
Salario diario                            280.000

CÁLCULO
Pago de vacaciones: 20 × 280.000      = 5.600.000
Pago de bono vacacional: 20 × 280.000 = 5.600.000
TOTAL A PAGAR                          = 11.200.000

PERÍODO DE DISFRUTE
Del 15/03/2025 al 09/04/2025 (20 días hábiles)

Recibí conforme:

_____ FIRMA _____
Juan Pérez
C.I. V-11.111.111

_____ FIRMA _____
Por SUPERMERCADO EL AHORRO, C.A.`,
    observaciones: [
      "No pagar el bono vacacional por separado (es distinto al bono de fin de año)",
      "No calcular los días adicionales por antigüedad (1 por año)",
      "No tomar como base el salario normal del mes anterior al disfrute",
      "No pagar las vacaciones antes del inicio del disfrute (LOTTT)",
      "No fraccionar vacaciones cuando el trabajador egresa a mitad de año",
      "No acumular vacaciones por más de 3 períodos sin autorización del trabajador",
      "Confundir días hábiles con días continuos al calcular",
      "No conservar el soporte firmado por el trabajador"
    ],
    video: {
      titulo: "Vacaciones y bono vacacional LOTTT — Cálculo paso a paso",
      url: "https://www.youtube.com/watch?v=VAC2024",
      caratula: "assets/caratulas/vacaciones.jpg",
      duracion: "18:30"
    },
    descargas: [
      { nombre: "Plantilla Excel — Cálculo de vacaciones", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 5.6 ============
  "5.6": {
    nombre: "Cálculo de Utilidades (Participación en los Beneficios)",
    objetivo: "Determinar y distribuir entre los trabajadores el porcentaje de los beneficios líquidos anuales de la empresa, conforme a la LOTTT (mínimo 30 días, hasta 4 meses), con base en el tiempo de servicio y las cargas familiares.",
    normativaInt: "NIC 19 (Beneficios a los empleados); NIC 12 (efecto fiscal); NIC 33 (utilidad por acción, si aplica a cotizadas).",
    normativaVe: "LOTTT art. 131 (mínimo 30 días, máximo 4 meses); LOTTT art. 132 (base de cálculo); LOTTT art. 133 (oportunidad de pago — dentro de los 15 días siguientes al cierre); LOTTT art. 134 (trabajadores excluidos); Reglamento de la LOTTT.",
    campos: [
      "Razón social, RIF, ejercicio fiscal",
      "Utilidad líquida del ejercicio según estados financieros auditados",
      "Porcentaje a distribuir (mínimo 30 días, hasta 4 meses de salario)",
      "Nómina de trabajadores activos al cierre",
      "Días trabajados en el año por cada trabajador",
      "Salario normal devengado por cada trabajador",
      "Cálculo proporcional por tiempo de servicio",
      "Cálculo proporcional por cargas familiares (si aplica política interna)",
      "Monto a pagar a cada trabajador",
      "Firma del representante y del contador",
      "Firma del trabajador (acuse de recibo)"
    ],
    ejemplo: `SUPERMERCADO EL AHORRO, C.A.
CÁLCULO DE UTILIDADES — EJERCICIO 2024

BASE DE CÁLCULO
Utilidad líquida del ejercicio         280.000.000
Porcentaje a distribuir                          10%
Monto a distribuir                      28.000.000

Se pagarán 60 días de utilidades (dentro del rango legal de
30 días a 4 meses).

DISTRIBUCIÓN POR TRABAJADOR

| # | Nombre          | Días trabajados | Salario normal anual | Días a pagar | Monto (Bs.) |
|---|-----------------|----------------:|---------------------:|-------------:|------------:|
| 1 | Juan Pérez      | 365             | 96.000.000           | 60           | 15.780.822  |
| 2 | María Rodríguez | 365             | 180.000.000          | 60           | 29.589.041  |
| 3 | Pedro González  | 240             | 114.000.000          | 40           | 12.493.151  |
|---|-----------------|----------------:|---------------------:|-------------:|------------:|
| TOTALES                                  |                      |              | 57.862.914  |

Monto real a distribuir limitado a 28.000.000
Ajuste proporcional aplicado.

PAGO
Fecha: dentro de los 15 días siguientes al cierre fiscal
Forma: abono en cuenta nómina

_____ FIRMA _____           _____ FIRMA _____
[Representante Legal]       [Contador Público]
                            C.P.C. N° XXXXX`,
    observaciones: [
      "No pagar dentro de los 15 días siguientes al cierre del ejercicio",
      "Pagar menos de 30 días o más de 4 meses (límite legal)",
      "No calcular proporcionalmente a los días trabajados en el año",
      "No considerar las cargas familiares si el patrono las aplica como criterio",
      "No excluir correctamente a los trabajadores de dirección (según doctrina)",
      "No pagar utilidades cuando hay pérdida fiscal (no genera obligación si no hay beneficios)",
      "Confundir utilidades con bonos o aguinaldos (no son lo mismo)",
      "No conservar los soportes firmados por los trabajadores"
    ],
    video: {
      titulo: "Utilidades LOTTT — Cálculo y distribución anual",
      url: "https://www.youtube.com/watch?v=UTIL2024",
      caratula: "assets/caratulas/utilidades.jpg",
      duracion: "20:00"
    },
    descargas: [
      { nombre: "Plantilla Excel — Cálculo de utilidades", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  }

};