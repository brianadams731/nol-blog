import styles from "../styles/textBanner.module.css";

const TextBanner = ({text}) =>{
    return(
        <div className={styles.wrap}>
            <h1>{text}</h1>
        </div>
    )
}

export default TextBanner;