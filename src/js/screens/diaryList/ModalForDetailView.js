import React, { useEffect } from 'react'
import {  Button } from 'react-bootstrap'
import  Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.css'
const ModalForDetailView = ({ diary, diaryModal, setDiaryViewModal, clickDiary }) => {
    const content =diary[clickDiary === -1 ? 0 : clickDiary].content
    const title =diary[clickDiary === -1 ? 0 : clickDiary].title
    
  
    return (
        <>
            <Modal id="diaryModal" show={diaryModal} onHide={() => setDiaryViewModal(false)} size="lg" animation={true} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton style={{ margin: '2rem' }}>
                    <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    dangerouslySetInnerHTML={{
                        __html: content
                    }}>
                        
                    </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="primary" className="moreBtn" onClick={() => MainBtnEventHandler(5)}>
                        작품 더보기
                    </Button> */}
                    <Button variant="secondary" className="closeBtn" onClick={() => setDiaryViewModal(false)}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalForDetailView
