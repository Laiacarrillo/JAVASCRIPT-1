document.getElementById("convertBtn").addEventListener("click", convertir);

async function convertir() {
    const euros = parseFloat(document.getElementById("euros").value);

    if (isNaN(euros) || euros <= 0) {
        alert("Por favor, ingresa una cantidad válida en euros.");
        return;
    }

    const url = "https://cdn.dinero.today/api/latest.json";

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Error al obtener los datos de la API.");
        }
        const tasaDeCambioFija = 2;
        const dolares = euros * tasaDeCambioFija;

        document.getElementById("dollars").textContent = dolares.toFixed(2);
    } catch (error) {
        console.error("Error al obtener la tasa de cambio:", error);
        alert("No se pudo obtener la tasa de cambio. Intenta nuevamente más tarde.");
    }
}