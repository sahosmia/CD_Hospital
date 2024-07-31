import { ProfileDropdown } from "@/app/(front)/_component/ProfileDropdown";
import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
// import { Button } from "../ui/button";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navber = async () => {
  // const [isOpen, setIsOpen] = React.useState(false);
  const session = await auth();
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-gray-800">
            MyLogo
          </a>
        </div>
        <div className="flex items-center">
          <nav className={`flex-col md:flex-row md:flex md:items-center`}>
            <a href="#home" className="mt-2 md:mt-0 md:ml-4 text-gray-800">
              Home
            </a>
            <a href="#about" className="mt-2 md:mt-0 md:ml-4 text-gray-800">
              About
            </a>
            <Link
              href="/blood-groups"
              className="mt-2 md:mt-0 md:ml-4 text-gray-800"
            >
              Blood Group
            </Link>
            {session?.user ? (
              <ProfileDropdown />
            ) : (
              <Link
                href="/login"
                className="mt-2 md:mt-0 md:ml-4 text-gray-800"
              >
                Login
              </Link>
            )}

            <Link
              href="/admin/dashboard"
              className="mt-2 md:mt-0 md:ml-4 text-gray-800"
            >
              Dashboard
            </Link>
          </nav>
          {/* <Button onClick={() => setIsOpen(!isOpen)} className="md:hidden ml-4">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Navber;
