import React from "react";
import styles from "./Footer.module.css";
import instaImg from "../../../assets/insta.png";
import fbImg from "../../../assets/facebook.png";
import ytImg from "../../../assets/youtube.png";

function Footer() {
    return (<div className={styles["footer"]}>
        <div>
            <a href="https://www.instagram.com/"><img src={instaImg} alt="instaIcon" /></a>
            <a href="https://www.facebook.com/"><img src={fbImg} alt="fbIcon" /></a>
            <a href="https://www.youtube.com/"><img src={ytImg} alt="ytIcon" /></a>
        </div>
    </div>)
}

export default Footer;