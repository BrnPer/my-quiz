import styles from './Layout.module.css';

export interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            <title>Quiz Game</title>
            {children}
        </div>
    )
}
