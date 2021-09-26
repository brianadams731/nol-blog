import { useState, useRef, useEffect } from "react";

const useIsClickOutsideElement = () =>{
    const [isOutside, setIsOutSide] = useState(false);
    const [clickEvent, setClickEvent] = useState();
    const element = useRef();
    
    const clicked = (e) =>{
        setClickEvent(e);
        setIsOutSide(element?.current && !element?.current?.contains(e.target));
    }


    useEffect(()=>{
        document.addEventListener("mousedown",clicked);
        return ()=>{
            document.removeEventListener("mousedown",clicked)
        };
    },[element])

    return [isOutside,element, clickEvent];
}

export default useIsClickOutsideElement;