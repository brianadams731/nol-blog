import styles from "../styles/blogStreamPost.module.css";
import Image from "next/image";
import Link from "next/link";

import {motion} from 'framer-motion';
import PropTypes from "prop-types";

import useElementInViewport from "../hooks/useElementInViewport";

const BlogStreamPost = ({data, dragging}) =>{

    const [elementRef, elementInViewport] = useElementInViewport(true,.5);

    const variants = {
        init:{
            opacity:0,
            y:10,
            transition:{
                delay: 0,
            }
        },
        shown:{
            opacity:1,
            y:0,
            transition:{
                delay: .1,
            }
        },
        scale:{
            scale:1.12,
            transition:{
                duration:.35
            }
        }
    }

    return (
        <motion.div  initial="init" animate={elementInViewport?"shown":""} variants={variants} ref={elementRef} style={{pointerEvents:dragging?"none":"auto"}} className={styles.wrapper} key={"PLACEHOLDER"} whileHover={dragging?"":"scale"}>
            <Link  href={`/blog/${data.path}`}>
                <div className={styles.previewWrapper}>
                    <Image className={styles.preview} width={250} height={250} src={data?.preview} objectFit="cover" alt="blogItem"/>
                </div>
            </Link>
            <div className={styles.textBox}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.description}>{data.description}</p>
                <Link href={`/blog/${data.path}`}>
                    <div className={styles.readMoreWrapper}>
                        <h6 className={styles.readMore}>READ MORE</h6>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}

BlogStreamPost.defaultProps = {
    dragging: false,
};

BlogStreamPost.propTypes = {
    dragging: PropTypes.bool,
}

export default BlogStreamPost;