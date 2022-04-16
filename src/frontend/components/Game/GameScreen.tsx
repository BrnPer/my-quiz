import Layout from '@components/Layout/Layout';
import Question from '@components/Question/Question';
import { useState } from 'react';
import styles from "./GameScreen.module.css";

export default function GameScreen() {

    const [currentAnswerId, setCurrentAnswerId] = useState<number>(1);
    const [answerRight, setAnswerRight] = useState<boolean | null>(null);

    const onAnswered = (wasRight: boolean) => {
        console.log("Acertou:", wasRight);

        setTimeout(() => {
            setAnswerRight(wasRight);
        }, 250);
    }

    const nextAnswer = () => {
        setAnswerRight(null);
        setCurrentAnswerId(currentAnswerId + 1);
    }

    return (
        <Layout>
            <div className={styles.gameScreenContainer}>
                <div className={styles.totalQuestions}>
                    Question<span className={styles.currentQuestion}>{currentAnswerId}</span> / 10
                </div>
                <div className={styles.gameContainer}>
                    <Question reset={answerRight === null} answered={onAnswered} text={`Qual é o primeiro nome do José Luís Cancela?`} answers={["José", "Luís", "Cancela", "Bruno"]} rightAnswer={0} />
                </div>
                <div className={styles.gameFooter}>

                    {answerRight == true && (
                        <>
                            <span className={styles.gameFooterMainText}>Parabéns 🥳🥳!</span>
                            <span className={styles.gameFooterSecondText}> Acertou em cheio!</span>
                        </>
                    )}

                    {answerRight == false && (
                        <>
                            <span className={styles.gameFooterMainText}>Infelizmente, errou 😣❌</span>
                            <span className={styles.gameFooterSecondText}>Para a próxima vai correr melhor!</span>
                        </>
                    )}

                    {answerRight !== null && (
                        <button className={styles.nextQuestionButton} onClick={nextAnswer}>
                            Próxima pergunta
                        </button>
                    )}
                </div>
            </div>
        </Layout>
    )
}
