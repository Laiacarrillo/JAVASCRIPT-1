const ahora = new Date();
console.log(ahora);

const horaJeni = new Date(2001, 11, 28, 6, 0, 0); //Formato del mes es de 0 a 11
// horaJeni.toLocaleTimeString();
console.log(horaJeni);

const horaAnder = new Date(1997, 11, 18);
console.log(horaAnder);

const fecha = new Date();
fecha.setFullYear(2024);
fecha.setMonth(11);
fecha.setDate(28);
fecha.setDate(fecha);

//Obtener el dia (el primer Dia es el Domingo equivale a 0)
console.log("Dia Anderson: " + horaAnder.getDay());
//Formato Distinto para obtener la fecha (dia semana, mes, dia, año )
console.log("Cadena: " + horaAnder.toDateString());
//Nos devuelve la hora local actual (hora, min, seg)
console.log("Cadena hora actual: " + horaAnder.toTimeString);
//Nos devuelve un formato corto y una hora
console.log("Cadena hora actual corta: " + horaAnder.toLocaleString());
//Compara fechas y devuelve mili-segundos
console.log("Fecha Anderson: " + horaAnder.getTime());
//Diferencia entre fechas 
const  milliDia = 1000 * 60 * 60 * 24;
console.log(Math.floor ((horaAnder.getTime() - horaJeni.getTime())/milliDia));


