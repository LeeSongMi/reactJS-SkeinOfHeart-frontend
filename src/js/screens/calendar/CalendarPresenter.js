import { render } from '@testing-library/react'
import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
const CalendarPresenter = ({ value, onChange, diary, modalHandler }) => {
    return (
        <>
        {diary.map((info, index) => (
            render(
            <style jsx>{`
                .react-calendar__month-view__days__day .mindHeart.a${info.date.replace(/\-/g,'').substring(0,8)} { color: ${info.color}; }`}
            </style>
            ),<></>
        ))}
        <div style={{ height: window.innerHeight}}>
            <h1 className="title">감정 캘린더</h1>
            <div id="calendar">
                <div className="calendar left"> 
                <font className="title">감정 캘린더</font>
                    {/* <img src="image/book2.png" /> */}
                </div>
                <div className="calendar right"> 
                    <Calendar
                        className={diary.color} 
                        onChange={onChange} value={value}
                        onClickDay={()=>{modalHandler()}} 
                        locale={'en-US'}
                        diary={diary}
                        />
                </div>  
                {/* <button className="viewBtn" onClick={() => modalHandler()}>
                            일기장 펼치기
                        </button> */}
            </div>
        </div>
        </>
    )
}

export default CalendarPresenter
