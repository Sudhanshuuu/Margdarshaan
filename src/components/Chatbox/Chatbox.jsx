import React, { useEffect, useState } from "react";
import styles from "./Chatbox.module.css";
import MessageBox from "../MessageBox/MessageBox.jsx";

function Chatbox() {

    let [value, setValue] = useState("");
    let [message, setMessage] = useState(null);
    let [loader, setloader] = useState(false);
    let [previousChats, setPreviousChats] = useState([]);

    const getMessages = async () => {
        let options = {
            method: "POST",
            body: JSON.stringify({
                message: value
            }),
            headers: {
                "Content-Type": "application/json",

            }
        }

        try {
            setloader(true);
            let response = await fetch("https://maargdarshan.onrender.com/chatbox", options);
            const data = await response.text();
            setMessage(data);
        }
        catch (err) {
            console.error(err);
        }
    }


    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        getMessages();
    }

    useEffect(() => {
        if (message) {
            setloader(false);
            setPreviousChats((prev) => ([...prev, {
                role: "user",
                content: value
            },
            {
                role: "assistant",
                content: message
            }]))
            setMessage(null);
            setValue("");
        };
    }, [message, value])





    return (<div className={styles["box"]}>
        <div className={styles["display"]}>
            {previousChats.map((prevChat, index) => { return <MessageBox key={index} value={prevChat.content} name={prevChat.role} /> })}
            {loader?<MessageBox  value={"..."} name="loader" />: "" }
        </div>
        <form className={styles["form"]} onSubmit={handleSubmit}>
            <input type="text" placeholder="How may I help you? Ask me any doubts" value={value} onChange={handleChange} />
        </form>
    </div>)
}

export default Chatbox;