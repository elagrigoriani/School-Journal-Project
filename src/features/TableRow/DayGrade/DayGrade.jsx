import { v4 as uuidv4 } from "uuid";
import React, { useContext, useState } from "react";
import { GlobalContext } from "@src/context/GlobalContext/GlobalContext";

export function DayGrade({ day, userGrades, user }) {
  const [mode, setMode] = useState("view");
  const { grades, setGrades, currentSubject } = useContext(GlobalContext);

  const dayGrade = userGrades.find(
    (grade) =>
      grade.dayId === day.id &&
      grade.userId === user.id &&
      grade.subjectId === currentSubject
  );

  const [newGrade, setNewGrade] = useState(dayGrade?.grade || "");

  function CreateGrade() {
    const updatedGrade = {
      id: uuidv4(),
      grade: newGrade,
      userId: user.id,
      dayId: day.id,
      subjectId: currentSubject,
    };

    setGrades((oldGrades) => {
      const index = oldGrades.findIndex(
        (oldGrade) =>
          oldGrade.dayId === day.id &&
          oldGrade.userId === user.id &&
          oldGrade.subjectId === currentSubject
      );

      if (index !== -1) {
        oldGrades[index] = updatedGrade;
      } else {
        oldGrades.push(updatedGrade);
      }

      return [...oldGrades];
    });

    setMode("view");
    setNewGrade("");
  }

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);

    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 100) {
      setNewGrade(inputValue);
    }
  };

  return (
    <td>
      {mode === "view" && (
        <button onClick={() => setMode("update")}>
          {dayGrade?.grade || "-"}
        </button>
      )}
      {mode === "update" && (
        <div>
          <input
            placeholder="შემოიყვანეთ ქულა"
            type="number"
            value={newGrade}
            onChange={handleInputChange}
          />
          <button onClick={CreateGrade}>განახლება</button>
        </div>
      )}
    </td>
  );
}
