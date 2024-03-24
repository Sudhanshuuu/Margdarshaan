import React from "react";
import styles from "./Card.module.css";
import img from "../../assets/degree2.png";
import { useNavigate } from "react-router-dom";


function Card(props) {

    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`./${props.value}`);
    }

    return (<div className={styles["card"]} onClick={handleNavigate}>
        <img src={img} alt="DegreeImg" />
        {props.value}
    </div>)
}

export default Card;