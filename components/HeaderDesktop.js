import Link from "next/link";

import { useRouter } from "next/router";
import {AnimatePresence, motion} from "framer-motion";

import styles from "../styles/header.module.css";

const HeaderDesktop = ({atTop}) =>{

    const variants = {
        init :{
            opacity: 0,
            transition:{
                duration:.4
            },
        },

        animated:{
            opacity:1,
            transition:{
                duration:1
            },
        }
    }

    const labelSwitch = () =>{
        if(atTop){
            return(
                <motion.div variants={variants} initial="init" animate="animated" className={styles.self} key="self">
                    <div><h3>S</h3></div>
                    <div><h3>E</h3></div>
                    <div><h3>L</h3></div>
                    <div><h3>F</h3></div>
                </motion.div>
            )
        }else{
            return(
                <motion.div variants={variants} initial="init" animate="animated" key="not-self">
                    <h3 style={{color:"black", fontWeight:400}}>NO ORDINARY <span style={{color:"var(--light-brown)"}}>SELF</span></h3>
                </motion.div>
            )
        }
    }

    const router = useRouter();
    return (
        <div className={styles.deskWrapper}>
            <nav className={styles.nav}>
                <div className={styles.headText}>
                    <motion.h3 variants={variants} initial="initial" animate={atTop?"animated":"init"} className={styles.no}>NO</motion.h3>
                    <motion.h3 variants={variants} initial="initial" animate={atTop?"animated":"init"} className={styles.ordinary}>ORDINARY</motion.h3>
                    <div className={styles.selfWrap}>
                        <AnimatePresence exitBeforeEnter>
                            {labelSwitch()}
                        </AnimatePresence>
                    </div>
                </div>

                <ul className={styles.navLinks}>
                    <li style={{color:router.pathname ==="/"?"var(--brown)":"black"}}>
                        <Link href="/">
                            HOME
                        </Link>
                    </li>
                    <li style={{color:router.pathname.includes("blog")?"var(--brown)":"black"}}>
                        <Link href="/blog">
                            BLOG
                        </Link>
                    </li>
                    <li style={{color:router.pathname ==="/story"?"var(--brown)":"black"}}>
                        <Link href="/story">
                            MY STORY
                        </Link>
                    </li>
                    {/*<li>
                        <Link href="/contact">
                            CONTACT
                        </Link>
                    </li>*/}
                </ul>
            </nav>
        </div>
    )
}

export default HeaderDesktop;