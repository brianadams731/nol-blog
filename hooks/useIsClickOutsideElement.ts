import React, { useState, useRef, useEffect } from "react";

/*
* @returns: isOutside: boolean - boolean value representing whither click event was outside element
* @returns: element: ref - ref that is used to place on dom element you want to check if click is inside of
* @returns: clickEvent: event - the click event that is being observed to check if click is outSide of element
*/
// TODO FIX THIS ANY!!!

const useIsClickOutsideElement = (): [isOutSide:boolean, clickEvent:any, element:any] =>{
    const [isOutside, setIsOutSide] = useState<boolean>(false);
    const [clickEvent, setClickEvent] = useState<MouseEvent>();
    const element = useRef<HTMLElement>();
    
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