import Greeting from "../components/Greeting.js";
import Who from "../components/Who.js";

import About from "../components/About.js";
import Contact from "../components/Contact.js";
import AffirmationSign from "../components/AffirmationSign.js";

import styles from "../styles/storyPage.module.css"

import {motion} from "framer-motion"
import GetToKnow from "../components/GetToKnow.js";
import BackStory from "../components/BackStory.js";
const Story = ({variants}) =>{
    return (
        <motion.div role="main" className={styles.wrapper} initial="initialFadeIn" animate="animatedFadeIn" exit="initialFadeIn" key="story" variants={variants}>
            <About />
            <GetToKnow />
            <BackStory />
            <Contact />
        </motion.div>
    )
}

export default Story;