// import { useNavigate } from "react-router-dom";
// import { RouteList, BelowRoutesList } from "./routerList";
// import './NavBar.css'
// interface Props {
//   isShort: boolean
// }
// const NavBar = ({isShort} : Props) => {
//   const navigate = useNavigate();
//   const normalRoutesList = RouteList;
//   const bottomRoutesList = BelowRoutesList;
//   return (
//     <>
//       <nav className="w-64 flex-shrink-0 bg-gray-700 flex flex-col ">
//         <ul className="flex-grow">
//           {normalRoutesList.map((route) => (
//             <li
//               className="text-white block py-2 cursor-pointer active"
//               key={`normal-route-${route.id}`}
//               onClick={() => navigate(route.route)}
//             >
//               {route.routeName}
//             </li>
//           ))}
//         </ul>
//         <ul>
//           <li
//             className="text-white block py-2 cursor-pointer"
//             key={`bottom-route-${bottomRoutesList[0].id}`}
//             onClick={() => navigate(bottomRoutesList[0].route)}
//           >
//             {bottomRoutesList[0].routeName}
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };// NavBar.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { RouteList, BelowRoutesList } from "./routerList";
import SubMenu from "./SubMenu/SubMenu";
import "./NavBar.css";

// interface RouteItem {
//   id: number | string;
//   route: string;
//   routeName: string;
//   iconName: string;
//   subMenu?: RouteItem[];
// }

interface NavBarProps {
  isShort: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isShort }) => {
  const navigate = useNavigate();
  const [activeSubMenu, setActiveSubMenu] = useState<number | string | null>(
    null
  );
  const location = useLocation()

  // GPT - To make submenu back to collapse after we select
  useEffect(() => {
    // Function to determine the active submenu based on the current route
    const findActiveSubMenu = () => {
      const currentRoute = location.pathname; // Get the current route
      const activeRoute = RouteList.find(route =>
        route.subMenu?.some(subMenuRoute => subMenuRoute.route === currentRoute)
      );

      // If a matching route is found and has a submenu, set it as active
      if (activeRoute && activeRoute.subMenu) {
        setActiveSubMenu(activeRoute.id);
      } else {
        setActiveSubMenu(null); // Reset or you can choose to keep the last state
      }
    };

    findActiveSubMenu();
  }, [location]);

  const handleSubMenuClick = (id: number | string) => {
    setActiveSubMenu(activeSubMenu === id ? null : id); // Toggle submenu visibility
  };

  return (
    <>
      <nav
        className={`flex-shrink-0 bg-gray-700 flex flex-col ${
          isShort ? "nav-compact" : "nav-full"
        }`}
      >
        <ul className="flex-grow">
          {RouteList.map((route) => (
            <div key={route.id}>
              <li
                className="text-white block py-2 cursor-pointer active"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onClick={() =>
                  route.subMenu
                    ? handleSubMenuClick(route.id)
                    : navigate(route.route)
                }
              >
                <div>{isShort ? route.iconName : route.routeName}</div>
                {route.subMenu && (
                  <div className="submenu-indicator">
                    {activeSubMenu === route.id ? "-" : "+"}
                  </div>
                )}
              </li>
              {route.subMenu && activeSubMenu === route.id && (
                <SubMenu subMenu={route.subMenu} isShort={isShort} />
              )}
            </div>
          ))}
        </ul>
        <ul>
          {BelowRoutesList.map((route) => (
            <li
              className="text-white block py-2 cursor-pointer"
              key={`bottom-route-${route.id}`}
              onClick={() => navigate(route.route)}
            >
              {isShort ? route.iconName : route.routeName}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
