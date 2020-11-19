import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.css'
import '../../../css/detailViewModal.css'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactWordcloud from 'react-wordcloud'
import axios from 'axios'
import qs from 'qs'

const ModalForDetailView = ({ bookList, diaryModal, setDiaryModal, clickDiary, colorPalette, page }) => {

    // -- states & variables
    const [words, setWords] = useState([])
    const colors = ['#eee7df', '#dbcbbe', '#b0988e', '#abdeed7', '#4d8581']
    const options = {
        rotations: 2,
        rotationAngles: [-90, 0],
        fontSizes: [40, 32]
      };

    // -- useEffects & funtions
    useEffect(() => {
        console.log('hey')
        if (page == null) return
        const content = page.content
        console.log(content)
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/ai/wordcloud/',
            data: qs.stringify({
                user_no: 1,
                content: content,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        }).then((response) => {
            const data = response.data
            setWords(data)
        })
    }, [diaryModal])

    return (
        <>
            <Modal id="diaryModal" show={diaryModal} onHide={() => setDiaryModal(false)} size="lg" animation={true} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {/* <div className="viewTitle">{page.title}</div> */}
                        {/* <div className="viewDate">작성일: {page.datetime}</div> */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="diaryArea">
                        <font className="infoTxt">속마음</font>
                        <br />
                        <font className="contentTxt">{page !== null ? page.content : '조회된 결과가 없어요'}</font>
                    </div>
                    <hr />
                    <div className="mindArea">
                        <font className="infoTxt">속마음 분석: 워드 클라우드</font>
                        <br />
                        <div style={{ height: '300px', width: '100%' }}>
                            <ReactWordcloud words={words} color={colors} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="primary" className="moreBtn" onClick={() => MainBtnEventHandler(5)}>
                        작품 더보기
                    </Button> */}
                    {/* <FontAwesomeIcon icon={faHeartbeat} className="mindHeart" color={colorPalette[page.emotion_state]} /> */}
                    <Button variant="secondary" className="closeBtn" onClick={() => setDiaryModal(false)}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalForDetailView
