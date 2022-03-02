import styles from './Game.module.css';
export interface AnswerProps {
    text: string,
    isCorrect?: boolean
}

export default function Answer(props: AnswerProps) {
    return (
        <div className={`${styles.answer} ${props.isCorrect == true ? styles.answerRight : ''}`}>{props.text}</div>
    )
}
