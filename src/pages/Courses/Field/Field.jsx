import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Field.module.css";
import HamburgerMenu from "../../../components/Navbar/NavBar";
import FieldImg from "../Component/FieldImg";
import Card2 from "../../../components/Card2/Card2";


function Field() {

    let render = useRef(true);
    let { field } = useParams();
    let [exams, setExams] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {

                if (render.current) {
                    render.current = false;
                    let response = await fetch(`https://maargdarshan.onrender.com/courses/${field}`);
                    let data = await response.json();
                    setExams(data);
                }
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData();
    })

    return (<div className={styles["main"]}>
    <div className={styles["nav-bar"]}><HamburgerMenu/></div>    
        <FieldImg field={field}/>
        <div className={styles["cards"]}>
        {exams.map(( data, index)=>{return <Card2 val={data} key={index} field={field.slice(0,3)} className={styles["card"]}/>})}
        </div>
    </div>);
}

export default Field;