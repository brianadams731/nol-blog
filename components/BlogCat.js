import styles from "../styles/blogCat.module.css";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import useElementInViewport from "../hooks/useElementInViewport.js";

const BlogCat = ({text,url,image}) =>{
    const [elementRef, elementInViewport] = useElementInViewport(true,.3);

    const variants = {
        init:{
            opacity:0,
            y:0,
            transition:{
                type:"tween",
                delay: 0,
            }
        },
        shown:{
            opacity:1,
            y:0,
            transition:{
                type:"tween",
                delay: .1,
                duration:.8,
            }
        }
    }

    return (
        <Link href={url} passHref>
            <motion.div initial="init" animate={elementInViewport?"shown":""} variants={variants} ref={elementRef} className={styles.wrapper}>
                <div className={styles.imageWrap}>
                    <Image className={styles.image} alt={text} height={350} width={240} objectFit="cover" src={image} />
                </div>
                <div className={styles.label}>{text}</div>
            </motion.div>
        </Link>
    )
}

export default BlogCat;