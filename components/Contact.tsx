import styles from "../styles/contact.module.css";
import { motion } from "framer-motion";
import useElementInViewport from "../hooks/useElementInViewport";

import {useState} from "react";
const Contact = ():JSX.Element =>{
    const [name, setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [textBody, setTextBody] = useState<string>("");

    const [element,inView] = useElementInViewport<HTMLDivElement>(true,.6);

    const handelInput = (e,set) =>{
        set(e.target.value)
    }

    const variants = {
        initial:{
            y:0,
            opacity:0,
        },
        fadeIn:{
            y:0,
            opacity:1,
            transition:{
                type:"tween",
                duration:.8,
            }
        }
    }
    
    return (
        <motion.div variants={variants} initial={"initial"} animate={inView?"fadeIn":""} className={styles.wrapper} ref={element}>
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
        </motion.div>
    )
}

export default Contact;