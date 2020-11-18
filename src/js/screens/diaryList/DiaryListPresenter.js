import React, { useEffect, useState } from 'react'
import SliderSlick from 'react-slick'
import ReactDOM from 'react-dom'
import { getElementError } from '@testing-library/react'
import ReactWordcloud from 'react-wordcloud'
import axios from 'axios'
import qs from 'qs'
import { render } from '@testing-library/react'

const DiaryListPresenter = ({ isSelected, setSelect, clickDiary, changeDiary, diaryListSlickSetting, cloud, setCloud, diaryModal, setDiaryViewModal, modalHandler }) => {
    // -- useState & variable
    const [bookList, setBookList] = useState(null)
    const [page, setPage] = useState(null)

    const text = '안녕 반가워'

    const words = [
        { text: 'told', value: 64 },
        { text: 'mistake', value: 11 },
        { text: 'thought', value: 16 },
        { text: '고양이', value: 200 },
        { text: '강아지', value: 100 },
        { text: '안녕', value: 90 },
        { text: '졸작', value: 18 },
        { text: '초콜릿', value: 20 },
        { text: '약', value: 3 },
    ]
    const colorPalette = {
        기쁨: "#f7c9c9",
        신뢰: "#78c752",
        기대: "#97dddd",
        슬픔: "#91a8d1",
        혐오: "#000000",
        공포: "#034f83",
        분노: "#dd4132",
        놀라움: "#f9e03d",
    }

    // -- useEffect
    useEffect(() => {
        console.log('hey')
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/load_pages',
            data: qs.stringify({
                user_no: 1,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            const data = response.data
            setBookList(data)
            console.log(data, 'test')
        })
    }, [])

    // -- method
    const scrollToCalender = () => {
        window.scrollTo({ top: window.innerHeight * 3, left: 0, behavior: 'smooth' })
    }
    const clickSlideHandler = (e) => {
        setSelect(e)
        render(
            <style jsx>
                {`
                    #diaryList .book .book_cover.a${e} {
                        border: #abded7 1px solid;
                        box-shadow: 5px 5px 5px #abded7;
                    }
                    #diaryList .book .book_cover.a${isSelected} {
                        border: none;
                        box-shadow: 5px 5px 5px #b0988e;
                    }
                `}
            </style>
        )
    }
    return (
        <div id="diaryList" className="main-div" style={{ height: window.innerHeight }}>
            <div className="content">
                <div className="title">다이어리 리스트</div>

                <div className="book-content">
                    <img className="logo" />
                    <div className="description">
                        일기만큼 당신을 들여다 볼 수 있는 건 없을 거에요.
                        <br />
                        <b>일기를 클릭</b>해서 당신을 들여다 볼 수 있어요.
                        <br />
                        <br />
                        혹은 캘린더 화면을 통해 <b>감정 패턴</b>을 살펴볼 수도 있어요.
                        <br />
                        감정 패턴을 살펴보고 싶다면,
                        <br />
                        <button id="button" onClick={scrollToCalender}>
                            {' '}
                            캘린더로 이동하기{' '}
                        </button>
                    </div>
                </div>
                <SliderSlick className="diarySlide" {...diaryListSlickSetting}>
                    {bookList != null
                        ? bookList.map((info, index) => (
                              <>
                                  {/* <div>
                                <div className={`word_cloud ${index}`} name="word_cloud">
                                    <img src={info.wordCloud} width="250px" height="200px"></img>
                                </div>
                            </div> */}
                                  <div className="book">
                                      <div
                                          className={`book_cover a${index}`}
                                          id={index}
                                          onClick={(e) => {
                                              changeDiary(e)
                                              setPage(info)
                                              clickSlideHandler(e.target.id)
                                              console.log(e.target.id, 'eee')
                                          }}>
                                          <div className="color-box" style={{backgroundColor:colorPalette[info.emotion_state],color:'white'}}>{info.emotion_state}</div>
                                          <font className="bookContent">{info.content}</font>
                                      </div>
                                  </div>
                              </>
                          ))
                        : ''}
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
