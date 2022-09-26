import * as React from "react";
import "./index.css"
import { createRoot } from "react-dom/client";
import header from "./assets/Header.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Marquee from "./components/Marquee";

const Home = React.lazy(() => import("./pages/Home"));
const Footer = React.lazy(() => import("./components/Footer"));
const Committe = React.lazy(() => import("./pages/Committe"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Venue = React.lazy(() => import("./pages/Venue"));
const CallForPaper = React.lazy(() => import("./pages/CallForPaper"));
const ImportantDates = React.lazy(() => import("./pages/ImportantDates"));
const Submission = React.lazy(() => import("./pages/Submission"));
const Registration = React.lazy(() => import("./pages/Registration"));
const Organizers = React.lazy(() => import("./pages/Organizers"));
const Accomodation = React.lazy(() => import("./pages/Accomodation"));

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
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/organizers" element={<Organizers/>}/>
            <Route path="/accomodation" element={<Accomodation/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
);
