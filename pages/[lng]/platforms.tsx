import useSWR, { SWRResponse } from 'swr';
import type { NextPage } from 'next';
import Image from 'next/image';
import use18n from '../../hooks/use-i18n';
import { I18nWrapper, languages } from '../../lib/i18n';

import styles from '../../styles/platforms.module.scss';

interface PlatformResponse {
    id: string;
    name: string;
    logo: string;
    label: string;
    bgColor: string;
}

const fetcher: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<PlatformResponse[]> = (...args) => fetch(...args).then((res) => res.json());

const SkeletonSquare: NextPage = () => {
    return (
        <>
            <div className={styles.skeleton}></div>
        </>
    );
};

const Platforms: NextPage = () => {
    const i18n = use18n() as I18nWrapper;
    const { data, error }: SWRResponse<PlatformResponse[], any> = useSWR('/api/platforms', fetcher);
    
    return (
        <>
            <div className={styles.masterContainer}>
                <div className={styles.container}>
                    <div className={styles.titles}>
                        <div>
                            <h1>{i18n.t('platforms.title')}</h1>
                            <h4>{i18n.t('platforms.description')}</h4>
                        </div>
                    </div>

                    {error && (
                        <div className={styles.error}>Sorry, an error occured</div>
                    )}

                    {!data && !error && (
                        <div className={styles.squares}>
                            <SkeletonSquare />
                            <SkeletonSquare />
                            <SkeletonSquare />
                            <SkeletonSquare />
                            <SkeletonSquare />
                            <SkeletonSquare />
                            <SkeletonSquare />
                        </div>
                    )}

                    {data && (
                        <div className={styles.squares}>
                            {
                               data.map((platform, index) => (
                                    <div
                                        key={index}
                                        className={styles.square}
                                        style={{
                                            backgroundColor: platform.bgColor,
                                        }}
                                    >
                                        <div style={{ width: 120, height: 120 }}>
                                            <Image
                                                src={platform.logo}
                                                alt={platform.label}
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                               ))
                            }
                        </div>
                    )}
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

export default Platforms;
