import React from "react";
import AnimatedBox from "../components/AnimatedBox.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HomeButtons from "../components/HomeButtons.jsx";

const HomePage = () => {
  return (
      <section
        className="main"
        style={{ overflow: "hidden", height: "100dvh" }}
      >
        <AnimatedBox length={18} />
        <div className="main__box">
          <Header isHomePage={true} />
          <HomeButtons />
          <Footer />
        </div>
      </section>
  );
};

export default HomePage;
