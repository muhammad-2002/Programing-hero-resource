import Image from "next/image";
import { services } from "../../lib/services";

const Services = () => {
  return (
    <div className="grid grid-cols-3 container mx-auto my-5 text-slate-900">
      {services.map((item) => (
        <div
          key={item._id}
          className="card gap-3 card-compact w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <Image src={item.img} alt="img" width={430} height={150} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
