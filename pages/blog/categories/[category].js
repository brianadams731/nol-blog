import { getMarkdownContent,getMarkdownName} from "../../../components/utils/fileUtils.js";
import {categoryURLParser } from "../../../components/utils/pathUtils.js" 

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

const CategoryPage = ({category, data}) =>{
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Category: {category}</h1>
            {data.map((item)=>{
                return <BlogStreamPost data={item} />
            })}
        </div>
    )
}

export default CategoryPage;