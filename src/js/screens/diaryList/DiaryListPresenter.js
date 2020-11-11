import React from "react";
import "../../../css/diaryList.css";
const DiaryListPresenter = (diary) => {
  var no = 0;
  console.log(diary);
  console.table(diary);
  console.log(diary.diary[0].wordCloud);
  return (
    <>
      <div id="diaryList">
        <h1>다이어리 리스트</h1>
        {/* <img src={diary.diary[0].wordCloud} /> */}
        
      </div>
    </>
  );
};

export default DiaryListPresenter;
