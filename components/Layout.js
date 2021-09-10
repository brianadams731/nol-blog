import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) =>{
    return (
        <div className={styles.appWrap}>
            <Header />
                <div className={styles.contentWrapper}>
                    {children}
                </div>
            <Footer />
        </div>
    )
}

export default Layout;