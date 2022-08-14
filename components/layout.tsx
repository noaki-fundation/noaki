import Square from './Square';
import Navbar from './Navbar';

import styles from '../styles/layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <>
            <Square
                width={150}
                color="#A90AD0"
                left={0}
                top={0}
                degree="-15deg"
            />
            <Square
                width={150}
                color="#0AD089"
                left={"85vw"}
                top={"85vh"}
                degree="-15deg"
            />
            <div className={styles.blurPage} />
            <Navbar />
            {children}
        </>
    )
}