import { useState,useEffect } from "react";

// @params: breakPoint: integer - Number representing which value that the view port needs to be <= to set showMobile true
// @returns: boolean: bool value that represents if window is <= breakpoint

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