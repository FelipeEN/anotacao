import { Container } from "./styles";
import { useState } from "react";

export function VerAnotacoes (){

    return(
        <>
            <Container>
                <h3>Minhas Anotações</h3>
                    <div id="caixa-btns">
                        <button
                            type="button"
                            id="btnSair"
                        >
                            Sair
                        </button>
                        <button
                            type="button"
                            id="btnCriarNovaAnotacao"
                        >
                            Criar
                        </button>
                    </div>
                <div id="anotacoes">
                    <div className="anotacao">
                        <h4 className="titulo-anotacao">
                            Banco de dados
                        </h4>
                        <p className="descricao-anotacao">
                            Estudar PostgreSQL e comandos SQL.
                        </p>

                        <button
                            type="button"
                            id="btnExcluirAnotacao"
                        >
                                Feito
                        </button>
                    </div>
                </div>

                <div id="caixa-concluidos">
                    <h3 id="p-concluidos">Concluidos</h3>
                    
                    <div className="anotacao">
                        <h4 className="titulo-anotacao">
                            Banco de dados
                        </h4>
                        <p className="descricao-anotacao">
                            Estudar PostgreSQL e comandos SQL.
                        </p>

                        <button
                            type="button"
                            id="btnDesfazerConclusao"
                        >
                                Desfazer
                        </button>

                        <button
                            type="button"
                            id="btnExcluirAnotacao"
                        >
                                Excluir
                        </button>

                    </div>
           
                </div>
            </Container>
        </>
    )
}