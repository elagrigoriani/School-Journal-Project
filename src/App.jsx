import {ChooseSubject} from "./components/ChooseSubject";
import {ChooseWeek} from "./components/ChooseWeek";
import { Createuser } from "@src/features/CreateUser/CreateUser";
import { SApp, STable } from "./App.styled";
import './App.css'
import { TableHeader } from "./features/TableHeader";
import { TableRow } from "./features/TableRow/TableRow";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext/GlobalContext";


function App() {
  const {users}=useContext(GlobalContext);
  return (
    <div>
     <div className="nav">
     <ChooseSubject/>
     <ChooseWeek/>
     </div>
   
      <Createuser/>
      <STable>
      <TableHeader/>
      {users.map((user)=> {
        return <TableRow key={user.id} user={user}  />;
      })}
      
       </STable>

     </div>

  );
  
}

export default App;
