import { ISideBarItem } from "@/interfaces/SideBar";
import { routes } from "@/routes";
import { HomeRounded, FormatListBulletedRounded } from "@mui/icons-material"

export const sideBarItemList : ISideBarItem[] = [
    {
      text: 'Dashboard',
      active: false,
      route: routes.dashboard,
      icon: (<HomeRounded style={{width: '100%'}}/>)
    },
    {
      text: 'Transactions',
      active: false,
      route: routes.transactions,
      icon: (<FormatListBulletedRounded style={{width: '100%'}}/>)
    },
];