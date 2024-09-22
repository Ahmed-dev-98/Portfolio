import React from "react";
import { Timeline } from "./TimeLine";
import { PinContainer } from "./Pin";
import { ExpandableCardDemo } from "./ExpandableCards";

const RecentProjects = () => {
  const data = [
    {
      title: "Eearly 2023",
      content: (
        <div>
          <p className=" text-xs md:text-sm font-normal mb-4">
            Fresh Developer (Legacy Conversion and Simple Projects)
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ gained hands-on experience working with Agile methodologies
            </div>{" "}
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Gained foundational knowledge of TypeScript and its benefits in
              large-scale applications
            </div>
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Improved code quality, reusability, and increased
              maintainability
            </div>
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Used React with TypeScript to create responsive, visually
              appealing landing pages
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 ">
            <PinContainer title="https://aajada.io">
              <div className="flex basis-full gap-3 flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
                <div className="max-h-[20rem] overflow-y-scroll">
                  <img
                    src="/ajada-frontend-vercel-app-2024-09-22-14_57_30.png"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg   w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>{" "}
              </div>
            </PinContainer>{" "}
            <PinContainer title="https://innovatics.io">
              <div className="flex basis-full gap-3 flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
                <div className="max-h-[20rem] overflow-y-scroll">
                  <img
                    src="/innovatics-io-2024-09-22-14_56_58.png"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg   w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>{" "}
              </div>
            </PinContainer>{" "}
            <PinContainer title="https://risesn.com">
              <div className="flex basis-full gap-3 flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
                <div className="max-h-[20rem] overflow-y-scroll">
                  <img
                    src="/risesn-2024-09-22-14_54_45.png"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg   w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>{" "}
              </div>
            </PinContainer>{" "}
            <PinContainer title="https://lycheeonwheels.com/">
              <div className="flex basis-full gap-3 flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
                <div className="max-h-[20rem] overflow-y-scroll">
                  <img
                    src="/lycheeonwheels-2024-09-22-16_01_19.png"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg   w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>{" "}
              </div>
            </PinContainer>{" "}
          </div>
        </div>
      ),
    },
    {
      title: "2023 ~ 2024",
      content: (
        <div>
          <p className=" text-xs md:text-sm font-normal mb-4">
            Junior Developer (Legacy Conversion and Simple Projects)
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Transitioned legacy codebases from JavaScript to TypeScript and
              upgraded from react 16 to 18
            </div>
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Worked on company complex, data-driven dashboards with team.
            </div>
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Worked on features like dynamic tables,dynamic forms, text
              editors,data caching , and authentication
            </div>
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ worked with cloud services like AWS and Google Cloud, utilizing
              S3 buckets for storage solutions, Google Maps for location-based
              features, Google Authentication for secure user access, and
              Firebase for real-time notifications
            </div>
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ I selected and deeply mastered my preferred tech stack,
              focusing on front-end technologies
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 w-full">
            <ExpandableCardDemo />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className=" text-xs md:text-sm font-normal mb-4">
            Developed an e-commerce applications and its accompanying admin
            dashboard
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Developed an e-commerce application and its accompanying admin
              dashboard
            </div>
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center  text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 ">
            <PinContainer title="https://aajada.io">
              <div className="flex basis-full gap-3 flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
                <div className="max-h-[20rem] overflow-y-scroll">
                  <img
                    src="/ajada-frontend-vercel-app-2024-09-22-14_57_30.png"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg   w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>{" "}
              </div>
            </PinContainer>{" "}
            <PinContainer title="https://innovatics.io">
              <div className="flex basis-full gap-3 flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
                <div className="max-h-[20rem] overflow-y-scroll">
                  <img
                    src="/innovatics-io-2024-09-22-14_56_58.png"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg   w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>{" "}
              </div>
            </PinContainer>{" "}
            <PinContainer title="https://risesn.com">
              <div className="flex basis-full gap-3 flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
                <div className="max-h-[20rem] overflow-y-scroll">
                  <img
                    src="/risesn-2024-09-22-14_54_45.png"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg   w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>{" "}
              </div>
            </PinContainer>{" "}
            <PinContainer title="https://lycheeonwheels.com/">
              <div className="flex basis-full gap-3 flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
                <div className="max-h-[20rem] overflow-y-scroll">
                  <img
                    src="/lycheeonwheels-2024-09-22-16_01_19.png"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="rounded-lg   w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>{" "}
              </div>
            </PinContainer>{" "}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div
      id="projects"
      className="py-20 flex flex-col gap-8 justify-center items-center w-full"
    >
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="w-full h-fit">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default RecentProjects;
