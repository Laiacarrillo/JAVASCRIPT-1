//Ejemplo 1

function sumar (a, b) {
    return a + b;
}

//Ejemplo 2
//Averiguar si una cadena es palindrome
//Debe usar ciclos. NO USAR FUNCIONES DE CADENA

//FUNCIONES NOMBRADAS
function esPalindrome(cad){
    let = lcad = cad.length - 1;
    for (let i = 0; i <= lcad / 2; i++) {
      let lini = cad[i];
      let lfin = cad[lcad - i];
      // console.log(lini + " " + lfin)
      if (lini !== lfin) {
        return false;
      }
    }

    return true;
}
let cad = "anilina";
console.log((esPalindrome(cad) ? "Es " : "No es") + "Palindrome.")

