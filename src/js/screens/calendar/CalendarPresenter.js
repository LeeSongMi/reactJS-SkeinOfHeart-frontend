import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
const CalendarPresenter = ({ value, onChange, diary }) => {
    console.table(value)
    return (
        <div style={{ height: window.innerHeight}}>
            <h1 className="title">감정 캘린더</h1>
            <div id="calendar">
                <div className="calendar left"> 
                <font className="title">감정 캘린더</font>
                    {/* <img src="image/book2.png" /> */}
                    {/* <font>{value}</font> */}
                </div>
                <div className="calendar right"> 
                    <Calendar
                        className={diary.color} 
                        onChange={onChange} value={value}
                        onClickDay={()=>{console.log('하루를 클릭함')}} 
                        locale={'en-US'}/>
                </div>  
            </div>
        </div>
    )
}

export default CalendarPresenter
