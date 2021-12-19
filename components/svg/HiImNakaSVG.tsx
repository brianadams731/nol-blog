import styles from "../../styles/hiImNakaSVG.module.css"

import useElementInViewport from "../../hooks/useElementInViewport";
import {motion} from "framer-motion";

interface Props{
    svgColor:string;
    svgWidth?:string;
}

const HiImNakaSVG = ({svgColor,svgWidth}:Props):JSX.Element =>{

    const [element,inView] = useElementInViewport<HTMLDivElement>(true,.5);
    
    const variants = {
        initial:{
            pathLength:0,
        },
        
        hHi:{
            pathLength:1,
            transition:{
                duration:.5,
                delay:0,
            }        
        },iHi:{
            pathLength:1,
            transition:{
                duration:.3,
                delay:.5,
            }        
        },bangHi:{
            pathLength:1,
            transition:{
                duration:.3,
                delay:.8,
            }        
        },

        iIm:{
            pathLength:1,
            transition:{
                duration:.6,
                delay:1.5,
            }        
        },lineIm:{
            pathLength:1,
            transition:{
                duration:.1,
                delay:2.2,
            }        
        },mIm:{
            pathLength:1,
            transition:{
                duration:.7,
                delay:2.3,
            }        
        },

        nNaka:{
            pathLength:1,
            transition:{
                duration:.5,
                delay:3.2,
            }        
        },akNaka:{
            pathLength:1,
            transition:{
                duration:.6,
                delay:3.7,
            }        
        },kaNaka:{
            pathLength:1,
            transition:{
                duration:.7,
                delay:4.3,
            }        
        },


        circleInitial:{
            scale:0,
        },
        iCircle:{
            scale:1,
            transition:{
                duration:.15,
                delay:.8,
            }
        },bangCircle:{
            scale:1,
            transition:{
                duration:.15,
                delay:1,
            }
        }
    }

    return (
        <div className={styles.wrapper} ref={element}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.02 0.01 656.24 215.03" stroke={svgColor} style={{width:svgWidth?svgWidth:"75%"}}>
            {/*H*/} <motion.path variants={variants} initial="initial" animate={inView?"hHi":""} d="M90.28,234.15A342.59,342.59,0,0,1,101,308.35c.54,14.53,1.29,29.14-.26,43.63-1.31,12.25-4.35,31.66-14.92,39.77A8.43,8.43,0,0,1,78,393.36a8.76,8.76,0,0,1-4.8-5,26.67,26.67,0,0,1-1.61-11.95c.64-8.5,4.43-16.47,8.17-24,9.14-18.4,21.64-35.13,34.7-50.9L130.77,280c6.21-8.2,14-15.91,18.77-25.32,2.75-5.43,6.57-16.5,2.57-22.24-5.85-8.38-13.07,20-13.85,23.64a224.69,224.69,0,0,0-3.73,28.44l-1,129.7" transform="translate(-69.49 -201.18)" strokeWidth={"4px"} fill="none" />
            {/*i*/} <motion.path variants={variants} initial="initial" animate={inView?"iHi":""} d="M164.49,301.55s-30,123.24,41.53,8.17" transform="translate(-69.49 -201.18)" strokeWidth={"4px"} fill="none"/>
            {/*!*/} <motion.path variants={variants} initial="initial" animate={inView?"bangHi":""} d="M236,252.19s-15.32,66.72-18.72,88.17" transform="translate(-69.49 -201.18)" strokeWidth={"4px"} fill="none"/>    
            {/*I*/} <motion.path variants={variants} initial="initial" animate={inView?"iIm":""} d="M291.47,243.68c23.18-7,46.38-13.9,69.44-21.28-11.45,3.66-23.87,5.31-33.26,13.56-5.33,4.69-6.29,11.5-7.07,18.14-1.87,15.86-3.37,31.77-5.18,47.65l-7,61.69-.59,5.18L280.91,373l47.32-7.15" transform="translate(-69.49 -201.18)" strokeWidth={"4px"} fill="none"/>
            {/*'*/} <motion.path variants={variants} initial="initial" animate={inView?"lineIm":""} d="M355.13,283.51s2,6.47,0,15.66" transform="translate(-69.49 -201.18)" strokeWidth={"4px"} fill="none"/>
            {/*m*/} <motion.path variants={variants} initial="initial" animate={inView?"mIm":""} d="M378.53,286.74s-3,62.12-.12,80.71a.1.1,0,0,0,.2,0c.69-6.74,6.25-57.58,20.08-87.34,0,0,7.93-14.9,6.4,3.4,0,0-4.86,53.28-4.6,72.43,0,0,13.28-91.15,22-15.58" transform="translate(-69.49 -201.18)" strokeWidth={"4px"} fill="none"/>
            {/*N*/} <motion.path variants={variants} initial="initial" animate={inView?"nNaka":""} d="M472.74,259.43s-11,62-5.1,118.46c0,0,8.68-125.1,19.4-150.89,1.06-2.53,4-12.23,8.52-9.38a5.84,5.84,0,0,1,1.86,2.35c4.67,9.08,5.05,21.44,6.15,31.44,4.44,40.22,7,80.82,17.78,120a59.87,59.87,0,0,0,6.11,15.26,5.37,5.37,0,0,0,2.47,2.47c6.41,2.36,5.8-20.31,5.82-23.26.32-36.51,1.51-73,2.33-109.47l.28-12.56" transform="translate(-69.49 -201.18)" strokeWidth={"4px"} fill="none"/>
            {/*ak*/}<motion.path variants={variants} initial="initial" animate={inView?"akNaka":""} d="M577.94,303.21c-17.33-13.85-28.76,20.94-28.32,33a7.09,7.09,0,0,0,.66,3.12,2.9,2.9,0,0,0,2.58,1.62,4.14,4.14,0,0,0,2.29-1.25,46.16,46.16,0,0,0,7.69-9.68,232.75,232.75,0,0,0,17.86-33.63,108.79,108.79,0,0,0-2.25,35.07c.31,2.84.7,8.18,3.77,9.63,3.75,1.78,7.92-3.17,10-5.58,13-14.9,22.45-33.32,30.18-51.33,7.16-16.66,13.68-33.76,17.5-51.53,1.65-7.67,4.38-17.71,2.94-25.55-1.39-7.62-6.88-2.45-9.51,1.52,0,0-32.94,45.3-27.83,180.69" transform="translate(-69.49 -201.18)" strokeWidth={"4px"} fill="none"/> 
            {/*ka*/}<motion.path variants={variants} initial="initial" animate={inView?"kaNaka":""} d="M630.53,303.21s-8.68,31-36.25,59.11c0,0,38.81-32.68,74.55-44.94.5-.17,1.56-3.37,1.82-3.86a38.73,38.73,0,0,1,6-8.57c5.33-5.6,13.4-8.44,20.61-4.46-4.32-3.05-10.45-2.42-15,.3s-7.73,7.17-10.44,11.71a48.54,48.54,0,0,0-6.4,15.57c-.66,3.49-1.11,10.51,2.8,12.48,6.65,3.34,15.72-10.9,18.47-15.19,6.06-9.43,9.49-20.26,12-31.1A187.66,187.66,0,0,0,695,314.74c-.73,6.41-3.08,31.55,10.56,24.18,8.55-4.61,13.8-17.06,18.15-25.19" transform="translate(-69.49 -201.18)" strokeWidth={"4px"} fill="none"/>
            
            {/*i*/} <motion.circle variants={variants} initial="circleInitial" animate={inView?"iCircle":""} cx="98.01" cy="83.77" r="3.55" fill={svgColor} />
            {/*!*/} <motion.circle variants={variants} initial="circleInitial" animate={inView?"bangCircle":""} cx="144.21" cy="155.77" r="3.55" fill={svgColor} />
            </svg>
        </div>
    )
}


export default HiImNakaSVG;