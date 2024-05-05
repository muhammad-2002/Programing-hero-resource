import { Helmet } from "react-helmet";
import Hero from "../Layouts/Hero";
import wave from "../assets/wave.svg";

const Home = () => {
  return (
    <div className="flex relative justify-center flex-col items-center min-h-[calc(100vh-116px)]">
      <Helmet>
        <title>ByteBlaze | Home</title>
      </Helmet>
      <Hero></Hero>
      <img className="w-full absolute bottom-0 " src={wave}></img>
    </div>
  );
};

export default Home;
