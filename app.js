// ============================================
// PORTAFOLIO CONTABLE — Lógica principal v2
// ============================================

// ---------- ESTRUCTURA DE MENÚ ----------
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

// ---------- ESTADO DE SESIÓN ----------
let sesion = {
  logueado: false,
  usuario: null,
  nombre: null,
  maestro: false,
  docActual: null,
  filtro: ""
};

// ---------- RENDER LOGIN ----------
function renderLogin() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="login-box">
      <h2>🔐 Acceso al Portafolio</h2>
      <p>Ingresa tus credenciales para acceder al contenido.</p>
      <input type="text" id="inpUser" placeholder="Usuario" autocomplete="off">
      <input type="password" id="inpPass" placeholder="Contraseña">
      <button onclick="login()">Ingresar</button>
      <button class="btn-master" onclick="abrirClaveMaestra()">🔑 Clave Maestra</button>
      <p class="error" id="loginError"></p>
    </div>
  `;
}

function login() {
  const u = document.getElementById('inpUser').value.trim();
  const p = document.getElementById('inpPass').value;
  const user = CONFIG.usuarios.find(x => x.usuario === u && x.clave === p);
  if (user) {
    sesion.logueado = true;
    sesion.usuario = user.usuario;
    sesion.nombre = user.nombre;
    actualizarWatermark();
    renderMenu();
    renderBienvenida();
  } else {
    document.getElementById('loginError').textContent = "❌ Usuario o contraseña incorrectos";
  }
}

// ---------- CLAVE MAESTRA ----------
function abrirClaveMaestra() {
  const clave = prompt("🔑 Ingresa la clave maestra:");
  if (clave === CONFIG.claveMaestra) {
    sesion.maestro = true;
    sesion.logueado = true;
    sesion.nombre = "Administrador";
    actualizarWatermark();
    document.body.classList.add('modo-maestro');
    renderMenu();
    renderBienvenida();
    alert("✅ Modo maestro activado. Acceso total habilitado.");
  } else if (clave !== null) {
    alert("❌ Clave maestra incorrecta");
  }
}

function salirMaestro() {
  sesion.maestro = false;
  document.body.classList.remove('modo-maestro');
  actualizarWatermark();
  renderBienvenida();
}

// ---------- WATERMARK ----------
function actualizarWatermark() {
  const wm = document.querySelector('.watermark');
  if (!wm) return;
  if (sesion.maestro) {
    wm.textContent = "🔓 SESIÓN MAESTRA — ACCESO TOTAL";
    wm.style.color = "rgba(46, 204, 113, 0.08)";
  } else if (sesion.logueado) {
    wm.textContent = CONFIG.watermarkUsuario(sesion.nombre);
    wm.style.color = "rgba(44, 62, 80, 0.06)";
  } else {
    wm.textContent = CONFIG.watermarkPublico;
  }
}

// ---------- RENDER MENÚ ----------
function renderMenu() {
  const menu = document.getElementById('menu');
  menu.innerHTML = '';

  // Buscador
  const buscador = document.createElement('input');
  buscador.type = 'text';
  buscador.placeholder = '🔍 Buscar documento...';
  buscador.className = 'buscador';
  buscador.value = sesion.filtro;
  buscador.addEventListener('input', (e) => {
    sesion.filtro = e.target.value.toLowerCase();
    renderMenu();
  });
  menu.appendChild(buscador);

  Object.keys(portafolio).forEach((carpeta, idx) => {
    const docsFiltrados = portafolio[carpeta].filter(doc =>
      doc.titulo.toLowerCase().includes(sesion.filtro) ||
      doc.id.includes(sesion.filtro)
    );

    if (docsFiltrados.length === 0) return;

    const folderDiv = document.createElement('div');
    folderDiv.className = 'folder';
    if (idx === 0 && !sesion.filtro) folderDiv.classList.add('open');
    if (sesion.filtro) folderDiv.classList.add('open');

    const title = document.createElement('div');
    title.className = 'folder-title';
    title.innerHTML = `<span>📁 ${carpeta}</span><span class="arrow">▶</span>`;
    title.addEventListener('click', () => folderDiv.classList.toggle('open'));

    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'folder-items';

    docsFiltrados.forEach(doc => {
      const item = document.createElement('div');
      item.className = 'doc-item';
      if (doc.id === sesion.docActual) item.classList.add('active');
      item.textContent = `${doc.id} — ${doc.titulo}`;
      item.addEventListener('click', () => {
        sesion.docActual = doc.id;
        renderMenu();
        cargarDocumento(doc.id);
      });
      itemsDiv.appendChild(item);
    });

    folderDiv.appendChild(title);
    folderDiv.appendChild(itemsDiv);
    menu.appendChild(folderDiv);
  });
}

// ---------- BIENVENIDA ----------
function renderBienvenida() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="welcome">
      <h2>👋 Bienvenido, ${sesion.nombre}</h2>
      <p>Selecciona una carpeta del menú izquierdo.</p>
      ${sesion.maestro ? `
        <div class="master-panel">
          <p>🔓 <strong>Modo maestro activo</strong> — Puedes copiar, exportar e imprimir.</p>
          <button onclick="salirMaestro()">Cerrar modo maestro</button>
        </div>
      ` : `
        <p class="hint">💡 El contenido está protegido. Solo el administrador puede copiar o exportar.</p>
      `}
      <p class="hint">📊 ${Object.keys(portafolio).length} carpetas · ${Object.values(portafolio).flat().length} documentos</p>
    </div>
  `;
}

