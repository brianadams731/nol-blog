import { useState, useRef, useEffect } from "react";

// @returns: isOutside: boolean - boolean value representing whither click event was outside element
// @returns: element: ref - ref that is used to place on dom element you want to check if click is inside of
// @returns: clickEvent: event - the click event that is being observed to check if click is outSide of element

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