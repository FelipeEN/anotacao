require("dotenv").config()

const express = require ("express")
const cors = require ("cors")

const pool = require("./database/connection");

const usuarioRoutes = require("./routes/usuario.routes")
const anotacaoRoutes = require("./routes/anotacao.routes")

const app = express()

const porta = 3000

app.use(cors())

app.use(express.json())


app.use("/api",usuarioRoutes)
app.use("/api",anotacaoRoutes)

app.get("/api", (req,res)=>{
    res.json({
        mensagem : "api funcionando"
    })
})

app.listen(porta, ()=>{
    console.log(`api funcionando na porta ${porta}`)
})