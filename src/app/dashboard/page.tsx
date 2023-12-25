import DashBoardCard from "@/components/DashBoardCard/DashBoardCard";
import SideBar from "@/components/SideBar/SideBar";
import { SideBarProvider } from "@/components/SideBar/SideBarContext";
import TransactionModal from "@/components/TransactionModal/TransactionModal";
import { ArrowDownward, ArrowUpward, WalletRounded } from "@mui/icons-material";

const IndexDashboard : React.FC = () =>{
    return (
        <main className="h-screen flex bg-slate-100">
          <SideBarProvider>
            <SideBar />
          </SideBarProvider>

          <div className="flex flex-col h-screen w-full p-10 items-center">
            <input 
              className="text-black rounded-full shadow-md mb-6 border-blue-300 border-1 px-2"
              type="month"
              max={new Date().getFullYear().toString() + "/" + new Date().getMonth().toString()}
            />

            <div className="flex flex-row gap-5 justify-center">
              <DashBoardCard
                color="blue"
                label="Saldo atual"
                value={1230.982}
                icon={<WalletRounded style={{color: "white"}}/>}
              />
              
              <DashBoardCard
                color="green"
                label="Receitas"
                value={1230.982}
                icon={<ArrowDownward style={{color: "white"}}/>}
              />

              <DashBoardCard
                color="red"
                label="Despesas"
                value={1230.982}
                icon={<ArrowUpward style={{color: "white"}}/>}
              />
            </div>
          </div>
        </main>
    )
}

export default IndexDashboard;