import React from "react";
import styled from "styled-components"; 

const Button = styled.button`
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

    &:disabled {
        color: red
    }

`

export const ButtonPrimario = () => {
    return (
        <Button>Login</Button>
    )
}