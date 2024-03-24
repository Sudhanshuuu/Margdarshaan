import React from "react";
import underGrad from "../../../assets/underGrad.png";
import postGrad from "../../../assets/postGrad.png";
import styles from "./Option.module.css";
import { useNavigate } from "react-router-dom";

function CollegeOption() {

    let navigate = useNavigate();

    return (<div className={styles["option"]}>
        <div  className={styles["heading"]}><span>Choose Yo</span><span>ur Degree</span></div>
        <div className={styles["body"]}>

            <div className={styles["box"]}>

                <img src={postGrad} alt="postGrad" />
                <div>Post Graduate</div>
                <p>Postgraduate education, graduate education, or grad school consists of academic or professional degrees,
                    certificates, diplomas, or other qualifications usually pursued by post-secondary students who have earned
                    an undergraduate degree. Ex - M.Tech , etc</p>
                <button onClick={()=>{navigate("/colleges/postGrad")}}>View</button>

            </div>
            <div className={styles["box"]}>

                <img src={underGrad} alt="underGrad" />
                <div>Under Graduate</div>
                <p>
                    Undergraduate education is education conducted after secondary education and before postgraduate education.
                    It typically includes all postsecondary programs up to the level of a bachelor's degree. Ex - B.Tech , etc
                </p>
                <button  onClick={()=>{navigate("/colleges/underGrad")}}>View</button>
            </div>
        </div>
    </div>)
}

export default CollegeOption;