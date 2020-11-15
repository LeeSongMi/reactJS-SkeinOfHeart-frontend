import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.css'
import '../../../css/detailViewModal.css'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ModalForDetailView = ({ diary, diaryModal, setDiaryViewModal, clickDiary }) => {
    const page = diary[clickDiary === -1 ? 0 : clickDiary]
    // const title =diary[clickDiary === -1 ? 0 : clickDiary].title

    return (
        <>
            <Modal id="diaryModal" show={diaryModal} onHide={() => setDiaryViewModal(false)} size="lg" animation={true} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className="viewTitle">{page.title}</div>
                        <div className="viewDate">작성일: {page.date}</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="diaryArea">
                        <font className="infoTxt">속마음</font><br />
                        <font className="contentTxt">{page.content}</font>
                    </div>
                    <hr />
                    <div className="mindArea">
                        <font className="infoTxt">속마음 분석</font><br />
                        <font className="infoTxt">워드클라우드</font><br />

                        <img className="word_cloud" src={page.wordCloud} />
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
