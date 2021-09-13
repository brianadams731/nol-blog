import {getMarkdownName, getMarkdownContent} from "../../components/utils/fileUtils.js";

import BlogPostBody from "../../components/BlogPostBody";


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


const BlogPost = ({fontMatter, content}) =>{
    return (
        <>
            <h1>{fontMatter.title}</h1>
            <p>{fontMatter.date}</p>
            <BlogPostBody content={content} />
        </>
    )
}

export default BlogPost;