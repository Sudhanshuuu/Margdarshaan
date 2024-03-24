import React from "react";
import styles from "./Head.module.css";
import Cover from "../../../assets/bgImg2.png";
import Chatbox from "../../../components/Chatbox/Chatbox";

function Head() {
    return (<div className={styles["box"]}>

        <img className={styles["head-bgImg"]} src={Cover} alt="BackgroundImg" />

        <div className={styles["head-body"]}>
            <div className={styles["content"]}>
                <div className={styles["logo"]}>&#169;</div>
                <div className={styles["head"]}>Maargdarshan<div>Career Counselling</div></div>
                <div className={styles["body"]}>
                    As, our world is developing rapidly there is demand of new job every sec. We are
                    here to guide you through this hetic mess and give you a clear pov</div>
                <button>Get Started &#8594;</button>
            </div>
            <div className={styles["chatbox"]}><Chatbox /></div>
        </div>

    </div>)
}

export default Head;