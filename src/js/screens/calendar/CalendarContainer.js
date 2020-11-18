import React, { useState } from 'react'
import CalendarPresenter from './CalendarPresenter'
import ModalForDetailView from './ModalForDetailView'
import '../../../css/calendar.css'

const CalendarContainer = () => {
    const [value, onChange] = useState(new Date())
    // 클릭한 다이어리 값을 저장
    const [clickDiary, setClickDiary] = useState(-1)
    // 다이어리 디테일 뷰 모달 띄우는 변수
    const [diaryModal, setDiaryViewModal] = useState(false)
    const diary = [
        {
            title: '오늘의 일기',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date: '2020-11-16',
            color: '#dbcbbe',
        },
        {
            title: '오늘의 일기',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date: '2020-11-19',
            color: '#abded7',
        },
    ]
    const modalHandler = (e) => {
        console.log(e)
        if (diaryModal) {
            setDiaryViewModal(false)
        } else {
            setDiaryViewModal(true)
        }
    }
    return (
        <>
            <CalendarPresenter value={value} onChange={onChange} diary={diary} modalHandler={modalHandler} />
            <ModalForDetailView diary={diary} diaryModal={diaryModal} setDiaryViewModal={setDiaryViewModal} clickDiary={clickDiary} />
        </>
    )
}

export default CalendarContainer
