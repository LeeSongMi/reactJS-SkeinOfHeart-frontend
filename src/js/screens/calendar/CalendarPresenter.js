import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
const CalendarPresenter = ({ value, onChange }) => {
    return (
        <>
            <h1>감정 캘린더</h1>
            <div id="calendar">
                <div className="calendar left">
                    <img src="image/book2.png" />
                </div>
                <div className="calendar right"> 
                    <Calendar
                        className={"emotionCalendar"} 
                        onChange={onChange} value={value}
                        onClickDay={()=>{console.log('하루를 클릭함')}} 
                        locale={'en-US'}/>
                </div>  
            </div>
        </>
    )
}

export default CalendarPresenter
