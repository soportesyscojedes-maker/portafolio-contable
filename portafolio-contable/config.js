// ============================================
// CONFIGURACIÓN CENTRAL DEL PORTAFOLIO
// ============================================

const CONFIG = {
  // ---- USUARIOS (fase 1: hardcoded) ----
  usuarios: [
    { usuario: "estudiante1", clave: "conta2025", rol: "usuario", nombre: "Juan Pérez" },
    { usuario: "estudiante2", clave: "ucv2025",    rol: "usuario", nombre: "María Gómez" },
    { usuario: "profesor",    clave: "docente2025", rol: "usuario", nombre: "Prof. Ramírez" }
  ],

  // ---- CLAVE MAESTRA ----
  claveMaestra: "MAESTRO-2025-FCCPV",

  // ---- WATERMARK ----
  watermarkPublico: "© Portafolio Contable — Acceso restringido",
  watermarkUsuario: (nombre) => `© Portafolio Contable — Licencia para: ${nombre}`,

  // ---- MENSAJE DE BLOQUEO ----
  mensajeBloqueo: "⛔ Contenido protegido. Contacta al administrador para acceso.",

  // ---- COLORES (opcional) ----
  colorPrimario: "#1e3a5f",
  colorSecundario: "#2c5282"
};