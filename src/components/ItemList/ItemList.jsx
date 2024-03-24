import React from "react";
import styles from "./ItemList.module.css";
import Card from "../Card/Card";

function ItemList({ array }) {
  return (<div className={styles["item-list"]}>
    {array.map((ele, key) => { return <Card key={key} value={ele} /> })}
  </div>
  )
}

export default ItemList;