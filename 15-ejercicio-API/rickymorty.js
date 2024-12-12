const API_URL = "https://rickandmortyapi.com/api/character";
    const container = document.getElementById("characters");

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const caracters = data.results;
        caracters.forEach((caracter) => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <img src="${caracter.image}" alt="${caracter.name}">
            <h3>${caracter.name}</h3>
            <p>${caracter.status}</p>
          `;
          container.appendChild(card);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        console.log("Completado");
      });