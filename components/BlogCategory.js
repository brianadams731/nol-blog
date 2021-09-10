import styles from "../styles/blogCategory.module.css";

import Image from "next/image";

const BlogCategory = () =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heroText}>Browse the blog</h3>
            <div className={styles.catWrapper}>

                <div className={styles.blogCat} style={{backgroundImage:`url("https://source.unsplash.com/random/350x400/?plants")`}}>
                    <div className={styles.label}>
                        MINDSET
                    </div>
                </div>
                
                <div className={[styles.blogCat, styles.midCat].join(" ")} style={{backgroundImage:`url("https://source.unsplash.com/random/350x400/?travel")`}}>
                    <div className={styles.label}>
                        PERSONAL GROWTH
                    </div>
                </div>
                
                <div className={styles.blogCat} style={{backgroundImage:`url("https://source.unsplash.com/random/350x400/?stones")`}}>
                    <div className={styles.label}>
                        SELF LOVE
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogCategory;