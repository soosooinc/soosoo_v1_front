import React, {memo} from 'react';
import { StyledButton } from "./styles";

interface props {
    onClick: () => void;
    text: string;
}

const Button = ({onClick, text}: props) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default memo(Button);