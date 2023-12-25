import SideBar from "@/components/SideBar/SideBar";
import { SideBarProvider } from "@/components/SideBar/SideBarContext";
import TransactionsList from "@/components/TransactionsList/TransactionsList";

const IndexTransactions : React.FC = () =>{
    return (
        <main className="h-screen flex bg-slate-100">
          <SideBar />

          <div className="flex flex-col items-center w-full p-10">
            <TransactionsList/>
          </div>
        </main>
    )
}

export default IndexTransactions;