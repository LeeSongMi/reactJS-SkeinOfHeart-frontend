import React, { useState } from "react";
import DiaryListPresenter from "./DiaryListPresenter";
const DiaryListContainer = () => {
  const [clickDiary, setClickDiary] = useState(-1)
  const [diaryView,setDiaryView]= useState(false)
  const getDiaryList = () =>{
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
      title: "오늘의 일기",
      content: "일기다 이자식아",
      wordCloud: "image/wordCloud1.png",
      cover: "image/book1.png",
    },
    {
      title: "집가고싶다",
      content: "고양이가 최고양",
      wordCloud: "image/wordCloud2.png",
      cover: "image/book2.png",
    },
    {
      title: "오늘의 일기",
      content: "일기다 이자식아",
      wordCloud: "image/wordCloud1.png",
      cover: "image/book1.png",
    },
    {
      title: "집가고싶다",
      content: "고양이가 최고양",
      wordCloud: "image/wordCloud2.png",
      cover: "image/book2.png",
    },
  ];
  
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
        target.style.visibility = 'visible'
        // 이전에 클릭된 다이어리가 있다면 이전 다이어리의 워드클라우드를 숨김
        if (clickDiary !== -1) {
            beforeTar.style.visibility = 'hidden'
        }
    }

  return <DiaryListPresenter diary={diary} changeDiary={changeDiary} diaryListSlickSetting={diaryListSlickSetting} />;
};

export default DiaryListContainer;
