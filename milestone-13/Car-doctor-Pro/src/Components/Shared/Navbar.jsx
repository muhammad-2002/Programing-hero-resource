import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const manus = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/about",
      pathName: "About",
    },
    {
      path: "/service",
      pathName: "Service",
    },
    {
      path: "/blog",
      pathName: "Blog",
    },
    {
      path: "/contract",
      pathName: "Contract",
    },
  ];
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <Link href={"/"}>
            <Image
              alt="log"
              width={50}
              height={100}
              src="/assets/logo.svg"
            ></Image>
          </Link>
        </div>
        <div className="navbar-center gap-2 font-medium  hidden lg:flex">
          {/* menu */}
          {manus.map((item) => (
            <Link
              className="text-black hover:text-[#DE2F0D]  "
              key={item.path}
              href={item.path}
            >
              {item.pathName}
            </Link>
          ))}
        </div>
        <div className="navbar-end space-x-4">
          <a className="btn btn-outline btn-primary">Appointment</a>
          <Link className="btn btn-primary " href={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
