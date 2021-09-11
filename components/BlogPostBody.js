import styles from "../styles/blogPostBody.module.css";

import ReactMarkdown from "react-markdown";
import remarkUnwrapImages from "remark-unwrap-images";

const BlogPostBody = ({content}) =>{
    return (
        <div className={styles.wrapper}>
            <ReactMarkdown children={content} remarkPlugins={[remarkUnwrapImages]} />
        </div>
    )
}

export default BlogPostBody;