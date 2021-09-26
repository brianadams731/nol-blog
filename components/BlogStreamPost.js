import styles from "../styles/blogStreamPost.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogStreamPost = ({data}) =>{
    return (
        <div className={styles.wrapper} key={"PLACEHOLDER"}>
            <Image width={250} height={250} src="https://source.unsplash.com/random/300x300" objectFit="cover" alt="blogItem"/>
            <div className={styles.textBox}>
                <h2 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <p className={styles.description}>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                <Link href={"/"} ><h6 className={styles.readMore}>READ MORE</h6></Link>
            </div>
        </div>
    )
}

export default BlogStreamPost;