import styles from "../styles/header.module.css";

import { useState } from "react";
import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import MobileMenu from "./MobileMenu";

import useIsAtTopOfPage from "../hooks/useIsAtTopOfPage";
import useShowMobile from "../hooks/useShowMobile";


const Header = () =>{
    const atTop = useIsAtTopOfPage();
    const showMobile = useShowMobile(550);
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false);


    return(
        <>
        <motion.header className={styles.wrapper} initial={{y:atTop||showMobile?0:"-45%"}} animate={{y:atTop||showMobile?0:"-45%"}} transition={{type:"tween", duration:.4}}>
            {showMobile?<HeaderMobile mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />:<HeaderDesktop atTop={atTop}/>}
            <div className={`${styles.accentLine}`}></div>
        </motion.header>
        <AnimatePresence>
            {mobileMenuOpen&&showMobile?<MobileMenu setMobileMenuOpen={setMobileMenuOpen}/>:null}
        </AnimatePresence>
        </>
    )
}
export default Header;