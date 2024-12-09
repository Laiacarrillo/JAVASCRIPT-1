
function esMembresiaActiva(fechaInscripcion, duracionMembresia, fechaActual) {
    const fechaInscripcionDate = new Date(fechaInscripcion); 
    const fechaLimite = new Date(fechaInscripcionDate.getTime() + duracionMembresia * 24 * 60 * 60 * 1000); 
    return fechaActual <= fechaLimite;
  }
  
  module.exports = { esMembresiaActiva };

  