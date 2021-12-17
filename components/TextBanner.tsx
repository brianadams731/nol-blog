import styles from "../styles/textBanner.module.css";

interface Props{
    text:string;
    attribute:string;
}

const TextBanner = ({text, attribute}:Props):JSX.Element =>{
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