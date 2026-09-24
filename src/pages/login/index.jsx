import {Container} from "./styles"
import { useState } from "react"
import {useNavigate} from "react-router-dom"

export function Login (){

    const navigate = useNavigate()

    const [login,setLogin] = useState("")
    const [senha,setSenha] = useState("")
    const [mensagem,setMensagem] = useState("")

    async function fazerLogin(event){
        
        event.preventDefault()
        
        setMensagem("")


        try{
            const resposta = await fetch(
                "http://localhost:3000/api/login",
            {
                method: "POST",
                headers:{
                    "Content-type" :"application/json"
                },
                body : JSON.stringify({
                    login,
                    senha
                })
            }

        )
         const resultado = await resposta.json()       

         if(!resposta.ok){
            setMensagem(resultado.mensagem)
            return
        }

        localStorage.setItem("token",resultado.usuario.token)
        localStorage.setItem("usuarioId", resultado.usuario.id)
        localStorage.setItem("login", resultado.usuario.login)

        setMensagem("Login realizado com sucesso!")

        navigate("/anotacoes")

        console.log("Usuario logado:", resultado.usuario)

        }catch(error){
            console.log(error)

            setMensagem("Não foi possivel conectar com a api")
        }
    }


    return(
        <>
            <Container>
                <h3>Login</h3>
                <p>Se organize fazendo suas anotaçôes</p>
                
                <form onSubmit={fazerLogin}>
                    <label htmlFor="login">Login</label>
                    <input 
                        id="login"
                        type="text"
                        value={login}
                        onChange={(e)=>setLogin(e.target.value)}
                    />
                    <label htmlFor="senha">Senha</label>
                    <input 
                        id="senha"
                        type="password"
                        value={senha}
                        onChange={(e)=>setSenha(e.target.value)}
                    />
                     <button
                        type="button"
                        id="btnCadastrar"
                        onClick={()=> navigate("/cadastro")}
                    >
                        Cadastrar
                    </button>
                    
                    <button
                        type="submit"
                        id="btnEntrar"
                    >
                        Entrar
                    </button>

                    {mensagem && (
                        <p>
                            {mensagem}
                        </p>
                    )}
                </form>
            </Container>
        </>
    )

}