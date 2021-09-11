import fs from "fs";
import {join} from "path";

import BlogPostBody from "../../components/BlogPostBody";


export const getStaticPaths = async () =>{
    const postPath = join(process.cwd(), "cms-data/blog-posts")
    const paths = fs.readdirSync(postPath).map((path) => path.replace(/\.mdx?$/, '')).map((title)=> ({params:{title}}));
    return ({
        paths,
        fallback: false
    });
}

export const getStaticProps = async({params}) =>{
    const matter = require('gray-matter');
    const postPath = join(process.cwd(), `cms-data/blog-posts/${params.title}.md`)
    const mdFile = fs.readFileSync(postPath)
    const {data, content} = matter(mdFile);
    data.date = `${data?.date}`;
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