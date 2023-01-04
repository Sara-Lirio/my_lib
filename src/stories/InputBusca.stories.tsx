import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { InputBusca } from "../components/Inputs/Busca";

export default {
    title: 'Componentes/Inputs',
    component: InputBusca
} as ComponentMeta<typeof InputBusca>

const TemplateBusca: ComponentStory<typeof InputBusca> = () => <InputBusca />

export const Primario = TemplateBusca.bind({});
