import styles from "../styles/getToKnow.module.css";
import ImageOverlap from "./ImageOverlap";
import useElementInViewport from "../hooks/useElementInViewport";
import {motion} from "framer-motion";

const GetToKnow = ():JSX.Element =>{
    const [element,inViewport] = useElementInViewport<HTMLDivElement>(true,.6);
    
    const variants = {
        initial:{
            y:0,
            opacity:0,
        },
        fadeIn:{
            y:0,
            opacity:1,
            transition:{
                type:"tween",
                duration:.8,
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerWrapper}>
                <h3>Get To Know Me</h3>
            </div>
            <motion.div variants={variants} initial={"initial"} animate={inViewport?"fadeIn":""} className={styles.contentWrapper} ref={element}>
                <div className={styles.textBox}>
                    <ul>
                        <li>
                            I was born and raised in Lusaka, Zambia. My mother is Kenyan, and my father is Ugandan
                        </li>
                        <li>
                            I love anything that involves creativity
                        </li>
                        <li>
                            My love language is FOOD
                        </li>
                        <li>
                            My favorite animal is an elephant
                        </li>
                        <li>
                            I am a tomboy 
                        </li>
                    </ul>

                </div>
                <ImageOverlap
                    imgTwo="/media/Self love.jpg"
                    imgOne="/media/About 1.jpg"
                    height={400}
                    width={266}
                />
            </motion.div>
        </div>
    )
}

export default GetToKnow;