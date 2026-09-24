import {Container} from "./styles"
import { useState } from "react"
import {useNavigate} from "react-router-dom"

export function Cadastrar (){

    const navigate = useNavigate()

    const [login,setLogin] = useState("")
    const [senha,setSenha] = useState("")
    const [mensagem,setMensagem] = useState("")

    async function cadastrarUsuario(e){

        e.preventDefault()

        setMensagem("")

        if(!login || !senha){
            setMensagem("Login e Senha são obrigatórios")
            return
        }
        
        if(senha && senha.length < 6){
            setMensagem("Senha deve ter no minímo 6 digitos")
            return
        }
        try{
            const resultado = await fetch(
                "http://localhost:3000/api/usuarios",
                {
                    method: "POST",
                    headers : {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        login,
                        senha
                    })
                }
            )
             
            const resposta = await resultado.json()
            if(!resultado.ok){
                setMensagem(resposta.mensagem)
                return
            }

            setMensagem("Cadastro feito com sucesso")

            setLogin("")
            setSenha("")        

        }catch(error){
            console.log(error)
             setMensagem("Não foi possivel conectar com a api")
        }
    }

    function voltarLogin(){
        navigate("/")
    }
    return(
        <Container>
            <h3>Cadastro</h3>

                <p>
                    Crie sua conta para fazer suas anotações
                </p>

                <form onSubmit={cadastrarUsuario}>

                    <label htmlFor="login">
                        Login
                    </label>

                    <input
                        id="login"
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />

                    <label htmlFor="senha">
                        Senha
                    </label>

                    <input
                        id="senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <button
                        type="submit"
                        id="btnCadastrar"
                    >
                        Cadastrar
                    </button>

                    {mensagem && (
                        <p>
                            {mensagem}
                        </p>
                    )}

                </form>

                <button
                    type="button"
                    id="btnVoltar"
                    onClick={voltarLogin}
                >
                    Voltar para Login
                </button>
        </Container>
    )
}