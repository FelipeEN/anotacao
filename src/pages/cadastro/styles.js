import styled from "styled-components";

export const Container = styled.div`
 min-height: 100vh;
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 40px 20px;

    background-color: #f5f5f5;

    h3 {
        font-size: 28px;
        color: #222;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        color: #222;
        margin-bottom: 18px;
    }

    form {
        width: 100%;
        max-width: 500px;

        display: flex;
        flex-direction: column;

        padding: 30px;

        background-color: #ffffff;

        border-radius: 12px;

        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);

        box-sizing: border-box;
    }

    label {
        font-size: 15px;
        font-weight: 600;
        color: #333;
        margin-bottom: 8px;
    }

    input {
        width: 100%;
        box-sizing: border-box;

        padding: 13px 15px;
        margin-bottom: 20px;

        border: 1px solid #d1d1d1;
        border-radius: 8px;

        font-size: 15px;
        outline: none;

        transition: 0.2s;

        &:focus {
            border-color: #6c63ff;
            box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.1);
        }

        &::placeholder {
            color: #999;
        }
    }

    #btnCadastrar {
        width: 100%;

        padding: 13px;

        border: none;
        border-radius: 8px;

        background-color: #6c63ff;
        color: white;

        font-size: 16px;
        font-weight: 600;

        cursor: pointer;

        transition: 0.2s;

        &:hover {
            background-color: #574fd6;
        }

        &:active {
            transform: scale(0.98);
        }
    }

    #btnVoltar {
        width: 100%;
        max-width: 500px;

        margin-top: 15px;

        padding: 12px 20px;

        border-radius: 8px;

        font-size: 15px;
        font-weight: 600;

        cursor: pointer;

        background-color: #ffffff;
        color: #555;

        border: 1px solid #d1d1d1;

        transition: 0.2s;

        &:hover {
            background-color: #f1f1f1;
            border-color: #aaa;
        }

        &:active {
            transform: scale(0.98);
        }
    }
` 