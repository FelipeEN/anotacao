const pool = require("../database/connection")

async function criarAnotacao (req,res){
    try{
        const {titulo, descricao }=req.body

        if (!titulo || !descricao){
            return res.status(400).json({
                mensagem : "Titulo e descrição são obrigatórios"
            })
        }

        const usuario_id = req.usuario.id

        const resultado = await pool.query(
            `
                INSERT INTO anotacoes(
                usuario_id,titulo,descricao
                )VALUES($1,$2,$3)
                RETURNING 
                    id,
                    usuario_id,
                    titulo,
                    descricao,
                    concluida,
                    criado_em
                
            `,
            [usuario_id,titulo,descricao]
        )


        res.status(201).json({
            mensagem: "Anotação criada",
            anotacao : resultado.rows[0]
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            mensagem : "Erro ao criar anotação"
        })
    }
}

async function listarAnotacoes(req,res){
    try{
        const usuario_id = req.usuario.id

        const resultado = await pool.query(`
                SELECT 
                    id,
                    usuario_id,
                    titulo,
                    descricao,
                    concluida,
                    criado_em
                FROM anotacoes 
                WHERE usuario_id = $1
                ORDER BY criado_em DESC
            `, [usuario_id]
        )
            
        res.status(200).json({
            anotacoes : resultado.rows
        })
    }catch(error){
        console.log(error)

        return res.status(500).json({
            mensagem : "Erro ao buscar anotações"
        })
    }
}

async function atualizarAnotacao (req,res){
    try{
        const {id}= req.params
        const {titulo, descricao,concluida}= req.body

        if (!titulo || !descricao|| typeof concluida !== "boolean"){
            return res.status(400).json({
                mensagem : "Titulo e descrição e concluída são obrigatórios"
            })
        }

        const usuario_id = req.usuario.id

        const resultado = await pool.query(`
            
                UPDATE anotacoes
                SET 
                    titulo = $1,
                    descricao = $2,
                    concluida = $3
                WHERE id = $4
                AND usuario_id = $5
                RETURNING 
                    id,
                    usuario_id,
                    titulo,
                    descricao,
                    concluida,
                    criado_em
                `
                , [titulo,descricao,concluida,id,usuario_id]
            )

            if(resultado.rows.length === 0){
                return res.status(404).json({
                    mensagem : "Anotação não encontrada"
                })
            }

            res.status(200).json({
                mensagem :"Anotação atualizada com sucesso",
                anotacao : resultado.rows[0]    
            })
                
    }catch(error){
        console.log(error)

        return res.status(500).json({
            mensagem : "Erro ao atulizar anotação"
        })
    }
}

async function excluirAnotacao (req,res){
    try{
        const {id} = req.params

        const usuario_id  = req.usuario.id

        const resultado = await pool.query(`
                DELETE FROM anotacoes
                WHERE id =$1
                AND usuario_id = $2
                RETURNING id
            `,
            [id,usuario_id]
        )

        if(resultado.rows.length ===0){
            return res.status(404).json({
                mensagem :"Anotação não encontrada"
            })
        }

        res.status(200).json({
            mensagem: "Anotação excluida com sucesso"
        })
    }catch(error){
        console.log(error)

        return res.status(500).json({
            mensagem : "Erro ao excluir a anotação"
        })
    }
}
module.exports = {criarAnotacao, listarAnotacoes,atualizarAnotacao, excluirAnotacao}