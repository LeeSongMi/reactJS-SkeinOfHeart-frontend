import React from 'react'
import '../../../css/diaryList.css'
import SliderSlick from 'react-slick'
import ReactDOM from 'react-dom'
import { getElementError } from '@testing-library/react'

const DiaryListPresenter = ({diary, changeDiary, diaryListSlickSetting}) => {


    return (
        <>
            <div id="diaryList">
                <h1>다이어리 리스트</h1>
                {/* <img src={diary.diary[0].wordCloud} /> */}

                <SliderSlick {...diaryListSlickSetting}>
                    {diary.map((info, index) => (
                        <>
                            <div>
                                <div className={`word_cloud ${index}`} name="word_cloud">
                                    <img src={info.wordCloud} width="300px" height="200px"></img>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="book_cover"
                                    id={index}
                                    onClick={(e) => {
                                        changeDiary(e)
                                    }}>
                                    <img src={info.cover} width="150px" height="200px"></img>
                                </div>
                            </div>
                        </>
                    ))}
                </SliderSlick>
                <button>일기장 펼치기</button>
            </div>
        </>
    )
}

export default DiaryListPresenter
