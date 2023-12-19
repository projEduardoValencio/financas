import SideBar from "@/components/SideBar/SideBar";
import { SideBarProvider } from "@/components/SideBar/SideBarContext";

const IndexDashboard : React.FC = () =>{
    return (
        <main className="h-screen flex bg-slate-100">
          <SideBarProvider>
            <SideBar />
          </SideBarProvider>

          <h1 className="text-black font-black text-2xl">RECEIVE</h1>
        </main>
    )
}

export default IndexDashboard;