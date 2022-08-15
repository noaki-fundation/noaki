import type { NextPage } from 'next';
import useI18n from '../../hooks/use-i18n';
import { I18nWrapper, languages } from '../../lib/i18n';

import styles from '../../styles/terms.module.scss';

const Terms: NextPage = () => {
    const i18n = useI18n() as I18nWrapper;

    return (
        <>
            <div className={styles.container}>
                <h1>{i18n.t('termsTitle')}</h1>
                {i18n.t('terms')}
            </div>
        </>
    );
}

export async function getStaticProps({ params }: { params: { lng: string } }) {
    const { default: lngDict = {} } = await import(
        `../../locales/${params.lng}.json`
    )

    return {
        props: { lng: params.lng, lngDict }
    }
}

export async function getStaticPaths() {
    return {
        paths: languages.map((l) => ({ params: { lng: l }})),
        fallback: false
    }
}

export default Terms;