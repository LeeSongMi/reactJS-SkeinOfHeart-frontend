import React, { useEffect } from "react";
import Main from "../screens/main";
import DiaryList from "../screens/diaryList";
import DiaryWrite from "../screens/diaryWrite";
import Calendar from "../screens/calendar"
import Login from "../screens/Login"
import MyPage from "../screens/myPage";

const SkeinOfHeart = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
