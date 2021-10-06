import {endpoint, getAllSlugs, getPostWithDetailFromSlug} from "../../graphql/querys.js";
import { blogPostAdapter } from "../../graphql/adapters.js";
import {request} from "graphql-request";

import {motion} from "framer-motion";
import BlogPostBody from "../../components/BlogPostBody";

import styles from "../../styles/blogSlug.module.css";


export const getStaticPaths = async () =>{
    const slugs = await request(endpoint,getAllSlugs());
    const paths = slugs.allPost.map((post) =>({params:{title:post.blogPostSlug.current}}))
    return ({
        paths,
        fallback: false
    });
}

export const getStaticProps = async({params}) =>{
    const posts = await request(endpoint,getPostWithDetailFromSlug(params.title));
    const data = blogPostAdapter(posts);
    return ({
        props:{
            data
        }
    })
}


const BlogPost = ({data, variants}) =>{
    return (
        <motion.div className={styles.wrapper} initial="initialFadeIn" animate="animatedFadeIn" exit="initialFadeIn" key={data.title} variants={variants}>
            <h1 className={styles.blogTitle}>{data.title}</h1>
            <BlogPostBody content={data.content} />
        </motion.div>
    )
}

export default BlogPost;