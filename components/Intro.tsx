import Link from "next/link"
import styles from "../styles/intro.module.css";
import ImageOverlap from "./ImageOverlap";
import HiImNakaSVG from "./svg/HiImNakaSVG";

const Intro = ():JSX.Element =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBox}>
                <HiImNakaSVG svgColor="var(--cream)"/>
                
                {/*<h3>Hi! I&apos;m Naka</h3>*/}
                <p>
                    I am the blogger behind No Ordinary Self. My goal is to help you transform your
                    mind for success and become your ultimate best self! I am on the mission to remove any
                    boundaries you and I, create in our minds of who we are and of what we can become.
                </p>
                <p>
                If you are looking for a mindset boost, tips on how to become extraordinary, and develop more
                self-love, look no more. I got you, sis!
                </p>
                <Link href="/story" passHref>
                    <button>GET TO KNOW ME</button>
                </Link>
            </div>
            <div className={styles.imgWrapper}>
                <ImageOverlap
                    imgTwo="https://source.unsplash.com/random/325x400/?garden"
                    imgOne="/media/Main 2.jpg"
                />
            </div>
        </div>
    )
}

export default Intro;