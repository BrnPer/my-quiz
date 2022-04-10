import React from 'react'
import { Modal, ModalBody } from 'reactstrap'

export interface PopupWrongProps {
    isOpen: boolean,
    onNextQuestionClick: () => void
}

export default function PopupWrong(props: PopupWrongProps) {
    return (
        <Modal isOpen={props.isOpen} centered={true}>
            <ModalBody style={{ textAlign: "center", padding: "2rem" }}>
                <h1>Infelizmente, errou 😣❌</h1>
                <h2>Para a próxima vai correr melhor!</h2>

                <button onClick={props.onNextQuestionClick}>
                    Próxima pergunta
                </button>
            </ModalBody>
        </Modal>
    )
}
