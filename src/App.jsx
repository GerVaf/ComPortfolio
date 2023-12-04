import React from "react";
import Hero from "./pages/Hero";
import Body from "./pages/Body";
import Test from "./pages/Test";
import Nav from "./pages/Nav";
import Main from "./pages/Main";
import ChangeSection from "./pages/ChangeSection";
import ScrollImg from "./pages/ScrollImg";

const App = () => {
  return (
    <div className="h-[700vh] bg-[rgb(21,21,21)] scrollbar-none">
      <div className=" relative z-0">
        <Nav />
        <Main />
        <Hero />
        <Body />
        <ChangeSection />
        {/* <Changes /> */}
        <Test />
      </div>
      <ScrollImg />
    </div>
  );
};

export default App;
