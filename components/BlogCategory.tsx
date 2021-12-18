import styles from "../styles/blogCategory.module.css";

import BlogCat from "./BlogCat";


const BlogCategory = ():JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heroText}>Browse the blog</h3>
            <div className={styles.catWrapper}>
                <BlogCat image="/media/Mind.jpg" url="/blog/categories/mindset" text="MINDSET"/>
                <BlogCat image="/media/Personal Growth.jpg" url="/blog/categories/personal-growth" text="PERSONAL GROWTH" />
                <BlogCat image="/media/Self love.jpg" url="/blog/categories/self-love" text="SELF LOVE"/>
            </div>
        </div>
    )
}

export default BlogCategory;