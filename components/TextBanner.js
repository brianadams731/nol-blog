import styles from "../styles/textBanner.module.css";

const TextBanner = ({text, attribute}) =>{
    return(
        <div className={styles.wrap}>
            <div>
                <h1>{text}</h1>
                <h1>{attribute}</h1>
            </div>
        </div>
    )
}

export default TextBanner;