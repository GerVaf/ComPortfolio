import React from "react";
import Hero from "./pages/Hero";
import Body from "./pages/Body";
import Changes from "./pages/Changes";
import Test from "./pages/Test";

const App = () => {
  return (
    <div className="h-[700vh] bg-[rgb(21,21,21)] scrollbar-none">
      <Hero />
      <Body />
      <Changes />
      {/* <Test/> */}
    </div>
  );
};

export default App;
