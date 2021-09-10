import ImageOverlap from "../components/ImageOverlap";
import styles from "../styles/welcome.module.css";

const Welcome = () =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.contentBox}>
                <div className={styles.imagePlaceHolder}>
                    <ImageOverlap
                        imgTwo="https://source.unsplash.com/random/350x400/?plants"
                        imgOne="https://source.unsplash.com/random/350x400/?people" 
                    />
                </div>
                <div className={styles.altBox}>
                    <h1>Welcome!</h1>
                    <div className={styles.subBox}>
                        <h3>So happy to have you here!</h3>
                        <p>Are you ready to become your highest self</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Welcome;