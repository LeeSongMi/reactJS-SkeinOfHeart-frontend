import React, { useEffect, useState } from 'react'
import '../../../css/diaryWrite.css'
import { useForm } from 'react-hook-form'
import '../../../css/commonStyle.css'
import axios from 'axios'
import qs from 'qs'
import ReactDOM from 'react-dom'
import ReactWordcloud from 'react-wordcloud'

const DiaryWritePresenter = ({ handleSubmit, addDiary, register, correctContent }) => {
    return (
        <>
            <div id="diaryWrite" className="main-div" style={{ height: window.innerHeight }}>
                {/* {isWordcloud ? <ReactWordcloud words={words} /> : <></>} */}
                <div className="content">
                    <div className="left-section">
                        <div className="title">오늘의 감정</div>
                        <img className="logo" src="/image/illustration/mask-man.jpg" alt="위로 일러스트 이미지"></img>
                        <div className="description">
                            <p>
                                <br />
                                한가득 신이 났던 오늘의 남은 <b>여흥</b>을 풀어내도 좋고, <br />
                                속에 갖혀 풀어내지 못 한 <b>서러움</b>을 덜어내도 좋고, <br />
                                누군가 <b>밉고 짜증났던 마음</b>을 훌훌 털어버려도 좋아요. <br />
                                <br />
                                여기는 당신만의 마음 실타래니까요 :)
                            </p>
                        </div>
                    </div>
                    <div className="right-section">
                        <form className="writeForm" onSubmit={handleSubmit(addDiary)}>
                            <textarea className="writeDiary" type="textarea" id="inContent" name="content" ref={register} placeholder="이 곳에 글을 작성해주세요 ;)"/>
                            <input className="writeSubmit" id="button" type="submit" value="작성한 글 등록하기" />
                        </form>
                        <button className="correct" id="button" onClick={correctContent}>맞춤법 올바르게 하기 </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiaryWritePresenter
