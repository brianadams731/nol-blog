import styles from "../styles/headerMobile.module.css";
import sharedStyles from "../styles/header.module.css";

import {motion} from "framer-motion";

const HeaderMobile = ({mobileMenuOpen, setMobileMenuOpen}) =>{


    const icon = {
        init: {
            transform:"rotate(0deg)"},
            
        close:{
            transform:"rotate(0deg)",
            transition:{
                type:"tween",duration:.02
            },
        },

        open: {
            transform:"rotate(90deg)",
            transition:{
                type:"tween",duration:.02
            },
        },
    }

    return(
            <>
                <nav className={sharedStyles.nav}>
        
                    <div className={sharedStyles.headText}>
                        <h3 className={`${sharedStyles.noOrdinary} ${styles.noOrdinary}`}>NO ORDINARY <span className={styles.self}>SELF</span></h3>
                    </div>
        
                    <motion.div className={styles.menuIcon} variants={icon} initial="init" animate={mobileMenuOpen?"open":"close"} onClick={()=>{
                        setMobileMenuOpen(prev => !prev);
                    }}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </motion.div>
                
                </nav>
            </>
    )
}

export default HeaderMobile;