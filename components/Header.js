import styles from "../styles/header.module.css";

import { useState } from "react";

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
        <header className={`${styles.wrapper} ${atTop||showMobile?styles.grow:styles.shrink}`}>
            {showMobile?<HeaderMobile mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />:<HeaderDesktop />}
            <div className={`${styles.accentLine}`}></div>
        </header>
        <AnimatePresence>
            {mobileMenuOpen&&showMobile?<MobileMenu setMobileMenuOpen={setMobileMenuOpen}/>:null}
        </AnimatePresence>
        </>
    )
}
export default Header;