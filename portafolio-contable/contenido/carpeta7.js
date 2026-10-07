// ============================================
// CARPETA 7: CONTROL INTERNO
// Normativa: COSO 2013, COSO ERM, NIA 265, NIA 315, NIA 330
// ============================================

const contenidoCarpeta7 = {

  // ============ 7.1 ============
  "7.1": {
    nombre: "Manual de Procedimientos",
    objetivo: "Documentar de forma ordenada, sistemática y detallada los procesos, políticas, responsabilidades y controles que la entidad aplica en sus operaciones, sirviendo como guía para el personal y como base para la evaluación del control interno.",
    normativaInt: "COSO 2013 (Marco Integrado de Control Interno — 5 componentes: ambiente de control, evaluación de riesgos, actividades de control, información y comunicación, supervisión); ISO 9001 (gestión de calidad, como referencia complementaria).",
    normativaVe: "COSO adaptado por la FCCPV; Ley Orgánica de la Administración Financiera del Sector Público (para entes públicos); Ley Orgánica de Procedimientos Administrativos; Providencias de la SUNAI (para sector público).",
    campos: [
      "Portada: nombre de la entidad, título del manual, versión, fecha",
      "Índice general",
      "Objetivo general del manual",
      "Alcance (áreas, procesos, cargos cubiertos)",
      "Base legal y normativa aplicable",
      "Estructura organizativa (organigrama)",
      "Descripción de cada proceso: objetivo, alcance, responsable, entradas, salidas, actividades paso a paso, controles, documentos asociados",
      "Flujogramas por proceso",
      "Matriz de riesgos por proceso (identificación, valoración, respuesta)",
      "Indicadores de gestión",
      "Políticas de actualización y revisión",
      "Aprobación de la máxima autoridad",
      "Control de cambios y versiones"
    ],
    ejemplo: `MANUAL DE PROCEDIMIENTOS
SUPERMERCADO EL AHORRO, C.A.
Versión 3.0 — Vigente desde el 01/03/2025

ÍNDICE
1. Objetivo general
2. Alcance
3. Base legal
4. Estructura organizativa
5. Procesos operativos
   5.1 Ciclo de compras
   5.2 Ciclo de ventas
   5.3 Ciclo de inventarios
   5.4 Ciclo de tesorería
   5.5 Ciclo de nómina
6. Procesos de apoyo
   6.1 Contabilidad
   6.2 Tecnología
   6.3 Recursos Humanos
7. Matriz de riesgos
8. Indicadores de gestión
9. Control de cambios

1. OBJETIVO GENERAL
Establecer los procedimientos administrativos, contables y
operativos de la sociedad, con el fin de garantizar la
confiabilidad de la información financiera, la eficiencia
operativa y el cumplimiento normativo.

2. ALCANCE
Aplica a todos los empleados de la sociedad en sus distintos
niveles jerárquicos, en el territorio nacional.

3. BASE LEGAL
- Código de Comercio
- LOTTT
- Ley de ISLR
- Ley de IVA
- Código Orgánico Tributario
- VEN-NIIF / BA VEN-NIIF
- Normas Internacionales de Auditoría (NIA)
- COSO 2013

4. ESTRUCTURA ORGANIZATIVA
Asamblea de Accionistas → Junta Directiva → Gerencia General
   ├── Gerencia de Administración y Finanzas
   ├── Gerencia de Operaciones
   ├── Gerencia Comercial
   └── Gerencia de Recursos Humanos

5.1 PROCESO: CICLO DE COMPRAS
OBJETIVO: Adquirir bienes y servicios en las mejores
condiciones de precio, calidad y oportunidad.
RESPONSABLE: Gerencia de Administración y Finanzas
ACTIVIDADES:
  1. Recepción de solicitud de compra del área requirente.
  2. Verificación de presupuesto disponible.
  3. Solicitud de al menos 3 cotizaciones.
  4. Cuadro comparativo y selección del proveedor.
  5. Emisión de orden de compra firmada por el gerente.
  6. Recepción de la mercancía con nota de entrega.
  7. Cotejo con la factura y la orden de compra.
  8. Registro contable y programación de pago.
CONTROLES:
  - Aprobación de compras superiores a 100 UT por la Gerencia General.
  - Verificación de RIF y Providencia de Facturación del proveedor.
  - Conciliación mensual proveedor vs. cuentas por pagar.

7. MATRIZ DE RIESGOS (extracto)
| Proceso  | Riesgo                          | Prob. | Impacto | Control                       |
|----------|----------------------------------|-------|---------|-------------------------------|
| Compras  | Compra sin aprobación            | Media | Alto    | Flujo de autorización         |
| Ventas   | Ventas no facturadas             | Baja  | Alto    | Control de numeración         |
| Tesorería| Falsificación de cheques         | Baja  | Alto    | Firmas mancomunadas           |
| Nómina   | Pagos a empleados inexistentes   | Baja  | Alto    | Conciliación con RRHH         |

8. INDICADORES DE GESTIÓN
- Rotación de inventarios (meta: 12 al año)
- Días de cuentas por cobrar (meta: ≤ 30 días)
- Margen bruto (meta: ≥ 37%)
- Cumplimiento de metas presupuestarias (meta: ≥ 95%)

Firmado y aprobado por la Junta Directiva el 28/02/2025.`,
    observaciones: [
      "No documentar los procesos clave (queda todo en la cabeza de los empleados)",
      "No incluir los flujogramas (limita la comprensión)",
      "No actualizar el manual periódicamente (queda obsoleto)",
      "No incluir la matriz de riesgos",
      "No firmar por la máxima autoridad (no tiene validez interna)",
      "Confundir manual de procedimientos con manual de funciones (uno describe procesos, el otro describe cargos)",
      "No incluir el control de cambios y versiones"
    ],
    video: {
      titulo: "Cómo elaborar un Manual de Procedimientos con COSO",
      url: "https://www.youtube.com/watch?v=MANUAL2025",
      caratula: "assets/caratulas/manual.jpg",
      duracion: "28:15"
    },
    descargas: [
      { nombre: "Plantilla Word — Manual de Procedimientos", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Plantilla Excel — Matriz de Riesgos COSO", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Simbología para flujogramas", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 7.2 ============
  "7.2": {
    nombre: "Matriz de Riesgos",
    objetivo: "Identificar, analizar, evaluar y priorizar los riesgos que pueden afectar el logro de los objetivos de la entidad, así como definir las respuestas y controles asociados para mitigarlos.",
    normativaInt: "COSO ERM 2017 (Gestión de Riesgos Empresariales); ISO 31000 (Gestión del Riesgo — Principios y directrices); NIA 315 (Identificación y valoración de riesgos de incorrección material).",
    normativaVe: "COSO ERM adaptado por la FCCPV; Providencias de la SUNAI para entes públicos; Ley Orgánica de la Administración Financiera del Sector Público.",
    campos: [
      "Encabezado: entidad, período, responsable",
      "Categoría de riesgo (estratégico, operativo, financiero, cumplimiento, tecnológico)",
      "Descripción del riesgo",
      "Causa raíz",
      "Consecuencia potencial",
      "Probabilidad de ocurrencia (alta/media/baja o escala 1-5)",
      "Impacto (alto/medio/bajo o escala 1-5)",
      "Nivel de riesgo inherente = probabilidad × impacto",
      "Controles existentes",
      "Evaluación del control (efectivo, parcialmente efectivo, no efectivo)",
      "Nivel de riesgo residual",
      "Respuesta al riesgo (evitar, reducir, compartir, aceptar)",
      "Plan de acción, responsable y fecha",
      "Indicadores de seguimiento"
    ],
    ejemplo: `MATRIZ DE RIESGOS
SUPERMERCADO EL AHORRO, C.A.
Período: Ejercicio 2025

| # | Categoría   | Riesgo                            | P | I | NR | Controles               | NR Residual | Respuesta | Responsable      |
|---|-------------|-----------------------------------|:-:|:-:|:--:|-------------------------|:-----------:|-----------|------------------|
| 1 | Financiero  | Incobrabilidad de cuentas x cobrar| 4 | 4 | 16 | Análisis de crédito     |      8      | Reducir   | Gcia. Finanzas   |
| 2 | Operativo   | Merma de inventario               | 5 | 3 | 15 | Conteos cíclicos        |      6      | Reducir   | Gcia. Operaciones|
| 3 | Cumplimiento| Multas SENIAT por ISLR            | 3 | 5 | 15 | Asesoría fiscal externa |      5      | Reducir   | Contraloría      |
| 4 | Tecnológico | Caída del sistema contable        | 2 | 5 | 10 | Backups diarios         |      4      | Reducir   | TI               |
| 5 | Operativo   | Fraude en caja                    | 2 | 5 | 10 | Arqueos sorpresivos     |      3      | Reducir   | Auditoría Interna|
| 6 | Reputación  | Quejas de clientes                | 3 | 3 |  9 | Encuestas post-venta    |      4      | Reducir   | Gcia. Comercial  |

ESCALA: 1 = Muy bajo, 5 = Muy alto
NR (Nivel de Riesgo) = P × I
  Bajo: 1-6 | Medio: 8-12 | Alto: 15-25

PLAN DE ACCIÓN (extracto)
Riesgo 1 — Incobrabilidad:
  Acción: Implementar scoring de crédito automatizado.
  Responsable: Gerencia de Finanzas
  Fecha: 30/06/2025

Riesgo 2 — Merma de inventario:
  Acción: Conteos cíclicos semanales por categoría.
  Responsable: Gerencia de Operaciones
  Fecha: 31/03/2025

Aprobado por la Junta Directiva el 28/02/2025.`,
    observaciones: [
      "No priorizar los riesgos (todos quedan como iguales)",
      "No definir la escala de probabilidad e impacto",
      "No documentar los controles existentes",
      "No asignar responsables ni fechas a los planes de acción",
      "No revisar la matriz periódicamente (debe actualizarse al menos anualmente)",
      "Confundir riesgo inherente con riesgo residual",
      "No involucrar a los dueños de proceso en la identificación de riesgos"
    ],
    video: {
      titulo: "Matriz de Riesgos COSO ERM — Cómo construirla",
      url: "https://www.youtube.com/watch?v=RIESGOS2025",
      caratula: "assets/caratulas/riesgos.jpg",
      duracion: "24:30"
    },
    descargas: [
      { nombre: "Plantilla Excel — Matriz de Riesgos", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Guía COSO ERM 2017 (resumen)", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 7.3 ============
  "7.3": {
    nombre: "Flujogramas de Procesos",
    objetivo: "Representar gráficamente el flujo de actividades, decisiones, documentos y responsables dentro de un proceso, permitiendo identificar ineficiencias, duplicidades y puntos de control.",
    normativaInt: "COSO 2013 (actividades de control); BPMN 2.0 (Business Process Model and Notation) como estándar gráfico; ISO 9001 (enfoque a procesos).",
    normativaVe: "COSO adaptado por la FCCPV; práctica profesional para la elaboración de manuales.",
    campos: [
      "Encabezado: nombre del proceso, código, versión, fecha",
      "Objetivo del proceso",
      "Alcance (inicio y fin del proceso)",
      "Responsables por carril (swimlanes)",
      "Simbología estándar (inicio, actividad, decisión, documento, archivo)",
      "Secuencia lógica de actividades",
      "Puntos de decisión",
      "Documentos generados",
      "Controles clave (marcados)",
      "Firmas de elaboración y aprobación"
    ],
    ejemplo: `FLUJOGRAMA — CICLO DE COMPRAS
Código: PR-CC-001 | Versión: 3.0 | Fecha: 01/03/2025

RESPONSABLES (carriles):
[Área requirente] [Compras] [Almacén] [Contabilidad]

SIMBOLOGÍA:
  ( ) Inicio / Fin      [ ] Actividad
  < > Decisión          { } Documento
  = Archivo             ⟳ Control

FLUJO:

(INICIO)
  |
  v
[Área requirente: elabora solicitud]
  |
  v
{ Solicitud de compra }
  |
  v
[Compras: verifica presupuesto]
  |
  v
< ¿Hay presupuesto? >
  | NO  → Regresa al área requirente
  | SÍ
  v
[Compras: solicita 3 cotizaciones]
  |
  v
[Compras: elabora cuadro comparativo]
  |
  v
⟳ CONTROL: Aprobación por Gerente General (compras > 100 UT)
  |
  v
[Compras: emite orden de compra]
  |
  v
{ Orden de compra }
  |
  v
[Proveedor: entrega mercancía + factura]
  |
  v
[Almacén: verifica contra orden y factura]
  |
  v
< ¿Conforme? >
  | NO → Devuelve al proveedor
  | SÍ
  v
[Almacén: ingresa al inventario]
  |
  v
[Contabilidad: registra la operación]
  |
  v
{ Asiento contable + programación de pago }
  |
  v
=FIN=

Elaborado por: [Nombre]        Aprobado por: [Gerente General]
Cargo: Analista de Procesos    Cargo: Gerente General
Fecha: 28/02/2025              Fecha: 28/02/2025`,
    observaciones: [
      "No usar una simbología estándar (cada quien inventa sus símbolos)",
      "No marcar los puntos de control (se pierde el valor del flujograma)",
      "No incluir los carriles de responsabilidad",
      "No indicar inicio y fin del proceso claramente",
      "No documentar los flujos alternos (rechazos, devoluciones)",
      "No versionar los flujogramas (queda todo en el aire)",
      "No revisar con los dueños del proceso antes de publicar"
    ],
    video: {
      titulo: "Cómo elaborar flujogramas con BPMN 2.0",
      url: "https://www.youtube.com/watch?v=FLUJO2025",
      caratula: "assets/caratulas/flujograma.jpg",
      duracion: "20:45"
    },
    descargas: [
      { nombre: "Plantilla PowerPoint — Flujogramas editables", tipo: "word", url: "https://drive.google.com/..." },
      { nombre: "Simbología BPMN resumida", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 7.4 ============
  "7.4": {
    nombre: "Conciliación Bancaria",
    objetivo: "Comparar y ajustar las diferencias entre el saldo del libro auxiliar de bancos de la contabilidad de la entidad y el saldo reflejado en el estado de cuenta emitido por el banco, identificando las partidas en tránsito y determinando el saldo real conciliado.",
    normativaInt: "NIC 7 (Estado de Flujos de Efectivo — referencia); NIA 500 (evidencia de auditoría); NIA 330 (respuestas del auditor a los riesgos).",
    normativaVe: "Código de Comercio (art. 32-35 — libros obligatorios); Providencias del BCV sobre cuentas bancarias; práctica contable venezolana.",
    campos: [
      "Encabezado: entidad, banco, número de cuenta, período",
      "Saldo según libros de la entidad",
      "Saldo según estado de cuenta del banco",
      "Partidas conciliatorias del lado del banco: depósitos en tránsito, cheques pendientes de cobro, errores del banco",
      "Partidas conciliatorias del lado de la entidad: notas de débito/crédito no registradas, comisiones bancarias, intereses ganados, cheques devueltos, errores en libros",
      "Saldo conciliado final (debe cuadrar por ambos lados)",
      "Firma de quien elabora y quien revisa"
    ],
    ejemplo: `CONCILIACIÓN BANCARIA
SUPERMERCADO EL AHORRO, C.A.
Banco Nacional de Crédito — Cuenta Corriente N° 0134-XXXX-XX-XXXXXXXXXX
Período: Noviembre 2024

1. SALDO SEGÚN LIBROS                          18.500.000

2. PARTIDAS CONCILIATORIAS (Ajustes al saldo en libros)
   (+) Notas de crédito no registradas:
       Intereses ganados                             45.000
   (-) Notas de débito no registradas:
       Comisiones bancarias                        (12.000)
       IVA sobre comisiones                         (1.920)
   (-) Cheque devuelto por el cliente           (250.000)

3. SALDO AJUSTADO SEGÚN LIBROS                 18.281.080

4. SALDO SEGÚN ESTADO DE CUENTA                20.500.000

5. PARTIDAS CONCILIATORIAS (Ajustes al saldo del banco)
   (-) Cheques pendientes de cobro:
       Cheque N° 001234                            80.000
       Cheque N° 001240                           150.000
       Cheque N° 001245                            55.000
   (+) Depósito en tránsito del 30/11/2024      (2.066.080)

6. SALDO AJUSTADO SEGÚN BANCO                  18.281.080

VERIFICACIÓN:
  Saldo ajustado según libros  =  Bs. 18.281.080
  Saldo ajustado según banco   =  Bs. 18.281.080
  ✓ Conciliación cuadrada

ASIENTOS DE AJUSTE PROPUESTOS
  Bs. 45.000  Débito: Bancos
              Crédito: Ingresos financieros
  Bs. 12.000  Débito: Gastos bancarios
              Crédito: Bancos
  Bs. 1.920   Débito: IVA crédito fiscal
              Crédito: Bancos
  Bs. 250.000 Débito: Cuentas por cobrar
              Crédito: Bancos

_____ FIRMA _____           _____ FIRMA _____
Elaboró: [Contador]         Revisó: [Gerente Finanzas]
Fecha: 05/12/2024           Fecha: 06/12/2024`,
    observaciones: [
      "No cuadrar el saldo ajustado por ambos lados (error grave)",
      "No registrar los asientos de ajuste derivados de la conciliación",
      "No documentar el cheque devuelto ni gestionar su cobro",
      "No revisar las comisiones bancarias (se acumulan y distorsionan)",
      "No conciliar mensualmente todas las cuentas bancarias",
      "No firmar por quien elabora y quien revisa",
      "No adjuntar copia del estado de cuenta del banco",
      "No investigar partidas antiguas (cheques con más de 6 meses)"
    ],
    video: {
      titulo: "Conciliación bancaria paso a paso",
      url: "https://www.youtube.com/watch?v=CONCIL2025",
      caratula: "assets/caratulas/conciliacion.jpg",
      duracion: "18:20"
    },
    descargas: [
      { nombre: "Plantilla Excel — Conciliación bancaria automatizada", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Formato de conciliación", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 7.5 ============
  "7.5": {
    nombre: "Arqueo de Caja",
    objetivo: "Verificar físicamente el efectivo, comprobantes y valores existentes en la caja de la entidad, comparándolos con el saldo registrado en libros, para detectar diferencias, faltantes o sobrantes y evaluar el control interno sobre el manejo de efectivo.",
    normativaInt: "COSO 2013 (actividades de control); NIA 500 (evidencia); NIA 240 (responsabilidad del auditor respecto al fraude).",
    normativaVe: "Código de Comercio (art. 32-35); práctica contable venezolana; normas internas de cada entidad.",
    campos: [
      "Encabezado: entidad, caja arqueada, fecha, hora (sorpresiva)",
      "Nombre del cajero responsable",
      "Detalle del efectivo por denominación (billetes y monedas)",
      "Total efectivo contado",
      "Cheques, tarjetas de crédito/débito (comprobantes)",
      "Vales, facturas pendientes de rendición",
      "Documentos pendientes (notas de entrega, recibos)",
      "Total valores y documentos",
      "Saldo según libros de caja",
      "Diferencia (faltante o sobrante)",
      "Explicación del cajero",
      "Firma del cajero, del arqueador y del supervisor"
    ],
    ejemplo: `ARQUEO DE CAJA SORPRESIVO
SUPERMERCADO EL AHORRO, C.A.
Caja N° 3 — Cajero: Juan Pérez
Fecha: 15/11/2024 — Hora: 10:30 a.m.

1. EFECTIVO CONTADO
   Billetes:
     Bs. 200 × 15   =    3.000
     Bs. 100 × 45   =    4.500
     Bs. 50 × 80    =    4.000
     Bs. 20 × 120   =    2.400
     Bs. 10 × 200   =    2.000
     Bs. 5 × 300    =    1.500
   Monedas:
     Bs. 2 × 500    =    1.000
     Bs. 1 × 800    =      800
     Bs. 0,50 × 600 =      300
   TOTAL EFECTIVO                   19.500

2. OTROS VALORES
   Cheques recibidos                    5.200
   Comprobantes de tarjeta débito       8.400
   Comprobantes de tarjeta crédito      4.100
   TOTAL OTROS VALORES                 17.700

3. DOCUMENTOS PENDIENTES
   Facturas pendientes de registro      2.300
   TOTAL DOCUMENTOS                     2.300

4. TOTAL GENERAL (1 + 2 + 3)          39.500

5. SALDO SEGÚN LIBRO DE CAJA          39.500

6. DIFERENCIA                              0
   ✓ CAJA CUADRADA

OBSERVACIONES
- Todos los comprobantes de tarjeta están firmados por el cliente.
- Los cheques están endosados a favor de la empresa.
- No se observaron vales personales.

_____ FIRMA _____           _____ FIRMA _____
Juan Pérez                  [Arqueador]
Cajero                      Cargo: Auditor Interno

_____ FIRMA _____
[Supervisor]
Cargo: Gerente de Operaciones`,
    observaciones: [
      "No realizar arqueos sorpresivos (pierden efectividad)",
      "No contar físicamente el efectivo (solo revisar el libro)",
      "No verificar la autenticidad de los cheques y comprobantes de tarjeta",
      "No registrar los vales personales (deben considerarse faltantes)",
      "No firmar por el cajero (impide deslindar responsabilidad)",
      "No investigar las diferencias (faltantes repetidos son señal de fraude)",
      "No rotar a los cajeros periódicamente",
      "No separar funciones (quien cobra no debe registrar ni arquear)"
    ],
    video: {
      titulo: "Cómo hacer un arqueo de caja correctamente",
      url: "https://www.youtube.com/watch?v=ARQUEO2025",
      caratula: "assets/caratulas/arqueo.jpg",
      duracion: "14:50"
    },
    descargas: [
      { nombre: "Plantilla Excel — Arqueo de caja", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo Word — Acta de arqueo", tipo: "word", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 7.6 ============
  "7.6": {
    nombre: "Inventario Físico",
    objetivo: "Verificar la existencia real de los bienes inventariables (mercancías, materias primas, productos terminados) mediante conteo físico, comparándolos con los registros contables, para determinar diferencias, obsolescencia, deterioro o faltantes.",
    normativaInt: "NIC 2 (Inventarios — costo y valor neto de realización); NIA 501 (Consideraciones específicas para la obtención de evidencia — inventarios); COSO 2013.",
    normativaVe: "Código de Comercio (art. 32-35 — inventario anual); VEN-NIIF / BA VEN-NIIF; práctica contable venezolana.",
    campos: [
      "Encabezado: entidad, fecha, almacén, responsable",
      "Instrucciones previas al conteo (congelación de movimientos)",
      "Equipo de conteo (contadores y verificadores)",
      "Listado de existencias por código, descripción, unidad de medida",
      "Cantidad según sistema",
      "Cantidad según conteo físico",
      "Diferencia (faltante o sobrante)",
      "Costo unitario",
      "Valorización de la diferencia",
      "Observaciones sobre estado físico (deterioro, obsolescencia)",
      "Firmas de los contadores y del supervisor",
      "Comparación con el saldo contable total",
      "Ajustes propuestos"
    ],
    ejemplo: `INVENTARIO FÍSICO DE MERCANCÍAS
SUPERMERCADO EL AHORRO, C.A.
Almacén Central — Fecha: 31/12/2024
Hora inicio: 06:00 a.m. — Hora fin: 02:00 p.m.

INSTRUCCIONES PREVIAS
- Congelados los movimientos de almacén desde 30/12/2024.
- Etiquetados los estantes con códigos.
- Equipo dividido en 4 parejas (contador + verificador).

| Código  | Descripción             | Unidad | Sist.  | Físico | Dif.  | Costo U.   | Valor Dif.  |
|---------|-------------------------|--------|-------:|-------:|------:|-----------:|------------:|
| 1001    | Arroz blanco 1kg        | und    | 12.500 | 12.480 |  -20  |     35.000 |    (700.000)|
| 1002    | Harina maíz 1kg         | und    |  8.200 |  8.200 |    0  |     28.000 |           0 |
| 1003    | Aceite girasol 1L       | und    |  5.400 |  5.395 |   -5  |     95.000 |    (475.000)|
| 1004    | Azúcar refinada 1kg     | und    | 10.000 | 10.010 |  +10  |     30.000 |      300.000|
| 1005    | Café molido 500g        | und    |  3.200 |  3.200 |    0  |    120.000 |           0 |
| 1006    | Leche en polvo 900g     | und    |  2.100 |  2.100 |    0  |    220.000 |           0 |
| TOTAL   |                         |        | 41.400 | 41.385 |  -15  |            |    (875.000)|

OBSERVACIONES FÍSICAS
- 45 unidades de arroz (código 1001) presentan empaque roto;
  se recomienda clasificar como deterioro.
- 120 unidades de café (código 1005) con fecha de vencimiento
  vencida hace 2 meses; se recomienda castigo.

VALORIZACIÓN CONTABLE
Saldo según sistema (libros)            1.452.000.000
Saldo según conteo físico               1.451.125.000
DIFERENCIA                                 (875.000)

AJUSTES PROPUESTOS
- Faltante por Bs. 875.000 (posible merma no reportada)
- Castigo por deterioro de arroz: Bs. 1.575.000
- Castigo por vencimiento de café: Bs. 14.400.000

_____ FIRMA _____           _____ FIRMA _____
Contador 1                  Verificador 1

_____ FIRMA _____
[Supervisor de Almacén]

Caracas, 31 de diciembre de 2024`,
    observaciones: [
      "No congelar los movimientos durante el conteo (genera diferencias falsas)",
      "No usar parejas de conteo (contador + verificador) para reducir errores",
      "No valorizar las diferencias al costo unitario (debe hacerse)",
      "No identificar deterioro u obsolescencia en el conteo",
      "No ajustar la contabilidad después del inventario",
      "No comparar el saldo físico total con el contable",
      "No documentar la fecha y hora del conteo",
      "No firmar por todos los involucrados"
    ],
    video: {
      titulo: "Cómo dirigir un inventario físico — Buenas prácticas",
      url: "https://www.youtube.com/watch?v=INVENT2025",
      caratula: "assets/caratulas/inventario.jpg",
      duracion: "22:35"
    },
    descargas: [
      { nombre: "Plantilla Excel — Inventario físico", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Instrucciones previas al conteo (PDF)", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  }

};