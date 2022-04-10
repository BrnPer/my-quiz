import styles from './Question.module.css';
export interface AnswerProps {
    text: string,
    id: number,
    isCorrect?: boolean,
    isWrong?: boolean,
    clickable: boolean,
    onClick: (text: string, id: number) => void,
}

export default function Answer(props: AnswerProps) {

    const onAnswerClick = () => {
        if (props.clickable != true) return;
        props.onClick(props.text, props.id);
    }

    return (
        <div onClick={onAnswerClick} className={`${styles.answer} ${props.isCorrect === true ? styles.answerRight : ''} ${props.isWrong === true ? styles.answerWrong : ''}`}>{props.text}</div>
    )
}