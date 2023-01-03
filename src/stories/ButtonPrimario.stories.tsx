import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonPrimario } from "../components/Buttons/Primario";

export default {
    title: 'Componentes/Buttons',
    component: ButtonPrimario
} as ComponentMeta<typeof ButtonPrimario>

const TemplatePrimario: ComponentStory<typeof ButtonPrimario> = () => <ButtonPrimario />

export const Primario = TemplatePrimario.bind({});


