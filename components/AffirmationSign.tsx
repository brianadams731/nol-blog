import styles from "../styles/affirmationSign.module.css";

import {useState} from "react";

const AffirmationSign = ():JSX.Element =>{
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleChange = (e,set) =>{
        set(e.target.value);
    }

    return(
        <div className={styles.wrapper}>
            <h3>Get the FREE affirmation cards</h3>
            <h5>10 Affirmations for a positive mind &amp; 10 affirmations for self confidence</h5>
            <form className={styles.inputBox}>
                <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={(e)=>handleChange(e,setName)}/>
                <input type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>handleChange(e,setEmail)}/>
                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                    const reqObj = JSON.stringify({
                        name,
                        email,
                    })
                    //console.log(`AFFIRMATION SIGN SUBMIT ${reqObj}`);
                    const data = fetch("",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json",
                        },
                        body: reqObj,
                    })
                }}>GET IT</button>
            </form>
        </div>
    )
}

export default AffirmationSign;