import React, { useState } from 'react'
import DiaryListPresenter from './DiaryListPresenter'
const DiaryListContainer = () => {
    // 클릭한 다이어리 값을 저장
    const [clickDiary, setClickDiary] = useState(-1)  
    // 다이어리 디테일 뷰 모달 띄우는 변수
    const [diaryView, setDiaryView] = useState(false) 
    //워드 클라우드 숨기기 or 보이기 상태 
    const [cloud, setCloud] = useState(false) 

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
    const diary = [
        {
            title: '오늘의 일기',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
        },
        {
            title: '집가고싶다',
            content: '고양이가 최고양',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
        },
        {
            title: '오늘의 일기',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
        },
        {
            title: '집가고싶다',
            content: '고양이가 최고양',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
        },
        {
            title: '오늘의 일기',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
        },
        {
            title: '집가고싶다',
            content: '고양이가 최고양',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
        },
        {
            title: '오늘의 일기',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
        },
        {
            title: '집가고싶다',
            content: '고양이가 최고양',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
        },
        {
            title: '오늘의 일기',
            content: '오늘은 마음 실타래 일기를 써보자',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
        },
        {
            title: '집가고싶다',
            content: '고양이가 최고양',
            wordCloud: 'image/wordCloud3.png',
            cover: 'image/yarn1.png',
        },
    ]

    // Slick Setting
    const diaryListSlickSetting = {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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
        if(clickDiary === e.currentTarget.id){
          setCloud(false)
        }else{
          setCloud(true)
        }
        
    }

    return <DiaryListPresenter diary={diary} clickDiary={clickDiary} changeDiary={changeDiary} diaryListSlickSetting={diaryListSlickSetting} cloud={cloud} setCloud={setCloud} />
}

export default DiaryListContainer
