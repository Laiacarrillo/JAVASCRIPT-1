let str = "Campus Lands";

//Recorrer la cadena con For
 for(let i = 0; i < str.length; i++) {
   let letra = str[i];
   
   if (letra === "a") break; //Rompe todo
   console.log(letra);
 }

let vocales = "aeiou"
  for (let i = 0; i < str.length; i++) {
    let letra = str[i];

    if (vocales.includes(letra)) continue; //Lo que esta debajo de esto, no se hace, se realiza la otra interacion
    console.log(letra);
  }
//Recorrer la cadena con for .. of
  for (let letra of str) {
    console.log(letra);
  }
