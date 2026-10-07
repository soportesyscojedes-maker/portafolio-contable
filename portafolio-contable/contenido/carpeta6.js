// ============================================
// CARPETA 6: DOCUMENTOS LEGALES
// Normativa: Código de Comercio, Ley de Registros y Notarías
// ============================================

const contenidoCarpeta6 = {

  // ============ 6.1 ============
  "6.1": {
    nombre: "Acta Constitutiva (Documento Constitutivo-Estatutario)",
    objetivo: "Formalizar la constitución de una sociedad mercantil ante el Registro Mercantil, estableciendo su naturaleza jurídica, capital social, objeto, duración, administración y demás elementos esenciales.",
    normativaInt: "No aplica (acto jurídico nacional).",
    normativaVe: "Código de Comercio (art. 200-216); Ley de Registro Público y del Notariado; Ley de Impuesto sobre Sucesiones, Donaciones y demás Ramos Conexos (aportes); Providencias del Registro Mercantil.",
    campos: [
      "Identificación de los socios fundadores (nombres, cédulas, domicilios)",
      "Denominación o razón social de la sociedad",
      "Domicilio de la sociedad",
      "Objeto social (actividad principal)",
      "Capital social suscrito y pagado",
      "Valor nominal de las acciones o cuotas de participación",
      "Distribución del capital entre los socios",
      "Duración de la sociedad",
      "Órganos de administración (junta directiva, comisario)",
      "Representante legal y sus facultades",
      "Ejercicio económico (cierre fiscal)",
      "Reglas para distribución de utilidades",
      "Causales de disolución y liquidación",
      "Disposiciones finales",
      "Registro Mercantil (número, tomo, fecha)"
    ],
    ejemplo: `ACTA CONSTITUTIVA
SOCIEDAD MERCANTIL "SUPERMERCADO EL AHORRO, C.A."

Nosotros, [NOMBRE 1], venezolano, mayor de edad, de este domicilio,
titular de la C.I. V-XX.XXX.XXX; y [NOMBRE 2], venezolana, mayor de
edad, de este domicilio, titular de la C.I. V-YY.YYY.YYY; hemos
convenido en constituir, como en efecto constituimos, una sociedad
mercantil bajo la forma de Compañía Anónima, que se regirá por
las cláusulas siguientes:

PRIMERA: DENOMINACIÓN
La sociedad se denomina "SUPERMERCADO EL AHORRO, C.A."

SEGUNDA: DOMICILIO
Su domicilio principal es la ciudad de Caracas, Distrito Capital,
pudiendo establecer sucursales en cualquier lugar del país o del
exterior.

TERCERA: OBJETO
La sociedad tiene por objeto principal la compra, venta, importación,
exportación y comercialización de productos de consumo masivo,
alimentos, bebidas y artículos de uso personal y del hogar.

CUARTA: DURACIÓN
La duración de la sociedad es de CINCUENTA (50) AÑOS contados
desde la fecha de inscripción en el Registro Mercantil.

QUINTA: CAPITAL SOCIAL
El capital social es de SEISCIENTOS MILLONES DE BOLÍVARES
(Bs. 600.000.000,00), dividido en 600.000 acciones nominativas
no convertibles al portador, con un valor nominal de MIL BOLÍVARES
(Bs. 1.000,00) cada una, suscrito y pagado íntegramente en este
acto.

SEXTA: ADMINISTRACIÓN
La administración estará a cargo de una Junta Directiva compuesta
por un Presidente, un Vicepresidente y un Director, electos por
la Asamblea de Accionistas por períodos de 5 años.

SÉPTIMA: REPRESENTANTE LEGAL
El Presidente de la Junta Directiva tendrá la representación
legal de la sociedad y ejercerá las facultades previstas en el
artículo 199 del Código de Comercio.

OCTAVA: EJERCICIO ECONÓMICO
El ejercicio económico de la sociedad comenzará el 1° de enero
y terminará el 31 de diciembre de cada año, salvo el primer
período.

NOVENA: DISTRIBUCIÓN DE UTILIDADES
De las utilidades líquidas se destinará un 5% a la reserva legal
hasta alcanzar el 10% del capital social. El resto se distribuirá
entre los accionistas según su participación.

DÉCIMA: DISOLUCIÓN Y LIQUIDACIÓN
La sociedad se disolverá por las causas previstas en el artículo
220 del Código de Comercio y las cláusulas aquí establecidas.

Registrado en el Registro Mercantil Quinto de la Circunscripción
Judicial del Distrito Capital, bajo el N° 25, Tomo 10-A, de fecha
15 de marzo de 2010.`,
    observaciones: [
      "No indicar el objeto social de forma clara y limitada (puede causar problemas fiscales)",
      "No especificar el capital suscrito y pagado (obligación legal)",
      "No establecer la duración (algunos registros la exigen expresa)",
      "No incluir cláusulas de administración y representación legal",
      "No fijar el ejercicio económico (impacta la declaración de ISLR)",
      "No determinar el porcentaje de reserva legal (5% hasta 10% del capital)",
      "No protocolizar en el Registro Mercantil competente (por domicilio)",
      "No publicar en la Gaceta Oficial cuando corresponde",
      "Omitir los aportes en el acta de constitución (genera problemas con el ISLR)",
      "No firmar por todos los socios fundadores"
    ],
    video: {
      titulo: "Cómo constituir una C.A. en Venezuela paso a paso",
      url: "https://www.youtube.com/watch?v=ACTA2024",
      caratula: "assets/caratulas/acta-constitutiva.jpg",
      duracion: "25:10"
    },
    descargas: [
      { nombre: "Modelo Word — Acta Constitutiva C.A.", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Acta Constitutiva S.R.L.", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 6.2 ============
  "6.2": {
    nombre: "Estatutos Sociales",
    objetivo: "Regular el funcionamiento interno de la sociedad: derechos y deberes de los accionistas, administración, asambleas, distribución de utilidades, disolución y liquidación. Forman parte del documento constitutivo.",
    normativaInt: "No aplica directamente (acto societario nacional).",
    normativaVe: "Código de Comercio (art. 200-232); Ley de Registro Público y del Notariado; Ley de Mercado de Valores (si cotiza).",
    campos: [
      "Denominación, domicilio y objeto",
      "Capital social y acciones",
      "Derechos y obligaciones de los accionistas",
      "Convocatoria a asambleas (ordinarias y extraordinarias)",
      "Quórum y mayorías",
      "Funciones de la Asamblea de Accionistas",
      "Junta Directiva: composición, elección, duración, funciones",
      "Representante legal y facultades",
      "Comisario: funciones y responsabilidades",
      "Ejercicio económico y distribución de utilidades",
      "Disolución, liquidación y designación de liquidadores",
      "Resolución de conflictos",
      "Disposiciones transitorias"
    ],
    ejemplo: `ESTATUTOS SOCIALES
SUPERMERCADO EL AHORRO, C.A.

CAPÍTULO I — DENOMINACIÓN, DOMICILIO Y OBJETO
Artículo 1: La sociedad se denomina SUPERMERCADO EL AHORRO, C.A.
Artículo 2: Domicilio en la ciudad de Caracas, Distrito Capital.
Artículo 3: Objeto: la compra, venta, importación, exportación y
comercialización de productos de consumo masivo.

CAPÍTULO II — CAPITAL SOCIAL Y ACCIONES
Artículo 4: El capital social es de Bs. 600.000.000,00, dividido
en 600.000 acciones nominativas no convertibles al portador,
con valor nominal de Bs. 1.000,00 cada una.
Artículo 5: Las acciones confieren a sus titulares los derechos
previstos en el artículo 291 del Código de Comercio.

CAPÍTULO III — ASAMBLEAS
Artículo 6: La Asamblea de Accionistas es el órgano supremo de
la sociedad y se reúne ordinariamente dentro de los 3 meses
siguientes al cierre del ejercicio.
Artículo 7: La convocatoria se hará mediante publicación en un
diario de circulación nacional con 8 días de anticipación.
Artículo 8: El quórum para asambleas ordinarias será de más
de la mitad del capital suscrito y pagado. Las decisiones se
tomarán por mayoría simple.

CAPÍTULO IV — ADMINISTRACIÓN
Artículo 9: La sociedad será administrada por una Junta Directiva
de 3 miembros: Presidente, Vicepresidente y Director, electos
por 5 años, pudiendo ser reelegidos.
Artículo 10: El Presidente es el representante legal de la
sociedad y tendrá las facultades del artículo 199 del Código
de Comercio.
Artículo 11: La sociedad tendrá un Comisario, contador público
colegiado, designado por la Asamblea por un año.

CAPÍTULO V — EJERCICIO Y UTILIDADES
Artículo 12: El ejercicio económico comienza el 1° de enero y
termina el 31 de diciembre de cada año.
Artículo 13: De las utilidades líquidas se destinará 5% a
reserva legal hasta alcanzar el 10% del capital social.
El resto se distribuirá entre los accionistas.

CAPÍTULO VI — DISOLUCIÓN Y LIQUIDACIÓN
Artículo 14: La sociedad se disolverá por las causales del
artículo 220 del Código de Comercio.
Artículo 15: La liquidación se practicará por los liquidadores
designados por la Asamblea.

CAPÍTULO VII — DISPOSICIONES TRANSITORIAS
Artículo 16: Se designa como primer Presidente a [Nombre] y
como Vicepresidente a [Nombre].`,
    observaciones: [
      "No incluir las cláusulas de protección de accionistas minoritarios",
      "No prever las mayorías especiales para reformas estatutarias",
      "No especificar el procedimiento de convocatoria (causa nulidad de asambleas)",
      "No designar comisario (obligatorio según Código de Comercio)",
      "No indicar duración del ejercicio económico",
      "No prever causales de disolución (deja vacíos)",
      "No inscribir modificaciones en el Registro Mercantil (obligatorio)",
      "No publicar cambios en la Gaceta Oficial",
      "No firmar por todos los socios fundadores"
    ],
    video: {
      titulo: "Estatutos sociales — Cómo redactarlos correctamente",
      url: "https://www.youtube.com/watch?v=ESTAT2024",
      caratula: "assets/caratulas/estatutos.jpg",
      duracion: "22:45"
    },
    descargas: [
      { nombre: "Modelo Word — Estatutos sociales", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 6.3 ============
  "6.3": {
    nombre: "Acta de Asamblea",
    objetivo: "Documentar las decisiones tomadas por los accionistas o socios en una reunión debidamente convocada, tales como aprobación de estados financieros, distribución de utilidades, designación de administradores, reformas estatutarias o aumentos de capital.",
    normativaInt: "No aplica directamente.",
    normativaVe: "Código de Comercio (art. 270-289 sobre asambleas; art. 291 sobre derechos de accionistas); Ley de Registro Público y del Notariado; Providencias del Registro Mercantil.",
    campos: [
      "Lugar, fecha y hora de la reunión",
      "Tipo de asamblea (ordinaria o extraordinaria)",
      "Forma de convocatoria (publicación o unánime)",
      "Lista de asistentes con su porcentaje de acciones",
      "Quórum constituido",
      "Presidencia de la asamblea (quien dirige y quien secretaría)",
      "Orden del día",
      "Puntos discutidos y decisiones tomadas",
      "Votaciones y mayorías obtenidas",
      "Designación de comisario para firmar el acta (si aplica)",
      "Cierre y firmas de los asistentes"
    ],
    ejemplo: `ACTA DE ASAMBLEA ORDINARIA DE ACCIONISTAS
SUPERMERCADO EL AHORRO, C.A.

En la ciudad de Caracas, a los veintiocho (28) días del mes de
febrero de dos mil veinticinco (2025), siendo las 10:00 a.m.,
se reunieron en el domicilio de la sociedad los accionistas que
a continuación se indican, previa convocatoria publicada en el
diario El Nacional el 18 de febrero de 2025:

  - [Accionista 1], titular del 60% del capital social
  - [Accionista 2], titular del 40% del capital social

Se verificó la existencia del quórum reglamentario. Presidió la
asamblea el ciudadano [Nombre 1], quien designó como Secretario
al ciudadano [Nombre 2].

ORDEN DEL DÍA
1. Lectura y consideración del Informe de la Junta Directiva.
2. Presentación y aprobación de los Estados Financieros al
   31/12/2024.
3. Informe del Comisario.
4. Distribución de utilidades.
5. Designación de la nueva Junta Directiva.
6. Designación del Comisario.
7. Clausura.

DECISIONES
PRIMERO: Se aprobó por unanimidad el Informe de la Junta
Directiva correspondiente al ejercicio 2024.

SEGUNDO: Se aprobaron por unanimidad los Estados Financieros
al 31/12/2024, auditados por [Nombre del Contador Público],
C.P.C. N° XXXXX, con opinión sin salvedades.

TERCERO: Se tomó nota del Informe del Comisario, sin
observaciones.

CUARTO: Se aprobó la distribución de dividendos por
Bs. 1.700.000, pagaderos dentro de los 30 días siguientes.

QUINTO: Se designó la nueva Junta Directiva para el período
2025-2030: Presidente [Nombre], Vicepresidente [Nombre],
Director [Nombre].

SEXTO: Se designó como Comisario a [Nombre], C.P.C. N° XXXXX.

No habiendo otro asunto que tratar, se levantó la sesión a las
11:30 a.m.

_____ FIRMA _____           _____ FIRMA _____
Presidente de la Asamblea   Secretario

_____ FIRMA _____           _____ FIRMA _____
[Accionista 1]              [Accionista 2]`,
    observaciones: [
      "No indicar la forma de convocatoria (puede causar nulidad)",
      "No establecer el quórum y mayorías aplicadas",
      "No registrar los votos de cada decisión",
      "No firmar por todos los asistentes",
      "No asentar el acta en el Libro de Actas (obligatorio)",
      "No protocolizar ante el Registro Mercantil cuando la decisión lo exige",
      "No designar comisario cuando aplica",
      "Confundir asamblea ordinaria con extraordinaria (competencias distintas)",
      "Omitir la aprobación de los estados financieros y la distribución de utilidades"
    ],
    video: {
      titulo: "Cómo redactar un Acta de Asamblea",
      url: "https://www.youtube.com/watch?v=ASAMBLEA2024",
      caratula: "assets/caratulas/asamblea.jpg",
      duracion: "19:30"
    },
    descargas: [
      { nombre: "Modelo Word — Acta de Asamblea Ordinaria", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Acta de Asamblea Extraordinaria", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 6.4 ============
  "6.4": {
    nombre: "Acta de Junta Directiva",
    objetivo: "Documentar las decisiones tomadas por los miembros de la Junta Directiva en el ejercicio de sus funciones administrativas, tales como aprobación de presupuestos, contrataciones, apertura de cuentas bancarias, designación de apoderados o autorización de operaciones.",
    normativaInt: "No aplica directamente.",
    normativaVe: "Código de Comercio (art. 242-249 sobre administración); Estatutos Sociales de la sociedad.",
    campos: [
      "Lugar, fecha y hora de la reunión",
      "Lista de directores asistentes",
      "Verificación del quórum estatutario",
      "Presidencia de la reunión",
      "Orden del día",
      "Puntos discutidos y decisiones tomadas",
      "Votación de cada decisión",
      "Firmas de todos los directores asistentes"
    ],
    ejemplo: `ACTA DE JUNTA DIRECTIVA N° 045
SUPERMERCADO EL AHORRO, C.A.

En la ciudad de Caracas, a los diez (10) días del mes de marzo
de dos mil veinticinco (2025), siendo las 3:00 p.m., se
reunieron en el domicilio de la sociedad los miembros de la
Junta Directiva:

  - [Nombre 1], Presidente
  - [Nombre 2], Vicepresidente
  - [Nombre 3], Director

Verificado el quórum estatutario, el Presidente declaró
instalada la reunión.

ORDEN DEL DÍA
1. Aprobación del presupuesto 2025.
2. Apertura de cuenta bancaria en el Banco Nacional de Crédito.
3. Autorización de compra de equipos por hasta Bs. 500.000.000.
4. Designación de apoderados judiciales.
5. Clausura.

DECISIONES
PRIMERO: Aprobado por unanimidad el presupuesto anual 2025
por Bs. 1.800.000.000.

SEGUNDO: Aprobada por unanimidad la apertura de una cuenta
corriente en el Banco Nacional de Crédito, autorizando al
Presidente a firmar la documentación respectiva.

TERCERO: Autorizada la compra de equipos de refrigeración
por hasta Bs. 500.000.000, facultando al Vicepresidente para
suscribir la contratación.

CUARTO: Designados como apoderados judiciales los abogados
[Nombre 1] y [Nombre 2], IPSA N° XXXXX.

No habiendo otro punto que tratar, se levantó la sesión a las
4:15 p.m.

_____ FIRMA _____           _____ FIRMA _____
Presidente                  Vicepresidente

_____ FIRMA _____
Director`,
    observaciones: [
      "No verificar el quórum estatutario (puede invalidar decisiones)",
      "No detallar los montos autorizados (genera opacidad)",
      "No firmar todos los directores",
      "No asentar el acta en el Libro de Actas de la Junta Directiva",
      "No mencionar expresamente los poderes otorgados",
      "Confundir acta de Junta Directiva con acta de Asamblea",
      "No incluir la hora de cierre de la reunión"
    ],
    video: {
      titulo: "Cómo redactar actas de Junta Directiva",
      url: "https://www.youtube.com/watch?v=JUNTA2024",
      caratula: "assets/caratulas/junta.jpg",
      duracion: "14:20"
    },
    descargas: [
      { nombre: "Modelo Word — Acta de Junta Directiva", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 6.5 ============
  "6.5": {
    nombre: "Libro de Actas",
    objetivo: "Registrar de forma cronológica y foliada todas las actas de asambleas de accionistas y de juntas directivas, sirviendo como libro legal obligatorio de la sociedad y como prueba de las decisiones tomadas por los órganos de gobierno.",
    normativaInt: "No aplica directamente.",
    normativaVe: "Código de Comercio (art. 32, 270-289); Ley de Registro Público y del Notariado; Providencias del Registro Mercantil.",
    campos: [
      "Encabezado: razón social, RIF, número del libro",
      "Numeración consecutiva de folios",
      "Fecha de apertura del libro",
      "Asientos cronológicos de cada acta",
      "Referencia al tipo de reunión (asamblea o junta directiva)",
      "Firma del secretario y del presidente en cada acta",
      "Certificación final por el Registro Mercantil",
      "Sello del Registro Mercantil",
      "Cierre del libro al agotarse los folios"
    ],
    ejemplo: `LIBRO DE ACTAS N° 3
SUPERMERCADO EL AHORRO, C.A.
RIF: J-12345678-9
Registro Mercantil Quinto del Distrito Capital
Bajo el N° 25, Tomo 10-A, de fecha 15/03/2010

Este libro contiene las actas de las Asambleas de Accionistas
y de las reuniones de la Junta Directiva de la sociedad,
correspondientes al período del 01/01/2024 al 31/12/2024.

FOLIO 1
ACTA DE ASAMBLEA ORDINARIA DE ACCIONISTAS
Fecha: 28/02/2024
[Asiento según acta N° 12]

FOLIO 2-3
ACTA DE JUNTA DIRECTIVA N° 040
Fecha: 15/03/2024
[Asiento según acta N° 40]

FOLIO 4
ACTA DE ASAMBLEA EXTRAORDINARIA DE ACCIONISTAS
Fecha: 30/06/2024
[Asiento: Aumento de capital social de Bs. 600.000.000 a
Bs. 800.000.000, aprobado por unanimidad]

[...continúa hasta el folio 200...]

CERTIFICACIÓN
Certifico que el presente libro contiene 200 folios numerados
y sellados por este Registro Mercantil, y que fue aperturado
en la fecha indicada.

_____ FIRMA _____
[Registrador Mercantil]
Sello del Registro

Caracas, 15 de enero de 2024`,
    observaciones: [
      "No foliar ni sellar el libro ante el Registro Mercantil",
      "No asentar las actas en orden cronológico",
      "No firmar cada acta por el secretario y el presidente",
      "No llevar el libro por duplicado (el original es de la sociedad)",
      "Utilizar hojas sueltas sin encuadernar (no tiene valor legal)",
      "No registrar el libro de acciones en paralelo",
      "No conservarlo por el plazo de prescripción legal (10 años)",
      "No protocolizar el libro ante el Registro Mercantil cuando se apertura"
    ],
    video: {
      titulo: "Libros legales de una sociedad — Cómo aperturarlos",
      url: "https://www.youtube.com/watch?v=LIBROS2024",
      caratula: "assets/caratulas/libros.jpg",
      duracion: "16:15"
    },
    descargas: [
      { nombre: "Modelo Word — Formato de Libro de Actas", tipo: "word", url: "https://drive.google.com/..." }
    ]
  }

};