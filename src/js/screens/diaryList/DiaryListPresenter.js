import React, { useEffect, useState } from 'react'
import SliderSlick from 'react-slick'
import ReactDOM from 'react-dom'
import { getElementError } from '@testing-library/react'
import ReactWordcloud from 'react-wordcloud'
import axios from 'axios'
import qs from 'qs'

const DiaryListPresenter = ({ diary, clickDiary, changeDiary, diaryListSlickSetting, cloud, setCloud, diaryModal, setDiaryViewModal, modalHandler }) => {
    const [isSelected, setSelect] = useState(true)

    useEffect(() => {
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/load_pages',
            data: qs.stringify({
                user_no: 1,
                // content: content,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            console.log(response)
        })
    }, [])

    const text = "안녕 반가워"
    console.table(diary[clickDiary === -1 ? 0 : clickDiary])

const DiaryListPresenter = ({ diary, clickDiary, changeDiary, diaryListSlickSetting, isSelected, cloud, setCloud, diaryModal, setDiaryViewModal, modalHandler }) => {
    const page = diary[clickDiary === -1 ? 0 : clickDiary]
    const words = [
        {
          text: 'told',
          value: 64,
        },
        {
          text: 'mistake',
          value: 11,
        },
        {
          text: 'thought',
          value: 16,
        },
        {
          text: '고양이',
          value: 200,
        },
        {
            text: '강아지',
            value: 100,
          },
          {
            text: '안녕',
            value: 90,
          },
          {
            text: '졸작',
            value: 18,
          },
          {
            text: '초콜릿',
            value: 20,
          },
          {
            text: '약',
            value: 3,
          },
        
      ]
      const colors = ['#eee7df', '#dbcbbe','#b0988e','#abdeed7','#4d8581']
    return (
        <div id="diaryList" className="main-div" style={{ height: window.innerHeight }}>
            <div className="content">
                <div className="title">다이어리 리스트</div>

                <div className="book-content">
                    {isSelected ? (
                        <div id="showDiary">
                            <div className="diaryLeft">
                                <div className="viewTitle">{page.title}</div>
                                <div className="viewDate">작성일: {page.date}</div>
                                <div className="diaryArea">
                                    <font className="infoTxt">속마음</font>
                                    <br />
                                    <font className="contentTxt">{page.content}</font>
                                </div>
                            </div>
                            <div className="diaryRight">
                                <div className="mindArea">
                                    <font className="infoTxt">속마음 분석</font>
                                    <br />
                                    <font className="infoTxt">워드클라우드</font>
                                    <br />

                                    <ReactWordcloud words={words} color={colors} className="wordC" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="showDiary"> 선택된 일기가 없어요 :)</p>
                    )}
                </div>
                <SliderSlick className="diarySlide" {...diaryListSlickSetting}>
                    {diary.map((info, index) => (
                        <>
                            {/* <div>
                                <div className={`word_cloud ${index}`} name="word_cloud">
                                    <img src={info.wordCloud} width="250px" height="200px"></img>
                                </div>
                            </div> */}
                            <div className="book">
                                <div
                                    className="book_cover"
                                    id={index}
                                    onClick={(e) => {
                                        changeDiary(e)
                                    }}>
                                    <img src={info.cover} width="80vw" height="auto"></img>
                                    <br />
                                    <font className="bookTitle">{info.title}</font>
                                    <br />
                                    <br />
                                    <font className="bookContent">{info.content}</font>
                                </div>
                            </div>
                        </>
                    ))}
                </SliderSlick>
                {/* <div className="btnDiv">
                    {diaryModal ? (
                        <button className="viewBtn" onClick={() => modalHandler()}>
                            일기장 닫기
                        </button>
                    ) : (
                        <button className="viewBtn" onClick={() => modalHandler()}>
                            일기장 펼치기
                        </button>
                    )}
                </div> */}
            </div>
        </div>
    )
}

export default DiaryListPresenter
