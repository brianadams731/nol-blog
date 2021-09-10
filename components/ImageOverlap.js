import Image from "next/image";

import styles from "../styles/imageOverlap.module.css";

const ImageOverlap = ({imgOne, imgTwo}) =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgTwo}>
                <Image src={imgTwo} layout="fill" alt="under"/>
            </div>
            <div className={styles.imgOne}>
                <Image src={imgOne} layout="fill" alt="over"/>
            </div>
        </div>
    )
}

export default ImageOverlap;