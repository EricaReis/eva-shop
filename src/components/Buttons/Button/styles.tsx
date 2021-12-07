/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from '@material-ui/core';
import { darken } from 'polished';

export interface Props extends ButtonProps {
  buttonColor: string;
  textColor: string;
}

const MyButtonTransient = ({
  variant,
  buttonColor,
  textColor,
  ...rest
}: Props): React.ReactElement => <Button {...rest} variant={variant} />;

export const MyButton = styled.button`
  background: ${props => props.theme.palette.primary.main};
  border-radius: 8px;
  cursor: pointer;
  border: none;
  height: 2.5rem;

  color: white;
  font-weight: 400;
  font-size: 1.2rem;

  :hover {
    background: darken(0.08, props.buttonColor);
  }
`;
