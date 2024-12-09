const fechaEntrega = new Date('2024-11-3');
const fechaRealInput = prompt('Ingresa la fecha real de entrega (formato: YYYY-MM-DD):');

if (!fechaRealInput) {
    console.log("No has ingresado una fecha. El programa se detendrá.");
} else {
    const fechaReal = new Date(fechaRealInput);

    if (isNaN(fechaReal)) {
        console.log("La fecha ingresada no es válida. Asegúrate de usar el formato correcto (YYYY-MM-DD).");
    } else {
        const diferencia = fechaEntrega-fechaReal;
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

        console.log(`Han pasado ${dias} días de demora.`);

        const multa = new Promise((resolve, reject) => {
            if (dias <= 3 && dias >= 0) {
                resolve(`La multa es de $${dias * 7000} pesos.`);
            } else if (dias > 3) {
                resolve(`La multa es de $${dias * 10000} pesos y una sanción de no préstamo por 6 meses.`);
            } else {
                reject("No tienes que pagar ninguna multa.");
            }
        });

        multa
            .then((mensaje) => console.log(mensaje))
            .catch((err) => console.error(err));
    }
}

