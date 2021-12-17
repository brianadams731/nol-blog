import Link from "next/link";

import { NextRouter, useRouter } from "next/router";
import {AnimatePresence, motion} from "framer-motion";

import styles from "../styles/header.module.css";

const HeaderDesktop = ():JSX.Element =>{

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
    
    const router: NextRouter = useRouter();
    return (
        <div className={styles.deskWrapper}>
            <nav className={styles.nav}>
                <div className={styles.headText}>
                    <div className={styles.selfWrap}>
                        <AnimatePresence exitBeforeEnter>
                            <motion.div variants={variants} initial="init" animate="animated" key="not-self">
                                <h3 style={{color:"black", fontWeight:400}}>NO ORDINARY <span style={{color:"var(--light-brown)"}}>SELF</span></h3>
                            </motion.div>
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
                </ul>
            </nav>
        </div>
    )
}

export default HeaderDesktop;