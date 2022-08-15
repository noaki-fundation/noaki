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

        const userAgent = navigator.userAgent || navigator.vendor || window?.opera;

        if (userAgent) {
            if(!(/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0,4)))) {
                if (!inputRef?.current) {
                    return;
                }
                // Auto refocus on laptop
                inputRef.current.onblur = () => {
                    inputRef.current?.focus();
                }
            }
        }

    }, []);

    return (
        <>
            <div className={styles.container}>
                <h2>{i18n.t('main.enterLinkOfPlaylist')}</h2>
                <div className={styles.inputPlaylist}>
                    <input ref={inputRef} type="text" name="playlist" id="playlist" autoFocus={true} />
                    <div>
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
