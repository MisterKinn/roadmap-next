"use client";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/style.css";

import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import MobileHome from "../components/mobile/Home";
import MobileAbout from "../components/mobile/About";
import MobilePortfolio from "../components/mobile/Portfolio";
import MobileSkills from "../components/mobile/Skills";
import MobileProfile from "../components/mobile/Profile";
import MobileBanner from "../components/mobile/Banner";
import MobileFooter from "../components/mobile/Footer";

export default function App() {
    useEffect(function () {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return (
            <div>
                <MobileHome />
                <MobileAbout />
                <MobilePortfolio />
                <MobileSkills />
                <MobileProfile />
                <MobileBanner />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div>
                <Home />
                <About />
                <Portfolio />
                <Experience />
                <Skills />
                <Profile />
                <Banner />
                <Footer />
            </div>
        );
    }
}
