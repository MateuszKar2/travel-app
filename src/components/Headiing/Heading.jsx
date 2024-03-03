
import styles from "./Heading.module.css";

export const Heading = () => {
    return(
        <>
        <div className={styles.heading}>
            <button className={styles.btn} type="button"><p className={styles.btn__text}>Welcome</p></button>
            <button className={styles.btn} type="button"><p className={styles.btn__text}>Countries</p></button>
            <button className={styles.btn} type="button"><p className={styles.btn__text}>Prices</p></button>
            <button className={styles.btn} type="button"><p className={styles.btn__text}>Sign up</p></button>
        </div>
        </>
    )
}