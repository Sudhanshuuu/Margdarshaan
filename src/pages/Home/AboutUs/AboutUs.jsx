import React, { useState } from "react";
import aboutImg from "../../../assets/about.jpg";
import styles from "./AboutUs.module.css";

function AboutUs() {

    let [show, setShow] = useState(false);

    function handleClick() {
        setShow((prev) => (!prev));
    }

    return (<div className={styles["aboutUs"]}>
        <div>
            <img src={aboutImg} alt="aboutImg" className={styles["aboutImg"]} />
        </div>



        <div className="moveHidden">
            <div className={styles["aboutUs-content"]}>
                <div className={styles["head"]}>About <span>Maargdarshan</span></div>
                <div className={styles["body"]}>There is a lack of awareness and information about the various career options available
                    for students after passing out of school in India .Our AI-powered platform offers personalized career guidance and
                    aptitude testing, helping you discover your ideal path while providing insights into colleges and courses across India
                    . Empowering students to make informed, forward-thinking choices.
                    <div className={show ? styles["show"] : styles["hide"]}>
                        In India , There is no culture of visiting a career counsellor in India.Recent surveys say that 93 per cent of the students were
                        aware of less than ten career options, mainly the basic ones like engineering, medicine, law, finance, IT, etc. In
                        contrast, there are more than 600 career options available today.
                        Therefore., the awareness levels of all the available career options for a student need to be increased.
                    </div>
                </div>
                <button className={styles["button"]} onClick={handleClick}>Read More</button>
            </div>

        </div>

    </div>)
}


export default AboutUs;