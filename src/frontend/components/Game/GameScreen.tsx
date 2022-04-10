import Layout from '@components/Layout/Layout';
import Question from '@components/Question/Question';
import { useState } from 'react';
import PopupRight from './PopupRight';
import PopupWrong from './PopupWrong';



export default function GameScreen() {

    const [currentAnswerId, setCurrentAnswerId] = useState<number>(0);
    const [answerRight, setAnswerRight] = useState<boolean | null>(null);

    const onAnswered = (wasRight: boolean) => {
        console.log("Acertou:", wasRight);

        setTimeout(() => {
            setAnswerRight(wasRight);
        }, 1500);
    }

    const nextAnswer = () => {
        setAnswerRight(null);
        setCurrentAnswerId(currentAnswerId + 1);
    }

    return (
        <Layout>
            <PopupRight isOpen={answerRight === true} onNextQuestionClick={nextAnswer} />
            <PopupWrong isOpen={answerRight === false} onNextQuestionClick={nextAnswer} />
            <Question reset={answerRight === null} answered={onAnswered} text={`Is this a text ${currentAnswerId}`} answers={["Ola", "oLa", " Test", "123"]} rightAnswer={1} />
        </Layout>
    )
}
