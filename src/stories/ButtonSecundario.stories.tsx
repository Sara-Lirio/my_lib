import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonSecundario, ButtonSecundarioProps } from "../components/Buttons/Secundario";

export default {
    title: 'Componentes/Buttons',
    component: ButtonSecundario
} as ComponentMeta<typeof ButtonSecundario>

const TemplateSecundario: ComponentStory<typeof ButtonSecundario> = (args) => <ButtonSecundario {...args}/>

export const BotaoSecundario = TemplateSecundario.bind({});

BotaoSecundario.args = {
    texto: 'Botão',
    tipo: 'primario'
} as ButtonSecundarioProps
