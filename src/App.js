const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

const jokeRoutes = require("./routes/jokeRoutes");

app.use(express.json());
app.use("/api", jokeRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

// Rota base
app.get("/", (req, res) => {
  res.send("API de Piadas funcionando 🚀");
});

// Middleware de erro global (opcional)
app.use((err, req, res, next) => {
  res.status(500).json({
    erro: "Erro interno do servidor"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});