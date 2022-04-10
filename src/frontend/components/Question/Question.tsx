import React, { useState } from 'react'
import styles from './Question.module.css';
import Answer from "./Answer";

export interface QuestionProps {
    text: string,
    answers: string[],
    rightAnswer: number
}

export default function Question(props: QuestionProps) {

    const [clickable, setClickable] = useState<boolean>(true);
    const [answerClicked, setAnswerClicked] = useState<number | null>(null);

    const onAnswerClick = (text: string, id: number) => {        
        setClickable(false);
        setAnswerClicked(id);
    }

    const shouldShowRight = (id: number): boolean => {
        if (answerClicked == null) return false;
        if (answerClicked == props.rightAnswer && id == answerClicked) return true;

        if (id === props.rightAnswer && id != answerClicked) return true;
        return false;
    }

    const shouldShowWrong = (id: number): boolean => {
        if (answerClicked == null) return false;
        if (answerClicked == id && id != props.rightAnswer) return true;
        return false;
    }

    return (
        <div className={styles.container}>
            <div className={styles.question}>{props.text}</div>
            <div className={styles.answersContainer}>
                {props.answers.map((a, index) => {
                    return <Answer key={index} text={a} id={index} onClick={onAnswerClick} isWrong={shouldShowWrong(index)} isCorrect={shouldShowRight(index)} clickable={clickable} />
                })}
            </div>
        </div>
    )
}
