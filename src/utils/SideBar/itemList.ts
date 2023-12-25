import { ISideBarItem } from "@/interfaces/SideBar";
import { routes } from "@/routes";

export const sideBarItemList : ISideBarItem[] = [
    {
      text: 'Dashboard',
      active: false,
      route: routes.dashboard
    },
    {
      text: 'Transactions',
      active: false,
      route: routes.transactions
    },
];