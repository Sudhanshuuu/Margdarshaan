
import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";
import { useSearchParams } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import styles from "./Answers.module.css";
import HamburgerMenu from "../../../components/Navbar/NavBar";

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
);


function Answers() {

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let [searchParams] = useSearchParams();
    let r = searchParams.get("r");
    let i = searchParams.get("i");
    let s = searchParams.get("s");
    let c = searchParams.get("c");
    let e = searchParams.get("e");
    let a = searchParams.get("a");

    let data = {
        labels: ['Realistic', 'Investigative', 'Social', 'Conventional', 'Enterprising', 'Artistic'],
        datasets: [
            {
                data: [r, i, s, c, e, a],
                backgroundColor: ["#FFF1C9", '#F7B7A3', '#EA5F89', '#9B3192', '#57167E', '#2B0B3F']
            }
        ]
    }

    let slideRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [slideNum, setSlideNum] = useState(0);


    function handleClick(num) {
        if (num === 0) {
            slideRef.current.scrollTo({
                left: windowWidth * (slideNum-1),
                behavior: 'smooth'
            });
            setSlideNum(slideNum-1);
        }
        else {
            slideRef.current.scrollTo({
                left: windowWidth * (slideNum+1),
                behavior: 'smooth'
            });
            setSlideNum(slideNum+1);

        }
        console.log(slideNum);
    }


    return (<div className={styles["page"]}>
        <HamburgerMenu />
        <div className={styles["chart"]}><Pie data={data}></Pie></div>
        <div className={styles["sliderBtn"]}>
            <button onClick={() => { handleClick(0) }}> &lt; </button>
            <button onClick={() => { handleClick(1) }}>&gt;</button>
        </div>
        <div className={styles["content"]} ref={slideRef}>
            <div className={styles["slide-content"]} >

                <div >
                    <div>REALISTIC <span className={styles["colorBox"]} id={styles["colorBox1"]}></span></div>
                    <ul>
                        <li>Likes to work with animals, tools, or machines; generally avoids social activities like teaching, healing, and informing others</li>
                        <li>Has good skills in working with tools, mechanical or electrical drawings, machines, or plants and animals</li>
                        <li>Sees self as practical, mechanical, and realistic</li>
                        <li>Career Options - Pilot , Engineer , Mechanic , Facilities manager</li>
                    </ul>
                </div>
                <div>
                    <div>INVESTIGATIVE <span className={styles["colorBox"]} id={styles["colorBox2"]}></span></div>
                    <ul>
                        <li>Likes to study and solve math or science problems; generally avoids leading, selling, or persuading people</li>
                        <li>Is good at understanding and solving science and math problems</li>
                        <li>Sees self as precise, scientific, and intellectual</li>
                        <li>Career Options - Biologist , Mathematician , Computer Programmer , Surveyor , Pharmacist</li>
                    </ul>
                </div>
                <div>
                    <div>ARTISTIC <span className={styles["colorBox"]} id={styles["colorBox3"]}></span></div>
                    <ul>
                        <li>Likes to do creative activities like art, drama, crafts, dance, music, or creative writing; generally avoids highly ordered or repetitive activities</li>
                        <li>Has good artistic abilities -- in creative writing, drama, crafts, music, or art</li>
                        <li>Sees self as expressive, original, and independent.</li>
                        <li>Carrer Options - Graphic Designer , Musician , Book Editor , Art Teacher , Actor</li>
                    </ul>
                </div>
                <div>
                    <div>ENTERPRISING <span className={styles["colorBox"]} id={styles["colorBox4"]}></span></div>
                    <ul>
                        <li>Likes to lead and persuade people, and to sell things and ideas , generally avoids activities that require careful observation and scientific, analytical thinking</li>
                        <li>Values success in politics, leadership, or business and sees self as energetic, ambitious, and sociable</li>
                        <li>Career Options - Sales Manager , Real Estate Agent , School Principal , Attorney , Hotel Manager</li>
                    </ul>
                </div>
                <div>
                    <div>CONVENTIONAL <span className={styles["colorBox"]} id={styles["colorBox5"]}></span></div>
                    <ul>
                        <li>Likes to work with numbers, records, or machines in a set, orderly way generally avoids ambiguous, unstructured activities</li>
                        <li>Is good at working with written records and numbers in a systematic, orderly way</li>
                        <li>Values success in business and sees self as orderly, and good at following a set plan</li>
                        <li>Career Options - Secretary , Bank Teller , HR Consultant</li>
                    </ul>
                </div>
                <div>
                    <div>Social <span className={styles["colorBox"]} id={styles["colorBox6"]}></span></div>
                    <ul>
                        <li>Likes to do things to help people - like, teaching, nursing, or giving first aid, providing information; generally avoids using machines, tools, or animals to achieve a goal</li>
                        <li>Is good at teaching, counseling, nursing, or giving information</li>
                        <li>Values helping people and solving social problems and sees self as helpful, friendly, and trustworthy</li>
                        <li>Career Options - Counselor , Social Worker , Physical Therapist</li>
                    </ul>
                </div>
            </div>
        </div>


    </div>)
}

export default Answers;