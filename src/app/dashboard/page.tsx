import DashBoardCard from "@/components/DashBoardCard/DashBoardCard";
import SideBar from "@/components/SideBar/SideBar";
import { SideBarProvider } from "@/components/SideBar/SideBarContext";
import { ArrowDownward, ArrowUpward, WalletRounded } from "@mui/icons-material";

const IndexDashboard : React.FC = () =>{
    return (
        <main className="h-screen flex bg-slate-100">
          <SideBarProvider>
            <SideBar />
          </SideBarProvider>

          <div className="h-screen w-full">
            <DashBoardCard
              color="blue"
              label="Saldo atual"
              value={1230.982}
              icon={<WalletRounded style={{color: "white"}}/>}
            />
            <DashBoardCard
              color="green"
              label="Saldo atual"
              value={1230.982}
              icon={<ArrowDownward style={{color: "white"}}/>}
            />
            <DashBoardCard
              color="red"
              label="Saldo atual"
              value={1230.982}
              icon={<ArrowUpward style={{color: "white"}}/>}
            />
          </div>
        </main>
    )
}

export default IndexDashboard;