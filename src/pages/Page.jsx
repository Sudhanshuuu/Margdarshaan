import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import CollegeOption from "./Colleges/CollegeOptionPage/CollegeOption";
import CollegeLevel from "./Colleges/CollegeLevelPage/CollegeLevel";
import Colleges from "./Colleges/CollegesPage/Colleges";
import Career from "./Career/Career";
import Answers from "./Career/Answers/Answers";
import Courses from "./Courses/Course/Courses";
import Field from "./Courses/Field/Field";


function Page() {
    return (<Routes>
        <Route element={<Home />} path="/" />

        <Route element={<Career />} path="/career" />
        <Route element={<Answers />} path="/career/result" />

        <Route element={<CollegeOption />} path="/colleges" />
        <Route element={<CollegeLevel />} path="/colleges/:level" />
        <Route element={<Colleges />} path="/colleges/:level/:programme" />

        <Route element={<Courses />} path="/courses" />
        <Route element={<Field/>} path="/courses/:field" />

    </Routes>)
}

export default Page;