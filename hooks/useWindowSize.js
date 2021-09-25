import {useEffect, useState} from "react";

const getWindowSize = () =>{
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

const useWindowSize = () =>{
    const [windowSize,setWindowSize] = useState();


    const windowResize = () =>{
        setWindowSize(getWindowSize)
    }

    useEffect(()=>{
        setWindowSize(getWindowSize);
        window.addEventListener('resize', windowResize)

        return () =>{
            window.removeEventListener('resize', windowResize)
        }
    },[])

    return windowSize;
}

export default useWindowSize;