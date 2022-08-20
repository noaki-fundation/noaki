import { useRef, useEffect } from 'react';
import type { NextPage } from 'next';
import useI18n from '../../hooks/use-i18n';
import { I18nWrapper, languages } from '../../lib/i18n';

import styles from '../../styles/home.module.scss';

const Home: NextPage = () => {
    const i18n = useI18n() as I18nWrapper;
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <>
            <div className={styles.container}>
                <h2>{i18n.t('main.enterLinkOfPlaylist')}</h2>
                <div className={styles.inputPlaylist}>
                    <input ref={inputRef} type="text" name="playlist" id="playlist" autoFocus={true} />
                    <div className={styles.next}>
                        <p>{i18n.t('main.next')}</p>
                        <svg width="43" height="24" viewBox="0 0 43 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.0618 13.0607C42.6475 12.4749 42.6475 11.5251 42.0618 10.9393L32.5158 1.3934C31.93 0.807611 30.9803 0.807611 30.3945 1.3934C29.8087 1.97919 29.8087 2.92893 30.3945 3.51472L38.8798 12L30.3945 20.4853C29.8087 21.0711 29.8087 22.0208 30.3945 22.6066C30.9803 23.1924 31.93 23.1924 32.5158 22.6066L42.0618 13.0607ZM0.00109863 13.5H41.0011V10.5H0.00109863V13.5Z" fill="white"/>
                        </svg>
                    </div>
                </div>
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

export default Home;
