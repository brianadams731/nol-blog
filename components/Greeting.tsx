import ImageOverlap from "./ImageOverlap";
import styles from "../styles/greeting.module.css";

const Greeting = ():JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <ImageOverlap 
                    imgTwo="https://source.unsplash.com/random/325x400/?garden"
                    imgOne="/media/About 1.jpg"
                />
            </div>
            <div className={styles.textBox}>
                <h3>
                    Hi There! I&apos;m Naka
                </h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis. Mi proin sed libero enim sed faucibus turpis. Habitasse platea dictumst quisque sagittis purus. Quam elementum pulvinar etiam non quam lacus suspendisse.
                </p>
            </div>
        </div>
    )
}

export default Greeting;