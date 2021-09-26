import Link from "next/link";

import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const HeaderDesktop = () =>{
    const router = useRouter();

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
        </>
    )
}

export default HeaderDesktop;