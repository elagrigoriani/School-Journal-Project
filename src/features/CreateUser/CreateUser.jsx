import { GlobalContext } from "../../context/GlobalContext/GlobalContext";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { SCreateUser,SCreateUserButton} from "./CreateUser.styled";


export function Createuser(){
    const[username,setUserName]=useState("");
    const {setUsers} = useContext (GlobalContext);
    function AddUser(){
        const newUser ={ id: uuidv4(), username};
        setUsers((prev)=> [...prev, newUser]);
        setUserName("");
    }

    return(
        <SCreateUser>
        <input 
        placeholder="სახელი გვარი" 
        value={username} 
        onChange={(e)=> setUserName(e.target.value)} />
        <SCreateUserButton onClick={AddUser}>დაამატე მოსწავლე</SCreateUserButton>
        </SCreateUser>
    )
}