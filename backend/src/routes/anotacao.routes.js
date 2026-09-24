const express = require("express")

const autenticar = require("../middlewares/auth.middleware")

const {criarAnotacao,listarAnotacoes,atualizarAnotacao,excluirAnotacao} = require("../controllers/anotacao.controller")

const router = express.Router()

router.post("/anotacoes", autenticar , criarAnotacao)
router.get("/anotacoes", autenticar , listarAnotacoes)
router.put("/anotacoes/:id", autenticar , atualizarAnotacao)
router.delete("/anotacoes/:id", autenticar , excluirAnotacao)


module.exports = router