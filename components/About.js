import styles from "../styles/about.module.css";

import Image from "next/image"

const About = () =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <Image width={700} height={466} objectFit="cover" src="/media/About 2.jpg"/>
            </div>
            <h3>Hi There! I'm Naka</h3>
            <p>
                I am a creative soul, model, and certified foodie. My goal is to help young millennial women like yourself, become extraordinarily you, believe in your greatness so that you can live your life to the utmost best. As I get older, I have learned that your mindset is the key to finding that bit of extra. What you think about yourself and what you believe, shapes your future, and determines your overall success. I hope that I will help you remove any limiting thoughts and beliefs you have about yourself so that you can become the best version of yourself. Are you ready to get started?
            </p>
            <p>
            I am a big quote junkie! I love reading quotes about everything but the ones I love the most is about your mindset. I haven’t always been this way though, I too had to push through many of my own limiting beliefs to truly realize the greatness within myself. This hasn’t always been easy and there are still moments when I struggle with my thoughts. We all have a negative committee that loves to meet inside our heads, that constantly tries to stop us from pursuing our dreams. That is why I am here to help you silence those thoughts and train your mind to realize that you are far capable of achieving success.
            </p>
        </div>
    )
}

export default About;