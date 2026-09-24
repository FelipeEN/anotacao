const express = require("express")

const autenticar = require("../middlewares/auth.middleware")

const {
    criarUsuario,
    loginUsuario
    }=require("../controllers/usuario.controller") 

const router = express.Router()

router.post("/usuarios",criarUsuario)
router.post("/login",loginUsuario)


module.exports = router