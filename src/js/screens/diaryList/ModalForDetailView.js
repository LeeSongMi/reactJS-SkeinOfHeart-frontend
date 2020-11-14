
import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalForDetailView = ({diaryModal, setDiaryViewModal,clickDiary})=>{
    return(<>
        
        <Modal id="detailView" show={diaryModal} onHide={() => setDiaryViewModal(false)} size="lg"  aria-labelledby="contained-modal-title-vcenter" centered>
            <h1>{clickDiary} Modalllll</h1>
        </Modal>
        
        </>
    )
}
export default ModalForDetailView