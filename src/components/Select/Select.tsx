import { SelectProps } from './Select.types';
import { Icon } from '@iconify/react';

const Button: React.FC<SelectProps> = ({ icon, backgroundColor, iconColor, children }) => (
  <div
    className="relative h-12 bg-red flex"
  >
    <div 
        className="h-full pl-12 flex items-center text-lg border-solid border-black border rounded-xl shadow"
        style={{ backgroundColor }}
    >
        {children}
    </div>

    <div 
        className="absolute h-full p-2 flex items-center border-solid border-black border rounded-xl"
        style={{ backgroundColor: iconColor }}
    >
        <Icon icon={icon} fontSize="1.8rem" />
    </div>
  </div>
);

export default Button;