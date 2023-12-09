import React, { useContext } from "react";
import { GlobalContext } from "@src/context/GlobalContext";
import { SChooseSubject, SChooseSubjectButton} from "./ChooseSubject.styled";

export function ChooseSubject(){

    const {subjects,currentSubject, setcurrentSubject} =useContext(GlobalContext);

    return (

        <SChooseSubject>
            {subjects?.map((subject)=>{
                const isActive= currentSubject===subject.id;
        return (
        <SChooseSubjectButton 
        key={subject.id} 
        isActive={currentSubject===subject.id}
        onClick={()=>setcurrentSubject(subject.id) }
         >
         
         {subject.name} </SChooseSubjectButton>
            );
    })}
    </SChooseSubject>
    );
}