import {getMarkdownName, getMarkdownContent} from "../../components/utils/fileUtils.js";
import Link from "next/link"


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