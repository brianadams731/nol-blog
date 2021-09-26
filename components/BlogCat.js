import styles from "../styles/blogCat.module.css";
import Link from "next/link";
import Image from "next/image";

const BlogCat = ({text,url,image}) =>{
    return (
        <Link href={url}>
            <div className={styles.wrapper}>
                <div className={styles.imageWrap}>
                    <Image className={styles.image} height={350} width={240} objectFit="cover" src={image} />
                </div>
                <div className={styles.label}>{text}</div>
            </div>
        </Link>
    )
}

export default BlogCat;