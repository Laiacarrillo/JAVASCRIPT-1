const datos =[
    {
        id: 1,
        tittle: "Iron Man",
        year: 2008
    },
    {
        id: 2,
        tittle:"Spiderman: HomeComing",
        year:2017
    },
    {
        id: 3,
        tittle:"Avenger: Endgame",
        year: 2019
    }
]

// Sincrono
const getDatos = () =>{
    return datos;
}
console.log("INICIO");
console.log(getDatos());
console.log("FIN");

//Asincrono Callback
const getDatosAsynCallback = (Callback) =>{
    setTimeout (function() {
        console.log(Callback());
    }, 3000);
}
console.log("INICIO");
getDatosAsynCallback(getDatos);
console.log("FIN");

//Promesa
const getDatosPromesas =
    new Promise((resolve, reject) =>{
        setTimeout(function () {
          if (datos.length > 0) {
            resolve(datos); //Resuelve la promesa
          } else {
            reject("Datos no existentes"); //Rechaza la promesa
          }
        }, 3000);
    })


console.log("INICIO");
getDatosPromesas
    .then(datos => console.table(datos)) //Promesa se cumple
    .catch(err => console.error(err)); //Promesa se rechaza
console.log("FIN");