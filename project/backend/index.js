const express = require('express');
const app = express();

const PORT = 3000;

//data:
var servicos = [
  { id: 1, nome: "Banho e Tosa", descricao: "Banho completo para cães e gatos." },
  { id: 2, nome: "Consulta Veterinária", descricao: "Atendimento clínico para pets." }
];

//routes:
app.get("/", (req, res) => {
    res.send("Olá mundo!")
})
app.get('/servicos', (req, res) => {
    res.json(servicos)
})

//server conection:
app.listen(PORT, () => {
    console.log("Server is running at port 3000.")
})
