import {useState ,useEffect } from "react";

// @ returns: atTop: boolean - boolean value whither or not viewport is at the top of the page

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