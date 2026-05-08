'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-rem.png";
import { authClient } from "@/lib/auth-client";
import { MdOutlineLogout } from "react-icons/md";

const NavBar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user
  console.log(user)

  return (
    <div className="navbar shadow-sm stiky top-0 z-10">
      <div className=" container mx-auto flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/all-books"}>All Books</Link>
              </li>
              <li>
                <Link href={"/my-profile"}>My Profile</Link>
              </li>
            </ul>
          </div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-45 h-9 " />{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="px-1 flex items-center gap-5 text-sm font-medium text-gray-700">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/all-books"}>All Books</Link>
            </li>
            <li>
              <Link href={"/my-profile"}>My Profile</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <Link href={"/login"}>
            <button className="btn rounded-2xl bg-[#10131a] text-white">
              Login
            </button>
          </Link> */}
          {user ? (
            <div className="flex items-center gap-4">
              <h2 className=" flex gap-1 font-semibold items-center">Hello,<span className="text-sm font-semibold">{user?.name || "Guest"}</span> </h2>
              <Image
                src={user?.image || "/default-avatar.png"}
                alt="User Image"
                className="rounded-full w-10 h-10"
                width={30}
                height={30}
              />
              
                <button onClick={async ()=> await authClient.signOut()} className="btn rounded-2xl hover:bg-[#E0843E]">
                  <MdOutlineLogout />
                  Logout
                </button>
              
            </div>
          ) : (
            <Link href={"/login"}>
              <button className="btn rounded-2xl bg-[#10131a] text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
