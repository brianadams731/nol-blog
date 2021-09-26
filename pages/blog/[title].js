import {getMarkdownName, getMarkdownContent} from "../../components/utils/fileUtils.js";
import {motion} from "framer-motion";
import BlogPostBody from "../../components/BlogPostBody";

import styles from "../../styles/blogSlug.module.css";


export const getStaticPaths = async () =>{
    const paths = getMarkdownName().map((title)=> ({params:{title}}));
    return ({
        paths,
        fallback: false
    });
}

export const getStaticProps = async({params}) =>{
    const {data, content} = getMarkdownContent(params.title);
    return ({
        props:{
            fontMatter:data,
            content
        }
    })
}


const BlogPost = ({fontMatter, content, variants}) =>{

    return (
        <motion.div className={styles.wrapper} initial="initialFadeIn" animate="animatedFadeIn" exit="initialFadeIn" key={fontMatter.title} variants={variants}>
            <h1 className={styles.blogTitle}>{fontMatter.title}</h1>
            <BlogPostBody content={content} />
        </motion.div>
    )
}

export default BlogPost;