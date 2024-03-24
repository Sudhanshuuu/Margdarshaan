import React from "react";
import styles from "./MessageBox.module.css";

function MessageBox(props) {
    return (<div className={styles[props.name]}>
        {props.value}
    </div>)
}

export default MessageBox;