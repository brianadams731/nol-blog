import {getMarkdownName, getMarkdownContent} from "../../components/utils/fileUtils.js";
import Link from "next/link"

import { useEffect } from "react";
import { useRouter } from 'next/router'

import {styles} from "../../styles/blogPage.module.css";

export const getStaticProps = async () =>{
    const paths = getMarkdownName();
    const fontMatter = paths.map((filePath) => {
        const {data} = getMarkdownContent(filePath);
        return {
            ...data,
            path: filePath,
        }
    })
    return ({
        props: {
            fontMatter
        }
    })
}


const Blog = ({fontMatter}) =>{
    const router = useRouter();
    const {category} = router.query

    return (
        <>
            {fontMatter.map((item,index) =>{
                return (
                    <Link href={`/blog/${item.path}`} key={index}>
                        <div className="pointer">
                            <h3>{item.title}</h3>
                            <p>{item.subject}</p>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default Blog;