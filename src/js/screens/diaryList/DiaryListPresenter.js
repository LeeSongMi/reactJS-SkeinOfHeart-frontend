import React, { useEffect, useState } from 'react'
import SliderSlick from 'react-slick'
import ReactDOM from 'react-dom'
import { getElementError } from '@testing-library/react'
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
    return (
        <div id="diaryList" className="main-div" style={{ height: window.innerHeight }}>
            <div className="content">
                <div className="title">다이어리 리스트</div>

                {isSelected ? (
                    <div className="book-content">
                        <div className="left-section"> {text}</div>
                        <div className="right-section">
                            <div className="right-up-section"></div>
                            <div className="right-down-section"></div>
                        </div>
                    </div>
                ) : (
                    <div className="book-content">
                        <div> 선택된 일기가 없어요 :)</div>
                    </div>
                )}
                <SliderSlick {...diaryListSlickSetting}>
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
                <div className="btnDiv">
                    {diaryModal ? (
                        <button className="viewBtn" onClick={() => modalHandler()}>
                            일기장 닫기
                        </button>
                    ) : (
                        <button className="viewBtn" onClick={() => modalHandler()}>
                            일기장 펼치기
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DiaryListPresenter
