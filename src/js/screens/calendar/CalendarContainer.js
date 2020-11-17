import React,{useState} from 'react'
import CalendarPresenter from './CalendarPresenter'
import "../../../css/calendar.css"
const CalendarContainer = () => {
    const [value, onChange] = useState(new Date());
    const diary = [
        {
            title: '오늘의 일기',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date:'2020-11-16',
            color:'#dbcbbe'
        },
        {
            title: '오늘의 일기',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date:'2020-11-19',
            color:'#abded7'
        }]
    return (
        <>
            <CalendarPresenter 
                value={value}
                onChange={onChange}
                diary={diary}
            />
        </>
    )
}

export default CalendarContainer
