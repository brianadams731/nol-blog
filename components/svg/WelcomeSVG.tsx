import styles from "../../styles/welcomeSVG.module.css";
import {motion} from "framer-motion";

const WelcomeSVG = ():JSX.Element =>{
    const variants = {
        initial:{
            pathLength:0,
        },
        pathOne:{
            pathLength:1,
            transition:{
                duration:2.5,
                delay:0,
            }        
        },
        pathTwo:{
            pathLength:1,
            transition:{
                duration:2.5,
                delay:2.3,
            }        
        },

        pathThree:{
            pathLength:1,
            transition:{
                duration:.5,
                delay:4.8
            }        
        },
        circleInitial:{
            scale:0,
        },
        circleAnimate:{
            scale:1,
            transition:{
                duration:.15,
                delay:5.3
            }
        }
        
    }
    return (
        <div className={styles.wrapper}>
            <svg style={{display:"block"}} fill="none" xmlns="http://www.w3.org/2000/svg" width="2.5in" height="1.22in" viewBox="0 0 646.01 315.57">
                <motion.path variants={variants} initial="initial" animate="pathOne" d="M127.31,137.56c-7.66,31.13-14.29,62.54-20.39,94-11.29,58.27-21.26,117.49-23.46,176.9-.42,11.4-1.06,22.82,2.17,33.91.88,3,2.52,6.47,5.64,7,2.68.43,5.1-1.57,7-3.53C113.08,430.43,123,407.49,132,388.31a634.39,634.39,0,0,0,33.6-89.08q4.26-14.33,7.91-28.83s6.64,79.83,19.58,112.86c0,0,17,43.57,26.55-8.86,0,0,7.15-86.12-6.13-179.74,3.73,26.3,4.84,53.06,8.36,79.43,2.56,19.21,2.13,43.32,6.62,62.19,1.75,7.34,6.47,25.7,16.48,26.23,13,.69,28-12.21,30.72-24.73a9.88,9.88,0,0,0-.21-5.8,6.56,6.56,0,0,0-3.72-3.69,8.41,8.41,0,0,0-6.24.47c-5.38,2.39-9.93,7.38-13.72,11.73-9.2,10.55-14.66,25.4-11.59,39.42.91,4.17,3.17,8.24,6.86,10.4,5.21,3,12,1.59,17.2-1.44,29.2-17,50.31-42.06,65.91-71.65C347,285.25,369.54,248,372,211.05a36.75,36.75,0,0,0-.79-11.7,8,8,0,0,0-1.94-3.85c-1.87-1.81-5-1.76-7.3-.58-5,2.52-9.44,8.83-12.75,13.19-18.67,24.58-27.64,59.65-34.78,88.89-8.49,34.71-15.73,72.33-15,108.17.1,4.89.5,10.06,3.29,14.07,8.71,12.52,24.42-4,30.7-10.71,21.57-22.87,36.28-49.43,46.47-79.15,2.72-7.94,6-16.22,11.47-22.71,4.58-5.43,16.76-14.09,22.14-4.76,1.81,3.14,1.77,7,1.16,10.6a90.65,90.65,0,0,1-2.86,12.79" transform="translate(-80.11 -136.84)" stroke="#fff" strokeWidth="7px"/>
                <motion.path variants={variants} initial="initial" animate="pathTwo" d="M377.67,335.61a190.25,190.25,0,0,0-7.53,46.29c-.26,9-2.53,33.06,9.12,36.91,13.17,4.36,32-23.43,38.54-32.29,10.95-14.74,20.57-30.52,33.09-44-7.86,8.48-15,18.58-18.47,29.72-2.39,7.7-3.61,21.4,2.9,27.53,4.6,4.33,9.47,1.66,13-2.39a74.85,74.85,0,0,0,15-28.65c2.65-9.43,5.56-22.65,3.28-32.31a4.61,4.61,0,0,0-2.73-3.24c-6.77-2.63-14.62,8-12.75,13.94,3.37,10.74,13.13,5.43,16.28-1.65,0,0,10.64,25,52.17,6.32l3.24-41.71s-5.79,64.51-3.65,113.8a1.22,1.22,0,0,0,2.42.17c5.4-29.31,21.44-113.27,31.1-130.56,0,0,12-23.83,10.72-2.13,0,0-7.64,81.78-8,113.9a.78.78,0,0,0,1.55.06c1.41-19.75,4.34-40.69,15.48-56.77,5.79-8.35,10.75-6,13.37,2,4.28,13.13,3.95,28.32,4.11,41.94,0,0,.52,8.25,5.87,4.08,9.2-7.17,17.37-15.84,25.13-24.51,8.38-9.36,19.09-20.4,22.89-32.56a11.43,11.43,0,0,0-.42-8.18c-4.64-10.06-16.42.63-21,5,0,0-22.47,25.78-15.06,47,0,0,15.06,37.78,67.91-38.3" transform="translate(-80.11 -136.84)" stroke="#fff" strokeWidth="7px"/>
                <motion.path variants={variants} initial="initial" animate="pathThree" d="M723.21,252s-22.72,89.36-27.06,137.36" transform="translate(-80.11 -136.84)" stroke="#fff" strokeWidth ="7px"/>
                <motion.circle fill="white" variants={variants} initial="circleInitial" animate="circleAnimate" cx="610.25" cy="285.73" r="5.79" stroke="#fff" strokeWidth="2px"/>
            </svg>
        </div>
    )
}

export default WelcomeSVG;