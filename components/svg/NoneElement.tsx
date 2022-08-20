import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '../../styles/features.module.scss';

const NoneElement: NextPage = () => {
    return (
        <span className={styles.svgElement}>
            <Image
                src={'/none.svg'}
                alt={'none svg'}
                width="34"
                height="34"
            />
        </span>
    );
};

export default NoneElement;
