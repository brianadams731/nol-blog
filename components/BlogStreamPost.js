import styles from "../styles/blogStreamPost.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogStreamPost = ({data}) =>{

    // THIS IS A WORK AROUND FOR IMAGE PATH REMOVE IF CONFIG CHANGES OR SWITCHING CMS
    const previewPath = data.preview?`${data?.preview?.substring(2,data.preview.length)}`:"/"
    return (
        <div className={styles.wrapper} key={"PLACEHOLDER"}>
            <Link  href={`/blog/${data.path}`}>
                <div className={styles.previewWrapper}>
                    <Image className={styles.preview} width={250} height={250} src={previewPath} objectFit="cover" alt="blogItem"/>
                </div>
            </Link>
            <div className={styles.textBox}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.description}>{data.description}</p>
                <Link href={`/blog/${data.path}`}>
                    <div className={styles.readMoreWrapper}>
                        <h6 className={styles.readMore}>READ MORE</h6>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BlogStreamPost;