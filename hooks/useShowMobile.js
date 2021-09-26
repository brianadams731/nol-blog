import { useState,useEffect } from "react";


const useShowMobile = (breakPoint) =>{
    const [showMobile,setShowMobile] = useState();
    const [windowSize,setWindowSize] = useState();

    const windowResize = () =>{
        setWindowSize(getWindowSize)
    }
    
    const getWindowSize = () =>{
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }

    useEffect(()=>{
        setWindowSize(getWindowSize);
        window.addEventListener('resize', windowResize)
        setShowMobile(window.innerWidth <= breakPoint)
        return () =>{
            window.removeEventListener('resize', windowResize)
        }
    },[])


    useEffect(()=>{
        if(windowSize!==undefined){
            setShowMobile(windowSize.width <= breakPoint)
        }
    },[windowSize])

    return showMobile;
}

export default useShowMobile;