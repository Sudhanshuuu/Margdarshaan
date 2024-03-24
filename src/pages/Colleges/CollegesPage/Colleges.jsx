import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import HamburgerMenu from "../../../components/Navbar/NavBar";
import SearchBar from "../../../components/SearchBar/SearchBar";

import styles from "./Colleges.module.css";
import collegeIcon from "../../../assets/collegePng.png";
import loaderImg from "../../../assets/loader.gif";


function Colleges() {

    let render = useRef(true);
    let { level, programme } = useParams();
    let [colleges, setColleges] = useState([]);
    let [loader, setLoader] = useState(false);
    let [searchValue, setSearchValue] = useState("");
    let [index, setIndex] = useState(0);

    useEffect(() => {

        async function fetchData() {
            try {

                if (render.current) {
                    render.current = false;
                    setLoader(true);
                    let response = await fetch(`https://maargdarshan.onrender.com/colleges/${level}/${programme}`);
                    let data = await response.json();
                    setLoader(false);
                    setColleges(data);
                }
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData();

    }, [level, colleges, programme]);

    function viewCollege(val) {

        let customSort = (a, b) => {
            if ((a.name.slice(0, searchValue.length).toLowerCase()) === (searchValue.toLowerCase())
                && (b.name.slice(0, searchValue.length).toLowerCase()) !== (searchValue.toLowerCase())) {
                return -1;
            }
            else if ((a.name.slice(0, searchValue.length).toLowerCase()) !== (searchValue.toLowerCase())
                && (b.name.slice(0, searchValue.length).toLowerCase()) === (searchValue.toLowerCase())) {
                return 1;
            }
            else {
                return (a.name.slice(0, searchValue.length).toLowerCase()).localeCompare((b.name.slice(0, searchValue.length).toLowerCase()))
            }

        }

        if (!val) {
            let newArray = colleges.slice(index, index + 30);
            return newArray;
        }
        else {
            let newArray = colleges.filter((d) => {
                return d.name.toLowerCase().includes(searchValue.toLowerCase())
            }).sort(customSort);

            return newArray;
        }
    }


    function buttonArray() {
        if (!searchValue) {
            let btnArray = [];
            let btnsLength = Math.ceil(colleges.length / 30);
            for (let i = 0; i < btnsLength; i++) {
                btnArray.push(i + 1);
            }
            return btnArray;
        }
        else {
            let btnArray = [];
            return btnArray;
        }
    }

    function handleClick(e) {
        setIndex((parseInt(e.target.innerText) - 1) * 30);
    }

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    return (<div className={styles["page"]}>

        <div className={styles["page-head"]}>
            <HamburgerMenu />
        </div>

        <div className={styles["page-content"]}>

            <p className={styles["intro"]}>{programme}</p>
            <div className={styles["filter"]}>
                <SearchBar value={searchValue} handleChange={handleChange} />
                <button>Search</button>
            </div>
            <div className={styles["colleges"]}>
                <div className={styles["colleges-head"]}>
                    <div>INDEX</div>
                    <div>COLLEGES</div>
                    <div>PROGRAMME</div>
                    <div>DURATION</div>
                    <div>DEPARTMENT</div>
                    <div>SYSTEM</div>
                </div>
                {loader ? <img src={loaderImg} alt="loaderImg" className={styles["loader"]} /> : ""}
                {viewCollege(searchValue).map((c, key) => {
                    return <div key={key} className={styles["colleges-content"]}>
                        <div>{key + index + 1}</div>
                        <div>
                            <img src={collegeIcon} alt="collegeIcon" />
                            {c.name}
                        </div>
                        <div>{c.programme}</div>
                        <div>{c.duration_year}</div>
                        <div>{c.department}</div>
                        <div>{c.system}</div>
                    </div>
                })}

            </div>
            <div className={styles["btns"]}>{buttonArray().map((btn, index) => { return <button key={index} onClick={handleClick}>{btn}</button> })}</div>

        </div>
    </div>)

}



export default Colleges;