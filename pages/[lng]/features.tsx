import type { NextPage } from 'next';
import useI18n from '../../hooks/use-i18n';
import { I18nWrapper, languages } from '../../lib/i18n';
import CheckElement from '../../components/svg/CheckElement';
import NoneElement from '../../components/svg/NoneElement';

import styles from '../../styles/features.module.scss';

const Features: NextPage = () => {
    const i18n = useI18n() as I18nWrapper;
    
    return (
        <>
            <div className={styles.masterContainer}>
                <div className={styles.container}>
                    <div className={styles.titles}>
                        <div>
                            <h1>{i18n.t('features.title')}</h1>
                        </div>
                    </div>

                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th><div>{i18n.t('features.table.headers.featuresList')}</div></th>
                                    <th><div>{i18n.t('features.table.headers.notConnected')}</div></th>
                                    <th><div>{i18n.t('features.table.headers.free')}</div></th>
                                    <th><div>{i18n.t('features.table.headers.premium')}</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.tableTitle}>
                                    <th></th>
                                    <th><div>{i18n.t('features.table.playlistTitle')}</div></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td><div>{i18n.t('features.table.mergePlaylist')}</div></td>
                                    <td><div><CheckElement /></div></td>
                                    <td><div><CheckElement /></div></td>
                                    <td><div><CheckElement /></div></td>
                                </tr>
                                <tr>
                                    <td><div>{i18n.t('features.table.numberOfPlaylist')}</div></td>
                                    <td><div>{i18n.t('features.table.numberOfPlaylistNotConnected')}</div></td>
                                    <td><div>{i18n.t('features.table.numberOfPlaylistFree')}</div></td>
                                    <td><div>{i18n.t('features.table.numberOfPlaylistPremium')}</div></td>
                                </tr>
                                <tr>
                                    <td><div>{i18n.t('features.table.playlistSync')}</div></td>
                                    <td><div>{i18n.t('features.table.playlistSyncNo')}</div></td>
                                    <td><div>{i18n.t('features.table.playlistSyncMannually')}</div></td>
                                    <td><div>{i18n.t('features.table.playlistSyncAutomatically')}</div></td>
                                </tr>
                                <tr>
                                    <td><div>{i18n.t('features.table.mergePlaylistOnOneTime')}</div></td>
                                    <td><div><CheckElement /></div></td>
                                    <td><div><CheckElement /></div></td>
                                    <td><div><CheckElement /></div></td>
                                </tr>
                                <tr>
                                    <td><div>{i18n.t('features.table.mergePlaylist')}</div></td>
                                    <td><div><NoneElement /></div></td>
                                    <td><div><NoneElement /></div></td>
                                    <td><div><CheckElement /></div></td>
                                </tr>
                                <tr>
                                    <td><div>{i18n.t('features.table.sharePlaylist')}</div></td>
                                    <td><div><NoneElement /></div></td>
                                    <td><div><CheckElement /></div></td>
                                    <td><div><CheckElement /></div></td>
                                </tr>
                                <tr className={styles.tableTitle}>
                                    <th></th>
                                    <th><div>{i18n.t('features.table.accountTitle')}</div></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td><div>{i18n.t('features.table.savePlatforms')}</div></td>
                                    <td><div><NoneElement /></div></td>
                                    <td><div><CheckElement /></div></td>
                                    <td><div><CheckElement /></div></td>
                                </tr>
                                <tr>
                                    <td><div>{i18n.t('features.table.saveSamePlatforms')}</div></td>
                                    <td><div><NoneElement /></div></td>
                                    <td><div>{i18n.t('features.table.saveSamePlatformsFree')}</div></td>
                                    <td><div>{i18n.t('features.table.saveSamePlatformsPremium')}</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export async function getStaticProps({ params }: { params: { lng: string }}) {
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

export default Features;