import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { InputPrimario } from "../components/Inputs/Primario";

export default {
    title: 'Componentes/Inputs',
    component: InputPrimario
} as ComponentMeta<typeof InputPrimario>

const TemplatePrimario: ComponentStory<typeof InputPrimario> = () => <InputPrimario />

export const Primario = TemplatePrimario.bind({});


