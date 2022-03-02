
import Layout from '@components/Layout/Layout';
import styles from './Index.module.css';

export default function Index() {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>Quiz Game</h1>
                <button>Jogo Rápido</button>
                <button>Adicionar Perguntas</button>
            </div>
        </Layout>
    )
}
