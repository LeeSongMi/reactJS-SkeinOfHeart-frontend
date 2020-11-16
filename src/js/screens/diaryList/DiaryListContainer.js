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
    
    const [autoSlide,setAutoSlide] =useState(true)

    const history = useHistory()

    const getDiaryList = () => {
        // axios({
        //   method: 'post',
        // url: `${process.env.REACT_APP_API_HOST}/api/getDiaryList`,
        //   data:{
        //     content:content.value
        //   },
        //   headers: {
        //     Authorization: `bearer ${localStorage.getItem('token')}`,
        // },
        // }).then((response)=>{
        //   const data = response.data
        // reset()
        // })
    }

    useEffect(() => {
        /* 뒤로 가기 시 모달 닫기 */
        // if (diaryModal) {
        //     // history.push('/')
        //     history.replace('/')
        //     window.addEventListener('popstate', setDiaryViewModal(false))
        // }
        // if (!diaryModal) {
        //     return () => {
        //         // window.removeEventListener('popstate', setDiaryViewModal(false))
        //     }
        // }
    }, [diaryModal])
    const diary = [
        {
            title: '오늘의 일기1',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date: '2020-11-16',
            color: '#abded7',
        },
        {
            title: '집가고싶다2',
            content: '고양이가 최고양',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date: '2020-11-16',
            color: '#dbcbbe',
        },
        {
            title: '오늘의 일기3',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date: '2020-11-16',
            color: '#b0988e',
        },
        {
            title: '집가고싶다4',
            content: '고양이가 최고양',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
            date: '2020-11-16',
            color: '#eee7df',
        },
    ]

    // Slick Setting
    const diaryListSlickSetting = {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: {autoSlide},
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
                    slidesToShow: 2,
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
        const no = e.currentTarget.id
        const target = document.getElementsByClassName(`word_cloud ${no}`).item(1)
        const beforeTar = document.getElementsByClassName(`word_cloud ${clickDiary}`).item(1)

        //클릭한 다이어리 다시 클릭시 워드 클라우드 숨김 처리
        if (clickDiary === e.currentTarget.id) {
            setCloud(false)
            setClickDiary(-1)
        } else {
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

    return (
        <>
            <DiaryListPresenter
                diary={diary}
                clickDiary={clickDiary}
                changeDiary={changeDiary}
                diaryListSlickSetting={diaryListSlickSetting}
                cloud={cloud}
                setCloud={setCloud}
                diaryModal={diaryModal}
                setDiaryViewModal={setDiaryViewModal}
                modalHandler={modalHandler}
            />
            <ToastContainer />
            <ModalForDetailView diary={diary} diaryModal={diaryModal} setDiaryViewModal={setDiaryViewModal} clickDiary={clickDiary} />
        </>
    )
}

export default DiaryListContainer
