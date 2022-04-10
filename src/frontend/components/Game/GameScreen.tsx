import Layout from '@components/Layout/Layout';
import Answer from './answer';
import styles from './Game.module.css';

export default function GameScreen() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.question}>Is this a test?</div>
                <div className={styles.answersContainer}>
                    <Answer text='Yes' isCorrect={true} />
                    <Answer text='No' />
                    <Answer text='Maybe' />
                    <Answer text="Always" />                    
                </div>
            </div>
        </Layout>
    )
}
