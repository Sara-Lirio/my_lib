import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CardProduct, CardProps } from "../components/CardProduct";

export default {
    title: 'Componentes/CardProduct',
    component: CardProduct
} as ComponentMeta<typeof CardProduct>

const Template: ComponentStory<typeof CardProduct> = (args) => <CardProduct {...args}/>

export const Card = Template.bind({});

Card.args = {
    category: 'lipstick',
    product: 'CoverGirl Outlast Longwear Lipstick',
    price: 10.99,
} as CardProps
