import React from 'react';
import { ButtonProps } from './Button.types';
import { Icon } from '@iconify/react';

const Button: React.FC<ButtonProps> = ({ label, icon, backgroundColor, onClick }) => (
  <button
    className="p-2 flex items-center text-lg border-solid border-black border-2 rounded-xl shadow"
    style={{ backgroundColor }}
    onClick={onClick}
  >
    <span className="mr-2">
      <Icon icon={icon} fontSize="1.5rem" />
    </span>
    <span>{label}</span>
  </button>
);

export default Button;