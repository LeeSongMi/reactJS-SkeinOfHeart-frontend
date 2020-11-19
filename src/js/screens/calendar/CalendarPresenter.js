import { render } from '@testing-library/react'
import React, { useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Moment from 'moment'
const CalendarPresenter = ({ value, onChange, diary, modalHandler, colorPalette }) => {

    return (
        <>
        {console.log(diary)}
            {diary.map((info, index) => (
                    render(
                        <style jsx>
                            {console.log(info.datetime.replace(/\-/g, '').substring(0, 8), info.emotion_state)}
                            {`
                                .react-calendar__month-view__days__day .mindHeart.a${info.datetime.replace(/\-/g, '').substring(0, 8)} {
                                    color: ${colorPalette[info.emotion_state]};
                                    opacity: 0.8;
                                    cursor: pointer;
                                }
                            `}
                        </style>
                    ),
                    (<></>)
                )
            )}
            <div id="calendar" className="main-div" style={{ height: window.innerHeight }}>
                <div className="content">
                    <div className="title">감정 캘린더</div>
                    <div className="calendar-div">
                        <div className="calendar left">
                            <font className="title">감정 캘린더</font>
                            {/* <img src="image/book2.png" /> */}
                        </div>
                        <div className="calendar right">
                            <Calendar
                                onChange={onChange}
                                value={value}
                                onClickDay={(e) => {
                                    modalHandler(diary, Moment(e).format('YYYY-MM-DD'))
                                
                                }}
                                locale={'en-US'}
                                diary={diary}
                            />
                        </div>
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
