import React from "react";
import styled, { css } from "styled-components";

export interface ButtonPrincipalProps {
    texto?: string
    tipo?: 'primario'
    disabled?: boolean
    onClick?: () => void
}

const Button = styled.button<ButtonPrincipalProps>`
    background-color: #4B4646;
    color: #FFF;
    text-transform: uppercase;
    border-color: transparent;
    border-radius: 13px;
    font-size: 16px;
    padding: 8px 20px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 2px;

    &:hover {
        background-color: #E9C7A8
    }

    ${(props: ButtonPrincipalProps) => props.disabled === true
        ? css`  
        &:disabled {
            background-color: #E6E6E6;
        }
    `
        : css`
        &:disabled {
            background-color: #4B4646;
        }
    `
    }

`

export const ButtonPrincipal = ({ texto, onClick, tipo = 'primario', disabled = false}: ButtonPrincipalProps) => {
    return (
        <Button onClick={onClick}
            tipo={tipo}
            disabled={disabled}
        >{texto}</Button>
    )
}