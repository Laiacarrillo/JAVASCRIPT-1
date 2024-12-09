const miPromesa = new Promise ((resolve, reject) => {
    const exito = true; //Si se pone false no se cumple la promesa
    if (exito){
        console.log("Esperando ...");
        setTimeout (()=> {
            resolve("Valor que devuelve la promesa");
        }, 5000); //El num es el tiempo que se demora esperando la respuesta
    } else {
        reject("Hubo un error en la operacion")
    }
});
console.log("INICIO")
miPromesa.then( res => { //Es asincronico (No se ejecita de inmediato, se puede demorar)
    console.warn("No hubo error en la promesa");
    console.log(res)
})
.catch (res=>{
    console.error("Error en la promesa");
    console.log(res);
})
console.log("FIN");