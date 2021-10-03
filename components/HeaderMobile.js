import styles from "../styles/headerMobile.module.css";
import sharedStyles from "../styles/header.module.css";

import {motion} from "framer-motion";

const HeaderMobile = ({mobileMenuOpen, setMobileMenuOpen}) =>{




    const upperLine = {
        init:{
            top:0,
            rotate:0,
            transition:{
                top:{
                    delay:.4,
                },
            }
        },

        animate:{
            top:"50%",
            rotate:45,
            translateY:"-50%",
            transition:{
                rotate:{
                    delay:.4,
                },
            }
        },
    }

    const lowerLine = {
        init:{
            bottom:0,
            rotate:0,
            transition:{
                bottom:{
                    delay:.4,
                },
            }
        },

        animate:{
            bottom:"50%",
            rotate:-45,
            translateY:"50%",
            transition:{
                rotate:{
                    delay:.4,
                },
            }
        },

    }

    const middleLine = {
        init:{
            opacity:1
        },
        animate:{
            opacity:0,
            transition:{
                duration:.1,
                delay:.2,
            }
        }
    }

    return(
            <>
                <nav className={sharedStyles.nav}>
        
                    <div className={sharedStyles.headText}>
                        <h3 className={`${sharedStyles.noOrdinary} ${styles.noOrdinary}`}>NO ORDINARY <span className={styles.self}>SELF</span></h3>
                    </div>
        
                    <div className={styles.menuIcon} onClick={()=>{
                        setMobileMenuOpen(prev => !prev);
                    }}>
                        <motion.div initial="init" animate={mobileMenuOpen?"animate":"init"} variants={upperLine} className={styles.lineTop}></motion.div>
                        <motion.div initial="init" animate={mobileMenuOpen?"animate":"init"} variants={middleLine} className={styles.lineMiddle}></motion.div>
                        <motion.div initial="init" animate={mobileMenuOpen?"animate":"init"} variants={lowerLine} className={styles.lineBottom}></motion.div>
                    </div>
                
                </nav>
            </>
    )
}

export default HeaderMobile;