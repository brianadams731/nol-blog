import styles from "../styles/blogCategory.module.css";
import Link from "next/link"


const BlogCategory = () =>{
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heroText}>Browse the blog</h3>
            <div className={styles.catWrapper}>

                <Link href="/blog?category=mindset">
                    <div className={styles.blogCat} style={{backgroundImage:`url("https://source.unsplash.com/random/350x400/?plants")`}}>
                        <div className={styles.label}>
                            MINDSET
                        </div>
                    </div>
                </Link>

                <Link href="/blog?category=personal-growth">
                    <div className={[styles.blogCat, styles.midCat].join(" ")} style={{backgroundImage:`url("https://source.unsplash.com/random/350x400/?nature")`}}>
                        <div className={styles.label}>
                            PERSONAL GROWTH
                        </div>
                    </div>
                </Link>
                
                <Link href="/blog?category=self-love">
                    <div className={styles.blogCat} style={{backgroundImage:`url("https://source.unsplash.com/random/350x400/?stones")`}}>
                        <div className={styles.label}>
                            SELF LOVE
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BlogCategory;