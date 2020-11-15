import React from 'react'
import '../../../css/main.css'
import '../../../css/commonStyle.css'
import { Button } from 'react-bootstrap'

const MainPresenter = ({ test }) => {
    return (
        <>
            <div id="main" className="main-div" style={{ height: window.innerHeight }}>
                <div className="content">
                    <div className="title">마음 실타래</div>
                    <button type="button" className="btn btn-warning" onClick={test}>
                        글쓰러가기
                    </button>
                </div>
            </div>
        </>
    )
}

export default MainPresenter
