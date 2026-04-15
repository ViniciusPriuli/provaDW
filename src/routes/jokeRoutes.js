const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

router.get("/piada", jokeController.getJoke);

module.exports = router;