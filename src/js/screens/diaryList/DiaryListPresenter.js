import React from 'react'
import '../../../css/diaryList.css'
import SliderSlick from 'react-slick'
import ReactDOM from 'react-dom'
import { getElementError } from '@testing-library/react'

const DiaryListPresenter = ({diary, changeDiary}) => {

    // Slick Setting
    const diaryListSlickSetting = {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
 

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
            </div>
        </>
    )
}

export default DiaryListPresenter
