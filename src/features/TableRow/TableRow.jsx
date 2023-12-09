import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext/GlobalContext";
import { DayGrade } from "./DayGrade";

export function TableRow({ user }) {
  const { grades, days } = useContext(GlobalContext);

  const userGrades = grades.filter((grade) => grade.userId === user.id);

  return (
    <tr>
      <td>{user.username}</td>
      {days?.map((day)=>{
        return <DayGrade 
        key={day.id} 
        day={day} 
        userGrades={userGrades}
        user={user}
        />;
      })}
    </tr>
  );
}
