import React, {useContext} from "react";
import { GlobalContext } from "../../context/GlobalContext/GlobalContext";

export function TableHeader(){
    const{days} =useContext(GlobalContext);
    console.log(days);
    return(
        <tr>
            <th>Username</th>
         {days?.map((day)=>{
                return <th key={day.id}> {day.day}
                </th>
            } )}
        </tr>
    )
}