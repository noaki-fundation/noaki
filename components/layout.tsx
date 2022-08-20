import Link from 'next/link';
import useI18n from '../hooks/use-i18n';
import { I18nWrapper } from '../lib/i18n';
import Square from './Square';
import Navbar from './Navbar';

import styles from '../styles/layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
    const i18n = useI18n() as I18nWrapper;
    
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
                left={"95vw"}
                top={"95vh"}
                degree="-15deg"
            />
            <div className={styles.blurPage} />
            <Navbar />
            {children}
            <div className={styles.informations}>
                <Link 
                    href={{
                        pathname: "/[lng]/terms",
                        query: { lng: i18n.activeLocale }
                    }}
                    as={`/${i18n.activeLocale}/terms`}
                >
                    {i18n.t('global.tos')}
                </Link>
                <Link
                    href={{
                        pathname: "/[lng]/privacy",
                        query: { lng: i18n.activeLocale }
                    }}
                    as={`/${i18n.activeLocale}/privacy`}
                >
                    {i18n.t('global.privacy')}
                </Link>
            </div>
        </>
    )
}