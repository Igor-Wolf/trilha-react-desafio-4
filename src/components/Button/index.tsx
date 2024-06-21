import React from 'react';
import { ButtonContainer } from './styles';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({ title, onClick, disabled }) => {
  return (
    <ButtonContainer onClick={disabled ? undefined : onClick} disabled={disabled}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
