import styles from "../styles/contact.module.css";

import {useState} from "react";
const Contact = () =>{
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [textBody, setTextBody] = useState("");

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
                            textBody,
                        })

                        console.log(`CONTACT FORM SUBMIT: ${reqObj}`);

                        const data = fetch("",{
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