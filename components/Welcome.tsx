import ImageOverlap from "../components/ImageOverlap";
import WelcomeSVG from "./svg/WelcomeSVG";
import styles from "../styles/welcome.module.css";

import { motion } from "framer-motion";
const Welcome = ():JSX.Element =>{
    const variants = {
        initial:{
            y:-5,
            opacity:0,
        },
        fadeRight:{
            y:0,
            opacity:1,
            transition:{
                type:"tween",
                duration:.8,
                delay:3.7
            }
        }
    }
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

                    <motion.div variants={variants} initial={"initial"} animate={"fadeRight"} className={styles.subBox}>
                        <h3>So happy to have you here!</h3>
                        <p>Are you ready to become your highest self</p>
                    </motion.div>
                </div>
            </div>
        
        </div>
    )
}

export default Welcome;