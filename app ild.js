// ============================================
// PORTAFOLIO CONTABLE — Lógica principal
// ============================================

// ---------- ESTRUCTURA DE DATOS ----------
const portafolio = {
  "Carpeta 1: Estados Financieros": [
    { id: "1.1", titulo: "Estado de Situación Financiera" },
    { id: "1.2", titulo: "Estado de Resultados Integral" },
    { id: "1.3", titulo: "Estado de Cambios en el Patrimonio" },
    { id: "1.4", titulo: "Estado de Flujos de Efectivo" },
    { id: "1.5", titulo: "Notas a los Estados Financieros" }
  ],
  "Carpeta 2: Informes de Auditoría": [
    { id: "2.1", titulo: "Informe de Auditoría (Opinión)" },
    { id: "2.2", titulo: "Informe con Salvedades" },
    { id: "2.3", titulo: "Informe de Abstención" },
    { id: "2.4", titulo: "Informe de Opinión Negativa" },
    { id: "2.5", titulo: "Carta de Representación" },
    { id: "2.6", titulo: "Carta de Control Interno" }
  ],
  "Carpeta 3: Aseguramiento y Revisión": [
    { id: "3.1", titulo: "Informe de Revisión de EEFF" },
    { id: "3.2", titulo: "Informe de Aseguramiento" },
    { id: "3.3", titulo: "Procedimientos Acordados (NISR 4400)" },
    { id: "3.4", titulo: "Certificación de Ingresos y Gastos" },
    { id: "3.5", titulo: "Informe de Compilación" }
  ],
  "Carpeta 4: Declaraciones Fiscales": [
    { id: "4.1", titulo: "Declaración ISLR Persona Natural" },
    { id: "4.2", titulo: "Declaración ISLR Persona Jurídica" },
    { id: "4.3", titulo: "Declaración de IVA" },
    { id: "4.4", titulo: "Declaración de ISAE" },
    { id: "4.5", titulo: "Retenciones ISLR / IVA" }
  ],
  "Carpeta 5: Documentos Laborales": [
    { id: "5.1", titulo: "Nómina de Pago" },
    { id: "5.2", titulo: "Recibo de Pago" },
    { id: "5.3", titulo: "Liquidación de Prestaciones" },
    { id: "5.4", titulo: "Constancia de Trabajo" },
    { id: "5.5", titulo: "Cálculo de Vacaciones" },
    { id: "5.6", titulo: "Cálculo de Utilidades" }
  ],
  "Carpeta 6: Documentos Legales": [
    { id: "6.1", titulo: "Acta Constitutiva" },
    { id: "6.2", titulo: "Estatutos Sociales" },
    { id: "6.3", titulo: "Acta de Asamblea" },
    { id: "6.4", titulo: "Acta de Junta Directiva" },
    { id: "6.5", titulo: "Libro de Actas" }
  ],
  "Carpeta 7: Control Interno": [
    { id: "7.1", titulo: "Manual de Procedimientos" },
    { id: "7.2", titulo: "Matriz de Riesgos" },
    { id: "7.3", titulo: "Flujogramas de Procesos" },
    { id: "7.4", titulo: "Conciliación Bancaria" },
    { id: "7.5", titulo: "Arqueo de Caja" },
    { id: "7.6", titulo: "Inventario Físico" }
  ],
  "Carpeta 8: Análisis y Gestión": [
    { id: "8.1", titulo: "Análisis Financiero" },
    { id: "8.2", titulo: "Presupuesto Anual" },
    { id: "8.3", titulo: "Flujo de Caja Proyectado" },
    { id: "8.4", titulo: "Punto de Equilibrio" },
    { id: "8.5", titulo: "Costeo de Productos" }
  ],
  "Carpeta 9: Auditoría Interna": [
    { id: "9.1", titulo: "Plan de Auditoría" },
    { id: "9.2", titulo: "Programa de Auditoría" },
    { id: "9.3", titulo: "Papeles de Trabajo" },
    { id: "9.4", titulo: "Informe de Auditoría Interna" }
  ],
  "Carpeta 10: Peritaje y Forense": [
    { id: "10.1", titulo: "Informe de Peritaje Contable" },
    { id: "10.2", titulo: "Auditoría Forense" },
    { id: "10.3", titulo: "Avalúo de Empresas" }
  ],
  "Carpeta 11: Regulación Venezolana": [
    { id: "11.1", titulo: "Informe SUNAVAL" },
    { id: "11.2", titulo: "Informe SUDEBAN" },
    { id: "11.3", titulo: "Informe SUDECA" },
    { id: "11.4", titulo: "Informe SENIAT" }
  ]
};

