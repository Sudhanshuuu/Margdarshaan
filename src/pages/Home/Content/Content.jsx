import React from "react";
import contentImg from "../../../assets/content.jpg";
import styles from "./Content.module.css";

function Content() {


    return (<div className={styles["contentUs"]}>


        <div className="moveHidden">
            <div className={styles["contentUs-content"]}>
                <div className={styles["head"]}>Importance of <span>Carrer Counseling</span></div>
                <div className={styles["body"]}>In India, career counseling is crucial due to the diverse career landscape, competitive 
                education system, and dynamic job market.It helps individuals navigate industry changes, align with global trends, and balance 
                cultural expectations. Additionally, it addresses the unique challenges arising from the socio-economic diversity in the country.
                    <div>
                    Career counseling also supports the growing entrepreneurial culture and assists in bridging the skill gap,
                    ensuring individuals make informed decisions tailored to their aspirations and the evolving professional environment.
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src={contentImg} alt="contentImg" className={styles["contentImg"]} />
        </div>

    </div>)
}


export default Content;