import { useState } from "react";

import { Container } from "./styles";

import {useNavigate} from "react-router-dom"


export function Anotacao (){

    const navigate = useNavigate()
    
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [mensagem, setMensagem] = useState('')

    async function criarAnotacao(e){
        e.preventDefault()


        setMensagem("")

        const token = localStorage.getItem("token")

        if(!token){
            setMensagem("Usuário não autenticado")
            return
        }

        if (!titulo || !descricao){
            setMensagem("Titulo e Descrição saõ obrigatórios")
            return
        }

        try{
            const resultado = await fetch(
                "http://localhost:3000/api/anotacoes",{
                    method : "POST",
                    headers : {
                         "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body : JSON.stringify({
                        titulo,
                        descricao
                    })
                }
            )

            const resposta = await resultado.json()


            if(!resultado.ok){
                setMensagem(resposta.mensagem)
                return
            }

            setMensagem("Anotação criada com sucesso")

            setTitulo("")
            setDescricao("")

            console.log("Anotação criada", resposta.anotacao)
            
        }catch(error){
            console.log(error)
            setMensagem("Não foi possivel se conectar a API")
        }
    }

    function sair(){
        localStorage.removeItem("token")
        localStorage.removeItem("usuarioId")
        localStorage.removeItem("login")

        navigate("/")
    }
    return(
        <Container>
            <h3>Anotações</h3>

            <form onSubmit={criarAnotacao}>
                <label htmlFor="titulo">Titulo</label>
                <input 
                    id="titulo"
                    placeholder="Banco de Dados"
                    type="text" 
                    value={titulo}
                    onChange={(e)=>setTitulo(e.target.value)}
                />

                <label htmlFor="descricao">Descrição</label>
                <textarea   
                    id="descricao"
                    placeholder="Estudar banco para ..." 
                    value={descricao}
                    onChange={(e)=> setDescricao(e.target.value)}
                >
                </textarea>
                
                <button
                    type="submit"
                    id="btnForm"
                >
                    Criar
                </button>

                {mensagem && (
                    <p>
                        {mensagem}
                    </p>
                )}
            </form>

            <div id="caixa-botoes">

                <button
                    type="button"
                    id="btnVerAnotacoes"
                    onClick={()=>navigate("/anotacoes")}    
                >   
                    Ver Anotações
                </button>

                <button
                    type="button"
                    id="btnSair"
                    onClick={sair}
                >   
                    Sair
                </button>
            </div>
        </Container>
    )
}
        
      

