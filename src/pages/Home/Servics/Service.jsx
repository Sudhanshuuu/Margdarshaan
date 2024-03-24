import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Service.module.css";

function Service() {

    let navigate = useNavigate();
    let [examContent, setExamContent] = useState("Exams");
    let [collegeContent, setCollegeContent] = useState("Colleges");
    let [careerContent, setCareerContent] = useState("Career");

    function handleCollegeHover() {
        if (collegeContent === "Colleges") {
            setCollegeContent("This option showcases a range of colleges offering programs for both B.Tech and M.Tech graduates.")
        }
        else {
            setCollegeContent("Colleges")
        }
    }

    function handleExamHover() {
        if (examContent === "Exams") {
            setExamContent("This option presents a variety of exams that offer programs suitable for various fields")
        }
        else {
            setExamContent("Exams")
        }
    }
    function handleCarrerHover() {
        if (careerContent === "Career") {
            setCareerContent("This option involves taking an aptitude test and guiding you towards suitable career options")
        }
        else {
            setCareerContent("Career")
        }
    }

    return (<div className={styles["service"]}>
        <div className={styles["head"]}><p>All Of Our Options ~</p></div>
        <div className={styles["grid"]}>
            <div className="blurHidden" onMouseEnter={handleCollegeHover} onMouseLeave={handleCollegeHover}>
                <div className={styles["grid-item3"]} onClick={() => { navigate("./colleges") }}>
                    <p className={collegeContent === "Colleges" ? styles["underlay"] : styles["overlay"]}>{collegeContent}</p>
                </div>
            </div>
            <div className="blurHidden" onMouseEnter={handleExamHover} onMouseLeave={handleExamHover}>
                <div className={styles["grid-item4"]} onClick={() => { navigate("./courses") }}>
                    <p className={examContent === "Exams" ? styles["underlay"] : styles["overlay"]}>{examContent}</p>
                </div>
            </div>
            <div className="blurHidden" onMouseEnter={handleCarrerHover} onMouseLeave={handleCarrerHover}>
                <div className={styles["grid-item2"]} onClick={() => { navigate("./career") }} >
                    <p className={careerContent === "Career" ? styles["underlay"] : styles["overlay"]}>{careerContent}</p>
                </div>
            </div>
        </div>
    </div>)
}

export default Service;