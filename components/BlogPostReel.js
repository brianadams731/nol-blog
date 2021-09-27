import styles from "../styles/blogPostReel.module.css";
import BlogStreamPost from "./BlogStreamPost";

const BlogPostReel = ({data}) =>{
    return (
        <div className={styles.wrapper}>
            {
                data.map((item, index)=>{
                    return (
                        <BlogStreamPost data={item} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default BlogPostReel;