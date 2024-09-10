const express = require("express")
const app = express()
const port = 8080

const cep_endereco = require("./middlewares/cep_endereco")
const nome_caixa_alta = require("./middlewares/nome_caixa_alta")

app.use(express.json())
app.use(nome_caixa_alta)

app.post("/mercado", cep_endereco, (req, res) => {
    res.json(req.body)
})

app.listen(port)