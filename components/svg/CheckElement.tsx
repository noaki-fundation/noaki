import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '../../styles/features.module.scss';

const CheckElement: NextPage = () => {
    return (
        <span className={styles.svgElement}>
            <Image
                src={'/check.svg'}
                alt={'check svg'}
                width="34"
                height="34"
            />
        </span>
    );
};

export default CheckElement;