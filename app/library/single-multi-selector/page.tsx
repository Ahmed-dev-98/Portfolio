"use client";
import React, { useState } from "react";
import MainSelect from "../_components/MainSelect";
import { IoIosArrowUp, IoIosCloseCircleOutline } from "react-icons/io";

const Selector = () => {
  const [options, setOptions] = useState<{ id: number; label: string }[]>([
    { id: 1, label: "React" },
    { id: 2, label: "Next" },
    { id: 3, label: "Vite" },
    { id: 4, label: "SWR" },
    { id: 5, label: "React-query" },
    { id: 6, label: "Type Script" },
    { id: 7, label: "Java Script" },
  ]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full flex flex-col gap-12 overflow-y-scroll ">
      <div className="w-full flex flex-wrap justify-between gap-5">
        <div className=" border rounded-md w-[49%] flex gap-4 flex-col p-4">
          <h2>Single</h2>{" "}
          <MainSelect
            closeIcon={<IoIosCloseCircleOutline size={20} color="red" />}
            options={options}
            value={(data) => console.log(data)}
            loading={loading}
            arrowDown={<IoIosArrowUp color="white" size={20} />}
            arrowUp={
              <IoIosArrowUp color="white" size={20} className="rotate-180" />
            }
          />
          <div className="w-full">
            <pre className="bg-gray-900 px-4  rounded-md">
              <code className="whitespace-pre">
                {`
<SingleSelect
  closeIcon={<IoIosCloseCircleOutline />}
  options={options}
  value={(data) => console.log(data)}
  loading={loading}
  arrowDown={<IoIosArrowUp />}
  arrowUp={<IoIosArrowUp />}
/>
        `}
              </code>
            </pre>
          </div>
        </div>
        <div className=" border rounded-md w-[49%] flex gap-4 flex-col p-4">
          <h2>Multi</h2>{" "}
          <MainSelect
            closeIcon={<IoIosCloseCircleOutline size={20} color="red" />}
            options={options}
            value={(data) => console.log(data)}
            isMulti
            loading={loading}
            arrowDown={<IoIosArrowUp color="white" size={20} />}
            arrowUp={
              <IoIosArrowUp color="white" size={20} className="rotate-180" />
            }
          />
          <div className="w-full">
            <pre className="bg-gray-900 px-4  rounded-md">
              <code className="whitespace-pre">
                {`
<MultiSelect
  closeIcon={<IoIosCloseCircleOutline />}
  options={options}
  isMulti // multi select
  value={(data) => console.log(data)}
  loading={loading}
  arrowDown={<IoIosArrowUp />}
  arrowUp={<IoIosArrowUp />}
/>
        `}
              </code>
            </pre>
          </div>
        </div>
        <div className="border rounded-md w-[49%] flex gap-4 flex-col p-4">
          <div className="w-full flex justify-between items-center">
            {loading ? "Loading..." : "Async"}
            <button
              className="bg-gray-900 px-4 py-1 rounded-md"
              onClick={() => {
                setOptions([]);
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setOptions([
                    { id: 1, label: "React" },
                    { id: 2, label: "Next" },
                    { id: 3, label: "Vite" },
                    { id: 4, label: "SWR" },
                    { id: 5, label: "React-query" },
                    { id: 6, label: "Type Script" },
                    { id: 7, label: "Java Script" },
                  ]);
                }, 3000);
              }}
            >
              Try
            </button>
          </div>

          <MainSelect
            closeIcon={<IoIosCloseCircleOutline size={20} color="red" />}
            options={options}
            value={(data) => console.log(data)}
            loading={loading}
            arrowDown={<IoIosArrowUp color="white" size={20} />}
            arrowUp={
              <IoIosArrowUp color="white" size={20} className="rotate-180" />
            }
          />
          <div className="w-full">
            <pre className="bg-gray-900 px-4  rounded-md">
              <code className="whitespace-pre">
                {`
<MultiSelect
  closeIcon={<IoIosCloseCircleOutline />}
  options={options}
  isMulti // multi select
  value={(data) => console.log(data)}
  loading={loading}
  arrowDown={<IoIosArrowUp />}
  arrowUp={<IoIosArrowUp />}
/>
        `}
              </code>
            </pre>
          </div>
        </div>
        <div className="border rounded-md w-[49%] flex gap-4 flex-col p-4  shadow-md">
          <h2 className="text-lg font-semibold">Installation</h2>

          <div className="flex flex-col gap-2">
            <p>To install the component library, use the following command:</p>

            <pre className="bg-gray-800 text-white p-3 rounded-md">
              <code className="whitespace-pre">
                npm install Spiritude-selector
              </code>
            </pre>

            <p>Or via github :</p>

            <pre className="bg-gray-800 text-white p-3 rounded-md">
              <code className="whitespace-pre">
                https://github.com/spiritude/library/selector
              </code>
            </pre>
            <pre className="bg-gray-800 text-white px-3 mt-2 rounded-md">
              <code className="whitespace-pre">
                {`
import { MainSelect } from 'Spiritude-selector';

function App() {
  return (
    <MainSelect options={optionList} />
  );
}
        `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selector;
