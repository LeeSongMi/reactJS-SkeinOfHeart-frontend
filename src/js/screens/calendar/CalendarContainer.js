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
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date: '2020-11-16',
            emotion: '신뢰',
        },
        {
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date: '2020-11-23',
            emotion: '놀라움',
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
    const colorPalette = {
        기쁨: '#f7c9c9',
        신뢰: '#78c752',
        기대: '#97dddd',
        슬픔: '#91a8d1',
        혐오: '#000000',
        공포: '#034f83',
        분노: '#dd4132',
        놀라움: '#f9e03d',
    }
    return (
        <>
            <CalendarPresenter value={value} onChange={onChange} diary={diary} modalHandler={modalHandler} colorPalette={colorPalette} />
            <ModalForDetailView diary={diary} diaryModal={diaryModal} setDiaryViewModal={setDiaryViewModal} clickDiary={clickDiary} />
        </>
    )
}

export default CalendarContainer
