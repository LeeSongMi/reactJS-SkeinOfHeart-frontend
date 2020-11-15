import React from "react";
import axios from 'axios'
import MainPresenter from "./MainPresenter";
import qs from 'qs'


const MainContainer = () => {

  const test = () => {
    console.log('hey')
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/ai/test/',
        data:qs.stringify({
          content:"안녕안녕"
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      }).then((response)=>{
        console.log('why')
      })
  }


  return <MainPresenter test={test} />
};

export default MainContainer;
