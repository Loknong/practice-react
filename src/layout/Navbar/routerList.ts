export const RouteList = [
  { id: 1, route: "/", routeName: "Home Page", iconName: "Icon-H" },
  {
    id: 2,
    route: "/about",
    routeName: "About Page",
    iconName: "Icon-A",
    subMenu: [
      {
        id: 2.1,
        route: "/about/team",
        routeName: "Our Team",
        iconName: "Icon-T",
      },
      {
        id: 2.2,
        route: "/about/mission",
        routeName: "Our Mission",
        iconName: "Icon-M",
      },
    ],
  },
  {
    id: 3,
    route: "/todolist-v0-we",
    routeName: "Todo List",
    iconName: "Icon-TD",
    subMenu: [
      {
        id: 3.1,
        route: "/todolist-v0-we",
        routeName: "Todo List We Stride",
        iconName: "Icon-T0",
      },
      {
        id: 3.2,
        route: "/todolist-v0",
        routeName: "Todo List Prototype",
        iconName: "Icon-T1",
      },
      {
        id: 3.3,
        route: "/todolist-v1",
        routeName: "Todo List Version 1",
        iconName: "Icon-T2",
      },
    ],
  }
];

export const BelowRoutesList = [
  { id: 1, route: "/login", routeName: "Logout", iconName: "Icon-L" },
];
