import styles from "../styles/blogPostBody.module.css";
const BlockContent = require('@sanity/block-content-to-react');

import {sanityProjectID, sanityDataset} from "../graphql/querys"

interface Props{
    content:any;    // TODO Type this better, content is a json blob returned from the api
}

const BlogPostBody = ({content}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <BlockContent blocks={content} projectId={sanityProjectID} dataset={sanityDataset} />
        </div>
    )
}

export default BlogPostBody;