
import React from "react";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { BiDonateBlood } from "react-icons/bi";
const Sideber = ({ isSideber }: { isSideber: Boolean }) => {
  return (
    <>
      <div
        className={`fixed  top-0 ${
          isSideber ? "w-64 left-0" : "w-0 -left-64"
        } h-full bg-white p-4 z-50 transition-transform shadow`}
      >
        <Link
          href="/admin/dashboard"
          className="font-bold text-2xl flex items-center justify-center mb-4"
        >
          Logo
        </Link>
        <ul className="mt-4">
          <li className="mb-1 group">
            <Link
              href="/admin/dashboard"
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <RxDashboard className="mr-3 text-lg" />

              <span className="text-sm">Dashboard</span>
            </Link>
          </li>
          <li className="mb-1 group">
            <Link
              href="/admin/doner-lists"
              className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <BiDonateBlood className="mr-3 text-lg" />
              <span className="text-sm">Doner Lists</span>
            </Link>
          </li>
        </ul>
        {/* <Menubar>
          <MenubarMenu>
            <MenubarContent>
              <MenubarItem>
                <Button>Share</Button>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar> */}
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
    </>
  );
};

export default Sideber;
