import Image from "next/image";
import PropTypes from "prop-types";
import styles from "../styles/imageOverlap.module.css";

interface Props{
    imgOne:string;
    imgTwo:string;
    height:number;
    width:number;
}

const ImageOverlap = ({imgOne, imgTwo, height, width}:Props):JSX.Element =>{
    return (
        <div className={styles.wrapper} style={{height:`${height+15}px`, width:`${width+15}px`}}>
            <div className={styles.imgTwo} style={{height:`${height+15}px`, width:`${width+15}px`}}>
                <Image priority={true} src={imgTwo} height={height} width={width} objectFit="cover" alt="background"/>
            </div>
            <div className={styles.imgOne} style={{height:`${height+15}px`, width:`${width+15}px`}}>
                <Image priority={true} src={imgOne} height={height} width={width} objectFit="cover" alt="foreground"/>
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