import Image from "next/image";
import PropTypes from "prop-types";
import styles from "../styles/imageOverlap.module.css";

const ImageOverlap = ({imgOne, imgTwo, height, width}) =>{
    return (
        <div className={styles.wrapper} style={{height:`${height+15}px`, width:`${width+15}px`}}>
            <div className={styles.imgTwo} style={{height:`${height+15}px`, width:`${width+15}px`}}>
                <Image src={imgTwo} height={height} width={width} objectFit="cover" alt="background"/>
            </div>
            <div className={styles.imgOne} style={{height:`${height+15}px`, width:`${width+15}px`}}>
                <Image src={imgOne} height={height} width={width} objectFit="cover" alt="foreground"/>
            </div>
        </div>
    )
}

ImageOverlap.defaultProps = {
    height:450,
    width:300,
}

ImageOverlap.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    imgOne: PropTypes.string,
    imgTwo: PropTypes.string
}

export default ImageOverlap;