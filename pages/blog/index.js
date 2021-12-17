import { endpoint, getAllBlogPreviews } from "../../graphql/querys.js";
import {previewAdapter} from "../../graphql/adapters.js"
import {request} from "graphql-request";

import {motion} from "framer-motion";
import styles from "../../styles/blogPage.module.css";
import BlogStream from "../../components/BlogStream";


export const getStaticProps = async () =>{

    const getAllPostPreviews= async() =>{
        const previews = await request(endpoint,getAllBlogPreviews());
        const parsedPreviews = previewAdapter(previews);
        return parsedPreviews;
    }

    const posts = await getAllPostPreviews();
    const mindset = [];
    const personalGrowth = [];
    const selfLove = []

    posts.forEach((item) =>{
        const subject = item.subject.toLowerCase();
        if(subject === "mindset"){
            mindset.push(item);
        }else if(subject === "personal growth"){
            personalGrowth.push(item);
        }else if(subject === "self love"){
            selfLove.push(item);
        }
    })

    return ({
        props: {
            mindset,
            personalGrowth,
            selfLove,
        }
    })
}


const Blog = ({mindset, personalGrowth, selfLove, variants}) =>{

    return (
        <motion.div className={styles.wrapper} initial="initialFadeIn" animate="animatedFadeIn" exit="initialFadeIn" key="blogHome" variants={variants}>
            
            <div className={styles.title}>
                <h1>On the Blog</h1>
            </div>
            <div role="main" className={styles.blogStreamWrapper}>
                <BlogStream data={mindset} category="MINDSET"/>
                <BlogStream data={personalGrowth} category="PERSONAL GROWTH" left={false}/>
                <BlogStream data={selfLove} category="SELF LOVE"/>
            </div>

        </motion.div>
    )
}

export default Blog;