prompt(`*** MENU ***
    1.  Agregar producto
    2. Eliminar productos
    3. Mostrar el inventario
    4. Buscar producto
    5. Salir
    (Escoge una opción)`)


// while (menu !==5)(
//     let menu = Number(prompt)(
//     `*** MENU ***
//     1.  Agregar producto
//     2. Eliminar productos
//     3. Mostrar el inventario
//     4. Buscar producto
//     5. Salir
//     (Escoge una opción)`)
    
// )
 const producto = {
     producto1:[
     "Detodito", 4000, 20],
     producto2:[
     "Trocillos", 1500, 30],
     producto3:[
     "Platanitos", 2000, 25],
     producto4:[
     "Tocinetas", 3200, 15],
}



console.table(producto)
function inventario (Nombre, Valor, Cantidad) {
  this.Nombre = Nombre;
  this.Valor = Valor;
  this.Cantidad = Cantidad;
}
