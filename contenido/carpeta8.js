// ============================================
// CARPETA 8: ANÁLISIS Y GESTIÓN
// Normativa: NIIF, NIC 1, práctica financiera
// ============================================

const contenidoCarpeta8 = {

  // ============ 8.1 ============
  "8.1": {
    nombre: "Análisis Financiero",
    objetivo: "Evaluar la situación financiera, el desempeño y los flujos de efectivo de la entidad mediante la aplicación de técnicas como análisis horizontal, vertical y ratios financieros, para apoyar la toma de decisiones gerenciales, crediticias o de inversión.",
    normativaInt: "NIC 1 (presentación de EEFF como base); NIIF 8 (información por segmentos); práctica de análisis financiero profesional; CFA Institute Standards.",
    normativaVe: "VEN-NIIF / BA VEN-NIIF (base de los EEFF); práctica contable venezolana; análisis con cifras reexpresadas por inflación cuando aplique.",
    campos: [
      "Encabezado: entidad, período analizado, analista",
      "Estados financieros base (balance, resultados, flujos)",
      "Análisis horizontal (% variación año a año)",
      "Análisis vertical (% sobre total de activos o ingresos)",
      "Ratios de liquidez: corriente, prueba ácida, capital de trabajo",
      "Ratios de solvencia: endeudamiento, autonomía, cobertura de intereses",
      "Ratios de rentabilidad: margen bruto, margen operativo, ROA, ROE",
      "Ratios de actividad: rotación de inventarios, cuentas por cobrar, cuentas por pagar, ciclo operativo",
      "Ratios de mercado: utilidad por acción, dividendos por acción (si cotiza)",
      "Análisis de tendencias",
      "Comparación con el sector o benchmarks",
      "Conclusiones y recomendaciones"
    ],
    ejemplo: `ANÁLISIS FINANCIERO
SUPERMERCADO EL AHORRO, C.A.
Período: Ejercicio 2024 vs. 2023

1. ANÁLISIS VERTICAL (2024)
   Activos corrientes / Total activos          41,3%
   Activos no corrientes / Total activos        58,7%
   Pasivos / Total patrimonio+pasivo            41,3%
   Patrimonio / Total patrimonio+pasivo         58,7%

2. ANÁLISIS HORIZONTAL (2024 vs. 2023)
   Ingresos          +18,5%
   Costo de ventas   +20,1%
   Ganancia bruta    +15,3%
   Gastos operativos +14,8%
   Ganancia neta     +12,4%

3. RATIOS DE LIQUIDEZ
   Razón corriente = Activo corriente / Pasivo corriente
                   = 8.800.000 / 3.600.000 = 2,44
                   (Meta: > 1,5 — Adecuado)

   Prueba ácida = (Activo corriente – Inventario) / Pasivo corriente
                = (8.800.000 – 4.800.000) / 3.600.000 = 1,11
                (Meta: > 1,0 — Aceptable)

   Capital de trabajo = Activo corriente – Pasivo corriente
                      = 8.800.000 – 3.600.000 = 5.200.000

4. RATIOS DE SOLVENCIA
   Endeudamiento = Pasivo total / Activo total
                 = 8.800.000 / 21.300.000 = 41,3%
                 (Meta: < 60% — Adecuado)

   Cobertura de intereses = EBIT / Gastos financieros
                          = 4.500.000 / 700.000 = 6,4
                          (Meta: > 3,0 — Adecuado)

5. RATIOS DE RENTABILIDAD
   Margen bruto = Ganancia bruta / Ingresos
                = 13.000.000 / 35.000.000 = 37,1%

   Margen operativo = EBIT / Ingresos
                    = 4.500.000 / 35.000.000 = 12,9%

   Margen neto = Ganancia neta / Ingresos
               = 2.800.000 / 35.000.000 = 8,0%

   ROA = Ganancia neta / Activo total
       = 2.800.000 / 21.300.000 = 13,1%

   ROE = Ganancia neta / Patrimonio
       = 2.800.000 / 12.500.000 = 22,4%

6. RATIOS DE ACTIVIDAD
   Rotación inventarios = Costo ventas / Inventario promedio
                        = 22.000.000 / 4.800.000 = 4,58 veces
   Días inventario = 365 / 4,58 = 79,7 días

   Rotación cuentas x cobrar = Ingresos / CxC promedio
                             = 35.000.000 / 2.300.000 = 15,2 veces
   Días CxC = 365 / 15,2 = 24 días

   Ciclo operativo = 79,7 + 24 = 103,7 días

CONCLUSIONES
- La empresa presenta una posición de liquidez sólida
  (razón corriente 2,44 y capital de trabajo positivo).
- El endeudamiento del 41,3% está dentro de parámetros
  conservadores.
- La rentabilidad es positiva (ROE 22,4%) superior al costo
  promedio ponderado de capital.
- El ciclo operativo de 103,7 días es extenso; se recomienda
  optimizar la rotación de inventarios.

RECOMENDACIONES
- Reducir días de inventario mediante gestión más eficiente.
- Mantener la política de crédito restrictiva (24 días CxC).
- Evaluar renegociación de préstamos para mejorar el costo
  financiero.`,
    observaciones: [
      "No comparar con períodos anteriores (pierde valor el análisis)",
      "No usar cifras homogéneas (inflación, cambio de políticas contables)",
      "Interpretar mal los ratios: alto no siempre es bueno",
      "No relacionar ratios entre sí (son interdependientes)",
      "No comparar con el sector o benchmarks (análisis aislado)",
      "No formular conclusiones y recomendaciones (queda en tablas)",
      "Usar cifras sin reexpresar cuando hay inflación significativa"
    ],
    video: {
      titulo: "Análisis financiero con ratios — Caso práctico",
      url: "https://www.youtube.com/watch?v=ANALISIS2025",
      caratula: "assets/caratulas/analisis.jpg",
      duracion: "32:40"
    },
    descargas: [
      { nombre: "Plantilla Excel — Análisis financiero completo", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Tabla de ratios de referencia por sector", tipo: "pdf", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 8.2 ============
  "8.2": {
    nombre: "Presupuesto Anual",
    objetivo: "Planificar de forma cuantificada y coordinada los ingresos, costos, gastos e inversiones de la entidad para un ejercicio económico, sirviendo como herramienta de control, evaluación del desempeño y toma de decisiones.",
    normativaInt: "NIIF 8 (información por segmentos); NIC 36 (deterioro, al evaluar proyecciones); práctica de planeación financiera (FP&A); estándares del IMA (Institute of Management Accountants).",
    normativaVe: "Práctica presupuestaria venezolana; Providencias del BCV en materia de reexpresión; normativa de la SUNAI para entes públicos.",
    campos: [
      "Encabezado: entidad, ejercicio, versión",
      "Premisas macroeconómicas (inflación, tipo de cambio, tasas)",
      "Presupuesto de ventas (por producto, línea, zona, canal)",
      "Presupuesto de producción (si aplica)",
      "Presupuesto de compras y costo de ventas",
      "Presupuesto de gastos operativos (ventas, administración)",
      "Presupuesto de inversiones (CAPEX)",
      "Presupuesto de financiamiento",
      "Flujo de caja proyectado",
      "Estado de resultados proyectado",
      "Balance proyectado",
      "Indicadores de gestión y metas",
      "Escenarios (base, optimista, pesimista)",
      "Aprobación de la Junta Directiva"
    ],
    ejemplo: `PRESUPUESTO ANUAL 2025
SUPERMERCADO EL AHORRO, C.A.
Versión 1.0 — Aprobado 28/02/2025

1. PREMISAS MACROECONÓMICAS
   Inflación proyectada anual:        40%
   Devaluación proyectada anual:      35%
   Tasa activa promedio:              18%
   Tasa pasiva promedio:               9%
   Crecimiento del PIB:               2%

2. PRESUPUESTO DE VENTAS (Bs.)
   Q1:    900.000.000
   Q2:  1.000.000.000
   Q3:  1.100.000.000
   Q4:  1.200.000.000
   TOTAL: 4.200.000.000

3. COSTO DE VENTAS PROYECTADO (63%)
   TOTAL: 2.646.000.000

4. MARGEN BRUTO PROYECTADO (37%)
   TOTAL: 1.554.000.000

5. GASTOS OPERATIVOS PROYECTADOS
   Gastos de ventas:         320.000.000
   Gastos de administración: 550.000.000
   TOTAL:                    870.000.000

6. RESULTADO OPERATIVO PROYECTADO
   TOTAL: 684.000.000

7. INVERSIONES (CAPEX)
   Ampliación de sede:       500.000.000
   Equipos de refrigeración: 250.000.000
   Tecnología:               120.000.000
   TOTAL:                    870.000.000

8. FINANCIAMIENTO
   Préstamo bancario LP:     600.000.000
   Aporte de accionistas:    200.000.000
   TOTAL:                    800.000.000

9. FLUJO DE CAJA PROYECTADO
   Saldo inicial:            1.500.000.000
   (+) Cobros operativos:    4.000.000.000
   (-) Pagos operativos:    (3.300.000.000)
   (-) CAPEX:                 (870.000.000)
   (+) Financiamiento:         800.000.000
   (-) Servicio de deuda:     (200.000.000)
   SALDO FINAL PROYECTADO:   1.930.000.000

10. INDICADORES META
   Margen bruto:              ≥ 37%
   Margen operativo:          ≥ 15%
   Días de inventario:        ≤ 75
   Días de CxC:               ≤ 30
   Endeudamiento:             ≤ 50%

11. ESCENARIOS
   Base:        ingresos Bs. 4.200 MM
   Optimista:   ingresos Bs. 4.800 MM (+14%)
   Pesimista:   ingresos Bs. 3.600 MM (-14%)

Elaborado: Gerencia de Administración y Finanzas
Aprobado: Junta Directiva el 28/02/2025`,
    observaciones: [
      "No definir premisas macroeconómicas realistas (base del presupuesto)",
      "No incluir escenarios alternos (el base raramente se cumple)",
      "No involucrar a las gerencias operativas (queda como imposición)",
      "No revisar el presupuesto trimestralmente (queda obsoleto)",
      "No vincular el presupuesto con la estrategia",
      "No medir desviaciones (pierde su valor de control)",
      "Presupuestar sin considerar la inflación y devaluación en Venezuela"
    ],
    video: {
      titulo: "Cómo elaborar un Presupuesto Anual empresarial",
      url: "https://www.youtube.com/watch?v=PPTO2025",
      caratula: "assets/caratulas/presupuesto.jpg",
      duracion: "28:15"
    },
    descargas: [
      { nombre: "Plantilla Excel — Presupuesto maestro", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo de premisas macro", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 8.3 ============
  "8.3": {
    nombre: "Flujo de Caja Proyectado",
    objetivo: "Proyectar los ingresos y egresos de efectivo de la entidad para un período futuro, identificando las necesidades de financiamiento, los excedentes de liquidez y los momentos críticos, para apoyar la toma de decisiones financieras.",
    normativaInt: "NIC 7 (Estado de Flujos de Efectivo); NIIF 9 (instrumentos financieros); práctica FP&A.",
    normativaVe: "Práctica de tesorería venezolana; Providencias del BCV sobre administración de riesgos.",
    campos: [
      "Encabezado: entidad, período (semanal, mensual, trimestral, anual)",
      "Saldo inicial de efectivo",
      "Cobros operativos (contado, crédito, recuperación CxC)",
      "Pagos operativos (proveedores, nómina, impuestos, servicios)",
      "Flujo operativo neto",
      "Cobros/pagos por inversiones (CAPEX, venta de activos)",
      "Flujo de inversión neto",
      "Cobros/pagos de financiamiento (préstamos, aportes, dividendos)",
      "Flujo de financiamiento neto",
      "Flujo neto del período",
      "Saldo final de efectivo",
      "Análisis de brechas (meses con déficit)"
    ],
    ejemplo: `FLUJO DE CAJA PROYECTADO 2025
SUPERMERCADO EL AHORRO, C.A.
Proyección mensual (Bs.)

| Concepto                | Ene         | Feb         | Mar         | Abr         |
|-------------------------|-------------|-------------|-------------|-------------|
| SALDO INICIAL           | 1.500.000   | 1.200.000   | 1.350.000   | 1.180.000   |
| COBROS OPERATIVOS       | 300.000     | 320.000     | 350.000     | 360.000     |
| PAGOS OPERATIVOS        | (280.000)   | (300.000)   | (340.000)   | (350.000)   |
| FLUJO OPERATIVO NETO    |   20.000    |   20.000    |   10.000    |   10.000    |
| INVERSIONES (CAPEX)     |  (80.000)   |       0     | (150.000)   |       0     |
| FLUJO DE INVERSIÓN      |  (80.000)   |       0     | (150.000)   |       0     |
| FINANCIAMIENTO NETO     |  (40.000)   |   30.000    |  (20.000)   |  (20.000)   |
| FLUJO NETO              | (100.000)   |   50.000    | (160.000)   |  (10.000)   |
| SALDO FINAL             | 1.400.000   | 1.250.000   | 1.190.000   | 1.170.000   |

ANÁLISIS DE BRECHAS
- Enero: déficit por CAPEX y pago de préstamo. Se cubre con
  saldo inicial.
- Marzo: déficit por CAPEX importante. Se recomienda
  adelantar cobros o gestionar línea de crédito de corto plazo.
- Se proyecta que el saldo mínimo del año será en abril con
  Bs. 1.170.000 (holgado).

ESCENARIO PESIMISTA
Si las ventas caen 15%:
- El déficit en marzo aumentaría a Bs. 210.000.
- Se recomienda mantener línea de crédito de Bs. 300.000
  disponible para cubrir eventualidades.

Elaborado por: Tesorería
Revisado por: Gerencia de Finanzas
Fecha: 15/01/2025`,
    observaciones: [
      "No diferenciar flujos operativos de inversión y financiamiento",
      "No proyectar con base en el comportamiento histórico de cobros/pagos",
      "No considerar el servicio de deuda (capital + intereses)",
      "No analizar los meses con déficit (es el objetivo principal)",
      "No incluir escenarios alternos (base, optimista, pesimista)",
      "Proyectar en bolívares sin considerar la inflación",
      "No revisar y actualizar mensualmente (rolling forecast)"
    ],
    video: {
      titulo: "Flujo de caja proyectado — Modelo completo en Excel",
      url: "https://www.youtube.com/watch?v=FCAJA2025",
      caratula: "assets/caratulas/flujo-caja.jpg",
      duracion: "26:40"
    },
    descargas: [
      { nombre: "Plantilla Excel — Flujo de caja proyectado 12 meses", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo con escenarios (base/opt/pes)", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 8.4 ============
  "8.4": {
    nombre: "Punto de Equilibrio",
    objetivo: "Determinar el nivel de ventas (en unidades o en bolívares) en el cual la entidad no genera utilidad ni pérdida, es decir, donde los ingresos totales igualan a los costos totales (fijos + variables), sirviendo como referencia para la toma de decisiones sobre precios, costos y volumen.",
    normativaInt: "NIC 1 (base de costeo); NIIF 8 (información por segmentos); práctica de costeo gerencial (IMA).",
    normativaVe: "Práctica contable venezolana; clasificación de costos fijos y variables.",
    campos: [
      "Encabezado: entidad, producto o línea, período",
      "Clasificación de costos: fijos y variables",
      "Costos fijos totales del período",
      "Costo variable unitario",
      "Precio de venta unitario",
      "Margen de contribución unitario = Precio – Costo variable",
      "Razón de contribución = Margen / Precio",
      "Punto de equilibrio en unidades = Costos fijos / Margen contribución",
      "Punto de equilibrio en bolívares = Costos fijos / Razón de contribución",
      "Margen de seguridad = (Ventas reales – Punto equilibrio) / Ventas reales",
      "Análisis de sensibilidad (qué pasa si cambian precio, costo o volumen)"
    ],
    ejemplo: `PUNTO DE EQUILIBRIO
SUPERMERCADO EL AHORRO, C.A.
Línea: Arroz blanco 1kg — Enero 2025

1. DATOS
   Precio de venta unitario:              Bs. 45.000
   Costo variable unitario:               Bs. 32.000
   Costos fijos mensuales (asignados):    Bs. 156.000.000

2. MARGEN DE CONTRIBUCIÓN
   Margen unitario = 45.000 – 32.000 = 13.000
   Razón contribución = 13.000 / 45.000 = 28,89%

3. PUNTO DE EQUILIBRIO
   Unidades = 156.000.000 / 13.000 = 12.000 unidades
   Bolívares = 156.000.000 / 0,2889 = Bs. 540.000.000

4. VERIFICACIÓN
   Ventas (12.000 × 45.000)              540.000.000
   (-) Costos variables (12.000 × 32.000) (384.000.000)
   = Margen de contribución                156.000.000
   (-) Costos fijos                       (156.000.000)
   = Utilidad                                        0
   ✓ Punto de equilibrio correcto

5. MARGEN DE SEGURIDAD
   Ventas reales del mes:  Bs. 630.000.000 (14.000 und)
   Margen seguridad = (630.000.000 – 540.000.000) / 630.000.000
                    = 14,3%
   (Si las ventas caen más de 14,3%, la línea entra en pérdida)

6. ANÁLISIS DE SENSIBILIDAD
   Si el precio sube 10% (a Bs. 49.500):
     Nuevo margen = 17.500
     Nuevo punto equilibrio = 8.914 unidades (-26%)

   Si el costo variable sube 10% (a Bs. 35.200):
     Nuevo margen = 9.800
     Nuevo punto equilibrio = 15.918 unidades (+33%)

   Si los costos fijos bajan 10% (a Bs. 140.400.000):
     Nuevo punto equilibrio = 10.800 unidades (-10%)

CONCLUSIONES
- El punto de equilibrio es de 12.000 unidades/mes.
- El margen de seguridad es del 14,3%, considerado ajustado.
- Sensibilidad alta al costo variable: reducir costo de compra
  tiene mayor impacto que subir precio.`,
    observaciones: [
      "Clasificar mal los costos fijos y variables (base del cálculo)",
      "No revisar el punto de equilibrio cuando cambian precios o costos",
      "Calcular solo en unidades y no en bolívares (o viceversa)",
      "No incluir todos los costos fijos asignables (subestima el punto)",
      "No analizar el margen de seguridad (indicador clave de riesgo)",
      "No hacer análisis de sensibilidad (deja el análisis estático)",
      "Confundir margen de contribución con margen bruto"
    ],
    video: {
      titulo: "Punto de equilibrio — Cálculo y análisis",
      url: "https://www.youtube.com/watch?v=PEQ2025",
      caratula: "assets/caratulas/punto-equilibrio.jpg",
      duracion: "20:10"
    },
    descargas: [
      { nombre: "Plantilla Excel — Punto de equilibrio", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Modelo con análisis de sensibilidad", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  },

  // ============ 8.5 ============
  "8.5": {
    nombre: "Costeo de Productos",
    objetivo: "Determinar el costo unitario de producción o adquisición de un bien o servicio, incorporando costos directos (materiales, mano de obra) e indirectos (CIF), mediante un sistema de costeo apropiado, para fijar precios, valorar inventarios y evaluar rentabilidad por producto.",
    normativaInt: "NIC 2 (Inventarios — costo de adquisición y transformación); NIIF 15 (ingresos); práctica de contabilidad de costos (IMA); método ABC (Activity Based Costing).",
    normativaVe: "VEN-NIIF / BA VEN-NIIF (base de valoración de inventarios); práctica contable venezolana.",
    campos: [
      "Encabezado: entidad, producto, período",
      "Sistema de costeo (por órdenes, por procesos, ABC, estándar)",
      "Materiales directos (MD) — cantidad × costo unitario",
      "Mano de obra directa (MOD) — horas × tarifa",
      "Costos indirectos de fabricación (CIF) — base de distribución (horas, unidades, etc.)",
      "Costo de producción del período",
      "Unidades producidas",
      "Costo unitario de producción",
      "Inventario inicial y final de producto terminado",
      "Costo de ventas del período",
      "Comparación con precio de venta y margen por producto",
      "Análisis de variaciones (si costeo estándar)"
    ],
    ejemplo: `COSTEO DE PRODUCTOS
SUPERMERCADO EL AHORRO, C.A.
Producto: Pan artesanal (línea panadería)
Período: Noviembre 2024 — Sistema: costeo por procesos

1. MATERIALES DIRECTOS
   Harina:         500 kg × Bs. 12.000 =  6.000.000
   Levadura:        20 kg × Bs. 45.000 =    900.000
   Sal:             10 kg × Bs.  8.000 =     80.000
   Agua:           200 L  × Bs.  2.000 =    400.000
   TOTAL MD                               7.380.000

2. MANO DE OBRA DIRECTA
   Panaderos: 400 horas × Bs. 25.000 =   10.000.000

3. COSTOS INDIRECTOS DE FABRICACIÓN (CIF)
   Alquiler del área:                      1.200.000
   Servicios (luz, agua, gas):               800.000
   Depreciación de hornos:                   400.000
   Supervisión:                            1.500.000
   TOTAL CIF                                3.900.000

4. COSTO DE PRODUCCIÓN DEL PERÍODO
   MD + MOD + CIF = 7.380.000 + 10.000.000 + 3.900.000
   TOTAL                                   21.280.000

5. UNIDADES PRODUCIDAS
   Panes: 8.000 unidades

6. COSTO UNITARIO DE PRODUCCIÓN
   21.280.000 / 8.000 = Bs. 2.660 por pan

7. COSTO DE VENTAS DEL PERÍODO
   Inventario inicial PT:                  400.000
   (+) Costo producción:                21.280.000
   (-) Inventario final PT:               (600.000)
   = Costo de ventas                    21.080.000

8. ANÁLISIS DE RENTABILIDAD
   Precio de venta unitario:              Bs. 4.500
   Costo unitario:                        Bs. 2.660
   Margen unitario:                       Bs. 1.840
   Margen porcentual:                        40,9%

   Volumen vendido: 7.900 panes
   Ingresos:      7.900 × 4.500 = Bs. 35.550.000
   Costo ventas:  7.900 × 2.660 = Bs. 21.014.000
   Margen bruto:                  Bs. 14.536.000

9. OBSERVACIONES
   - El CIF representa 18,3% del costo total.
   - El margen es saludable y consistente con la meta (≥ 38%).
   - Se recomienda revisar precio si el costo de la harina sube.

Elaborado por: Contraloría de Costos
Revisado por: Gerencia de Administración y Finanzas
Fecha: 30/11/2024`,
    observaciones: [
      "No incluir todos los CIF en el costo (subestima el costo real)",
      "Distribuir mal los CIF entre productos (distorsiona la rentabilidad)",
      "No diferenciar costos del período vs. costos del producto",
      "No actualizar los costos estándar periódicamente",
      "No separar costos directos de indirectos",
      "No vincular el costeo con la valoración de inventarios NIC 2",
      "Confundir costeo por absorción con costeo variable (tienen usos distintos)"
    ],
    video: {
      titulo: "Costeo por procesos — Caso práctico panadería",
      url: "https://www.youtube.com/watch?v=COSTEO2025",
      caratula: "assets/caratulas/costeo.jpg",
      duracion: "25:30"
    },
    descargas: [
      { nombre: "Plantilla Excel — Costeo por procesos", tipo: "excel", url: "https://drive.google.com/..." },
      { nombre: "Plantilla Excel — Costeo ABC", tipo: "excel", url: "https://drive.google.com/..." }
    ]
  }

};