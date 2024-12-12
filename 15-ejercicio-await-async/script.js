const API_URL = "https://rickandmortyapi.com/api/character";
const container = document.getElementById("characters");

const fetchCharacters = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const characters = data.results;
    characters.forEach((character) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>${character.status}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Completado");
  }
};

fetchCharacters();