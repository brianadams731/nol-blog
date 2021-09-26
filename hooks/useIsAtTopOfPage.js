import {useState ,useEffect } from "react";

const useIsAtTopOfPage = () =>{
    const [atTop, setAtTop] = useState()

    useEffect(()=>{
        setAtTop(!window.pageYOffset);

        window.onscroll = () =>{
            setAtTop(!window.pageYOffset);
        }
        return ()=> (window.onscroll = null);
    },[])

    return atTop;
}

export default useIsAtTopOfPage;