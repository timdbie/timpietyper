import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ label, backgroundColor}) => (
  <button
    className="p-2 text-lg border-solid border-black border-2 rounded-lg shadow"
    style={{ backgroundColor }}
  >
    {label}
  </button>
);

export default Button;