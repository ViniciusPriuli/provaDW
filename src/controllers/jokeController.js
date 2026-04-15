const jokeService = require("../services/jokeService");

const validTypes = ["Any", "Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"];

async function getJoke(req, res) {
  try {
    const { tipo } = req.query;

  
    if (tipo && !validTypes.includes(tipo)) {
      return res.status(400).json({
        erro: "Tipo inválido",
        tiposValidos: validTypes
      });
    }

    const joke = await jokeService.getJoke(tipo);

    res.json(joke);

  } catch (error) {
    res.status(500).json({
      erro: error.message
    });
  }
}

module.exports = { getJoke };