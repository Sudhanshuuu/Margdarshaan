import React, { useEffect } from "react";
import Head from "./Head/Head";
import AboutUs from "./AboutUs/AboutUs";
import Service from "./Servics/Service";

import "./Home.css";
import Contact from "./Contact/Contact";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

function Home() {

    useEffect(() => {
        const Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("moveAnimation")
                }
                else {
                    entry.target.classList.remove("moveAnimation")

                }
            })
        })

        const moveHiddenElements = document.querySelectorAll(".moveHidden");
        moveHiddenElements.forEach((el) => { Observer.observe(el) });

        const blurHiddenElements = document.querySelectorAll(".blurHidden");
        blurHiddenElements.forEach((el) => { Observer.observe(el) });

    }, [])



    return (<div className="home">
        <Head />
        <AboutUs />
        <Service />
        <Content />
        <Contact />
        <Footer />
    </div>)
}

export default Home;