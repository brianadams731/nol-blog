import PropTypes from "prop-types";
import {categoryURLParser} from "./utils/pathUtils.js";

import BlogStreamPost from "./BlogStreamPost.js";

import styles from "../styles/blogStream.module.css";

import Link from "next/link";
const BlogStream = ({category,data,left}) =>{
    return(
        <div className={styles.wrapper}>
            <div className={`${styles.category} ${left?styles.left:styles.right}`}>
                <div className={styles.categoryWrap}>
                    <Link href={`/blog/categories/${categoryURLParser(category)}`}><h3>{category}</h3></Link>
                </div>
            </div>
            <div className={styles.postWrapper}>
                
                {data.map((item)=>{
                    return <BlogStreamPost key={item.title} data={item} />
                })}

            </div>
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