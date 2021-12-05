import React from "react";
import styled from "styled-components";
import { IconButtonProps, IconButton } from "@material-ui/core";

export interface Props extends IconButtonProps {
  backgroundColor: string;
  buttonSize: number;
}

const MyButtonTransient = ({
  backgroundColor,
  buttonSize,
  ...rest
}: Props): React.ReactElement => <IconButton {...rest} />;

// https://github.com/styled-components/styled-components/pull/2093#issuecomment-474743876
export const MyButton = styled(MyButtonTransient)`
  height: ${(props) => props.theme.spacing(props.buttonSize)}px;
  width: ${(props) => props.theme.spacing(props.buttonSize)}px;
  background-color: ${(props) => props.backgroundColor};

  &:hover:not(:disabled) {
    border-color: unset !important;
  }
`;
