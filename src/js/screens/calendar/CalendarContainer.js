import React, { useEffect, useState } from 'react'
import CalendarPresenter from './CalendarPresenter'
import ModalForDetailView from './ModalForDetailView'
import '../../../css/calendar.css'
import qs from 'qs'
import axios from 'axios'

const CalendarContainer = () => {
    const [value, onChange] = useState(new Date())
    // 클릭한 다이어리 값을 저장
    const [clickDay, setClickDay] = useState(-1)
    // 다이어리 디테일 뷰 모달 띄우는 변수
    const [diaryModal, setDiaryViewModal] = useState(false)

    
    const [diary, setDiary] = useState([])

    useEffect(() => {
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/load_pages',
            data: qs.stringify({
                user_no: 1,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            const data = response.data
            setDiary(data)
            console.log(diary)
        })
    }, [])

    const existDiary = (diary, date) => {
        var x = 0
        {
            diary.map((info, index) => (info.datetime === date ? (x = 1) : <></>))
        }
        console.log(x)
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
