import { useState,useEffect, useRef } from "react";

// @params: breakPoint: integer - Number representing which value that the view port needs to be <= to set showMobile true
// @returns: boolean: bool value that represents if window is <= breakpoint

interface IWindowSize{
    width:number,
    height:number
}

const useShowMobile = (breakPointArg:number):boolean =>{
    const [showMobile,setShowMobile] = useState<boolean>();
    const [windowSize,setWindowSize] = useState<IWindowSize>();
    const breakPoint = useRef<number>(breakPointArg)

    const windowResize = () =>{
        const wSize = getWindowSize();
        setWindowSize(wSize)
    }
    
    const getWindowSize = ():IWindowSize =>{
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }

    useEffect(()=>{
        windowResize();
        window.addEventListener('resize', windowResize)
        setShowMobile(window.innerWidth <= breakPoint.current)
        return () =>{
            window.removeEventListener('resize', windowResize)
        }
        //eslint-disable-next-line
    },[breakPoint])


    useEffect(()=>{
        if(windowSize!==undefined){
            setShowMobile(windowSize.width <= breakPoint.current)
        }
    },[windowSize, breakPoint])

    return showMobile;
}

export default useShowMobile;