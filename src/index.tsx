import * as React from "react";
import "./index.css"
import { createRoot } from "react-dom/client";
import header from "./assets/Header.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import Committe from "./pages/Committe";
import Contact from "./pages/Contact";
import Venue from "./pages/Venue";
import CallForPaper from "./pages/CallForPaper";
import ImportantDates from "./pages/ImportantDates";
import Submission from "./pages/Submission";
import Registraton from "./pages/Registration";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <div className="header">
            <img src={header} width="100%" />
            <NavBar/>
            <Marquee content="Stay Tuned"/>
        </div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/committe" element={<Committe/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/venue" element={<Venue/>}/>
            <Route path="/papers" element={<CallForPaper/>}/>
            <Route path="/dates" element={<ImportantDates/>}/>
            <Route path="/submission" element={<Submission/>}/>
            <Route path="/registration" element={<Registraton/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
);
