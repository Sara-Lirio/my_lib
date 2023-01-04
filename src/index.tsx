import React, {FC, HTMLAttributes, ReactChild} from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export * from './components/Buttons/Principal'
export * from './components/Buttons/Secundario'
export * from './components/Inputs/Primario'
export * from './components/Inputs/Busca'