// ---------- CARGAR DOCUMENTO ----------
function cargarDocumento(id) {
  const content = document.getElementById('content');
  const doc = contenidoDocs[id];

  if (!doc) {
    content.innerHTML = `
      <div class="doc-view">
        <h2>Documento ${id}</h2>
        <p style="color:#718096;">⏳ Aún no desarrollado. Poco a poco iremos completando todas las carpetas.</p>
      </div>
    `;
    return;
  }

  content.innerHTML = `
    <div class="doc-view">
      <div class="doc-header">
        <h2>${doc.nombre}</h2>
        ${sesion.maestro ? `
          <div class="acciones">
            <button onclick="exportarWord()">📄 Word</button>
            <button onclick="exportarExcel()">📊 Excel</button>
            <button onclick="imprimirDoc()">🖨️ Imprimir</button>
            <button onclick="exportarPDF()">📕 PDF</button>
          </div>
        ` : ''}
      </div>

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

      ${doc.video ? `
      <div class="doc-section">
        <h3>🎥 Video Explicativo</h3>
        <div class="video-card">
          <img src="${doc.video.caratula}" alt="Carátula" onerror="this.src='https://via.placeholder.com/480x270/1e3a5f/ffffff?text=Video+Explicativo'">
          <div class="video-info">
            <p class="video-titulo">${doc.video.titulo}</p>
            <p class="video-dur">⏱️ ${doc.video.duracion}</p>
            <a href="${doc.video.url}" target="_blank" rel="noopener" class="btn-video">
              ▶️ Ver en YouTube
            </a>
          </div>
        </div>
      </div>
      ` : ''}

      <div class="doc-section">
        <h3>📄 Ejemplo</h3>
        <pre id="ejemploDoc">${doc.ejemplo}</pre>
      </div>

      <div class="doc-section">
        <h3>⚠️ Observaciones y Errores Frecuentes</h3>
        <ul>${doc.observaciones.map(o => `<li>${o}</li>`).join('')}</ul>
      </div>

      ${doc.descargas && doc.descargas.length ? `
      <div class="doc-section">
        <h3>📥 Archivos Descargables</h3>
        <div class="descargas-lista">
          ${doc.descargas.map(d => `
            <a href="${d.url}" target="_blank" rel="noopener" class="descarga-item">
              ${iconoPorTipo(d.tipo)} ${d.nombre}
            </a>
          `).join('')}
        </div>
      </div>
      ` : ''}
    </div>
  `;
}

function iconoPorTipo(tipo) {
  const iconos = { excel: '📊', word: '📄', pdf: '📕', otro: '📎' };
  return iconos[tipo] || iconos.otro;
}

// ---------- EXPORTAR ----------
function exportarWord() {
  const doc = contenidoDocs[sesion.docActual];
  if (!doc) return;
  const html = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office'
          xmlns:w='urn:schemas-microsoft-com:office:word'>
    <head><meta charset="utf-8"><title>${doc.nombre}</title></head>
    <body>
      <h1>${doc.nombre}</h1>
      <h3>Objetivo</h3><p>${doc.objetivo}</p>
      <h3>Normativa Internacional</h3><p>${doc.normativaInt}</p>
      <h3>Normativa Venezuela</h3><p>${doc.normativaVe}</p>
      <h3>Campos Obligatorios</h3><ul>${doc.campos.map(c => `<li>${c}</li>`).join('')}</ul>
      <h3>Ejemplo</h3><pre>${doc.ejemplo}</pre>
      <h3>Observaciones</h3><ul>${doc.observaciones.map(o => `<li>${o}</li>`).join('')}</ul>
    </body></html>`;
  const blob = new Blob([html], { type: 'application/msword' });
  descargar(blob, `${doc.nombre}.doc`);
}

function exportarExcel() {
  const doc = contenidoDocs[sesion.docActual];
  if (!doc) return;
  let csv = `"${doc.nombre}"\n\n`;
  csv += `"Objetivo","${doc.objetivo.replace(/"/g, '""')}"\n`;
  csv += `"Normativa Internacional","${doc.normativaInt}"\n`;
  csv += `"Normativa Venezuela","${doc.normativaVe}"\n\n`;
  csv += `"Campos Obligatorios"\n`;
  doc.campos.forEach(c => csv += `"${c}"\n`);
  csv += `\n"Observaciones"\n`;
  doc.observaciones.forEach(o => csv += `"${o}"\n`);
  const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8' });
  descargar(blob, `${doc.nombre}.csv`);
}

function imprimirDoc() {
  window.print();
}

function exportarPDF() {
  alert("📕 Para exportar a PDF: usa Ctrl+P y selecciona 'Guardar como PDF'.\n(La marca de agua se incluirá automáticamente)");
  window.print();
}

function descargar(blob, nombre) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nombre;
  a.click();
  URL.revokeObjectURL(url);
}

// ---------- PROTECCIONES ANTI-COPIA ----------
document.addEventListener('keydown', (e) => {
  if (sesion.maestro) return; // MAESTRO: sin restricciones
  if (e.key === 'F12') { e.preventDefault(); return false; }
  if (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key.toUpperCase())) {
    e.preventDefault(); return false;
  }
  if (e.ctrlKey && ['U','S','P','C','A'].includes(e.key.toUpperCase())) {
    e.preventDefault();
    if (e.key.toUpperCase() === 'C') {
      mostrarAviso("⛔ Copia bloqueada. Usa la clave maestra para desbloquear.");
    }
    return false;
  }
});
document.addEventListener('dragstart', (e) => e.preventDefault());

function mostrarAviso(msg) {
  const aviso = document.createElement('div');
  aviso.className = 'aviso';
  aviso.textContent = msg;
  document.body.appendChild(aviso);
  setTimeout(() => aviso.remove(), 2500);
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  actualizarWatermark();
  renderLogin();
});