import fs from "fs";
import {join} from "path"

export const getStaticProps = async () =>{
    const postPath = join(process.cwd(), "cms-data/blog-posts")
    const paths = fs.readdirSync(postPath).map((path) => path.replace(/\.mdx?$/, ''));
    return ({
        props: {
            paths
        }
    })
}


const Blog = ({paths}) =>{
    return (
        <>
            {paths.map((item,index) =>{
                return (
                    <a href={`/blog/${item}`} key={index}>
                        {item}
                    </a>
                )
            })}
        </>
    )
}

export default Blog;