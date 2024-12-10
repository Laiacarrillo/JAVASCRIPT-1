export default function mostrarTexto(elemHTML){
    console.log("Funcion mostrarTexto");
    fetch("datos.csv")
    .then(response => response.text()) //convierte en texto 
    .then(data =>{
        console.table(data); //convierte en tabla
        elemHTML.innerHTML = data;
    })
    .catch(error => //Si hay un error
        console.error("Error en la peticion del archivo \n",
            error.message)
    ) 
    .finally(()=> //Siempre se ejecuta a pesar de que haya error o no
        console.log("Ha terminado el consumo del API por parte del FETCH")
    )
}
