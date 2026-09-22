import {Container} from "./styles"
import { useState } from "react"

export function PageLogin (){

    const [login,setLogin] = useState('')
    const [senha,setSenha] = useState('')

    return(
        <>
            <Container>
                <h3>Login</h3>
                <p>Se organize fazendo suas anotaçôes</p>
                <form>
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
                    >
                        Cadastrar
                    </button>
                    
                    <button
                        type="button"
                        id="btnEntrar"
                    >
                        Entrar
                    </button>
    
                </form>
            </Container>
        </>
    )

}