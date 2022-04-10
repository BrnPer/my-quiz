import Layout from '@components/Layout/Layout';
import Question from '@components/Question/Question';



export default function GameScreen() {
    return (
        <Layout>
            <Question text="Is this a text" answers={["Ola", "oLa", " Test", "123"]} rightAnswer={1} />
        </Layout>
    )
}
