import React, { useState } from 'react'
import DiaryWritePresenter from './DiaryWritePresenter'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import qs from 'qs'

const DiaryWriteContainer = () => {
    // -- variables
    const [page, setPage] = useState('')
    const { register, handleSubmit, watch, errors, reset } = useForm()

    // -- functions
    const addDiary = (e) => {
        console.log(e.content)
        const content = e.content
        axios({
            url: '',
            method: 'POST',
            url: 'http://127.0.0.1:8000/save_page',
            data: qs.stringify({
                diary_no: 1,
                topic_no: 0,
                user_no: 1,
                content: content,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            const data = response.data
            console.log(data)
            window.scrollTo({ top: window.innerHeight * 2, left: 0, behavior: 'smooth' })
            reset()
        })
    }

    const correctContent = () => {
        const content = document.getElementById("inContent").value
        axios({
            url: '',
            method: 'POST',
            url: 'http://127.0.0.1:8000/ai/correcting/',
            data: qs.stringify({
                content: content,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            const data = response.data
            document.getElementById("inContent").value = data
            
        })
    }

    return <DiaryWritePresenter correctContent={correctContent} register={register} reset={reset} handleSubmit={handleSubmit} page={page} setPage={setPage} addDiary={addDiary} />
}

export default DiaryWriteContainer
