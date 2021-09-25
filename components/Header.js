import styles from "../styles/header.module.css";

import { useEffect, useState } from "react";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import useWindowSize from "../hooks/useWindowSize";


const Header = () =>{
    const windowSize = useWindowSize();
    const [atTop,setAtTop] = useState(true);
    const [showMobile,setShowMobile] = useState();
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false);

    useEffect(()=>{
        setShowMobile(window.innerWidth <= 550)
        setAtTop(!window.pageYOffset);
        
        window.onscroll = () =>{
            setAtTop(!window.pageYOffset);
        }
        return ()=> (window.onscroll = null);
    },[])

    useEffect(()=>{
        if(windowSize!==undefined){
            setShowMobile(windowSize.width <= 550)
        }
    },[windowSize])

    return(
        <header className={`${styles.wrapper} ${atTop?styles.grow:styles.shrink}`}>
            {showMobile?<HeaderMobile mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />:<HeaderDesktop />}
            <div className={`${styles.accentLine} ${atTop?styles.unQuarter:styles.quarter}`}></div>
        </header>
    )
}
export default Header;