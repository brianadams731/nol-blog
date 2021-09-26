import {getMarkdownName, getMarkdownContent} from "../../components/utils/fileUtils.js";
import Link from "next/link"

import { useRouter } from 'next/router'
import {motion} from "framer-motion";
import styles from "../../styles/blogPage.module.css";
import BlogStream from "../../components/BlogStream.js";

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


const Blog = ({fontMatter, variants}) =>{
    const router = useRouter();
    const {category} = router.query

    return (
        <motion.div className={styles.wrapper} initial="initialFadeIn" animate="animatedFadeIn" exit="initialFadeIn" key="blogHome" variants={variants}>
            <div className={styles.title}>
                <h1>On the Blog</h1>
            </div>

            <div className={styles.blogStreamWrapper}>
            <BlogStream category="MINDSET"/>
            <BlogStream category="PERSONAL GROWTH" left={false}/>
            <BlogStream category="SELF LOVE"/>
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
            </div>
        </motion.div>
    )
}

export default Blog;