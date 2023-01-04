import React from "react";
import styled, { css } from "styled-components";
export interface ButtonSecundarioProps {
    texto?: string
    tipo?: 'primario' | 'secundario'
    onClick?: () => void
}

const Button = styled.button<ButtonSecundarioProps>`
    color:  ${(props: ButtonSecundarioProps) => props.tipo === 'primario' ? '#4B4646' : '#FFF'};
    background-color: ${(props: ButtonSecundarioProps) => props.tipo === 'primario' ? '#FFF' : '#4B4646'};
    text-transform: uppercase;
    border: 1px solid  ${(props: ButtonSecundarioProps) => props.tipo === 'primario' ? '#4B4646' : 'transparent'};;
    font-size: 18px;
    font-size: 16px;
    padding: 8px 20px;
    font-weight: 600;
    letter-spacing: 2px;
    box-shadow: 4px 4px 5px rgba(50, 50, 50, 0.1);
    cursor: pointer;

    ${(props: ButtonSecundarioProps) => props.tipo === 'primario'
        ? css`  
          &:hover {
                border-color: #4B4646;
                color: #FFF;
                background-color: #4B4646;
        }
    `
        : css`
            &:hover {
               background-color: #E9C7A8;
           }
    `
    }
`

export const ButtonSecundario = ({ texto, onClick, tipo = 'primario' }: ButtonSecundarioProps) => {
    return (
        <Button onClick={onClick}
            tipo={tipo}
        >{texto}
        </Button>
    )
}