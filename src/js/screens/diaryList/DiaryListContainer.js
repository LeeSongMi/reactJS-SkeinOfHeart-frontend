import React, { useState } from "react";
import DiaryListPresenter from "./DiaryListPresenter";
const DiaryListContainer = () => {
  const [clickDiary, setClickDiary] = useState(-1)

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
      cover: "image/book1.png",
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
      cover: "image/book1.png",
    },
  ];
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
  return <DiaryListPresenter diary={diary} changeDiary={changeDiary} />;
};

export default DiaryListContainer;
