import React from "react";
import styles from "./Contact.module.css";

function Contact() {
    return (<div className={styles["contact"]}>
        <div className={styles["contact-text"]}>
            <div className={styles["contact-text-head"]}>Contact Us</div>
            <div className={styles["contact-text-text"]}>Thank you for reaching out. If you require assistance in career counseling, we are here
                to help. Please feel free to contact us to schedule a consultation.We look forward to assisting you in navigating your
                career path</div>
            <div className={styles["contact-text-info"]}>info@gmail.com</div>
        </div>
        <div className={styles["contact-input"]}>
            <div>
                <div>
                    <input type="text" name="fname" id="fname" placeholder="First Name" />
                </div>
                <div>
                    <input type="text" name="lname" id="lname" placeholder="Last Name" />
                </div>
            </div>
            <div>
                <div>
                    <input type="text" name="email" id="email" placeholder="Email" />
                </div>
                <div>
                    <input type="text" name="sub" id="sub" placeholder="Subject" />
                </div>
                <div>
                    <input type="text" name="message" id="message" placeholder="Message" />
                </div>
            </div>
            <button className={styles["btn"]}>Submit</button>

        </div>
    </div>)
}

export default Contact;