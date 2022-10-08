import React from "react";
import Header from "./../../components/Header/Header";
import Banner from "./../../components/Banner/Banner";
import Trends from "./../../components/Trends/Trends";
import Menu from "./../../components/Menu/Menu";
import Benefits from "./../../components/Benefits/Benefits";
import Review from "./../../components/Review/Review";
import Footer from "./../../components/Footer/Footer";

const MainPage = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Trends/>
            <Menu/>
            <Benefits/>
            <Review/>
            <Footer/>
        </>
    );
};

export default MainPage;