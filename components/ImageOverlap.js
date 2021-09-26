import Image from "next/image";

import styles from "../styles/imageOverlap.module.css";

const ImageOverlap = ({imgOne, imgTwo}) =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgTwo}>
                <Image src={imgTwo} height={400} width={300} objectFit="cover" alt="under"/>
            </div>
            <div className={styles.imgOne}>
                <Image src={imgOne} height={400} width={300} objectFit="cover" alt="over"/>
            </div>
        </div>
    )
}

export default ImageOverlap;