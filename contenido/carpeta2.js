// ============================================
// CARPETA 2: INFORMES DE AUDITORÍA
// Normativa: NIA 700, 705, 570, 580, 265, 260
// Referencia Venezuela: NIA-VE (FCCPV)
// ============================================

const contenidoCarpeta2 = {

  // ============ 2.1 ============
  "2.1": {
    nombre: "Informe de Auditoría — Opinión Sin Salvedades (NIA 700)",
    objetivo: "Expresar una opinión de auditoría sobre si los estados financieros han sido preparados, en todos sus aspectos materiales, de conformidad con el marco de información financiera aplicable (VEN-NIIF, BA VEN-NIIF o marco de propósito especial).",
    normativaInt: "NIA 700 (Formación de la opinión y emisión del informe); NIA 200 (Objetivos globales); NIA 320 (Materialidad); NIA 450 (Evaluación de errores); NIA 560 (Eventos posteriores); NIA 570 (Empresa en funcionamiento); NIA 701 (Cuestiones clave de auditoría).",
    normativaVe: "NIA-VE (FCCPV); Ley del Ejercicio de la Contaduría Pública; Código de Ética del Contador Público Venezolano; Código de Comercio (art. 32-35).",
    campos: [
      "Título: 'Informe del Auditor Independiente'",
      "Destinatario: accionistas o junta directiva",
      "Párrafo de Opinión (primero, según NIA 700 revisada)",
      "Base de la Opinión (referencia a NIA, independencia, ética)",
      "Cuestiones clave de auditoría (NIA 701, si aplica)",
      "Responsabilidad de la administración sobre los EEFF",
      "Responsabilidad del auditor (alcance, NIA aplicables)",
      "Descripción del trabajo del auditor",
      "Otras responsabilidades legales y regulatorias (si aplica)",
      "Nombre del socio firmante",
      "Firma del contador público colegiado + C.P.C.",
      "Dirección, fecha, sello"
    ],
    ejemplo: `INFORME DEL AUDITOR INDEPENDIENTE

A los Accionistas de
SUPERMERCADO EL AHORRO, C.A.

OPINIÓN
Hemos auditado los estados financieros adjuntos de Supermercado
El Ahorro, C.A., que comprenden el estado de situación financiera
al 31 de diciembre de 2024, el estado de resultados integrales,
el estado de cambios en el patrimonio y el estado de flujos de
efectivo correspondientes al ejercicio terminado en esa fecha,
así como las notas explicativas de los estados financieros que
incluyen un resumen de las políticas contables materiales.

En nuestra opinión, los estados financieros adjuntos presentan
razonablemente, en todos sus aspectos materiales, la situación
financiera de la entidad al 31 de diciembre de 2024, así como
su desempeño financiero y sus flujos de efectivo correspondientes
al ejercicio terminado en esa fecha, de conformidad con la Versión
Venezolana de las Normas Internacionales de Información Financiera
(VEN-NIIF) emitidas por la FCCPV.

BASE DE LA OPINIÓN
Realizamos nuestra auditoría de conformidad con las Normas
Internacionales de Auditoría (NIA) adoptadas en Venezuela por
la Federación de Colegios de Contadores Públicos (NIA-VE).
Nuestra responsabilidad bajo esas normas se describe con más
detalle en la sección "Responsabilidades del auditor" de
nuestro informe. Somos independientes de la entidad de conformidad
con el Código de Ética del Contador Público Venezolano y hemos
cumplido nuestras otras responsabilidades de acuerdo con dicho
código. Consideramos que la evidencia de auditoría que hemos
obtenido es suficiente y apropiada para proporcionar una base
para nuestra opinión.

CUESTIONES CLAVE DE AUDITORÍA
[Si aplica, describir 1 a 3 cuestiones según NIA 701.]

RESPONSABILIDADES DE LA ADMINISTRACIÓN
La administración es responsable de la preparación y presentación
razonable de los estados financieros de conformidad con VEN-NIIF,
y del control interno que la administración considere necesario
para permitir la preparación de estados financieros libres de
incorrección material, ya sea por fraude o error.

RESPONSABILIDADES DEL AUDITOR
Nuestros objetivos son obtener una seguridad razonable de que los
estados financieros en su conjunto están libres de incorrección
material, y emitir un informe que incluya nuestra opinión.
La seguridad razonable es un alto grado de seguridad, pero no
garantiza que una auditoría realizada de conformidad con las NIA
siempre detecte una incorrección material cuando exista.

_______________________
[Nombre del Contador Público]
Socio — Contador Público Colegiado
C.P.C. N° 12345
Firma y sello
Caracas, 28 de febrero de 2025`,
    observaciones: [
      "Poner el párrafo de Opinión al final (formato antiguo) — la NIA 700 revisada lo exige primero",
      "Omitir la declaración de independencia y cumplimiento del Código de Ética",
      "No citar el marco normativo específico (VEN-NIIF vs BA VEN-NIIF)",
      "No incluir la fecha del informe (debe ser posterior a la obtención de evidencia)",
      "No firmar con nombre, C.P.C. y sello",
      "Confundir NIA 700 con NIA 800 (esta última es para auditorías de propósito especial)",
      "No revelar las cuestiones clave de auditoría cuando son exigibles (NIA 701, entidades cotizadas)"
    ],
    video: {
      titulo: "Informe de Auditoría bajo NIA 700 (versión revisada 2016)",
      url: "https://www.youtube.com/watch?v=NI700AUDIT01",
      caratula: "assets/caratulas/nia700.jpg",
      duracion: "25:18"
    },
    descargas: [
      { nombre: "Plantilla Word — Informe NIA 700", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Guía PDF — Estructura del Informe NIA 700", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 2.2 ============
  "2.2": {
    nombre: "Informe de Auditoría — Opinión con Salvedades (NIA 705)",
    objetivo: "Expresar una opinión modificada cuando el auditor, habiendo obtenido evidencia suficiente y apropiada, concluye que las incorrecciones, individualmente o en su conjunto, son materiales pero no generalizadas; o bien cuando no pudo obtener evidencia suficiente y apropiada, siendo los posibles efectos materiales pero no generalizados.",
    normativaInt: "NIA 705 (Modificaciones a la opinión en el informe del auditor independiente); NIA 700 (base); NIA 450 (errores); NIA 320 (materialidad).",
    normativaVe: "NIA-VE (FCCPV); Código de Ética; Ley del Ejercicio de la Contaduría Pública.",
    campos: [
      "Título del informe",
      "Destinatario",
      "Párrafo de Opinión con Salvedades",
      "Párrafo de 'Base para la Opinión con Salvedades' (obligatorio e inmediatamente después de la Opinión)",
      "Descripción precisa de la incorrección o limitación al alcance",
      "Cuantificación del efecto (cuando sea practicable)",
      "Sección de responsabilidades de la administración",
      "Sección de responsabilidades del auditor",
      "Firma, C.P.C., fecha, sello"
    ],
    ejemplo: `INFORME DEL AUDITOR INDEPENDIENTE

A los Accionistas de
SUPERMERCADO EL AHORRO, C.A.

OPINIÓN CON SALVEDADES
Hemos auditado los estados financieros adjuntos de Supermercado
El Ahorro, C.A., que comprenden el estado de situación financiera
al 31 de diciembre de 2024, el estado de resultados integrales,
el estado de cambios en el patrimonio y el estado de flujos de
efectivo correspondientes al ejercicio terminado en esa fecha,
así como las notas explicativas.

En nuestra opinión, excepto por los efectos del asunto descrito
en la sección "Base para la Opinión con Salvedades", los estados
financieros adjuntos presentan razonablemente, en todos sus
aspectos materiales, la situación financiera de la entidad al
31 de diciembre de 2024, de conformidad con VEN-NIIF.

BASE PARA LA OPINIÓN CON SALVEDADES
La entidad no reconoció el deterioro del inventario de mercancía
de temporada por Bs. 450.000, que a nuestro juicio debió
registrarse conforme a NIC 2. Este monto representa el 2,1% del
total de activos. El efecto sobre el resultado del ejercicio
y el patrimonio sería una disminución de Bs. 450.000 antes de
impuesto diferido.

Realizamos nuestra auditoría de conformidad con NIA-VE. Nuestra
responsabilidad se describe en la sección "Responsabilidades del
auditor". Somos independientes de la entidad conforme al Código
de Ética del Contador Público Venezolano.

RESPONSABILIDADES DE LA ADMINISTRACIÓN
[...texto estándar...]

RESPONSABILIDADES DEL AUDITOR
[...texto estándar...]

_______________________
[Nombre del Contador Público]
C.P.C. N° 12345
Caracas, 28 de febrero de 2025`,
    observaciones: [
      "No colocar el párrafo de 'Base para la Opinión con Salvedades' inmediatamente después de la opinión",
      "No describir con precisión el asunto que origina la salvedad",
      "No cuantificar el efecto cuando sea practicable (debilita el informe)",
      "Confundir 'material pero no generalizado' (salvedad) con 'material y generalizado' (abstención)",
      "Usar lenguaje vago ('creemos', 'consideramos') en lugar de lenguaje técnico NIA",
      "No referenciar la norma específica (NIC 2, NIIF 15, etc.) que se incumple"
    ],
    video: {
      titulo: "Modificaciones a la opinión — NIA 705 explicada",
      url: "https://www.youtube.com/watch?v=NI705MODIF",
      caratula: "assets/caratulas/nia705.jpg",
      duracion: "19:47"
    },
    descargas: [
      { nombre: "Plantilla Word — Informe con Salvedades", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Árbol de decisión NIA 705", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 2.3 ============
  "2.3": {
    nombre: "Informe de Auditoría — Abstención de Opinión (NIA 705)",
    objetivo: "Abstenerse de expresar opinión cuando el auditor no pudo obtener evidencia suficiente y apropiada y los posibles efectos son materiales Y generalizados, o cuando en circunstancias extremadamente raras existen múltiples incertidumbres.",
    normativaInt: "NIA 705; NIA 700; NIA 200.",
    normativaVe: "NIA-VE (FCCPV); Código de Ética.",
    campos: [
      "Título del informe",
      "Destinatario",
      "Párrafo de 'Abstención de Opinión'",
      "Párrafo de 'Base para la Abstención de Opinión' (con detalle de la limitación)",
      "Descripción del alcance de los procedimientos aplicados",
      "Declaración expresa de que NO se expresa opinión",
      "Responsabilidades de la administración",
      "Responsabilidades del auditor",
      "Firma, C.P.C., fecha, sello"
    ],
    ejemplo: `INFORME DEL AUDITOR INDEPENDIENTE

A los Accionistas de
SUPERMERCADO EL AHORRO, C.A.

ABSTENCIÓN DE OPINIÓN
Hemos sido contratados para auditar los estados financieros de
Supermercado El Ahorro, C.A., que comprenden el estado de situación
financiera al 31 de diciembre de 2024, el estado de resultados
integrales, el estado de cambios en el patrimonio y el estado de
flujos de efectivo correspondientes al ejercicio terminado en
esa fecha, así como las notas explicativas.

No expresamos una opinión sobre los estados financieros adjuntos.
Debido a la importancia de los asuntos descritos en la sección
"Base para la Abstención de Opinión", no hemos podido obtener
evidencia de auditoría suficiente y apropiada para proporcionar
una base para una opinión de auditoría.

BASE PARA LA ABSTENCIÓN DE OPINIÓN
La entidad no puso a nuestra disposición los libros contables
del período comprendido entre el 01 de enero y el 30 de septiembre
de 2024, ni los soportes de las cuentas por cobrar por un monto
de Bs. 3.500.000 (16,4% del total de activos). No pudimos aplicar
procedimientos alternativos para verificar dichos saldos. En
consecuencia, no nos fue posible determinar si existían ajustes
necesarios en los estados financieros.

RESPONSABILIDADES DE LA ADMINISTRACIÓN
[...texto estándar...]

RESPONSABILIDADES DEL AUDITOR
[...texto estándar, ajustado porque no se emite opinión...]

_______________________
[Nombre del Contador Público]
C.P.C. N° 12345
Caracas, 28 de febrero de 2025`,
    observaciones: [
      "Confundir abstención con opinión negativa",
      "No describir con precisión la naturaleza y magnitud de la limitación",
      "No indicar qué procedimientos SÍ se pudieron aplicar",
      "Emitir abstención cuando la limitación es material pero NO generalizada (ahí va salvedad)",
      "No declarar expresamente 'No expresamos una opinión'",
      "Aceptar el encargo cuando la limitación proviene de la propia administración y es generalizada (debe evaluarse la aceptación)"
    ],
    video: {
      titulo: "Abstención de opinión — Cuándo y cómo (NIA 705)",
      url: "https://www.youtube.com/watch?v=NI705ABST",
      caratula: "assets/caratulas/abstencion.jpg",
      duracion: "14:22"
    },
    descargas: [
      { nombre: "Plantilla Word — Abstención de Opinión", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 2.4 ============
  "2.4": {
    nombre: "Informe de Auditoría — Opinión Negativa (NIA 705)",
    objetivo: "Expresar una opinión negativa cuando el auditor, habiendo obtenido evidencia suficiente y apropiada, concluye que las incorrecciones son materiales Y generalizadas, y por tanto los estados financieros en su conjunto no son razonables.",
    normativaInt: "NIA 705; NIA 700; NIA 450; NIA 320.",
    normativaVe: "NIA-VE (FCCPV); Código de Ética.",
    campos: [
      "Título del informe",
      "Destinatario",
      "Párrafo de 'Opinión Negativa'",
      "Párrafo de 'Base para la Opinión Negativa' con descripción y cuantificación",
      "Responsabilidades de la administración",
      "Responsabilidades del auditor",
      "Firma, C.P.C., fecha, sello"
    ],
    ejemplo: `INFORME DEL AUDITOR INDEPENDIENTE

A los Accionistas de
SUPERMERCADO EL AHORRO, C.A.

OPINIÓN NEGATIVA
Hemos auditado los estados financieros adjuntos de Supermercado
El Ahorro, C.A., que comprenden el estado de situación financiera
al 31 de diciembre de 2024, el estado de resultados integrales,
el estado de cambios en el patrimonio y el estado de flujos de
efectivo correspondientes al ejercicio terminado en esa fecha,
así como las notas explicativas.

En nuestra opinión, debido a la importancia de los asuntos
descritos en la sección "Base para la Opinión Negativa", los
estados financieros adjuntos NO presentan razonablemente la
situación financiera de la entidad al 31 de diciembre de 2024,
ni su desempeño financiero ni sus flujos de efectivo, de
conformidad con VEN-NIIF.

BASE PARA LA OPINIÓN NEGATIVA
La entidad no consolidó las cuentas de su subsidiaria
Comercializadora El Ahorro, C.A., cuyo patrimonio asciende a
Bs. 5.200.000 y cuyos ingresos del ejercicio fueron de
Bs. 12.000.000, incumpliendo NIIF 10. El efecto de esta omisión
es generalizado y afecta sustancialmente las cifras de activos,
ingresos y patrimonio presentadas.

RESPONSABILIDADES DE LA ADMINISTRACIÓN
[...texto estándar...]

RESPONSABILIDADES DEL AUDITOR
[...texto estándar...]

_______________________
[Nombre del Contador Público]
C.P.C. N° 12345
Caracas, 28 de febrero de 2025`,
    observaciones: [
      "Confundir 'opinión negativa' con 'abstención'",
      "No describir el efecto generalizado de las incorrecciones",
      "No cuantificar cuando sea practicable",
      "No referenciar la norma NIIF incumplida",
      "Emitir opinión negativa cuando no se obtuvo evidencia suficiente (ahí va abstención)"
    ],
    video: {
      titulo: "Opinión negativa — Casos prácticos (NIA 705)",
      url: "https://www.youtube.com/watch?v=NI705NEG",
      caratula: "assets/caratulas/opinion-negativa.jpg",
      duracion: "16:55"
    },
    descargas: [
      { nombre: "Plantilla Word — Opinión Negativa", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 2.5 ============
  "2.5": {
    nombre: "Carta de Representación de la Gerencia (NIA 580)",
    objetivo: "Obtener de la administración manifestaciones escritas sobre aspectos relevantes de los estados financieros y de la propia auditoría, reforzando la evidencia obtenida y formalizando la responsabilidad de la administración.",
    normativaInt: "NIA 580 (Manifestaciones escritas); NIA 210 (Acuerdo de los términos del encargo); NIA 560 (Eventos posteriores); NIA 570 (Empresa en funcionamiento); NIA 720 (Otra información).",
    normativaVe: "NIA-VE (FCCPV); Ley del Ejercicio de la Contaduría Pública; Código de Comercio (art. 32-35).",
    campos: [
      "Encabezado: dirigida al auditor, fecha",
      "Identificación de los estados financieros y período",
      "Declaración de responsabilidad de la administración sobre los EEFF",
      "Declaración sobre integridad de la información suministrada",
      "Declaración sobre registro contable completo",
      "Declaración sobre partes relacionadas y transacciones",
      "Declaración sobre fraudes o sospechas de fraude",
      "Declaración sobre cumplimiento normativo",
      "Declaración sobre eventos posteriores",
      "Declaración sobre empresa en funcionamiento",
      "Declaración sobre ajustes no registrados",
      "Firma del gerente general y del director financiero/contador"
    ],
    ejemplo: `CARTA DE REPRESENTACIÓN DE LA GERENCIA

Caracas, 28 de febrero de 2025

A: [Nombre del Auditor]
    Contador Público Colegiado C.P.C. N° 12345
    [Firma de Auditoría]

Estimado señor auditor:

Con relación a su auditoría de los estados financieros de
Supermercado El Ahorro, C.A. al 31 de diciembre de 2024, con
el propósito de expresar una opinión sobre si los estados
financieros presentan razonablemente la situación financiera
de la entidad, le manifestamos lo siguiente:

1. Somos responsables de la preparación y presentación
   razonable de los estados financieros de conformidad con
   VEN-NIIF, así como del control interno que consideramos
   necesario.

2. Le hemos proporcionado acceso irrestricto a toda la
   información contable, documentación de respaldo, actas de
   asambleas, juntas directivas y demás registros.

3. Todos los libros contables han sido llevados al día y
   reflejan todas las transacciones de la entidad.

4. No existen transacciones con partes relacionadas sin
   revelar, ni acuerdos no registrados.

5. No tenemos conocimiento de fraude o sospecha de fraude
   que involucre a la administración, empleados o terceros
   que pudiera afectar materialmente los estados financieros.

6. La entidad ha cumplido con todas las leyes y regulaciones
   aplicables, incluyendo las obligaciones tributarias ante
   el SENIAT y las obligaciones laborales bajo la LOTTT.

7. No han ocurrido eventos posteriores al cierre que
   requieran ajuste o revelación en los estados financieros.

8. La entidad tiene capacidad de continuar como empresa en
   funcionamiento por al menos 12 meses adicionales.

9. No existen ajustes no registrados identificados durante
   su auditoría que sean materiales.

10. Le hemos revelado toda la información relacionada con
    incumplimientos de cláusulas contractuales, demandas
    legales y contingencias.

Atentamente,

_______________________        _______________________
[Nombre] Gerente General        [Nombre] Director Financiero
C.I. V-________                 C.P.C. N° ________`,
    observaciones: [
      "No incluir la carta de representación en el expediente de auditoría (es obligatoria)",
      "Firmarla antes de la fecha del informe (debe ser igual o anterior)",
      "No adaptar las declaraciones al negocio específico (es genérica y débil)",
      "No incluir declaraciones sobre empresa en funcionamiento, partes relacionadas y fraude",
      "Omitir la declaración sobre integridad de la información",
      "No documentar la negativa de la administración a firmarla (es un hallazgo grave)"
    ],
    video: {
      titulo: "Carta de Representación de la Gerencia — NIA 580",
      url: "https://www.youtube.com/watch?v=NI580REP",
      caratula: "assets/caratulas/nia580.jpg",
      duracion: "13:40"
    },
    descargas: [
      { nombre: "Plantilla Word — Carta de Representación", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Checklist NIA 580", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 2.6 ============
  "2.6": {
    nombre: "Carta de Control Interno / Management Letter (NIA 265)",
    objetivo: "Comunicar por escrito a la administración las deficiencias significativas en el control interno identificadas durante la auditoría, y sugerir acciones correctivas, sin que esto constituya una opinión sobre la efectividad del control interno.",
    normativaInt: "NIA 265 (Comunicación de deficiencias en el control interno a los responsables del gobierno de la entidad y a la administración); NIA 315 (Identificación y valoración de riesgos); NIA 330 (Respuestas del auditor a los riesgos); COSO 2013 (marco de referencia).",
    normativaVe: "NIA-VE (FCCPV); Ley del Ejercicio de la Contaduría Pública; marco COSO adoptado en la práctica profesional venezolana.",
    campos: [
      "Encabezado: destinatario (junta directiva / gerencia)",
      "Fecha y referencia a la auditoría realizada",
      "Aclaratoria: este informe es complementario y no modifica la opinión",
      "Descripción de cada deficiencia identificada",
      "Riesgo asociado (alto/medio/bajo)",
      "Recomendación concreta",
      "Área responsable y plazo sugerido",
      "Conclusión general",
      "Firma del auditor y sello"
    ],
    ejemplo: `CARTA DE CONTROL INTERNO

A la Junta Directiva de
SUPERMERCADO EL AHORRO, C.A.

Caracas, 28 de febrero de 2025

Estimados señores:

Como parte de nuestra auditoría de los estados financieros de
Supermercado El Ahorro, C.A. al 31 de diciembre de 2024, hemos
evaluado el control interno relevante para la preparación de
los estados financieros. El presente informe tiene por objeto
comunicarles las deficiencias significativas identificadas,
conforme a la NIA 265. Este informe es complementario y no
modifica nuestra opinión sobre los estados financieros.

DEFICIENCIA N° 1 — Conciliaciones bancarias no actualizadas
RIESGO: Alto
OBSERVACIÓN: Al cierre, existían 3 cuentas bancarias sin
conciliar correspondientes a los meses de octubre, noviembre y
diciembre, con diferencias no identificadas por Bs. 180.000.
RECOMENDACIÓN: Implementar conciliaciones bancarias mensuales
con revisión y firma del gerente de administración, con plazo
máximo de 5 días hábiles posteriores al cierre de cada mes.
RESPONSABLE: Gerencia de Administración y Finanzas.

DEFICIENCIA N° 2 — Falta de segregación de funciones en caja
RIESGO: Medio
OBSERVACIÓN: La misma persona recibe el efectivo, registra el
ingreso y realiza el arqueo de caja, lo que incrementa el
riesgo de fraude.
RECOMENDACIÓN: Designar a una persona independiente para el
arqueo sorpresivo de caja al menos dos veces al mes.
RESPONSABLE: Recursos Humanos y Gerencia General.

DEFICIENCIA N° 3 — Ausencia de control de acceso al sistema
RIESGO: Alto
OBSERVACIÓN: Todos los usuarios del sistema contable comparten
la misma clave de administrador, lo que impide rastrear
responsabilidades.
RECOMENDACIÓN: Implementar claves individuales, perfiles por
rol (cajero, analista, contador) y política de cambio de clave
cada 90 días.
RESPONSABLE: Tecnología / Gerencia General.

CONCLUSIÓN
Las deficiencias señaladas no modifican nuestra opinión sobre
los estados financieros al 31 de diciembre de 2024, pero su
corrección fortalecerá el ambiente de control y reducirá
riesgos operativos y de fraude.

_______________________
[Nombre del Contador Público]
C.P.C. N° 12345
Firma y sello`,
    observaciones: [
      "Redactarla como una auditoría del control interno (no lo es: es comunicación de hallazgos)",
      "No jerarquizar los riesgos (alto, medio, bajo)",
      "No indicar área responsable ni plazo de corrección",
      "Convertirla en un listado de quejas sin recomendaciones concretas",
      "No incluir la aclaratoria de que no modifica la opinión",
      "Enviarla a personas distintas a los responsables del gobierno corporativo",
      "Omitir la fecha y firma del auditor"
    ],
    video: {
      titulo: "Carta de Control Interno bajo NIA 265 — Cómo redactarla",
      url: "https://www.youtube.com/watch?v=NI265CI",
      caratula: "assets/caratulas/nia265.jpg",
      duracion: "21:10"
    },
    descargas: [
      { nombre: "Plantilla Word — Carta de Control Interno", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Matriz de Hallazgos (Excel)", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  }

};