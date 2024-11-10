import AnimatedBox from "../components/AnimatedBox";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeButtons from "../components/HomeButtons";

const HomePage = () => {
  return (
    <>
      <section
        className="main"
        style={{ overflow: "hidden", height: "100dvh" }}
      >
        <AnimatedBox length="18" />
        <div className="main__box">
          <Header isHomePage="true" />
          <HomeButtons />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default HomePage;
