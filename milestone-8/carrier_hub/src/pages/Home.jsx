import AllJobs from "../components/AllJobs";
import Banner from "../components/Banner";
import SectionHeading from "../components/SectionHeading";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionHeading
        title={"Featured Jobs"}
        paragraph={` Explore thousands of job opportunities with all the information you
        need. Its your future`}
      ></SectionHeading>
      <AllJobs></AllJobs>
    </div>
  );
};

export default Home;
