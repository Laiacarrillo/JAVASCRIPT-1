
const { esMembresiaActiva }=('./gestorfechas');

let clientes = [];  

function registrarCliente(nombre, fechaInscripcion, duracionMembresia) {
  const cliente = {
    nombre,
    fechaInscripcion,
    duracionMembresia
  };
  
  clientes.push(cliente);
  console.log("Cliente ${nombre} registrado exitosamente.");
}

function verificarMembresiaActiva(nombre, fechaActual) {
  const cliente = clientes.find(c => c.nombre === nombre);
  
  if (!cliente) {
    console.log("Cliente no encontrado.");
    return;
  }

  const isActive = esMembresiaActiva(cliente.fechaInscripcion, cliente.duracionMembresia, new Date(fechaActual));
  if (isActive) {
    console.log("La membresía de ${nombre} está activa.");
  } else {
    console.log("La membresía de ${nombre} ha expirado.");
  }
}

function listarClientesActivos(fechaActual) {
  const clientesActivos = clientes.filter(cliente => 
    esMembresiaActiva(cliente.fechaInscripcion, cliente.duracionMembresia, new Date(fechaActual))
  );
  
  if (clientesActivos.length === 0) {
    console.log("No hay clientes con membresías activas.");
  } else {
    console.log("Clientes con membresías activas: ");
    clientesActivos.forEach(cliente => {
      console.log(cliente.nombre);
    });
  }
}

module.exports = { registrarCliente, verificarMembresiaActiva, listarClientesActivos };

