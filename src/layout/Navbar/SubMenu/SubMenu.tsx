// SubMenu.tsx
import React from 'react';
import { useNavigate } from "react-router-dom";

interface RouteItem {
  id: number | string;
  route: string;
  routeName: string;
  iconName: string;
}

interface SubMenuProps {
  subMenu: RouteItem[];
  isShort: boolean;
}

const SubMenu: React.FC<SubMenuProps> = ({ subMenu, isShort }) => {
  const navigate = useNavigate();

  return (
    <ul className="sub-menu bg-gray-600 pl-1">
      {subMenu.map((menu) => (
        <li
          key={menu.id}
          className="text-gray-300 block py-1 cursor-pointer"
          onClick={() => navigate(menu.route)}
        >
         - {isShort ? menu.iconName : menu.routeName}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
