import styles from "../styles/intro.module.css";
 import ImageOverlap from "./ImageOverlap";

const Intro = () =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBox}>
                <h3>Hi! I&apos;m Naka</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <button>GET TO KNOW ME</button>
            </div>
            <div className={styles.imgWrapper}>
                <ImageOverlap
                    imgTwo="https://source.unsplash.com/random/350x400/?garden"
                    imgOne="https://source.unsplash.com/random/350x400/?person"
                />
            </div>
        </div>
    )
}

export default Intro;