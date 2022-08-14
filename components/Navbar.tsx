import { useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import useI18n from '../hooks/use-i18n';
import { I18nWrapper } from '../lib/i18n';

import EN from '../locales/en.json';

import styles from '../styles/navbar.module.scss';

export default function Navbar(): JSX.Element {
    const i18n = useI18n() as I18nWrapper;
    const router = useRouter();

    useEffect(() => {
        i18n.locale('en', EN)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
    return (
        <nav className={styles.nav}>
            <div>
                <Link
                    href={{
                        pathname: '/[lng]',
                        query: { lng: router.query.lng }
                    }}
                    as={`/` + router.query.lng}
                    className={styles.branding}
                >Naoki</Link>
            </div>
            <div className={styles.list}>
                <Link href={{
                    pathname: '/[lng]/platforms',
                    query: { lng: router.query.lng }
                }}>{i18n.t('navbar.platforms')}</Link>
                <Link href={{
                    pathname: '/[lng]/features',
                    query: { lng: router.query.lng }
                }}>{i18n.t('navbar.features')}</Link>
                <Link href={{
                    pathname: '/[lng]/pricing',
                    query: { lng: router.query.lng }
                }}>{i18n.t('navbar.pricing')}</Link>
            </div>
            <div>
                <button>{i18n.t('global.signIn')}</button>
            </div>
        </nav>
    )
}