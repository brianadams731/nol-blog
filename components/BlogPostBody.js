import styles from "../styles/blogPostBody.module.css";
const BlockContent = require('@sanity/block-content-to-react');


const BlogPostBody = ({content}) =>{
    return (
        <div className={styles.wrapper}>
            <BlockContent blocks={content} projectId="qgu1tf9c" dataset="production" />
        </div>
    )
}

export default BlogPostBody;