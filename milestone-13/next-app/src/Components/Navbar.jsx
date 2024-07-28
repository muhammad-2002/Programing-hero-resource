"use client";
import { options } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const session = useSession(options);
  console.log(session);
  const links = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/about",
      pathName: "About",
    },
    {
      path: "/portfilow",
      pathName: "Portfolio",
    },
  ];
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push("/api/auth/signin");
  };
  return (
    <div className="bg-sky-700 justify-between flex px-4 p-2 items-center">
      <h1 className="text-3xl">
        Next <span className="text-cyan-400"> App</span>
      </h1>
      <ul className="flex space-x-3 justify-between gap-2 items-center">
        {links.map((link) => (
          <Link
            href={link.path}
            className={`${pathName === link.path && "text-cyan-400"}`}
          >
            {link.pathName}
          </Link>
        ))}
      </ul>
      {session.status === "authenticated" ? (
        <button onClick={handleClick} className="bg-white p-2 px-4 text-black ">
          Logout
        </button>
      ) : (
        <button onClick={handleClick} className="bg-white p-2 px-4 text-black ">
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
