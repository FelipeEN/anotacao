import { Container } from "./styles";
import { useEffect, useState } from "react";

import{useNavigate }from "react-router-dom"

export function VerAnotacoes (){

    const navigate = useNavigate()
    const [anotacoes,setAnotacoes] = useState([])
    const [mensagem,setMensagem] = useState("")


    async function buscarAnotacoes(){

        const token = localStorage.getItem("token")

        if(!token){
            setMensagem("Usuario não autenticado")
            return
        }

        try{

            const resultado = await fetch (
                "http://localhost:3000/api/anotacoes",
                {
                    method: "GET",
                    headers:{
                        "Authorization" : `Bearer ${token}` 
                    }
                }
            )

            const resposta = await resultado.json()

            if(!resultado.ok){
                setMensagem(resposta.mensagem)
                return
            }

            setAnotacoes(resposta.anotacoes)

        }catch(error){
            console.log(error)
            setMensagem("Não foi possivel conectar a API")
        }
    }

    async function concluirAnotacao(anotacao){
        const token = localStorage.getItem("token")

        try{
            const resultado = await fetch(
                `http://localhost:3000/api/anotacoes/${anotacao.id}`,
                {
                    method:"PUT",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body : JSON.stringify({
                        titulo : anotacao.titulo,
                        descricao : anotacao.descricao,
                        concluida : true
                    })
                }
            )

            const resposta = await resultado.json()
            
            if(!resultado.ok){
                setMensagem(resposta.mensagem)
                return
            }

            buscarAnotacoes()
        }catch(error){
            console.log(error)
            setMensagem("Erro ao concluir anotação")
        }
    }

      async function desfazerAnotacao(anotacao){
        const token = localStorage.getItem("token")

        try{
            const resultado = await fetch(
                `http://localhost:3000/api/anotacoes/${anotacao.id}`,
                {
                    method:"PUT",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body : JSON.stringify({
                        titulo : anotacao.titulo,
                        descricao : anotacao.descricao,
                        concluida : false
                    })
                }
            )

            const resposta = await resultado.json()
            
            if(!resultado.ok){
                setMensagem(resposta.mensagem)
                return
            }

            buscarAnotacoes()
        }catch(error){
            console.log(error)
            setMensagem("Erro ao desfazer anotação")
        }
    }
    
    async function excluirAnotacao(anotacao){
        const token = localStorage.getItem("token")

        try{
            const resultado = await fetch (
                `http://localhost:3000/api/anotacoes/${anotacao.id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            )

            const resposta = await resultado.json()

            if(!resultado.ok){
                setMensagem(resposta.mensagem)
                return
            }

            buscarAnotacoes()

        }catch(error){
            console.log(error)
            setMensagem("Erro ao excluir anotação")
        }
    }
    useEffect(()=>{buscarAnotacoes()},[])

    const anotacoesPendentes = anotacoes.filter(
        (anotacao) => !anotacao.concluida
    )

    const anotacoesConcluidas = anotacoes.filter(
        (anotacao) =>  anotacao.concluida
    )
function sair(){
        localStorage.removeItem("token")
        localStorage.removeItem("usuarioId")
        localStorage.removeItem("login")

        navigate("/")
    }
    return(
        <>
            <Container>
                <h3>Minhas Anotações</h3>
                    <div id="caixa-btns">
                            <button
                                type="button"
                                id="btnSair"
                                onClick={sair}
                            >
                                Sair
                            </button>
                            <button
                                type="button"
                                id="btnCriarNovaAnotacao"
                                onClick={()=> navigate("/anotacao")}
                            >
                                Criar
                            </button>
                    </div>

                    {mensagem && (
                        <p>
                            {mensagem}
                        </p>
                    )}

                <div id="anotacoes">
                        {anotacoesPendentes.map((anotacao)=>(
                            <div
                                className="anotacao"
                                key={anotacao.id}
                            >
                                <h4 className="titulo-anotacao">
                                    {anotacao.titulo} 
                                </h4>

                                <p className="descricao-anotacao">
                                    {anotacao.descricao}
                                </p>

                                <button
                                    type="button"
                                    id="btnExcluirAnotacao"
                                    onClick={()=> concluirAnotacao(anotacao)}

                                >
                                    Feito
                                </button>
                            </div>
                        ))}
                </div>
                <div id="caixa-concluidos">
                    <h3
                        id="p-concluidos"    
                    >
                        Concluidos
                    </h3>

                        {anotacoesConcluidas.map((anotacao)=>(
                            <div
                                className="anotacao"
                                key={anotacao.id}
                            >
                                <h4 className="titulo-anotacao">
                                    {anotacao.titulo} 
                                </h4>

                                <p className="descricao-anotacao">
                                    {anotacao.descricao}
                                </p>

                                <button
                                    type="button"
                                    id="btnDesfazerConclusao"
                                    onClick={()=>desfazerAnotacao(anotacao)}
                                >
                                    Desfazer
                                </button>

                                <button
                                    type="button"
                                    id="btnExcluirAnotacao"
                                    onClick={()=>excluirAnotacao(anotacao)}
                                >
                                    Excluir
                                </button>
                            </div>
                        ))}
                </div>

             
            </Container>
        </>
    )
}