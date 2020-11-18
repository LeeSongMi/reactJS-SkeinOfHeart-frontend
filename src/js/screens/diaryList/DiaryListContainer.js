import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import '../../../css/diaryList.css'
import '../../../css/commonStyle.css'
import 'react-toastify/dist/ReactToastify.css'
import DiaryListPresenter from './DiaryListPresenter'
import ModalForDetailView from './ModalForDetailView'
const DiaryListContainer = () => {
    // 클릭한 다이어리 값을 저장
    const [clickDiary, setClickDiary] = useState(-1)
    // 다이어리 디테일 뷰 모달 띄우는 변수
    const [diaryModal, setDiaryViewModal] = useState(false)
    //워드 클라우드 숨기기 or 보이기 상태
    const [cloud, setCloud] = useState(false)

    const [autoSlide, setAutoSlide] = useState(true)

    const [isSelected, setSelect] = useState(-1)

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

    // Slick Setting
    const diaryListSlickSetting = {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: { autoSlide },
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    // 다이어리 클릭시 워드 클라우드를 보여주는 함수
    const changeDiary = (e) => {
        setClickDiary(e.currentTarget.id)
        // setSelect(true)
        const no = e.currentTarget.id
        const target = document.getElementsByClassName(`word_cloud ${no}`).item(1)
        const beforeTar = document.getElementsByClassName(`word_cloud ${clickDiary}`).item(1)

        //클릭한 다이어리 다시 클릭시 워드 클라우드 숨김 처리
        if (clickDiary === e.currentTarget.id) {
            setCloud(false)
            setSelect(false)
            setClickDiary(-1)
        } else {
            setSelect(true)
            setCloud(true)
        }
    }
    // const {addToast} = useToasts()
    const modalHandler = () => {
        if (clickDiary === -1) {
            toast('펼칠 일기를 선택해주세요', {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else {
            if (diaryModal) {
                setDiaryViewModal(false)
                setAutoSlide(true)
            } else {
                setDiaryViewModal(true)
                setAutoSlide(false)
            }
        }
    }
    // const diary = [
    //     {
    //         content: '오늘은 마음 실타래 일기를 써보자1',
    //         wordCloud: 'image/wordCloud3.png',
    //         cover: 'image/yarn1.png',
    //         datetime: '2020-11-16',
    //         emotion_state: '신뢰',
    //     },
    //     {
    //         content: '고양이가 최고양2',
    //         wordCloud: 'image/wordCloud3.png',
    //         cover: 'image/yarn1.png',
    //         datetime: '2020-11-15',
    //         emotion_state: '슬픔',
    //     },
    //     {
    //         content: '오늘은 마음 실타래 일기를 써보자3',
    //         wordCloud: 'image/wordCloud3.png',
    //         cover: 'image/yarn1.png',
    //         datetime: '2020-11-23',
    //         emotion_state: '분노',
    //     },
    //     {
    //         content: '고양이가 최고양4',
    //         wordCloud: 'image/wordCloud3.png',
    //         cover: 'image/yarn1.png',
    //         datetime: '2020-11-20',
    //         emotion_state: '기쁨',
    //     },
    //     {
    //         content: '오늘은 마음 실타래 일기를 써보자5',
    //         wordCloud: 'image/wordCloud3.png',
    //         cover: 'image/yarn1.png',
    //         datetime: '2020-11-06',
    //         emotion_state: '혐오',
    //     },
    // ]
    return (
        <>
            <DiaryListPresenter
                clickDiary={clickDiary}
                changeDiary={changeDiary}
                diaryListSlickSetting={diaryListSlickSetting}
                cloud={cloud}
                setCloud={setCloud}
                diaryModal={diaryModal}
                setDiaryViewModal={setDiaryViewModal}
                modalHandler={modalHandler}
                isSelected={isSelected}
                setSelect={setSelect}
                // diary={diary}
                colorPalette={colorPalette}
            />
            <ToastContainer />
            {/* <ModalForDetailView diary={diary} diaryModal={diaryModal} setDiaryViewModal={setDiaryViewModal} clickDiary={clickDiary} colorPalette={colorPalette} /> */}
        </>
    )
}

export default DiaryListContainer
