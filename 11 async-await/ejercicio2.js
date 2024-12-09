
function obtenerIngredientes() {
  return new Promise((resolve) => {
    console.log("Obteniendo los ingredientes...");
    setTimeout(() => {
      resolve("Ingredientes obtenidos.");
    }, 2000); 
  });
}


function mezclarIngredientes() {
  return new Promise((resolve) => {
    console.log("Mezclando los ingredientes...");
    setTimeout(() => {
      resolve("Ingredientes mezclados.");
    }, 1000); 
  });
}

function cocinarIngredientes() {
  return new Promise((resolve) => {
    console.log("Cocinando los ingredientes...");
    setTimeout(() => {
      resolve("Ingredientes cocinados.");
    }, 3000); 
  });
}


async function hacerReceta() {
  try {
    
    const resultadoIngredientes = await obtenerIngredientes();
    console.log(resultadoIngredientes);

    const resultadoMezcla = await mezclarIngredientes();
    console.log(resultadoMezcla);

    const resultadoCocina = await cocinarIngredientes();
    console.log(resultadoCocina);

    console.log("¡La receta está lista!");
  } catch (error) {
    console.log("Hubo un error en el proceso de la receta:", error);
  }
}
hacerReceta();
