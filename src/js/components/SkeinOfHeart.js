import React from "react";
import Main from "../screens/main";
import DiaryList from "../screens/diaryList";
import DiaryWrite from "../screens/diaryWrite";
import Calendar from "../screens/calendar"
import Login from "../screens/Login"
import MyPage from "../screens/myPage";

const SkeinOfHeart = () => {
  return (
    <>
      <Main />
      <DiaryWrite />
      <DiaryList />
      <Calendar />
    </>
  );
};
export default SkeinOfHeart;
