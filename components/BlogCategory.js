import styles from "../styles/blogCategory.module.css";
import Link from "next/link"

import BlogCat from "./BlogCat.js";


const BlogCategory = () =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heroText}>Browse the blog</h3>
            <div className={styles.catWrapper}>
                <BlogCat image="/media/Mind.jpg" url="/mindset" text="MINDSET"/>
                <BlogCat image="/media/Personal Growth.jpg" url="/personal-growth" text="PERSONAL GROWTH" />
                <BlogCat image="/media/Self love.jpg" url="/self-love" text="SELF LOVE"/>
            </div>
        </div>
    )
}

export default BlogCategory;