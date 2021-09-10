import styles from "../styles/who.module.css";

import Image from "next/image"
const Who = () =>{
    return (
        <>
            <div className={styles.header}>
                <h3>Who I am</h3>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.textBox}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis.</p>
                    <p>Mi proin sed libero enim sed faucibus turpis. Habitasse platea dictumst quisque sagittis purus. Quam elementum pulvinar etiam non quam lacus suspendisse.</p>
                    <p>Aliquam vestibulum morbi blandit cursus risus. Morbi tristique senectus et netus et malesuada fames. Ullamcorper sit amet risus nullam.</p>
                </div>
                <div className={styles.imgWrapper}>
                    <Image layout="fill" alt="Author"
                    src="https://source.unsplash.com/random/400x250/?plants"/>
                </div>
            </div>
        </>
    )
}

export default Who;