import { ISideBarItem } from "@/interfaces/SideBar";
import { routes } from "@/routes";

export const sideBarItemList : ISideBarItem[] = [
    {
      text: 'Dashboard',
      active: false,
      route: routes.dashboard
    },
    {
      text: 'Receive',
      active: false,
      route: routes.receive
    },
    {
      text: 'Payout',
      active: false,
      route: routes.payout
    },
];