import React from 'react'
import Calendar from 'react-calendar'
const CalendarPresenter = ({ value, onChange }) => {
    return (
        <>
            <h1>감정 캘린더</h1>
            <div id="calendar">
                <div className="calendar left">
                    <img src="image/book2.png" />
                </div>
                <div className="calendar right"> 
                    <Calendar onChange={onChange} value={value} />
                </div>
            </div>
        </>
    )
}

export default CalendarPresenter
