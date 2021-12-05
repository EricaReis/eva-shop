import React from "react";

import { IconButtonProps } from "@material-ui/core";
import Icon from "@mdi/react";
import { IPaletteColor, IPaletteVariantColor } from "../../../models/palette";

import { MyButton } from "./styles";

interface Props extends IconButtonProps {
  icon: string;
  backgroundColor?: IPaletteColor | string;
  iconColor?: IPaletteColor | string;
  variantColor?: IPaletteVariantColor;
  buttonSize?: number;
}

const RoundButton: React.FC<Props> = ({
  icon,
  backgroundColor = "#e9e9e9",
  iconColor = "",
  variantColor = "main",
  buttonSize = 6,
  ...props
}) => {
  return (
    <MyButton
      {...props}
      backgroundColor={backgroundColor}
      buttonSize={buttonSize}
    >
      <Icon size={1} path={icon} color={iconColor} />
    </MyButton>
  );
};

export default RoundButton;
