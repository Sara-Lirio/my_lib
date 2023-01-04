import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../../style/global";


const Fieldset = styled.fieldset`
    border: none;

    label {
        color: #4B4646;
        font-weight: 700;
    }

    input {
        border: none;
        border-bottom: 1px solid #D2CCCC;
        text-align: center;
        margin-left: 10px
    }

    ::-webkit-input-placeholder{
        color: #D2CCCC;
    }

`

export const InputPrimario = () => {
    return (
        <Fieldset>
            <GlobalStyle />
            <label>Input 1</label>
            <input placeholder="Digite o que pedir aqui" />
        </Fieldset>
    )
}