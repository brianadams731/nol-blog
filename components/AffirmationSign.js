import styles from "../styles/affirmationSign.module.css";

const AffirmationSign = () =>{
    return(
        <div className={styles.wrapper}>
            <h3>Get the FREE affirmation cards</h3>
            <h5>10 Affirmations for a positive mind &amp; 10 affirmations for self confidence</h5>
            <div className={styles.inputBox}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <button>GET IT</button>
            </div>
        </div>
    )
}

export default AffirmationSign;