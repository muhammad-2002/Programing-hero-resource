// eslint-disable-next-line react/prop-types
const SectionHeading = ({ title, paragraph }) => {
  return (
    <div className="text-center w-full md:w-[65%] mx-auto my-14 space-y-3">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default SectionHeading;
