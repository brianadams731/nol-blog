import fs from "fs";
import {join} from "path"

import Link from "next/link"


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
                    <Link href={`/blog/${item}`} key={index}>
                        <div className="pointer">
                            <h3>{item}</h3>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default Blog;