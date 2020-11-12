import React,{useState} from "react";
import DiaryWritePresenter from "./DiaryWritePresenter";
import axios from 'axios'
import { useForm } from "react-hook-form";


const DiaryWriteContainer = () => {
  // const { register, handleSubmit, watch, errors, reset } = useForm()

  const [page, setPage]= useState('')
  
  return (
    <DiaryWritePresenter
    // writeDiary={writeDiary}
    // register={register}
    // reset={reset}
    // handleSubmit={handleSubmit}
    page={page}
    setPage={setPage}
    // addDiary={addDiary}
    />
  );
};

export default (DiaryWriteContainer)
