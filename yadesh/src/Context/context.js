import { createContext, useState } from "react"
import imgUser from "../assets/Img/AdminPanelCourses/imgUser.jpg"
export const MainCounter = createContext("")

const Context = (props) => {

    const [comment, setComment] = useState("")
    const [tickets, setTickets] = useState([
        {
            txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی  و ارائهٔ اولیهٔ شکل ",
            name: "حسین ضرابی",
            time: "12:00",
            date: "22 شهریور",
            img: imgUser,
            categories: "حساب کاربری"
        },
        {
            txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی  و ارائهٔ اولیهٔ شکل ",
            name: "حسین ضرابی",
            time: "12:00",
            date: "22 شهریور",
            img: imgUser,
            categories: "اپیزودها"
        },
    ])   
    const [ticketDatabase , setticketDatabase] = useState({
        userTicket:[
            {
                txt: "سلام من حسین ضرابی هستم",
                name: "حسین ضرابی",
                time: "12 : 00",
                date: "22 شهریور"
              }
        ],
        companyTicket:[
            {
                txt: "سلام من حسین ضرابی از شرکت مکین هستم",
                name: "حسین ضرابی",
                time: "12 : 00",
                date: "22 شهریور"
              }
        ]
    })
  
    return (
        <MainCounter.Provider value={{
            comment, setComment,
            tickets, setTickets,
            ticketDatabase,setticketDatabase
        }}>
            {props.children}
        </MainCounter.Provider>

    )
}
export default Context