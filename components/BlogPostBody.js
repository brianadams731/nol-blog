import styles from "../styles/blogPostBody.module.css";
const BlockContent = require('@sanity/block-content-to-react');

import {sanityProjectID, sanityDataset} from "../graphql/querys.js"

const BlogPostBody = ({content}) =>{
    return (
        <div className={styles.wrapper}>
            <BlockContent blocks={content} projectId={sanityProjectID} dataset={sanityDataset} />
        </div>
    )
}

export default BlogPostBody;