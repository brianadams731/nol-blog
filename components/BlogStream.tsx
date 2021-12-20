import PropTypes from "prop-types";
import {categoryURLParser} from "./utils/pathUtils";

import BlogStreamPost from "./BlogStreamPost";

import styles from "../styles/blogStream.module.css";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";
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
    const containerRef = useRef<HTMLDivElement>();

    const [dragging, setDragging] = useState<boolean>(false);

    const [leftSideInView, setLeftSideInView] = useState<boolean>(true);
    const [rightSideInView, setRightSideInView] = useState<boolean>(true);


    const [dragAreaWidthRight,setDragAreaWidthRight] = useState<number>(0);
    const [dragAreaWidthLeft,setDragAreaWidthLeft] = useState<number>(0);

    // IF THIS COMPONENT SWITCHES TO SSR THIS WILL USE USEEFFECT, IF THIS HAPPENS REWORK WIDTH CHECK
    useIsomorphicLayoutEffect(()=>{
        setRightSideInView(containerRef.current.offsetWidth < wrapperRef.current.offsetWidth); // shows scroll right arrow if cards exceed initial visable area
        // init drag area constraints
        reClacDragConstraints();
        window.addEventListener("resize",reClacDragConstraints)
        return ()=> window.removeEventListener("resize",reClacDragConstraints)
    },[])

    const reClacDragConstraints = ():void =>{
        const wrapWidth = wrapperRef.current.offsetWidth;
        const containerWidth = containerRef.current.offsetWidth;

        const right = containerWidth>wrapWidth? wrapperRef.current.offsetWidth/5:0;
        const left = containerWidth>wrapWidth? containerRef.current.offsetWidth - (wrapperRef.current.offsetWidth/5)*4:0;
        
        setDragAreaWidthRight(right);
        setDragAreaWidthLeft(left);
    }

    return(
        <div ref={wrapperRef} className={styles.wrapper}>
            <div className={`${styles.category} ${left?styles.left:styles.right}`}>
                <div className={styles.categoryWrap}>
                    <Link href={`/blog/categories/${categoryURLParser(category)}`} passHref><h3>{category}</h3></Link>
                </div>
            </div>
            
            <motion.div ref={containerRef} className={`${styles.postWrapper} ${left?"":styles.pushRight}`} drag="x" dragConstraints={{
                left: -dragAreaWidthLeft,
                right: dragAreaWidthRight
                // was wrapperRef
            }} onDragStart={()=>{setDragging(true)}} onDragEnd={()=>{setDragging(false)}} onUpdate={(e)=>{
                const offsetConstant = 100 // The offset in px that the first and last element can be off screen before registering as off
                setLeftSideInView(e.x > -offsetConstant);
                setRightSideInView(e.x < -((containerRef.current.offsetWidth - wrapperRef.current.offsetWidth) - offsetConstant))
            }}>

                {data.map((item, index)=>{
                    return <BlogStreamPost dragging={dragging} key={`${item.title} ${index}`} data={item} />
                })}

            
            </motion.div>

            <div className={styles.arrowWrap}>
                <motion.div initial={{x:"-100%"}} animate={{x:leftSideInView?"-150%":0}} transition={{type:"tween", duration:.4}} className={styles.leftArrow}>&#8249;</motion.div>
                <motion.div initial={{x:"100%"}} animate={{x:rightSideInView?"150%":0}} transition={{type:"tween", duration:.4}} className={styles.rightArrow}>&#8250;</motion.div>
            </div>
        </div>
    )
}

BlogStream.defaultProps = {
    left:true,
}

BlogStream.propTypes = {
    category: PropTypes.string,
    left : PropTypes.bool,
}

export default BlogStream;