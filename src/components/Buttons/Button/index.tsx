import React from 'react';
import { useTheme, Theme } from '@material-ui/core/styles';

import {  MyButton } from './styles';

interface Props {
  buttonText?: string;
}



const Button: React.FC<Props> = ({
  buttonText = null,
  ...props
}) => {
  const { palette, breakpoints } = useTheme() as Theme;

  return (
    <MyButton type="button">
      {buttonText}
    </MyButton>
  );
};

export default Button;
