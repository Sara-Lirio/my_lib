import React from "react";
import styled from "styled-components"; 

const Button = styled.button`
    color: #4B4646;
    background-color: transparent;
    text-transform: uppercase;
    border: 1px solid #4B4646;
    font-size: 18px;
    font-size: 16px;
    padding: 8px 20px;
    font-weight: 600;
    letter-spacing: 2px;
    box-shadow: 4px 4px 5px rgba(50, 50, 50, 0.1);
    cursor: pointer;

    &:hover {
        border-color: #E9C7A8;
        color: #E9C7A8;
    }

`

export const ButtonSecundario = () => {
    return (
        <Button>Login</Button>
    )
}