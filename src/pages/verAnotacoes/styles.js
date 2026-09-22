import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 40px 20px;

    background-color: #f5f5f5;


    /* TÍTULO PRINCIPAL */

    h3 {
        font-size: 28px;
        color: #222;

        margin-bottom: 30px;
    }


    /* ÁREA DAS ANOTAÇÕES */

    #anotacoes {
        width: 100%;
        max-width: 1000px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 20px;
    }


    /* CARTÃO DA ANOTAÇÃO */

    .anotacao {
        background-color: #ffffff;

        padding: 20px;

        border-radius: 12px;

        border: 1px solid #eeeeee;

        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);

        transition: 0.2s;
    }

    .anotacao:hover {
        transform: translateY(-3px);

        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    }


    /* TÍTULO DA ANOTAÇÃO */

    .titulo-anotacao {
        margin: 0 0 10px;

        font-size: 20px;

        color: #222;
    }


    /* DESCRIÇÃO */

    .descricao-anotacao {
        margin: 0 0 20px;

        font-size: 15px;

        line-height: 1.6;

        color: #666;
    }


    /* BOTÃO FEITO */

    #btnExcluirAnotacao {
        width: 100%;

        padding: 11px;

        border-radius: 8px;

        border: none;

        background-color: #6c63ff;

        color: white;

        font-size: 15px;

        font-weight: 600;

        cursor: pointer;

        transition: 0.2s;
    }

    #btnExcluirAnotacao:hover {
        background-color: #574fd6;
    }

    #btnExcluirAnotacao:active {
        transform: scale(0.98);
    }


    /* ÁREA DE CONCLUÍDOS */

    #caixa-concluidos {
        width: 100%;
        max-width: 1000px;

        margin-top: 50px;

        padding-top: 30px;

        border-top: 1px solid #ddd;
    }


    /* TÍTULO CONCLUÍDOS */

    #p-concluidos {
        font-size: 22px;

        color: #444;

        margin-bottom: 20px;
    }


    /* ANOTAÇÕES CONCLUÍDAS */

    #caixa-concluidos .anotacao {
        margin-bottom: 20px;

        background-color: #fafafa;

        border: 1px solid #e2e2e2;
    }


    #caixa-concluidos .titulo-anotacao {
        color: #777;

        text-decoration: line-through;
    }


    #caixa-concluidos .descricao-anotacao {
        color: #888;
    }


    /* BOTÃO DESFAZER */

    #btnDesfazerConclusao {
        padding: 10px 18px;

        margin-right: 10px;

        border-radius: 8px;

        border: 1px solid #6c63ff;

        background-color: #ffffff;

        color: #6c63ff;

        font-size: 14px;

        font-weight: 600;

        cursor: pointer;

        transition: 0.2s;
    }

    #btnDesfazerConclusao:hover {
        background-color: #6c63ff;

        color: #ffffff;
    }


    /* BOTÃO EXCLUIR */

    #caixa-concluidos #btnExcluirAnotacao {
        width: auto;

        padding: 10px 18px;

        background-color: #ffffff;

        color: #555;

        border: 1px solid #d1d1d1;
    }

    #caixa-concluidos #btnExcluirAnotacao:hover {
        background-color: #f1f1f1;

        border-color: #aaa;
    }


    /* RESPONSIVIDADE */

    @media (max-width: 700px) {

        #anotacoes {
            grid-template-columns: 1fr;
        }

        #caixa-concluidos {
            margin-top: 35px;
        }

        #caixa-concluidos .anotacao {
            width: 100%;
            box-sizing: border-box;
        }
    }

        /* CAIXA DOS BOTÕES SUPERIORES */

    #caixa-btns {
        width: 100%;
        max-width: 1000px;

        display: flex;
        justify-content: flex-end;

        gap: 12px;

        margin-bottom: 25px;
    }


    /* BOTÕES SUPERIORES */

    #btnSair,
    #btnCriarNovaAnotacao {
        padding: 11px 20px;

        border-radius: 8px;

        font-size: 14px;
        font-weight: 600;

        cursor: pointer;

        transition: 0.2s;
    }


    /* BOTÃO CRIAR */

    #btnCriarNovaAnotacao {
        background-color: #6c63ff;

        color: #ffffff;

        border: 1px solid #6c63ff;
    }

    #btnCriarNovaAnotacao:hover {
        background-color: #574fd6;

        border-color: #574fd6;
    }


    /* BOTÃO SAIR */

    #btnSair {
        background-color: #ffffff;

        color: #555;

        border: 1px solid #d1d1d1;
    }

    #btnSair:hover {
        background-color: #f1f1f1;

        border-color: #aaa;
    }


    /* EFEITO AO CLICAR */

    #btnSair:active,
    #btnCriarNovaAnotacao:active {
        transform: scale(0.97);
    }
`;