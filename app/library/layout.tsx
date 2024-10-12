"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const components = [
    {
      name: "Selectors",
      path: "single-multi-selector",
    },

    {
      name: "button",
      path: "button",
    },
    {
      name: "table",
      path: "table",
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
      name: "date-picker",
      path: "date-picker",
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
                pathName.includes(component.path)
                  ? "text-white font-medium"
                  : "text-[#6f6f74] "
              }   text-lg cursor-pointer `}
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
