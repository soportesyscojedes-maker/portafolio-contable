// ============================================
// CARPETA 3: INFORMES DE ASEGURAMIENTO Y REVISIÓN
// Normativa: NISR 2400, 3000, 3400, 4100, 4400, 4410
// Referencia Venezuela: NISR-VE / FCCPV
// ============================================

const contenidoCarpeta3 = {

  // ============ 3.1 ============
  "3.1": {
    nombre: "Informe de Revisión de Estados Financieros (NISR 2400)",
    objetivo: "Expresar una conclusión sobre si, sobre la base de procedimientos que no proporcionan toda la evidencia que requeriría una auditoría, algo ha llamado la atención del contador que le haga creer que los estados financieros no están preparados, en todos sus aspectos materiales, de conformidad con el marco de información financiera aplicable.",
    normativaInt: "NISR 2400 (Encargos de revisión de estados financieros); NISR 3000 (Encargos de aseguramiento distintos de auditoría y revisión); Código de Ética IESBA; NIIF para PYMES (marco frecuente de revisión).",
    normativaVe: "NISR-VE (FCCPV); Ley del Ejercicio de la Contaduría Pública; Código de Ética del Contador Público Venezolano; BA VEN-NIIF.",
    campos: [
      "Título: 'Informe del Contador Público Independiente sobre la Revisión'",
      "Destinatario: accionistas, junta directiva o propietario",
      "Párrafo de 'Conclusión' (aseguramiento moderado, no razonable)",
      "Base para la conclusión (referencia a NISR 2400 y ética)",
      "Responsabilidad de la administración sobre los EEFF",
      "Responsabilidad del contador (alcance limitado: indagaciones y procedimientos analíticos)",
      "Aclaratoria expresa: NO es una auditoría y NO se expresa opinión",
      "Restricción de uso si aplica",
      "Firma del contador, C.P.C., sello, fecha"
    ],
    ejemplo: `INFORME DEL CONTADOR PÚBLICO INDEPENDIENTE
SOBRE LA REVISIÓN DE ESTADOS FINANCIEROS

A los Accionistas de
COMERCIAL LA ECONOMÍA, C.A.

CONCLUSIÓN
He revisado los estados financieros adjuntos de Comercial La
Economía, C.A., que comprenden el estado de situación financiera
al 31 de diciembre de 2024, el estado de resultados integrales,
el estado de cambios en el patrimonio y el estado de flujos de
efectivo correspondientes al ejercicio terminado en esa fecha,
así como las notas explicativas.

Sobre la base de mi revisión, nada ha llamado mi atención que
me haga creer que los estados financieros adjuntos no están
preparados, en todos sus aspectos materiales, de conformidad
con la Versión Venezolana de las Normas Internacionales de
Información Financiera para Pequeñas y Medianas Entidades
(BA VEN-NIIF) emitidas por la FCCPV.

BASE PARA LA CONCLUSIÓN
Llevé a cabo mi revisión de conformidad con la Norma
Internacional de Servicios Relacionados 2400 (NISR 2400),
adoptada en Venezuela por la FCCPV. Una revisión de estados
financieros consiste en realizar indagaciones, principalmente
a personas responsables de los asuntos financieros y contables,
y aplicar procedimientos analíticos. El alcance de una revisión
es sustancialmente menor que el de una auditoría realizada
conforme a las NIA, y por consiguiente no me permite obtener
seguridad de que haya tomado conocimiento de todos los asuntos
significativos que podrían identificarse en una auditoría.
Por lo tanto, NO expreso una opinión de auditoría sobre los
estados financieros.

RESPONSABILIDAD DE LA ADMINISTRACIÓN
La administración es responsable de la preparación y presentación
razonable de los estados financieros de conformidad con BA VEN-NIIF,
así como del control interno que considere necesario.

RESPONSABILIDAD DEL CONTADOR
Mi responsabilidad consiste en expresar una conclusión sobre los
estados financieros basada en mi revisión. No soy responsable de
prevenir o detectar fraudes o errores.

_______________________
[Nombre del Contador Público]
Contador Público Colegiado
C.P.C. N° 12345
Firma y sello
Caracas, 28 de febrero de 2025`,
    observaciones: [
      "Usar la palabra 'opinión' en lugar de 'conclusión' (error conceptual grave)",
      "No aclarar que el alcance es sustancialmente menor al de una auditoría",
      "No indicar expresamente que NO se expresa opinión de auditoría",
      "Aplicar procedimientos de auditoría completa (excede el alcance de la NISR 2400)",
      "No obtener la carta de representación de la administración (también aplica en revisión)",
      "No documentar el entendimiento del encargo con la administración",
      "No adaptar la conclusión al marco contable aplicable (VEN-NIIF vs BA VEN-NIIF)"
    ],
    video: {
      titulo: "Revisión de EEFF bajo NISR 2400 — Diferencias con auditoría",
      url: "https://www.youtube.com/watch?v=NISR2400REV",
      caratula: "assets/caratulas/nisr2400.jpg",
      duracion: "17:35"
    },
    descargas: [
      { nombre: "Plantilla Word — Informe de Revisión NISR 2400", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Checklist de procedimientos de revisión", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 3.2 ============
  "3.2": {
    nombre: "Informe de Aseguramiento (NISR 3000)",
    objetivo: "Expresar una conclusión diseñada para proporcionar un grado de seguridad (razonable o moderado) sobre la información distinta de estados financieros históricos, evaluada o medida contra criterios establecidos.",
    normativaInt: "NISR 3000 (Encargos de aseguramiento distintos de auditorías o revisiones de información financiera histórica); Marco Internacional de Encargos de Aseguramiento; Código de Ética IESBA; NIIF 13 cuando aplique valor razonable.",
    normativaVe: "NISR-VE (FCCPV); Ley del Ejercicio de la Contaduría Pública; Código de Ética.",
    campos: [
      "Título claro que indique 'Encargo de Aseguramiento'",
      "Identificación del nivel de aseguramiento (razonable o moderado)",
      "Identificación precisa de la información objeto y los criterios",
      "Párrafo de Conclusión",
      "Base de la conclusión (NISR 3000, ética, independencia)",
      "Responsabilidad de la parte responsable",
      "Responsabilidad del contador",
      "Restricción de uso y distribución (si aplica)",
      "Firma, C.P.C., fecha, sello"
    ],
    ejemplo: `INFORME DE ASEGURAMIENTO RAZONABLE

A la Junta Directiva de
FUNDACIÓN EDUCATIVA DEL FUTURO

ASUNTO: Informe de aseguramiento sobre el informe de sostenibilidad
del ejercicio 2024.

CONCLUSIÓN
He llevado a cabo un encargo de aseguramiento razonable sobre los
indicadores de desempeño social y ambiental incluidos en el
Informe de Sostenibilidad 2024 de Fundación Educativa del Futuro
(en adelante "los Indicadores"), preparados de conformidad con
los criterios establecidos en la Guía GRI Standards 2021.

En mi opinión, los Indicadores están preparados, en todos sus
aspectos materiales, de conformidad con los criterios establecidos
en la Guía GRI Standards 2021.

BASE PARA LA CONCLUSIÓN
Llevé a cabo mi encargo de conformidad con la Norma Internacional
de Encargos de Aseguramiento 3000 (NISR 3000), adoptada en
Venezuela por la FCCPV. Los procedimientos aplicados incluyeron:
(i) entrevistas con responsables de programas sociales y
ambientales; (ii) verificación documental de beneficiarios;
(iii) recálculo de indicadores cuantitativos; (iv) inspección
física de dos sedes; (v) revisión de contratos con aliados
estratégicos. Considero que la evidencia obtenida es suficiente
y apropiada para proporcionar una base para mi conclusión.
Cumplo con los requisitos de independencia y ética del Código
de Ética del Contador Público Venezolano.

RESPONSABILIDAD DE LA PARTE RESPONSABLE
La Junta Directiva es responsable de la preparación de los
Indicadores conforme a la Guía GRI Standards 2021, así como
del control interno que considere necesario.

RESPONSABILIDAD DEL CONTADOR
Mi responsabilidad consiste en expresar una conclusión sobre los
Indicadores, basada en la evidencia obtenida. Un encargo de
aseguramiento razonable proporciona un alto grado de seguridad,
aunque no absoluto, sobre la información objeto.

RESTRICCIÓN DE USO
Este informe se emite exclusivamente para la Junta Directiva de
la Fundación y para fines internos de gobernanza. No debe ser
utilizado por terceros sin autorización previa por escrito.

_______________________
[Nombre del Contador Público]
C.P.C. N° 12345
Caracas, 15 de abril de 2025`,
    observaciones: [
      "No definir claramente los criterios contra los cuales se mide la información",
      "Confundir aseguramiento razonable con moderado (el lenguaje de conclusión cambia)",
      "Usar terminología de auditoría en lugar de terminología de aseguramiento",
      "No identificar explícitamente a la 'parte responsable'",
      "No incluir restricción de uso cuando aplica",
      "No evaluar la materialidad de la información objeto (también aplica a NISR 3000)",
      "No documentar la aceptación del encargo y los términos en carta de encargo"
    ],
    video: {
      titulo: "Encargos de aseguramiento bajo NISR 3000 — Introducción",
      url: "https://www.youtube.com/watch?v=NISR3000ASE",
      caratula: "assets/caratulas/nisr3000.jpg",
      duracion: "22:48"
    },
    descargas: [
      { nombre: "Plantilla Word — Informe de Aseguramiento NISR 3000", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Esquema de decisión — Razonable vs Moderado", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 3.3 ============
  "3.3": {
    nombre: "Informe de Procedimientos Acordados (NISR 4400)",
    objetivo: "Reportar los hallazgos de hecho obtenidos de la aplicación de procedimientos previamente acordados entre el contador, la entidad y los terceros usuarios (por ejemplo, un banco), SIN expresar conclusión ni opinión alguna sobre la información.",
    normativaInt: "NISR 4400 (Encargos de procedimientos acordados); Código de Ética IESBA.",
    normativaVe: "NISR-VE (FCCPV); Ley del Ejercicio de la Contaduría Pública.",
    campos: [
      "Título: 'Informe de Procedimientos Acordados'",
      "Destinatario específico (banco, tribunal, entidad)",
      "Identificación de la información sobre la cual se aplicaron los procedimientos",
      "Mención a la carta de encargo donde constan los procedimientos acordados",
      "Listado numerado de los procedimientos efectivamente aplicados",
      "Hallazgos de hecho (tabla o listado)",
      "Aclaratoria expresa: NO se expresa conclusión ni opinión",
      "Restricción de uso (solo para el destinatario acordado)",
      "Firma del contador, C.P.C., sello, fecha"
    ],
    ejemplo: `INFORME DE PROCEDIMIENTOS ACORDADOS

Al Banco Nacional de Crédito, C.A.
Departamento de Análisis de Crédito

ASUNTO: Procedimientos acordados sobre la relación de ingresos
y gastos de la señora MARÍA GÓMEZ, titular de la C.I. V-12.345.678,
correspondiente al período del 01/01/2024 al 31/12/2024.

Hemos aplicado los procedimientos acordados que se detallan a
continuación, según lo convenido con la señora María Gómez y con
el Banco Nacional de Crédito, C.A., según carta de encargo del
20 de febrero de 2025. Nuestra responsabilidad consiste
únicamente en aplicar dichos procedimientos y reportar los
hallazgos de hecho.

PROCEDIMIENTOS APLICADOS
1. Indagamos sobre las fuentes de ingresos de la solicitante y
   revisamos los recibos de pago de los últimos 12 meses.
2. Cotejamos los ingresos declarados con los estados de cuenta
   bancarios de los últimos 6 meses.
3. Revisamos las declaraciones de ISLR de los ejercicios 2023
   y 2024 registradas ante el SENIAT.
4. Verificamos la relación de gastos contra soportes (servicios
   básicos, cuotas de tarjetas de crédito, alquiler).
5. Calculamos el promedio mensual de ingresos y de gastos
   declarados.

HALLAZGOS DE HECHO

| Concepto                     | Monto (Bs.) mensual |
|------------------------------|---------------------|
| Ingreso promedio declarado   |         18.500.000  |
| Gasto promedio declarado     |          9.200.000  |
| Disponible mensual           |          9.300.000  |

Los ingresos declarados coinciden razonablemente con los abonos
identificados en los estados de cuenta bancarios. El 92% de los
gastos cuenta con soporte documental. La solicitante manifestó
no tener otras obligaciones financieras distintas a las
presentadas.

ACLARATORIA
Este informe se refiere únicamente a los procedimientos aplicados
y a los hallazgos de hecho obtenidos. NO expresamos conclusión
ni opinión alguna sobre la relación de ingresos y gastos en su
conjunto. Si hubiéramos aplicado procedimientos adicionales o
una auditoría, podrían haber surgido otros asuntos que habrían
sido reportados.

RESTRICCIÓN DE USO
Este informe se emite exclusivamente para uso del Banco Nacional
de Crédito, C.A. y para fines de evaluación crediticia, y no debe
ser utilizado por terceros ni para fines distintos.

_______________________
[Nombre del Contador Público]
C.P.C. N° 12345
Caracas, 28 de febrero de 2025`,
    observaciones: [
      "Expresar 'conclusión' u 'opinión' (viola directamente la NISR 4400)",
      "No listar todos los procedimientos aplicados (el banco debe poder verificarlos)",
      "No incluir la aclaratoria expresa de que NO se expresa conclusión",
      "Emitir el informe a destinatarios no acordados en la carta de encargo",
      "No incluir carta de encargo firmada por las partes (es requisito previo)",
      "Reportar hallazgos subjetivos ('consideramos que') en lugar de hechos",
      "No indicar claramente el período y el sujeto de la información"
    ],
    video: {
      titulo: "NISR 4400 — Procedimientos acordados en encargos bancarios",
      url: "https://www.youtube.com/watch?v=NISR4400PROC",
      caratula: "assets/caratulas/nisr4400.jpg",
      duracion: "19:12"
    },
    descargas: [
      { nombre: "Plantilla Word — Procedimientos Acordados NISR 4400", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Modelo de carta de encargo NISR 4400", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 3.4 ============
  "3.4": {
    nombre: "Certificación de Ingresos y Gastos (NISR 4100)",
    objetivo: "Emitir una conclusión o certificación sobre la razonabilidad de la relación de ingresos y gastos de una persona natural o jurídica, preparada de conformidad con criterios establecidos (registros contables, declaraciones de ISLR, estados de cuenta), para uso de un destinatario específico como un banco.",
    normativaInt: "NISR 4100 (Encargos de aseguramiento sobre información financiera prospectiva o histórica); NISR 3000 (marco general de aseguramiento); Código de Ética IESBA.",
    normativaVe: "NISR-VE (FCCPV); Ley del Ejercicio de la Contaduría Pública; Ley de ISLR; Ley de IVA; Código de Comercio.",
    campos: [
      "Título: 'Informe del Contador Público Independiente'",
      "Destinatario específico (banco)",
      "Identificación del sujeto (persona natural o jurídica)",
      "Período certificado (rango de fechas)",
      "Criterios aplicados (registros contables, ISLR, estados de cuenta, etc.)",
      "Nivel de aseguramiento declarado (razonable o moderado)",
      "Párrafo de Conclusión",
      "Base de la conclusión (NISR 4100, procedimientos aplicados)",
      "Restricción de uso",
      "Firma, C.P.C., sello, fecha"
    ],
    ejemplo: `INFORME DEL CONTADOR PÚBLICO INDEPENDIENTE
CERTIFICACIÓN DE RELACIÓN DE INGRESOS Y GASTOS

Al Banco Nacional de Crédito, C.A.
Departamento de Análisis de Crédito

He sido contratado para examinar la relación de ingresos y gastos
de la señora MARÍA GÓMEZ, titular de la C.I. V-12.345.678,
correspondiente al período comprendido entre el 01 de enero de
2024 y el 31 de diciembre de 2024, preparada con base en los
registros contables de la solicitante, sus declaraciones de
ISLR, sus estados de cuenta bancarios y demás documentación
soporte.

RESPONSABILIDAD DE LA SOLICITANTE
La señora María Gómez es responsable de la preparación de la
relación de ingresos y gastos conforme a los criterios indicados,
así como de la información y soportes suministrados.

RESPONSABILIDAD DEL CONTADOR
Mi responsabilidad consiste en expresar una conclusión sobre la
relación de ingresos y gastos, basada en los procedimientos
aplicados de conformidad con la Norma Internacional de Servicios
Relacionados 4100 (NISR 4100). Los procedimientos aplicados
incluyeron: (i) revisión de declaraciones de ISLR; (ii) cotejo
con estados de cuenta bancarios; (iii) verificación de facturas,
recibos y registros de ingresos; (iv) análisis de gastos
declarados; (v) entrevistas y confirmaciones cuando fue
necesario. Considero que la evidencia obtenida es suficiente
y apropiada para proporcionar una base para mi conclusión.

DETALLE DE LA RELACIÓN CERTIFICADA

| Concepto                        | Monto mensual (Bs.) |
|---------------------------------|---------------------|
| Total ingresos mensuales prom.  |        18.500.000   |
| Total gastos mensuales prom.    |         9.200.000   |
| DISPONIBLE MENSUAL              |         9.300.000   |

CONCLUSIÓN
Con base en los procedimientos aplicados y los soportes
examinados, nada ha llamado mi atención que me haga creer que
la relación de ingresos y gastos presentada no está, en todos
sus aspectos materiales, preparada de conformidad con los
criterios establecidos.

RESTRICCIÓN DE USO
Este informe se emite exclusivamente para el Banco Nacional de
Crédito, C.A. y para fines de evaluación crediticia. No debe
ser utilizado por terceros ni para otros propósitos.

_______________________
[Nombre del Contador Público]
Contador Público Colegiado
C.P.C. N° 12345
Firma y sello
Caracas, 28 de febrero de 2025`,
    observaciones: [
      "Confundir NISR 4100 con NISR 4400 (esta última NO expresa conclusión)",
      "No definir los criterios contra los cuales se mide la información",
      "No indicar el nivel de aseguramiento (razonable o moderado)",
      "No incluir la restricción de uso (crítico para informes bancarios)",
      "No adjuntar la relación detallada de ingresos y gastos como anexo",
      "Certificar cifras sin haber cotejado con soportes documentales",
      "No identificar correctamente el sujeto certificado y el período",
      "No diferenciar entre persona natural y persona jurídica en la redacción"
    ],
    video: {
      titulo: "Certificación de ingresos y gastos — NISR 4100 aplicada a bancos",
      url: "https://www.youtube.com/watch?v=NISR4100CERT",
      caratula: "assets/caratulas/nisr4100.jpg",
      duracion: "24:05"
    },
    descargas: [
      { nombre: "Plantilla Word — Certificación NISR 4100", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Modelo de relación de ingresos y gastos (Excel)", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Carta de encargo NISR 4100", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 3.5 ============
  "3.5": {
    nombre: "Informe de Compilación (NISR 4410)",
    objetivo: "Asistir a la administración en la preparación y presentación de información financiera, sin proporcionar ningún tipo de seguridad (ni razonable ni moderada) sobre la información compilada.",
    normativaInt: "NISR 4410 (Encargos de compilación); Código de Ética IESBA; NIIF / NIIF para PYMES según el marco adoptado.",
    normativaVe: "NISR-VE (FCCPV); Ley del Ejercicio de la Contaduría Pública; VEN-NIIF / BA VEN-NIIF.",
    campos: [
      "Título: 'Informe de Compilación'",
      "Destinatario (administración o propietario)",
      "Identificación de la información financiera compilada",
      "Declaración de que NO se proporciona seguridad",
      "Declaración de que NO se expresa opinión, conclusión ni certificación",
      "Base de la compilación (información suministrada por la administración)",
      "Responsabilidad de la administración",
      "Responsabilidad del contador",
      "Firma, C.P.C., fecha, sello"
    ],
    ejemplo: `INFORME DE COMPILACIÓN

A la Junta Directiva de
PANADERÍA LA ESPIGA, C.A.

He compilado los estados financieros adjuntos de Panadería La
Espiga, C.A., que comprenden el estado de situación financiera
al 31 de diciembre de 2024, el estado de resultados integrales,
el estado de cambios en el patrimonio y el estado de flujos de
efectivo correspondientes al ejercicio terminado en esa fecha,
así como las notas explicativas.

La administración es responsable de la información financiera
utilizada para la compilación, así como de la preparación y
presentación razonable de los estados financieros de conformidad
con la Versión Venezolana de las Normas Internacionales de
Información Financiera para Pequeñas y Medianas Entidades
(BA VEN-NIIF).

Llevé a cabo la compilación de conformidad con la Norma
Internacional de Servicios Relacionados 4410 (NISR 4410),
adoptada en Venezuela por la FCCPV.

NO proporciono ningún tipo de seguridad sobre los estados
financieros compilados. NO expreso opinión, conclusión,
certificación ni auditoría alguna sobre ellos. El usuario de
estos estados financieros es responsable de evaluar su
razonabilidad.

NO realicé procedimientos de verificación ni de auditoría
sobre la información suministrada por la administración. Los
estados financieros pueden contener errores materiales o
incorrecciones que no fueron detectadas.

_______________________
[Nombre del Contador Público]
Contador Público Colegiado
C.P.C. N° 12345
Firma y sello
Caracas, 28 de febrero de 2025`,
    observaciones: [
      "Confundir compilación con revisión o auditoría (son niveles de servicio distintos)",
      "No incluir las declaraciones expresas de 'NO se proporciona seguridad'",
      "Realizar procedimientos de verificación (excede el alcance del encargo)",
      "Presentar el informe como si fuera una opinión o conclusión",
      "No documentar la información suministrada por la administración y su origen",
      "No firmar con C.P.C. ni incluir sello profesional",
      "No indicar la fecha del informe",
      "No obtener carta de encargo firmada con la administración"
    ],
    video: {
      titulo: "Compilación de EEFF bajo NISR 4410 — Cuándo y cómo",
      url: "https://www.youtube.com/watch?v=NISR4410COMP",
      caratula: "assets/caratulas/nisr4410.jpg",
      duracion: "15:50"
    },
    descargas: [
      { nombre: "Plantilla Word — Informe de Compilación NISR 4410", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Modelo de carta de encargo NISR 4410", tipo: "word", url: "https://drive.google.com/..." }
    ]
  }

};