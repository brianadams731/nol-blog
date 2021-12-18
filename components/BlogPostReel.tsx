import { BlogCardData } from "../graphql/adapters";
import styles from "../styles/blogPostReel.module.css";
import BlogStreamPost from "./BlogStreamPost";

interface Props{
    data:BlogCardData[];
}

const BlogPostReel = ({data}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            {
                data.map((item, index:number)=>{
                    return (
                        <BlogStreamPost data={item} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default BlogPostReel;