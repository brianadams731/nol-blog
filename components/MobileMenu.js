import { useEffect } from "react";
import {motion} from "framer-motion";

import styles from "../styles/mobileMenu.module.css";

import Link from "next/link"

import useIsClickOutsideElement from "../hooks/useIsClickOutsideElement.js";

const MobileMenu = ({setMobileMenuOpen}) =>{

    const [isClickOutside, targetEle, clickEvent] = useIsClickOutsideElement(true);

    const closeMenu = () =>{
        setMobileMenuOpen(false);
    }

    useEffect(()=>{
        if(isClickOutside && !clickEvent?.target.className.includes("header")){
            closeMenu();
        }
    },[isClickOutside])

    const list = {
        hov: {transform:"scale(1.2)"},
        base: {transform:"scale(1)"}
    }

    return (
        <motion.div initial={{x:"100%"}} animate={{x:0}}  exit={{x:"100%"}} ref={targetEle} transition={{type:"tween"}} className={styles.wrapper}>
            <ul>
                <Link href="/">
                    <motion.li variants={list} animate="base" whileHover="hov" onClick={closeMenu}>Home</motion.li>
                </Link>
                <Link href="/blog">
                    <motion.li variants={list} animate="base" whileHover="hov" onClick={closeMenu}>Blog</motion.li>
                </Link>
                <Link href="/story">
                    <motion.li variants={list} animate="base" whileHover="hov" onClick={closeMenu}>My Story</motion.li>
                </Link>
            </ul>
        </motion.div>
    )
}

export default MobileMenu;