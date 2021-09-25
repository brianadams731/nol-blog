import Link from "next/link";

import styles from "../styles/header.module.css";

const HeaderDesktop = () =>{

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.headText}>
                    <h3 className={styles.no}>NO</h3>
                    <h3 className={styles.ordinary}>ORDINARY</h3>
                    <div className={styles.self}>
                        <div><h3>S</h3></div>
                        <div><h3>E</h3></div>
                        <div><h3>L</h3></div>
                        <div><h3>F</h3></div>
                    </div>
                </div>

                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            BLOG
                        </Link>
                    </li>
                    <li>
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
        </>
    )
}

export default HeaderDesktop;