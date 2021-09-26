import Greeting from "../components/Greeting.js";
import About from "../components/About.js";
import AffirmationSign from "../components/AffirmationSign.js";
import Who from "../components/Who.js";

import styles from "../styles/storyPage.module.css"

import {motion} from "framer-motion"
const Story = ({variants}) =>{
    return (
        <motion.div className={styles.wrapper} initial="initialFadeIn" animate="animatedFadeIn" exit="initialFadeIn" key="story" variants={variants}>
            <Greeting />
            <About />
            <Who />
            <AffirmationSign />
        </motion.div>
    )
}

export default Story;