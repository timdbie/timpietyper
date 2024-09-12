import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ label }) => (
  <button
    className=""
  >
    {label}
  </button>
);

export default Button;