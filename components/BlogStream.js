import PropTypes from "prop-types";
import {categoryURLParser} from "./utils/pathUtils.js";

import BlogStreamPost from "./BlogStreamPost.js";

import styles from "../styles/blogStream.module.css";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {motion} from "framer-motion"; 
const BlogStream = ({category,data,left}) =>{
    const wrapperRef = useRef();
    const dragRef = useRef();
    const [dragEdge, setDragEdge] = useState([0,0])
    
    const [dragging, setDragging] = useState(false);

    useEffect(()=>{
        if(dragRef?.current?.offsetWidth && wrapperRef?.current?.offsetWidth){
            let wrapperWidth = wrapperRef.current.offsetWidth/2;
            let dragDivWidth = dragRef.current.offsetWidth/2;
            let dragEdgeLeft = dragDivWidth - wrapperWidth;
            let dragEdgeRight = dragDivWidth + wrapperWidth;

            // TODO FIX DRAG CONSTRAINTS
            setDragEdge([dragEdgeLeft,dragEdgeRight]);
        }
    },[dragRef,wrapperRef])


    return(
        <div ref={wrapperRef} className={styles.wrapper}>
            <div className={`${styles.category} ${left?styles.left:styles.right}`}>
                <div className={styles.categoryWrap}>
                    <Link href={`/blog/categories/${categoryURLParser(category)}`}><h3>{category}</h3></Link>
                </div>
            </div>
            <motion.div ref={dragRef} className={`${styles.postWrapper} ${left?"":styles.pushRight}`} drag="x" dragConstraints={{right:dragEdge[0], left:-dragEdge[1]}} onDragStart={()=>{setDragging(true)}} onDragEnd={()=>{setDragging(false)}} >
                {data.map((item)=>{
                    return <BlogStreamPost dragging={dragging} key={item.title} data={item} />
                })}
            </motion.div>
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