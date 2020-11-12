import React,{useState} from "react";
import DiaryWritePresenter from "./DiaryWritePresenter";
import axios from 'axios'
import { useForm } from "react-hook-form";


const DiaryWriteContainer = () => {
  const [page, setPage]= useState('')
  const { register, handleSubmit, watch, errors, reset } = useForm()
  
  const addDiary =(e) =>{
    console.log(e.content)
    setPage(e.content)
    // axios({
    //   method: 'get',
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
    
    reset()
  }
  
  return (
    <DiaryWritePresenter
    register={register}
    reset={reset}
    handleSubmit={handleSubmit}
    page={page}
    setPage={setPage}
    addDiary={addDiary}
    />
  );
};

export default (DiaryWriteContainer)
