import React, { Component, useContext } from "react";

import Hero from "../Parts/Hero";
import Header from "../Parts/Header";
import MySkills from "../Parts/MySkills";
import PortfolioShowcase from "../Parts/PortfolioShowcase";
import WebsiteProject from "../Parts/WebsiteProject";

import landingPage from "../json/landingPage.json";
import BannerProject from "../Parts/BannerProject";
import AboutMe from "../Parts/AboutMe";
import ContactMeBtn from "../Parts/ContactMeBtn";
import Footer from "../Parts/Footer";
import PamphletShowcase from "../Parts/PamphletShowcase";

export default class LandingPage extends Component {
  componentDidMount() {
    window.title = "Moshe Dayan";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header />
        <Hero />
        <MySkills />
        <PortfolioShowcase data={landingPage.items} />
        <PamphletShowcase
          pamphletData={landingPage.pamphletShowcase}
          pamphletPieceData={landingPage.pamphletPiece}
        />
        <BannerProject data={landingPage.banner} />
        <WebsiteProject data={landingPage.websiteProject} />
        <AboutMe />
        <ContactMeBtn />
        <Footer />
      </>
    );
  }
}
