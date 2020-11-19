import React, { useEffect, useState } from 'react'
import SliderSlick from 'react-slick'
import ReactDOM from 'react-dom'
import { getElementError } from '@testing-library/react'
import ReactWordcloud from 'react-wordcloud'
import axios from 'axios'
import ModalForDetailView from './ModalForDetailView'
import qs from 'qs'
import { render } from '@testing-library/react'

const DiaryListPresenter = ({ isSelected, setSelect, clickDiary, changeDiary, diaryListSlickSetting, cloud, setCloud, setDiaryViewModal, modalHandler, colorPalette }) => {
    // -- useState & variable
    const [bookList, setBookList] = useState(null)
    const [page, setPage] = useState(null)
    const [diaryModal, setDiaryModal] = useState(false)

    const text = '안녕 반가워'

    // --useEffect
    useEffect(() => {
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
        })
    }, [])
    // if (bookList === null) {
    //     setBookList(diary)
    // }
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
                                              setDiaryModal(true)
                                              setPage(info)
                                          }}>
                                          <div className="color-box" style={{ backgroundColor: colorPalette[info.emotion_state], color: 'white', marginBottom: '10px' }}>
                                              {info.emotion_state}
                                          </div>
                                          <div className="bookContent">{info.content}</div>
                                          <div className="datetime" style={{ backgroundColor: 'lightgray', color: 'white', marginTop: '10px' }}>
                                              {info.datetime}
                                          </div>
                                      </div>
                                  </div>
                              </>
                          ))
                        : ''}
                </SliderSlick>
                <ModalForDetailView diaryModal={diaryModal} page={page} setDiaryModal={setDiaryModal} colorPalette={colorPalette} />
            </div>
        </div>
    )
}

export default DiaryListPresenter
