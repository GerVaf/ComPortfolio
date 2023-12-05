import React from "react";
import Main from "../components/Home/Main";
import Hero from "../components/Home/Hero";
import Body from "../components/Home/Body";
import ChangeSection from "../components/Home/ChangeSection";
import Test from "../components/Home/Test";
import ScrollImg from "../components/Home/ScrollImg";
import ScrollImg2 from "../components/Home/ScrollImg2";
import ScrollImg3 from "../components/Home/ScrollImg3";
import ScrollImg4 from "../components/Home/ScrollImg4";
import BlackOut from "../components/Home/BlackOut";

const Home = () => {
  return (
    <div className=" bg-[rgb(21,21,21)] scrollbar-thin ">
      <div className=" relative z-0">
        <Main />
        <Hero />
        <Body />
        <ChangeSection />
        {/* <Changes /> */}
        <Test />
      </div>
      <ScrollImg />
      <ScrollImg2 />
      <ScrollImg3 />
      <ScrollImg4 />
      <BlackOut />
    </div>
  );
};

export default Home;
