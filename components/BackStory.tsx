import Image from "next/image";
import styles from "../styles/backStory.module.css";

const BackStory = ():JSX.Element =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.headerWrapper}>
                <h3 className={styles.header}>The Back Story</h3>
            </div>
            <div className={styles.textBox}>
                <p>
                    I never really knew much about mindset and the importance of cultivating a healthy mind. Before getting into this space, I constantly battled with negative thoughts, always comparing myself to others and feeling like I had nothing valuable to offer. The perfectionist in me and professional overthinker usually stops me from reaching new heights. Like most of you who struggled during the pandemic, I fell into a dark hole. I was in such a dark space but with the power of prayer and support from family and friends, I learned how to recondition my mind and focus on the good. 
                </p>
                <p>
                    I know how it feels to be at your lowest and how the thoughts you create can easily become your reality. I have now learned how to feed my mind with good, loving, and kind thoughts. I had to fight for myself and make the little girl in me proud of the woman I am becoming. My biggest fear is reaching the end of my life and feeling like I could have done more, had I tired or had I just believed in myself. This lesson reminded me of the saying, “You are only as good as your thoughts.”
                </p>
                <p>
                I truly hope to inspire and motivate you to become your ultimate best self. Everything starts and ends with your thoughts, you decide how you want your life to be, based on how you see yourself. That is why I started this blog, to help you choose every day to become your no ordinary self. 
                </p>
                <Image priority={true} height={500} width={333}  objectFit="cover" src="/media/Main 2.jpg" alt="" />
            </div>
        </div>
    )
}

export default BackStory;