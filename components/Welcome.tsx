import ImageOverlap from "../components/ImageOverlap";
import WelcomeSVG from "./svg/WelcomeSVG";
import styles from "../styles/welcome.module.css";

const Welcome = ():JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.contentBox}>
                <div className={styles.imagePlaceHolder}>
                    <ImageOverlap
                        imgTwo="/media/Self love.jpg"
                        imgOne="/media/Main 1.jpg" 
                    />
                </div>
                <div className={styles.altBox}>
                    <WelcomeSVG />
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