import { getMarkdownContent,getMarkdownName} from "../../../components/utils/fileUtils.js";
import {categoryURLParser } from "../../../components/utils/pathUtils.js" 

import { motion } from "framer-motion";

import BlogStreamPost from "../../../components/BlogStreamPost.js";

import styles from "../../../styles/categorySlug.module.css";

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

    return ({
        props:{
            category:data[0]?.subject,
            data,
        }
    })
}

const CategoryPage = ({category, data, variants}) =>{
    return (
        <motion.div className={styles.wrapper} initial="initialFadeIn" animate="animatedFadeIn" exit="initialFadeIn" key={category} variants={variants}>
            <h1 className={styles.title}>Category: {category}</h1>
            {data.map((item,index)=>{
                return <BlogStreamPost data={item} key={index}/>
            })}
        </motion.div>
    )
}

export default CategoryPage;