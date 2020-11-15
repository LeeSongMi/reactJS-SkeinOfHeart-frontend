import React from 'react'
import '../../../css/main.css'
import '../../../css/commonStyle.css'
import { Button } from 'react-bootstrap'

const MainPresenter = ({ test }) => {

    const scrollSection2 = () => {
        window.scrollTo({top:window.innerHeight, left:0, behavior:'smooth'})
    }

    return (
        <>
            <div id="main" className="main-div" style={{ height: window.innerHeight }}>
                <div className="header">
                    <div className="title">마음 실타래</div>
                </div>
                <div className="content">
                    <div className="description">
                        오늘은 어떤 하루를 보내셨나요? <br/>
                        혹시 하루 중 미처 살펴보지 못 한 감정이 꼬여진 채 남아있다면,<br/>
                        마음 실타래에서 당신의 마음을 풀어보세요. <br/><br/>
                        <b>마음 실타래는 당신의 모든 감정을 응원합니다.</b>
                    </div>
                    <div className="logo-section">
                            <img className="main-logo" src="/image/illustration/window.jpg" alt="위로 일러스트 이미지"></img>
                        </div>

                    {/* <div className="middle-section">
                        <div className="left-section">
                            <img className="main-logo" src="/image/illustration/window.jpg" alt="위로 일러스트 이미지"></img>
                        </div>
                        <div className="right-section">
                            <img alt="원고지 이미지"></img>
                        </div>
                    </div> */}
                    <button id="button" className="btn btn-warning" onClick={scrollSection2}>
                        글쓰러 가기
                    </button>
                </div>
            </div>
        </>
    )
}

export default MainPresenter
