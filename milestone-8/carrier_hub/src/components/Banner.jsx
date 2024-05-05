import image from "../assets/images/user.png";

const Banner = () => {
  return (
    <div className="hero  ">
      <div className="hero-content flex-col justify-between lg:flex-row-reverse">
        <img src={image} className="w-full md:w-[48%] rounded-lg " />
        <div className="w-full md:w-[45%]">
          <h1 className="text-6xl md:text-7xl  font-bold ">
            One Step Closer To Your{" "}
            <span className="gradient-text">Dream Job</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-gradient-to-r from-purple-400 to-indigo-600 text-white ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
