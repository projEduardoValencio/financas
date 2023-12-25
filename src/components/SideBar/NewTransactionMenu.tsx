import { FC, useContext, useState } from "react";
import { Add, TrendingDownRounded, TrendingUpRounded } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TransactionContext } from "@/context/TransactionContext";
import TransactionModal from "../TransactionModal/TransactionModal";

interface Props{}
const NewTransactionMenu: FC<Props> = ({}) => {
  const {handleOpenExpenseTransactionModal, handleOpenRevenueTransactionModal} = useContext(TransactionContext)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="transition-all">
      <div 
        className={`flex flex-row justify-between gap-3 mt-5 items-center rounded-full h-14 w-44 bg-purple-500 px-5 hover:bg-purple-700 hover:cursor-pointer`}
        onClick={handleClick}
      >
        <Add style={{color: 'white', stroke: 'white', strokeWidth: 0.5}}/>

        <span className="font-extrabold mr-10"> NOVO </span>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          disabledItemsFocusable: true,
        }}
        className="[&>.MuiPaper-root]:rounded-xl [&>.MuiPaper-root]:w-44 [&>.MuiPaper-root]:bg-slate-100"
      >
        <MenuItem onClick={()=>handleOpenRevenueTransactionModal()} className="flex flex-row gap-5">
          <TrendingUpRounded style={{color: 'green'}}/>
          Revenue
        </MenuItem>

        <MenuItem onClick={()=>handleOpenExpenseTransactionModal()} className="flex flex-row gap-5">
          <TrendingDownRounded style={{color: 'red'}}/>
          Expense
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NewTransactionMenu