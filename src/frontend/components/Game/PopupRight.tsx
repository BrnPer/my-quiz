import React from 'react'
import { Modal, ModalBody } from 'reactstrap'


export interface PopupRightProps {
    isOpen: boolean,
    onNextQuestionClick: () => void
}

export default function PopupRight(props: PopupRightProps) {
    return (
        <Modal isOpen={props.isOpen} centered={true}>
            <ModalBody style={{ textAlign: "center", padding: "2rem" }}>
                <h1>Parabéns 🥳🥳!</h1>
                <h2>Acertou em cheio!</h2>

                <button onClick={props.onNextQuestionClick}>
                    Próxima pergunta
                </button>
            </ModalBody>
        </Modal>
    )
}
