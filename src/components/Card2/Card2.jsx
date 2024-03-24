import React from "react";
import examIcon from "../../assets/exam.png";
import styles from "./Card2.module.css";

function Card2({ val, field}) {

    return (<div className={styles['card']} id={styles[`${field}`]}>
            <div>  <img src={examIcon} alt="icon" />{val.name}</div>
            <div>{val.purpose}</div>
            <div>{val.Eligiblity}</div>
            <div>{val.ApplicationMode}</div>
            <div><a href={val.source}>{val.source}</a></div>
        </div>)
}

export default Card2;