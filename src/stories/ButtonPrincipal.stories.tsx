import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonPrincipal, ButtonPrincipalProps } from "../components/Buttons/Principal";

export default {
    title: 'Componentes/Buttons',
    component: ButtonPrincipal
} as ComponentMeta<typeof ButtonPrincipal>

const Template: ComponentStory<typeof ButtonPrincipal> = (args) => <ButtonPrincipal {...args} />

export const BotaoPrincipal = Template.bind({});

BotaoPrincipal.args = {
    texto: 'Botão',
    tipo: 'primario'
} as ButtonPrincipalProps
