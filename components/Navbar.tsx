import Link from 'next/link';
import useI18n from '../hooks/use-i18n';
import { I18nWrapper } from '../lib/i18n';


import styles from '../styles/navbar.module.scss';

export default function Navbar(): JSX.Element {
    const i18n = useI18n() as I18nWrapper;
     
    return (
        <nav className={styles.nav}>
            <div>
                <Link
                    href={{
                        pathname: '/[lng]',
                        query: { lng: i18n.activeLocale }
                    }}
                    as={`/` + i18n.activeLocale}
                ><p className={styles.branding}>Naoki</p></Link>
            </div>
            <div className={styles.list}>
                <Link
                    href={{
                        pathname: '/[lng]/platforms',
                        query: { lng: i18n.activeLocale }
                    }}
                    as={`/${i18n.activeLocale}/platforms`}
                >{i18n.t('navbar.platforms')}</Link>
                <Link
                    href={{
                        pathname: '/[lng]/features',
                        query: { lng: i18n.activeLocale }
                    }}
                    as={`/${i18n.activeLocale}/features`}
                >{i18n.t('navbar.features')}</Link>
                <Link
                    href={{
                        pathname: '/[lng]/pricing',
                        query: { lng: i18n.activeLocale }
                    }}
                    as={`/${i18n.activeLocale}/pricing`}
                >{i18n.t('navbar.pricing')}</Link>
            </div>
            <div className={styles.login}>
                <button className={styles.button}>{i18n.t('global.signIn')}</button>
            </div>
        </nav>
    )
}