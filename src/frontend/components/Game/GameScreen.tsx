import Layout from '@components/Layout/Layout';
import Question from '@components/Question/Question';
import { useState } from 'react';
import PopupRight from './PopupRight';
import PopupWrong from './PopupWrong';



export default function GameScreen() {

    const [answerRight, setAnswerRight] = useState<boolean | null>(null);

    const onAnswered = (wasRight: boolean) => {
        console.log("Acertou:", wasRight);
        setAnswerRight(wasRight);
    }

    const nextAnswer = () => {
        setAnswerRight(null);
    }
    
    return (
        <Layout>
            <PopupRight isOpen={answerRight === true} onNextQuestionClick={nextAnswer} />
            <PopupWrong isOpen={answerRight === false} onNextQuestionClick={nextAnswer} />
            <Question answered={onAnswered} text="Is this a text" answers={["Ola", "oLa", " Test", "123"]} rightAnswer={1} />
        </Layout>
    )
}
