import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "../styles/layout.module.css";

interface Props{
    children: React.ReactNode
}

const Layout = ({ children }:Props) =>{
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