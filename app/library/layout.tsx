"use client";
import Link from "next/link";
import { useState } from "react";

export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive] = useState("");
  const components = [
    {
      name: "Selectors",
      path: "single-multi-selector",
    },

    {
      name: "Buttons",
      path: "button",
    },
    {
      name: "Pagintaion",
      path: "Pagintaion",
    },
    {
      name: "Avatar",
      path: "Avatar",
    },
    {
      name: "OTP",
      path: "otp",
    },
    {
      name: "Date Picker",
      path: "Date Picker",
    },
    {
      name: "Intenational Phone",
      path: "Date Picker",
    },
  ];
  return (
    <div className="w-full h-screen bg-[#09090b] flex">
      <div className="w-[20%] border-r p-12 flex flex-col gap-12 justify-start items-center ">
        {/* sidebar for components */}
        <h2 className="text-3xl text-[#dddddd]  w-full capitalize font-medium">
          components
        </h2>
        <ul className=" w-full flex flex-col gap-2   overflow-y-auto">
          {components.map((component) => (
            <Link
              href={`/library/${component.path}`}
              key={component.path}
              className={`${
                active === component.path
                  ? "text-white font-medium"
                  : "text-[#6f6f74] "
              }   text-lg cursor-pointer `}
              onClick={() => setActive(component.path)}
            >
              {component.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-[80%] p-4 flex flex-col gap-12 justify-start items-center ">
        {children}
      </div>
    </div>
  );
}
