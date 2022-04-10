import Layout from "@components/Layout/Layout";
import { QuestionService } from "@services/QuestionService";
import { AddQuestion } from "models/Questions/AddQuestion";
import { useState } from "react";
import styles from "./AddQuestionScreen.module.css";

export default function AddQuestionScreen() {


    const [question, setQuestion] = useState<AddQuestion>(new AddQuestion());

    const questionService = new QuestionService();
    const addQuestion = async () => {

        var dto: AddQuestion = {
            ...question
        };

        await questionService.Add(dto);
    }
    return (
        <Layout>
            <div className={styles.container}>

                <h1>Inserir Perguntas</h1>

                <div className={styles.inputContainer}>
                    <label>Pergunta:</label>
                    <input value={question.question} onChange={(t) => setQuestion({ ...question, question: t.target.value })} className={styles.input} />
                </div>

                <div className={styles.inputContainer}>
                    <label>Respostas</label>
                    <div className={styles.answersContainer}>

                        <div className={styles.answerContainer}>
                            <label className={styles.answerContainerFirstSection}>Resposta Correta:</label>
                            <label className={styles.answerContainerSecondSection}>Texto:</label>
                        </div>
                        <div className={styles.answerContainer}>
                            <input className={`${styles.answerContainerFirstSection} ${styles.inputCheckbox}`} type={"checkbox"} />
                            <input className={`${styles.answerContainerSecondSection} ${styles.input}`} />
                        </div>
                        <div className={styles.answerContainer}>
                            <input className={`${styles.answerContainerFirstSection} ${styles.inputCheckbox}`} type={"checkbox"} />
                            <input className={`${styles.answerContainerSecondSection} ${styles.input}`} />
                        </div>
                        <div className={styles.answerContainer}>
                            <input className={`${styles.answerContainerFirstSection} ${styles.inputCheckbox}`} type={"checkbox"} />
                            <input className={`${styles.answerContainerSecondSection} ${styles.input}`} />
                        </div>
                        <div className={styles.answerContainer}>
                            <input className={`${styles.answerContainerFirstSection} ${styles.inputCheckbox}`} type={"checkbox"} />
                            <input className={`${styles.answerContainerSecondSection} ${styles.input}`} />
                        </div>

                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.conditionalSection}>
                        <label>Tem ajudas:</label>
                        <input type={"checkbox"} />
                    </div>
                    <textarea cols={100} rows={4} className={styles.input} />
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.conditionalSection}>
                        <label>Tem explicação:</label>
                        <input type={"checkbox"} />
                    </div>
                    <textarea cols={100} rows={4} className={styles.input} />
                </div>

                <button onClick={addQuestion}>Inserir</button>
            </div>
        </Layout>
    )
}
