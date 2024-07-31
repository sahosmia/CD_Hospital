"use client";
import React, { useState } from "react";
import Sideber from "./_component/layouts/Sideber";
import Navber from "./_component/layouts/Navber";

const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isSideber, setIsSideber] = useState(true);
  const handleIsSideber = () => {
    setIsSideber((prev) => !prev);
  };

  return (
    <>
      <Sideber isSideber={isSideber} />
      <main
        className={`w-full ${
          isSideber ? "md:w-[calc(100%-256px)] md:ml-64" : "md:w-full md:ml-0"
        }   bg-gray-50 min-h-screen transition-all`}
      >
        <Navber isSideber={isSideber} handleIsSideber={handleIsSideber} />
        <div className="p-5 ">{children}</div>
      </main>
    </>
  );
};

export default Template;
