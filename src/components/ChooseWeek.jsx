import React, { useContext } from "react";
import { GlobalContext } from "@src/context/GlobalContext";
import { SChooseWeek, SChooseWeekButton} from "./ChooseWeek.styled";

export function ChooseWeek(){

    const {weeks,days,currentWeekId, setcurrentWeekId} =useContext(GlobalContext);
    return (

        <SChooseWeek>
           
            {weeks.map((week) =>{
                const isActive= currentWeekId===week.id;
        return (
        <SChooseWeekButton 
        key={week.id} 
        isActive={currentWeekId===week.id}
        onClick={()=>setcurrentWeekId(week.id) }
         >
         
         {week.name} </SChooseWeekButton>
            );
    })}
    </SChooseWeek>
    );
}