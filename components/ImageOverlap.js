import Image from "next/image";

import styles from "../styles/imageOverlap.module.css";

const ImageOverlap = ({imgOne, imgTwo}) =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgTwo}>
                <div className={styles.imgWrap}>
                    <Image src={imgTwo} layout="fill" alt="under"/>
                </div>
            </div>
            <div className={styles.imgOne}>
                <div className={styles.imgWrap}>
                    <Image src={imgOne} layout="fill" alt="over"/>
                </div>
            </div>
        </div>
    )
}

export default ImageOverlap;