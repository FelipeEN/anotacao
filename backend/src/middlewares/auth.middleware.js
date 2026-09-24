const jwt = require("jsonwebtoken")

function autenticar(req, res,next){
    try{
        const autorizacao = req.headers.authorization

        if(!autorizacao){
            return res.status(401).json({
                mensagem : "Token não informado"
            })
        }

        const partes = autorizacao.split(" ")

        if(partes.length !== 2 || partes[0] !== "Bearer"){
            return res.status(401).json({
                mensagem : "Formato do Token invalido"
            })
        }   
        
        const token = partes[1]

        const usuario = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.usuario = usuario
        
        next()
    }catch(error){
        console.log(error)

        return res.status(401).json({
            mensagem : "Token invalido ou expirado"
        })
    }

}

module.exports = autenticar