import fs from "fs"
import { extname,join } from "path";

export const getMarkdownName = ():string[] =>{
    const fs = require("fs")
    const postPath = join(process.cwd(), "cms-data/blog-posts");
    const filePaths = fs.readdirSync(postPath).map((fileName) => {
        if(extname(fileName) === ".md"){
            return fileName.replace(/\.mdx?$/, '');
        }
    })
    return filePaths;
}

// TODO TYPE THIS BETTER IF THIS SITE SWITCHES BACK TO MD
export const getMarkdownContent = (title:string) =>{
    const matter = require('gray-matter');
    const postPath = join(process.cwd(), `cms-data/blog-posts/${title}.md`)
    const mdFile = fs.readFileSync(postPath)
    const {data, content} = matter(mdFile);
    data.date = `${data?.date}`;
    return ({data, content})
}