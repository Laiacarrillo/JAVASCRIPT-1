

//Averiguar si una cadena es palindrome
//Debe usar ciclos. NO USAR FUNCIONES DE CADENA

//FUNCIONES EXPRESIVA O ANONIMA

const funcAnonima = function (cad){
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
console.log(esPalindrome(cad) ? "Es palindrome " :   "No es Palindrome.");

console.log(funcAnonima("reconocer")? "Es palindrome " :   "No es Palindrome.");