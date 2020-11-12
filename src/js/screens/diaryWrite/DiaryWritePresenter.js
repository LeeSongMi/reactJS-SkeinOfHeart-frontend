import React from "react";
import "../../../css/diaryWrite.css";
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom'

const DiaryWritePresenter = ({register, reset, handleSubmit,page, setPage,addDiary}) => {

  console.log(page)
  return (
    <>
      <div id="diaryWrite">
        <h1>다이어리 작성</h1>
        <div className="writeArea">
          <form className="writeForm" onSubmit={handleSubmit(addDiary)}>
            <textarea
              className="writeDiary"
              type="textarea"
              id="inContent"
              name="content"
              ref={register}
            />
            <br/>
            <input className="writeSubmit" type="submit" value="글쓰기" />
          </form>
        </div>
      </div>
    </>
  );
};

export default (DiaryWritePresenter);
