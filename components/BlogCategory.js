import styles from "../styles/blogCategory.module.css";

const BlogCategory = () =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heroText}>Browse the blog</h3>
            <div className={styles.catWrapper}>
                <div className={styles.blogCat}>
                    <div className={styles.label}>
                        MINDSET
                    </div>
                </div>
                <div className={[styles.blogCat, styles.midCat].join(" ")}>
                    <div className={styles.label}>
                        PERSONAL GROWTH
                    </div>
                </div>
                <div className={styles.blogCat}>
                    <div className={styles.label}>
                        SELF LOVE
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCategory;