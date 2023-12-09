import { createContext, useState , useEffect} from "react";
const subjects_initial =[
    {
        id: "subject-id-1",
        name: "ქართული ",
    },
    {
        id: "subject-id-2",
        name: "მათემატიკა ",
    },
    {
        id: "subject-id-3",
        name: "ინგლისური ",
    },
];
const users_initial =[
    {  id: "user-1", subjectId: "subject-id-1" },
    {  id: "user-1", subjectId: "subject-id-2"  },
    {  id: "user-1", subjectId: "subject-id-3"  },
    {  id: "user-2", subjectId: "subject-id-1"  },
    {  id: "user-2", subjectId: "subject-id-2"  },
    {  id: "user-2", subjectId: "subject-id-3"  },
]

const weeks_initial=[
    {id: "week-id-1", name:"პირველი კვირა"},
    {id: "week-id-2", name:"მეორე კვირა"},
    {id: "week-id-3", name:"მესამე კვირა"},
]

const days_initial=[
    {id:"day-1", weekId:"week-id-1", day: "ორშაბათი" },
    {id:"day-2", weekId:"week-id-1", day: "სამშაბათი" },
    {id:"day-3", weekId:"week-id-1", day: "ოთხშაბათი" },
    {id:"day-4", weekId:"week-id-1", day: "ხუთშაბათი" },
    {id:"day-5", weekId:"week-id-1", day: "პარასკევი" },

    {id:"day-6", weekId:"week-id-2", day: "ორშაბათი" },
    {id:"day-7", weekId:"week-id-2", day: "სამშაბათი" },
    {id:"day-8", weekId:"week-id-2", day: "ოთხშაბათი" },
    {id:"day-9", weekId:"week-id-2", day: "ხუთშაბათი" },
    {id:"day-10", weekId:"week-id-2", day: "პარასკევი" },

    {id:"day-11", weekId:"week-id-3", day: "ორშაბათი" },
    {id:"day-12", weekId:"week-id-3", day: "სამშაბათი" },
    {id:"day-13", weekId:"week-id-3", day: "ოთხშაბათი" },
    {id:"day-14", weekId:"week-id-3", day: "ხუთშაბათი" },
    {id:"day-15", weekId:"week-id-3", day: "პარასკევი" },
];

const grades_initial=[
    {id:"grade-1", userId: "user-1", dayId:"day-1", subjectId:"subject-id-1", grade:10},
    {id:"grade-2", userId: "user-2", dayId:"day-2", subjectId:"subject-id-2", grade:20},
    {id:"grade-3", userId: "user-3", dayId:"day-3", subjectId:"subject-id-3", grade:30},

    {id:"grade-4", userId: "user-1", dayId:"day-4", subjectId:"subject-id-3", grade:40},
    {id:"grade-5", userId: "user-2", dayId:"day-5", subjectId:"subject-id-1", grade:50},
    {id:"grade-6", userId: "user-3", dayId:"day-6", subjectId:"subject-id-2", grade:60},

    {id:"grade-7", userId: "user-1", dayId:"day-7", subjectId:"subject-id-2", grade:70},
    {id:"grade-8", userId: "user-2", dayId:"day-8", subjectId:"subject-id-3", grade:80},
    {id:"grade-9", userId: "user-3", dayId:"day-9", subjectId:"subject-id-1", grade:90},
];

export const GlobalContext= createContext({
    subjects: [],
    setSubjects: undefined,
    users:[],
    setUsers:undefined,
    weeks:[],
    setWeeks:undefined,
    days:[],
    setDays:undefined,
    grades:[],
    setGrades:undefined,
});

export function GlobalProvider({children}){
    const [subjects, setSubjects] = useState(subjects_initial);
    const [users, setUsers] = useState([{ id: "user-1", username: "ელა"}]);
    const [currentSubject, setcurrentSubject] =useState("subject-id-1");
    const [weeks, setWeeks] = useState(weeks_initial);
    const [days, setDays] = useState(days_initial);
    const [currentWeekId, setcurrentWeekId] =useState("week-id-1");
    const [grades,setGrades]=useState([
        {id:"grade-1", userId:"user-1", dayId:"day-1", grade:40},
        {id:"grade-2", userId:"user-1", dayId:"day-2", grade:10},
        {id:"grade-3", userId:"user-1", dayId:"day-3", grade:20},
        {id:"grade-2", userId:"user-65", dayId:"day-2", grade:40},

    ]);


    useEffect(()=>{
       if(currentWeekId ){
        setDays(days_initial.filter((day) => day.weekId=== currentWeekId));
       }
    },[currentWeekId]);


    return (
    <GlobalContext.Provider
     value={{
        subjects,
        setSubjects,
        users,
        setUsers,
        currentSubject,
        setcurrentSubject,
        weeks,
        setWeeks,
        days,
        setDays,
        currentWeekId,
        setcurrentWeekId,
        grades,
        setGrades,
    }}>{children}</GlobalContext.Provider>
    );
}