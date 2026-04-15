const axios = require("axios");

const BASE_URL = "https://v2.jokeapi.dev/joke";

async function getJoke(tipo) {
  try {
    const category = tipo || "Any";

    const response = await axios.get(`${BASE_URL}/${category}`, {
      params: {
        type: "twopart"
      }
    });

    const data = response.data;

    if (data.error) {
      throw new Error("Erro ao buscar piada");
    }

    return {
      setup: data.setup,
      punchline: data.delivery,
      categoria: data.category
    };

  } catch (error) {
    throw new Error("Falha ao consumir API de piadas");
  }
}

module.exports = { getJoke };