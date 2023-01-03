import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonSecundario } from "../components/Buttons/Secundario";

export default {
    title: 'Componentes/Buttons',
    component: ButtonSecundario
} as ComponentMeta<typeof ButtonSecundario>

const TemplateSecundario: ComponentStory<typeof ButtonSecundario> = () => <ButtonSecundario />

export const Secundario = TemplateSecundario.bind({});

