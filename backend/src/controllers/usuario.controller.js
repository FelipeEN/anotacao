const pool = require ("../database/connection")
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

async function criarUsuario (req,res){
    try{

        const {login,senha} = req.body
        if(!login || !senha){
            return res.status(400).json({
                mensagem : "Login e senha são obrigatorios"
            })
        }

        const usuarioExistente = await pool.query(
            `
                SELECT id FROM usuarios
                WHERE login = $1
            `,
            [login]
        )

        if(usuarioExistente.rows.length > 0){
            return res.status(409).json({
                mensagem : "Login já cadastrado"
            })
        }

        const senhaHash = await bcrypt.hash(senha,10)

        const resultado = await pool.query(
            `
                INSERT INTO usuarios (login, senha) 
                VALUES ($1,$2)
                RETURNING id,login,criado_em
            `, 
            [login,senhaHash]
        )
        
        res.status(201).json({
            mensagem: "Usuário cadastrado com sucesso",
            usuario : resultado.rows[0]
        })

    }catch(error){
        console.log(error)

         res.status(500).json({
            mensagem : "Erro ao cadastrar usuário"
         })
    }
}

async function loginUsuario (req,res){
    try{
        const {login,senha} = req.body

        if(!login || !senha){
            return res.status(409).json({
                mensagem : "Login e senha são obrigatórios"
            })
        }

        const resultado = await pool.query(`
                SELECT id,login,senha FROM usuarios
                WHERE login = $1
            `,
            [login]
        )

        if(resultado.rows.length === 0){
            return res.status(401).json({
                mensagem : "Login ou Senha invalidos"
            })
        }

        const usuario = resultado.rows[0]


        const senhaValida = await bcrypt.compare(
            senha,usuario.senha
        )

        if(!senhaValida){
            return res.status(401).json({
                mensagem : "Login ou senha invalidos"
            })
        }


        const token = jwt.sign({
            id: usuario.id,
            login: usuario.login
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1hr"
        }
        )
        
        res.status(200).json({
            mensagem : "Login realizado com suceso",
            usuario:{
                token: token,
                id: usuario.id,
                login: usuario.login
            }
        })


    }catch(error){
        console.log(error)

        res.status(500).json({
            mensagem: "Erro ao realizar login"
        })
    }
}
module.exports ={
    criarUsuario,
    loginUsuario
}