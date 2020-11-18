import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.css'
import '../../../css/detailViewModal.css'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactWordcloud from 'react-wordcloud'
const ModalForDetailView = ({ diaryModal, setDiaryViewModal, diary, clickDay }) => {
    // const page = diary[clickDiary === -1 ? 0 : clickDiary]
    // const title =diary[clickDiary === -1 ? 0 : clickDiary].title
    var page = []
    const findDiary = (diary, date) => {
        {
            diary.map((info, index) => (info.date === date ? (page = info) : <></>))
        }
    }
    console.log(page, 'ppp')
    findDiary(diary, clickDay)
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
    const colors = ['#eee7df', '#dbcbbe', '#b0988e', '#abdeed7', '#4d8581']
    return (
        <>
            <Modal id="diaryModal" show={diaryModal} onHide={() => setDiaryViewModal(false)} size="lg" animation={true} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {/* <div className="viewTitle">{page.title}</div> */}
                        <div className="viewDate">작성일: {page.date}</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="diaryArea">
                        <font className="infoTxt">속마음</font>
                        <br />
                        <font className="contentTxt">{page.content}</font>
                    </div>
                    <hr />
                    <div className="mindArea">
                        <font className="infoTxt">속마음 분석</font>
                        <br />
                        <font className="infoTxt">워드클라우드</font>
                        <br />

                        <ReactWordcloud words={words} color={colors} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="primary" className="moreBtn" onClick={() => MainBtnEventHandler(5)}>
                        작품 더보기
                    </Button> */}
                    <FontAwesomeIcon icon={faHeartbeat} className="mindHeart" color={page.color} />
                    <Button variant="secondary" className="closeBtn" onClick={() => setDiaryViewModal(false)}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalForDetailView
