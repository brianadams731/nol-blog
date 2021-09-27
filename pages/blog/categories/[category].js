import { getMarkdownContent,getMarkdownName} from "../../../components/utils/fileUtils.js";
import {categoryURLParser } from "../../../components/utils/pathUtils.js" 

import { motion } from "framer-motion";

import BlogStreamPost from "../../../components/BlogStreamPost.js";

import styles from "../../../styles/categorySlug.module.css";
import BlogPostReel from "../../../components/BlogPostReel.js";

export const getStaticPaths = async () =>{
    const paths = [];
    const titles = getMarkdownName();
    const mdGreyMatter = titles.map(item =>{
        const {data} = getMarkdownContent(item)
        return data.subject;
    })
    
    mdGreyMatter.forEach((item) =>{
        const subject = categoryURLParser(item);
        if(!paths.includes(subject)){
            paths.push({
                params: {category: subject}
            });
        }
    })
    
    return ({
        paths,
        fallback: false
    });
}

export const getStaticProps = async({params}) =>{
    const data = [];
    const paths = getMarkdownName();
    const mdGreyMatter = paths.map(pathName =>{
        const {data} = getMarkdownContent(pathName)
        return {
            ...data,
            path: pathName,
        };
    })
    
    mdGreyMatter.forEach((item) =>{
        if(categoryURLParser(item.subject) === params.category){
            data.push(item);
        }            
    })

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