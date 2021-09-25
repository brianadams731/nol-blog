import styles from "../styles/headerMobile.module.css";
import sharedStyles from "../styles/header.module.css";

const HeaderMobile = ({mobileMenuOpen ,setMobileMenuOpen}) =>{
    return(
            <>
            <nav className={sharedStyles.nav}>

                <div className={sharedStyles.headText}>
                    <h3 className={`${sharedStyles.noOrdinary} ${styles.noOrdinary}`}>NO ORDINARY <span className={styles.self}>SELF</span></h3>
                </div>

                <div className={styles.menuIcon} onClick={()=>{
                    setMobileMenuOpen(prev => !prev);
                }}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>

            </nav>
            </>
    )
}

export default HeaderMobile;