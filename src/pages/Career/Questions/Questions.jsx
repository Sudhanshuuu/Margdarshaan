import React, { useRef, useState, useEffect } from "react";
import QuestCard from "../QuestCard/QuestCard";
import "./Questions.css";

function Questions({ onUpdatedAns, ans }) {

    let slideRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [slideWidth, setSlideWidth] = useState(window.innerWidth<750 ? 1 : 0.8);
    const [clickedBtn, setClickedBtn] = useState(0);

    
    useEffect(() => {
        const handleResize = () => {
            setSlideWidth(()=>{return window.innerWidth<750 ? 1 : 0.8});
            setWindowWidth(window.innerWidth);
            setClickedBtn(0);
            
            slideRef.current.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleChange(e) {
        let updatedAns = [...ans];
        updatedAns[e.target.name - 1] = parseInt(e.target.value);
        onUpdatedAns(updatedAns);

        const currentScrollY = window.scrollY;
        window.scrollTo({
            top: currentScrollY + 110,
            behavior: 'smooth',
        });

    }

    function handleClick(num) {

        slideRef.current.scrollTo({
            left: windowWidth * slideWidth * num,
            behavior: 'smooth'
        });

        setClickedBtn(num);

    }


    return (<div>

        <div ref={slideRef} className={"main-questions"}>
            <div>
                <QuestCard question="Test the Quality of parts of shipment" id="1" handleChange={handleChange} />
                <QuestCard question="Study the structure of the human body" id="2" handleChange={handleChange} />
                <QuestCard question="Conduct a musical choir" id="3" handleChange={handleChange} />
                <QuestCard question="Give career guidance to people" id="4" handleChange={handleChange} />
                <QuestCard question="Sell restaurant franchises to indiviuals" id="5" handleChange={handleChange} />
                <QuestCard question="Generate the monthly payroll checks for an office" id="6" handleChange={handleChange} />
                <QuestCard question="Lay brick or tile" id="7" handleChange={handleChange} />
                <QuestCard question="Study animal behaviour" id="8" handleChange={handleChange} />
                <QuestCard question="Direct a play" id="9" handleChange={handleChange} />
                <QuestCard question="Do volunteer work at non profit organization" id="10" handleChange={handleChange} />
                <QuestCard question="Sell Merchandise at department store" id="11" handleChange={handleChange} />
                <QuestCard question="Inventory supplies using a hand-held computer" id="12" handleChange={handleChange} />
            </div>
            <div>
                <QuestCard question=" Work on an offshore oil-drilling rig" id="13" handleChange={handleChange} />
                <QuestCard question=" Do research on plants or animals" id="14" handleChange={handleChange} />
                <QuestCard question=" Design artwork for magazines" id="15" handleChange={handleChange} />
                <QuestCard question="Help people who have problems with drugs or alcohol" id="16" handleChange={handleChange} />
                <QuestCard question=" Manage the operations of a hotel" id="17" handleChange={handleChange} />
                <QuestCard question="Use a computer program to generate customer bills" id="18" handleChange={handleChange} />
                <QuestCard question="Assemble electronic parts" id="19" handleChange={handleChange} />
                <QuestCard question="Develop a new medical treatment or procedure" id="20" handleChange={handleChange} />
                <QuestCard question="Write a song" id="21" handleChange={handleChange} />
                <QuestCard question="Teach an individual an exercise routine" id="22" handleChange={handleChange} />
                <QuestCard question="Operate a beauty salon or barber shop" id="23" handleChange={handleChange} />
                <QuestCard question=" Maintain employee records" id="24" handleChange={handleChange} />
            </div>
            <div>
                <QuestCard question="Operate a grinding machine in a factory" id="25" handleChange={handleChange} />
                <QuestCard question=" Conduct biological research" id="26" handleChange={handleChange} />
                <QuestCard question=" Write books or plays" id="27" handleChange={handleChange} />
                <QuestCard question="Help people with family-related problems" id="28" handleChange={handleChange} />
                <QuestCard question="Manage a department within a large company" id="29" handleChange={handleChange} />
                <QuestCard question="Compute and record statistical and other numerical data" id="30" handleChange={handleChange} />
                <QuestCard question="Fix a broken faucet" id="31" handleChange={handleChange} />
                <QuestCard question="Study whales and other types of marine life" id="32" handleChange={handleChange} />
                <QuestCard question="Play a musical instrument" id="33" handleChange={handleChange} />
                <QuestCard question="Supervise the activities of children at a camp" id="34" handleChange={handleChange} />
                <QuestCard question="Manage a clothing store" id="35" handleChange={handleChange} />
                <QuestCard question="Operate a calculator" id="36" handleChange={handleChange} />
            </div>
            <div>
                <QuestCard question="Assemble products in a factory" id="37" handleChange={handleChange} />
                <QuestCard question="Work in a biology lab" id="38" handleChange={handleChange} />
                <QuestCard question="Perform stunts for a movie or television show" id="39" handleChange={handleChange} />
                <QuestCard question=" Teach children how to read" id="40" handleChange={handleChange} />
                <QuestCard question="Sell houses" id="41" handleChange={handleChange} />
                <QuestCard question=" Handle customers' bank transactions" id="42" handleChange={handleChange} />
                <QuestCard question="Install flooring in houses" id="43" handleChange={handleChange} />
                <QuestCard question=" Make a map of the bottom of an ocean" id="44" handleChange={handleChange} />
                <QuestCard question=" Design sets for plays" id="45" handleChange={handleChange} />
                <QuestCard question=" Help elderly people with their daily activities" id="46" handleChange={handleChange} />
                <QuestCard question="Run a toy store" id="47" handleChange={handleChange} />
                <QuestCard question="Keep shipping and receiving records" id="48" handleChange={handleChange} />
            </div>
        </div>
        <div className="carrer-que-btns">
            <div>
                Step {clickedBtn+1} of 4
            </div>
            <div>
                <button onClick={() => { handleClick(0) }} className={clickedBtn === 0 ? 'clicked-que-btn' : ' '}></button>
                <button onClick={() => { handleClick(1) }} className={clickedBtn === 1 ? 'clicked-que-btn' : ' '}></button>
                <button onClick={() => { handleClick(2) }} className={clickedBtn === 2 ? 'clicked-que-btn' : ' '}></button>
                <button onClick={() => { handleClick(3) }} className={clickedBtn === 3 ? 'clicked-que-btn' : ' '}></button>
            </div>
        </div>
    </div>);

}

export default Questions;