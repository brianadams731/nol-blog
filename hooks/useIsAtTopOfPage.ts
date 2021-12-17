import {useState ,useEffect } from "react";

// @ returns: atTop: boolean - boolean value whither or not viewport is at the top of the page

const useIsAtTopOfPage = ():boolean =>{
    const [atTop, setAtTop] = useState<boolean>()

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