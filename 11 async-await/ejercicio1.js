
function pedirGranos() {
  return new Promise((resolve, reject) => {
    console.log("Pidiendo granos de café...");
    setTimeout(() => {
      const exito = Math.random() > 0.2; 
      if (exito) {
        resolve("Granos de café obtenidos.");
      } else {
        reject("Error al pedir los granos de café.");
      }
    }, 1000); 
  });
}


function prepararCafe() {
  return new Promise((resolve, reject) => {
    console.log("Preparando el café...");
    setTimeout(() => {
      const exito = Math.random() > 0.1; 
      if (exito) {
        resolve("Café preparado.");
      } else {
        reject("Error al preparar el café.");
      }
    }, 2000); 
  });
}
function servirCafe() {
  return new Promise((resolve, reject) => {
    console.log("Sirviendo el café...");
    setTimeout(() => {
      const exito = Math.random() > 0.3; 
      if (exito) {
        resolve("Café servido.");
      } else {
        reject("Error al servir el café.");
      }
    }, 1500); 
  });
}

async function hacerCafe() {
  try {
    const mensajeGranos = await pedirGranos();
    console.log(mensajeGranos);

    const mensajePreparar = await prepararCafe();
    console.log(mensajePreparar);

    const mensajeServir = await servirCafe();
    console.log(mensajeServir);

    console.log(" El café está listo para disfrutar!");
  } catch (error) {
    console.log("Hubo un error en el proceso:", error);
  }
}

hacerCafe();
