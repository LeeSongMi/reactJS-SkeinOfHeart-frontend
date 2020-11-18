import React, { useState } from 'react'
import CalendarPresenter from './CalendarPresenter'
import ModalForDetailView from './ModalForDetailView'
import '../../../css/calendar.css'

const CalendarContainer = () => {
    const [value, onChange] = useState(new Date())
    // 클릭한 다이어리 값을 저장
    const [clickDay, setClickDay] = useState(-1)
    // 다이어리 디테일 뷰 모달 띄우는 변수
    const [diaryModal, setDiaryViewModal] = useState(false)

    var page = []

    const diary = [
        {
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date: '2020-11-16',
            emotion: '신뢰',
        },
        {
            content: '고양이가 최고양',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date: '2020-11-23',
            emotion: '놀라움',
        },
    ]
    const existDiary = (diary, date) => {
        var x = 0
        {
            diary.map((info, index) => (info.date === date ? (x = 1) : <></>))
        }
        if (x === 1) {
            return true
        } else {
            return false
        }
    }
    const modalHandler = (diary, date) => {
        if (diaryModal) {
            setDiaryViewModal(false)
            setClickDay(date)
        } else {
            if (existDiary(diary, date)) {
                setDiaryViewModal(true)
                setClickDay(date)
            }
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
            <ModalForDetailView diaryModal={diaryModal} setDiaryViewModal={setDiaryViewModal} diary={diary} clickDay={clickDay} colorPalette={colorPalette} />
        </>
    )
}

export default CalendarContainer
