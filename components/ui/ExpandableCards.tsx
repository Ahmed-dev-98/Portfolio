"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full mx-auto  gap-4 grid grid-cols-1 md:grid-cols-2 ">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 w-full border  flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="md:h-8 md:w-8 rounded-lg "
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "TypeScript is a superset of JavaScript,.",
    title: "TypeScript",
    src: "/ts.svg",
    ctaText: "View",
    ctaLink: "https://www.typescriptlang.org/",
    content: () => {
      return (
        <p>
          developed and maintained by Microsoft as an open-source programming
          language. TypeScript can seamlessly integrate into existing JavaScript
          code, adding structure and catching type safety errors before they
          crash your app.
        </p>
      );
    },
  },
  {
    description: "Javascript Framework",
    title: "React",
    src: "/re.svg",
    ctaText: "View",
    ctaLink: "https://react.dev",
    content: () => {
      return (
        <p>
          ReactJS&apos;s primary goal is to create User Interfaces (UI) which
          enhance the speed of programs. It makes use of virtual DOM (JavaScript
          object), which enhances the app&apos;s efficiency. Quicker than the
          standard DOM is the JavaScript virtual DOM.
        </p>
      );
    },
  },
  {
    description: "Full stack Framework",
    title: "Next",
    src: "/next.svg",
    ctaText: "View",
    ctaLink: "https://nextjs.org/",
    content: () => {
      return (
        <p>
          Next.js is a React framework that gives you building blocks to create
          web applications. By framework, we mean Next.js handles the tooling
          and configuration needed for React, and provides additional structure,
          features, and optimizations for your application.
        </p>
      );
    },
  },
  {
    description: "A utility-first CSS framework ",
    title: "Tailwind",
    src: "/tail.svg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Tailwind CSS is a design system implementation in pure CSS. It is also
          configurable. It gives developers super powers. It allows them to
          build websites with a clean consistent UI
        </p>
      );
    },
  },
  {
    description: "Vite is a build tool ",
    title: "Vite",
    src: "/Vitejs-logo.svg",
    ctaText: "View",
    ctaLink: "https://vitejs.dev/",
    content: () => {
      return (
        <p>
          Vite is a build tool that enhances the front-end development
          experience. It lets you configure a development environment for Vue,
          TezJS and React
        </p>
      );
    },
  },
  {
    description:
      "Open source library for building user interfaces based on React",
    title: "Shadcn",
    src: "/shadcn.png",
    ctaText: "View",
    ctaLink: "https://ui.shadcn.com/",
    content: () => {
      return (
        <p>
          Shadcn is not your typical component library. Instead of installing it
          as a dependency through npm, Shadcn offers a collection of beautifully
          designed, accessible, and customizable React components that you can
          copy and paste directly into your project.
        </p>
      );
    },
  },
  {
    description: "data fetching and synchronization",
    title: "React-query",
    src: "/react-query.svg",
    ctaText: "View",
    ctaLink: "https://tanstack.com/query/v3",
    content: () => {
      return (
        <p>
          React Query is a JavaScript library designed to simplify the complex
          task of data fetching and caching in React applications. It offers a
          set of hooks and utilities that enable you to manage data from various
          sources, including REST APIs, GraphQL, or even local state,
          effortlessly.
        </p>
      );
    },
  },
  {
    description: "Programming language",
    title: "JavaScript",
    src: "/js.png",
    ctaText: "View",
    ctaLink:
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
    content: () => {
      return (
        <p>
          JavaScript, often abbreviated as JS, is a programming language and
          core technology of the Web, alongside HTML and CSS. 99% of websites
          use JavaScript on the client side for webpage behavior. Web browsers
          have a dedicated JavaScript engine that executes the client code
        </p>
      );
    },
  },
];
