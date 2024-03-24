import React from "react";
import styles from "./QuestCard.module.css";

function QuestCard(props) {
    return (<div className={styles["card"]}>
        <label>{props.question}</label>
        <div>
            <div>Inaccurate</div>

            <input type="radio" name={props.id} value="1" onChange={props.handleChange}/>
            <input type="radio" name={props.id} value="2" onChange={props.handleChange}/>
            <input type="radio" name={props.id} value="3" onChange={props.handleChange}/>
            <input type="radio" name={props.id} value="4" onChange={props.handleChange}/>
            <input type="radio" name={props.id} value="5" onChange={props.handleChange}/>

            <div>Accurate</div>
        </div>
    </div>);
}

export default QuestCard;