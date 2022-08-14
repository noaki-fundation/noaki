import styles from '../styles/square.module.scss';

interface SquareInterface {
    width: number;
    color: string;
    left: number|string;
    top: number|string;
    degree: string;
}

export default function Square({ width, color, left, top, degree }: SquareInterface): JSX.Element {
    return (
        <div style={{
            width,
            height: width,
            backgroundColor: color,
            left,
            top,
            boxShadow: '0px 4px 87px 78px ' + color,
            borderRadius: '20px',
            transform: `rotate(${degree})`
        }} className={styles.square}></div>
    )
}