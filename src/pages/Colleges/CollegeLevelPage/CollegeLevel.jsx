import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../../components/SearchBar/SearchBar";
import styles from "./CollegeLevel.module.css";
import ItemList from "../../../components/ItemList/ItemList";
import HamburgerMenu from "../../../components/Navbar/NavBar";
import loaderImg from "../../../assets/loader.gif";

function CollegeLevel() {

    let { level } = useParams();
    let render = useRef(true);
    let [degrees, setDegrees] = useState([]);
    let [searchValue, setSearchValue] = useState("");
    let [loader, setLoader] = useState(false);

    useEffect(() => {

        async function fetchData() {
            try {

                if (render.current) {
                    render.current = false;
                    setLoader(true);
                    let response = await fetch(`https://maargdarshan-api.vercel.app/colleges/${level}`);
                    let data = await response.json();
                    setLoader(false);
                    setDegrees(data);
                }
            }
            catch (err) {
                console.log(err);
            }
        }

        fetchData();

    }, [level, degrees]);


    function handleChange(e) {
        setSearchValue(e.target.value)
    }

    function viewDegree(data) {
        if (searchValue) {
            let newData = data.filter((d) => { return d.toLowerCase().includes(searchValue.toLowerCase()) });
            return newData;
        }
        else {
            return degrees;
        }
    }

    return (<div className={styles["page"]}>
        <div className={styles["head"]}>
            <HamburgerMenu />
            <SearchBar value={searchValue} handleChange={handleChange} />
        </div>
        {loader?<img src={loaderImg} alt="loaderImg" className={styles["loader"]}/> : ""}
        <ItemList array={viewDegree(degrees)} />

    </div>)
}

export default CollegeLevel;