// ---------- BASE DE CONTENIDO (cargaremos progresivamente) ----------
const contenidoDocs = {
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
    ]
  }
  // ... aquí iremos agregando el resto
};

// ---------- RENDER DEL MENÚ ----------
function renderMenu() {
  const menu = document.getElementById('menu');
  menu.innerHTML = '';

  Object.keys(portafolio).forEach((carpeta, idx) => {
    const folderDiv = document.createElement('div');
    folderDiv.className = 'folder';
    if (idx === 0) folderDiv.classList.add('open');

    const title = document.createElement('div');
    title.className = 'folder-title';
    title.innerHTML = `
      <span>📁 ${carpeta}</span>
      <span class="arrow">▶</span>
    `;
    title.addEventListener('click', () => {
      folderDiv.classList.toggle('open');
      document.querySelectorAll('.folder-title').forEach(t => t.classList.remove('active'));
      title.classList.add('active');
    });

    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'folder-items';

    portafolio[carpeta].forEach(doc => {
      const item = document.createElement('div');
      item.className = 'doc-item';
      item.textContent = `${doc.id} — ${doc.titulo}`;
      item.addEventListener('click', () => {
        document.querySelectorAll('.doc-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        cargarDocumento(doc.id);
      });
      itemsDiv.appendChild(item);
    });

    folderDiv.appendChild(title);
    folderDiv.appendChild(itemsDiv);
    menu.appendChild(folderDiv);
  });
}

// ---------- CARGAR DOCUMENTO ----------
function cargarDocumento(id) {
  const content = document.getElementById('content');
  const doc = contenidoDocs[id];

  if (!doc) {
    content.innerHTML = `
      <div class="doc-view">
        <h2>Documento ${id}</h2>
        <p style="color:#718096;">⏳ Este documento aún no ha sido desarrollado. Poco a poco iremos completando todas las carpetas.</p>
      </div>
    `;
    return;
  }

  content.innerHTML = `
    <div class="doc-view">
      <h2>${doc.nombre}</h2>

      <div class="doc-section">
        <h3>🎯 Objetivo</h3>
        <p>${doc.objetivo}</p>
      </div>

      <div class="doc-section">
        <h3>📚 Normativa Aplicable</h3>
        <p><span class="badge">Internacional</span> ${doc.normativaInt}</p>
        <p><span class="badge">Venezuela</span> ${doc.normativaVe}</p>
      </div>

      <div class="doc-section">
        <h3>📋 Campos Obligatorios</h3>
        <ul>${doc.campos.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>

      <div class="doc-section">
        <h3>📄 Ejemplo</h3>
        <pre>${doc.ejemplo}</pre>
      </div>

      <div class="doc-section">
        <h3>⚠️ Observaciones y Errores Frecuentes</h3>
        <ul>${doc.observaciones.map(o => `<li>${o}</li>`).join('')}</ul>
      </div>
    </div>
  `;
}

// ---------- PROTECCIONES ANTI-COPIA ----------
document.addEventListener('keydown', (e) => {
  // Bloquear F12
  if (e.key === 'F12') { e.preventDefault(); return false; }
  // Bloquear Ctrl+Shift+I / J / C
  if (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key.toUpperCase())) {
    e.preventDefault(); return false;
  }
  // Bloquear Ctrl+U (ver código)
  if (e.ctrlKey && e.key.toUpperCase() === 'U') { e.preventDefault(); return false; }
  // Bloquear Ctrl+S (guardar)
  if (e.ctrlKey && e.key.toUpperCase() === 'S') { e.preventDefault(); return false; }
  // Bloquear Ctrl+P (imprimir)
  if (e.ctrlKey && e.key.toUpperCase() === 'P') { e.preventDefault(); return false; }
  // Bloquear Ctrl+C (copiar)
  if (e.ctrlKey && e.key.toUpperCase() === 'C') {
    e.preventDefault();
    // Opcional: mostrar aviso
    return false;
  }
  // Bloquear Ctrl+A (seleccionar todo)
  if (e.ctrlKey && e.key.toUpperCase() === 'A') { e.preventDefault(); return false; }
});

// Bloquear arrastre de texto
document.addEventListener('dragstart', (e) => e.preventDefault());

// ---------- INICIALIZAR ----------
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
});