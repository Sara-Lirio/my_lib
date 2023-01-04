import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../style/global";
import { ButtonSecundario } from "../Buttons/Secundario";

export interface CardProps {
    category?: string;
    product?: string;
    price?: number;
}

const CardStyled = styled.div`
    width: 10rem;
    height: 8em;
    display:flex;
    flex-direction: column;
    justify-content: space-around;

  
    h3, p {
        color: #4B4646;
        text-align: center;
    }

    h3 {
        font-weight: 500;
        font-size: 18px
    }

    .category{
        color: #B4A7A7;
        text-align: left;
    }

    .price {
        font-size: 20px;
        font-weight: 100;
    }

`

export const CardProduct = ({category, product, price}:CardProps) => {
    return(

        <CardStyled>
            <GlobalStyle/>
            <p className='category'>{category}</p>
            <h3>{product}</h3>
            <p className='price'>$ {price}</p>
            <ButtonSecundario texto='comprar'/>
        </CardStyled>
    )
}