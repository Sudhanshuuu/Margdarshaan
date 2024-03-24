import React from "react";
import styles from "./Courses.module.css";
import CourseImg from "../../../assets/course.jpg";
import { useNavigate } from "react-router-dom";

function Courses() {

    let navigate = useNavigate();

    let handleClick = (e) => {
        navigate(`./${e.target.innerText}`)
    }

    return (<div className={styles["box"]}>

            <img src={CourseImg} alt="course" />
    
            <div className={styles["main"]}>
           <div className={styles["main-title"]}>Select a Course -</div>
            <div className={styles["main-content"]}>
 
                <div onClick={handleClick}>Medical</div>
                <div onClick={handleClick}>Law</div>
                <div onClick={handleClick}>Enginerring</div>


                <div onClick={handleClick}>Marine,Navy, Defense</div>
                <div onClick={handleClick}>Fashion & Design</div>
                <div onClick={handleClick}>Humanity</div>


                <div onClick={handleClick}>Agriculture</div>
                <div onClick={handleClick}>Hotel Management</div>
                <div onClick={handleClick}>Pure Science</div>


                <div onClick={handleClick}>Mathematics</div>


            </div>
            </div>
            </div>)
}

export default Courses;