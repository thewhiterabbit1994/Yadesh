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
    const [arrayAnswer, setArrayAnswe] = useState([
        {
            txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ",
            name: "شما",
            time: "12:00",
            date: "22 شهریور",
        }
    ])
    const [arrayComment, setArrayComment] = useState([
        {
            txt: "طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ",
            name: "حسین ضرابی",
            time: "12:00",
            date: "22 شهریور",
        }
    ])


    return (
        <MainCounter.Provider value={{
            comment, setComment,
            arrayComment, setArrayComment,
            arrayAnswer, setArrayAnswe,
            tickets, setTickets
        }}>
            {props.children}
        </MainCounter.Provider>

    )
}
export default Context