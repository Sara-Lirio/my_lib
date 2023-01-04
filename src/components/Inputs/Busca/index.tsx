import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../../style/global";

const Fieldset = styled.fieldset`
    ::-webkit-input-placeholder{
        color: #D2CCCC;
      }
`

export const InputBusca = () => {
    return (
        <Fieldset>
            <GlobalStyle />
            <input placeholder="Pesquise Aqui" />
        </Fieldset>
    )
}