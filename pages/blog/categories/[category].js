import {categoryURLParser } from "../../../components/utils/pathUtils.js" 

import {getAllBlogSubjects, getBlogPreviewBySubject, endpoint } from "../../../graphql/querys.js";
import { previewAdapter, deURLBlogSubject } from "../../../graphql/adapters.js";
import {request} from "graphql-request";

import { motion } from "framer-motion";

import styles from "../../../styles/categorySlug.module.css";
import BlogPostReel from "../../../components/BlogPostReel.js";

export const getStaticPaths = async () =>{
    const paths = [];
    const slugs = await request(endpoint,getAllBlogSubjects());
    slugs.allPost.map((item)=>{
        const subject = categoryURLParser(item.subject);
        if(!paths.includes(subject)){
            paths.push({
                params: {category: subject},
            });
        }
    })

    return ({
        paths,
        fallback: false
    });
}

export const getStaticProps = async({params}) =>{
    const subject = deURLBlogSubject(params.category)
    const unparsedPreviews = await request(endpoint,getBlogPreviewBySubject(subject));
    const data = previewAdapter(unparsedPreviews);


    let even = true;
    let i = 0;
    const dataMatrix = []
    while(i<data.length){
        if(even){
            dataMatrix.push(data.slice(i,i+2));
            i = i+2
        }else{
            dataMatrix.push(data.slice(i,i+3));
            i = i+3;
        }
        even = !even;
    }

    return ({
        props:{
            category:data[0]?.subject,
            dataMatrix:dataMatrix,
        }
    })
}

const CategoryPage = ({category, dataMatrix, variants}) =>{


    return (
        <motion.div className={styles.wrapper} initial="initialFadeIn" animate="animatedFadeIn" exit="initialFadeIn" key={category} variants={variants}>
            <h1 className={styles.title}>Category: {category}</h1>
            <div className={styles.headWrapper}>
                <h3 className={styles.headText}>Latest Posts</h3>
            </div>
            <div className={styles.blogReelSection}>
                {dataMatrix.map((dataArray, index) =>{
                    return <BlogPostReel data={dataArray} key={index}/>
                })}
            </div>
        </motion.div>
    )
}

export default CategoryPage;