import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Header: React.FC = () => (
  <header className="text-black">
    <div className="h-24 flex justify-between items-center">
      <h1 className="text-3xl font-semibold">TimpieTyper</h1>
      <nav className="flex">
        <a className="mx-1" href="#">
          <Icon icon="mingcute:trophy-line" fontSize="1.8rem" />
        </a>
        <a className="mx-1" href="#">
          <Icon icon="mingcute:user-2-line" fontSize="1.8rem" />
        </a>
        <a className="mx-1" href="#">
          <Icon icon="mingcute:settings-5-line" fontSize="1.8rem" />
        </a>
      </nav>
    </div>
  </header>
);

export default Header;