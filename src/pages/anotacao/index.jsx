import { useState } from "react";

import { Container } from "./styles";


export function PageAnotacao (){
    
    const [titulo, setTitulo] = useState('')
    const [decricao, setDescricao] = useState('')
    return(
        <Container>
            <h3>Anotações</h3>

            <form>
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
                    value={decricao}
                    onChange={(e)=> setDescricao(e.target.value)}
                >
                </textarea>
                
                <button
                    type="submit"
                    id="btnForm"
                >
                    Criar
                </button>
            </form>
            <div id="caixa-botoes">

                <button
                    type="button"
                    id="btnVerAnotacoes"
                    >   
                    Ver Anotações
                </button>

                <button
                    type="button"
                    id="btnSair"
                    >   
                    Sair
                </button>
            </div>
        </Container>
    )
}
        
      

