import { useState } from "react";

import { Container } from "./styles";


export function pageAnotacao (){
    
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
                <input 
                    id="descricao"
                    placeholder="Estudar banco para ..."
                    type="text" 
                    value={decricao}
                    onChange={(e)=> setDescricao(e.target.value)}
                />
                <button
                    type="submit"
                    id="btnForm"
                >
                    Cadastrar
                </button>
            </form>
        </Container>
    )
}
        
      

