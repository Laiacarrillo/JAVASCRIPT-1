//Averiguar si una cadena es palindrome
//Debe usar ciclos. NO USAR FUNCIONES DE CADENA

let cad = "reconocer"
let = lcad = cad.length - 1;
let espal = true;
for(let i=0; i <= lcad / 2; i++) {
    let lini = cad[i];
    let lfin = cad[lcad - i];
    // console.log(lini + " " + lfin)
    if  (lini !== lfin){
        espal = false;
        break;
    }
}
console.log((espal ? "Es " : "No es") + "Palindrome.")