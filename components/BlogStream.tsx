import PropTypes from "prop-types";
import {categoryURLParser} from "./utils/pathUtils";

import BlogStreamPost from "./BlogStreamPost";

import styles from "../styles/blogStream.module.css";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {motion} from "framer-motion"; 
import { BlogCardData } from "../graphql/adapters";

interface Props{
    category:string;
    data: BlogCardData[];
    left: boolean;
}

const BlogStream = ({category,data,left}:Props) =>{
    const wrapperRef = useRef<HTMLDivElement>();
    const [dragging, setDragging] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>();
    const [leftSideInView, setLeftSideInView] = useState<boolean>(true);
    const [rightSideInView, setRightSideInView] = useState<boolean>(false);

    return(
        <div ref={wrapperRef} className={styles.wrapper}>
            <motion.div initial={{x:"-100%"}} animate={{x:leftSideInView?"-100%":0}} transition={{type:"tween", duration:.5}} className={styles.leftArrow}><div className={styles.arrow}>&#8249;</div></motion.div>
            <div className={`${styles.category} ${left?styles.left:styles.right}`}>
                <div className={styles.categoryWrap}>
                    <Link href={`/blog/categories/${categoryURLParser(category)}`} passHref><h3>{category}</h3></Link>
                </div>
            </div>

            <motion.div ref={containerRef} className={`${styles.postWrapper} ${left?"":styles.pushRight}`} drag="x" dragConstraints={wrapperRef} onDragStart={()=>{setDragging(true)}} onDragEnd={()=>{setDragging(false)}} onUpdate={(e)=>{
                const offsetConstant = 100 // The offset in px that the first and last element can be off screen before registering as off
                setLeftSideInView(e.x > -offsetConstant);
                setRightSideInView(e.x < -((containerRef.current.offsetWidth - wrapperRef.current.offsetWidth) - offsetConstant))
            }}>

                {data.map((item, index)=>{
                    return <BlogStreamPost dragging={dragging} key={`${item.title} ${index}`} data={item} />
                })}

            
            </motion.div>

            <motion.div initial={{x:"100%"}} animate={{x:rightSideInView?"100%":0}} transition={{type:"tween", duration:.5}} className={styles.rightArrow}><div className={styles.arrow}>&#8250;</div></motion.div>

        </div>
    )
}

BlogStream.defaultProps = {
    left:true,
}

BlogStream.propTypes = {
    left : PropTypes.bool,
}

export default BlogStream;