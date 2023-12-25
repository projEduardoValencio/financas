import { ISideBarItem } from "@/interfaces/SideBar";
import { routes } from "@/routes";

export const sideBarItemList : ISideBarItem[] = [
    {
      text: 'Dashboard',
      active: false,
      route: routes.dashboard
    },
    {
      text: 'Revenue',
      active: false,
      route: routes.revenue
    },
    {
      text: 'Expense',
      active: false,
      route: routes.expense
    },
];