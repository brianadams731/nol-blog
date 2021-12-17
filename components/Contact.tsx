import styles from "../styles/contact.module.css";

import {useState} from "react";
const Contact = ():JSX.Element =>{
    const [name, setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [textBody, setTextBody] = useState<string>("");

    const handelInput = (e,set) =>{
        set(e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.textBox}>
                <h3>Say Hello!</h3>
                <p>I would love to hear from you. What&apos;s on your mind? What are you struggling with? I got you girl. Let&apos;s talk!</p>
            </div>
            <div className={styles.formWrapper}>
                <form className={styles.form}>
                    <input name="name" id="name" type="text" value={name} onChange={(e)=>handelInput(e,setName)} placeholder="Name"/>
                    <input name="email" id="email" type="text" value={email} onChange={(e)=>handelInput(e,setEmail)} placeholder="Email"/>
                    <textarea  id="textBody" value={textBody} onChange={(e)=>handelInput(e,setTextBody)} placeholder="Message"/>
                    <button  type="submit" onClick={(e)=>{
                        e.preventDefault();
                        const reqObj = JSON.stringify({
                            name,
                            email,
                            message:textBody,
                        })
                        
                        setName("");
                        setEmail("");
                        setTextBody("");

                        const data = fetch("https://thoughtgrove.herokuapp.com/portfolio",{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json",
                            },
                            body: reqObj,
                        })
                    }}>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;