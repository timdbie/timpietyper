import React from "react";
import { ButtonProps } from "./Button.types";
import { Icon } from "@iconify/react";

const Button: React.FC<ButtonProps> = ({ label, icon, backgroundColor, onClick }) => (
  <button
    className="h-12 p-2 flex items-center text-lg border-solid border-black border rounded-xl shadow"
    style={{ backgroundColor }}
    onClick={onClick}
  >
    <span className="mr-3">
      <Icon icon={icon} fontSize="1.8rem" />
    </span>
    <span>{label}</span>
  </button>
);

export default Button;