import React,{useState} from 'react'
import CalendarPresenter from './CalendarPresenter'
import "../../../css/calendar.css"
const CalendarContainer = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <CalendarPresenter 
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default CalendarContainer
