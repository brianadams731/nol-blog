//import Greeting from "../components/Greeting";
//import Who from "../components/Who";

import About from "../components/About";
import Contact from "../components/Contact";
//import AffirmationSign from "../components/AffirmationSign";

import styles from "../styles/storyPage.module.css"

import {motion} from "framer-motion"
import GetToKnow from "../components/GetToKnow";
import BackStory from "../components/BackStory";

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