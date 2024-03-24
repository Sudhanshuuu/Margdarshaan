import React from "react";
import styles from "./FieldImg.module.css";
import engImg from "../../../assets/eng.jpg";
import medicalImg from "../../../assets/medical.jpg";
import lawImg from "../../../assets/law.jpg";
import navyImg from "../../../assets/navy.jpg";
import fashionImg from "../../../assets/fashion.jpg";
import agroImg from "../../../assets/agro.jpg";
import mathImg from "../../../assets/maths.jpg";
import hotelImg from "../../../assets/hotel.jpg";
import humanityImg from "../../../assets/humanity.jpg";
import scienceImg from "../../../assets/science.jpg";

function FieldImg({field}){
   
    let bgImg;
    if(field === "Enginerring"){
        bgImg=engImg;
    }
    else if(field === "Medical"){
        bgImg = medicalImg;
    }
    else if(field === "Law"){
        bgImg = lawImg;
    }
    else if(field === "Marine,Navy, Defense"){
        bgImg = navyImg;
    }
    else if(field === "Fashion & Design"){
        bgImg = fashionImg;
    }
    else if (field === "Agriculture"){
        bgImg = agroImg;
    }
    else if(field === "Mathematics" ){
        bgImg = mathImg;
    }
    else if(field === "Hotel Management"){
        bgImg = hotelImg;
    }
    else if(field === "Humanity"){
        bgImg = humanityImg;
    }
    else if(field === "Pure Science"){
        bgImg = scienceImg;
    }

    return(<div className={styles["box"]}>
        <div className={styles["overlay"]}>
            <div>{field}</div>
        </div>
        <img src={bgImg} alt="bgImg" />
    </div>)

}

export default FieldImg;