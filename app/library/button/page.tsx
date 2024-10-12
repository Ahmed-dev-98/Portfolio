"use client";
import React from "react";
import MainButton from "../_components/MainButton";
import { BiArrowFromLeft } from "react-icons/bi";

const Button = () => {
  return (
    <div className="w-full flex flex-col gap-12 overflow-y-scroll ">
      <div className="w-full flex flex-col  justify-between gap-5">
        <div className=" border rounded-md w-full mx-auto flex gap-4 flex-col p-4">
          <h2>Buttons</h2>
          <div className="w-full flex gap-5 justify-start items-center">
            <MainButton
              onClick={() => console.log("clicked")}
              buttonClassName="capitalize text-sm"
              type="submit"
              text="Primary"
              icon={<BiArrowFromLeft />}
              variant="primary"
              size="medium"
            />{" "}
            <MainButton
              onClick={() => console.log("clicked")}
              buttonClassName="capitalize text-sm"
              type="submit"
              text="danger"
              icon={<BiArrowFromLeft />}
              variant="danger"
              size="medium"
            />{" "}
            <MainButton
              onClick={() => console.log("clicked")}
              buttonClassName="capitalize text-sm"
              type="submit"
              text="secondary"
              icon={<BiArrowFromLeft />}
              variant="secondary"
              size="medium"
            />{" "}
            <MainButton
              onClick={() => console.log("clicked")}
              buttonClassName="capitalize text-sm"
              type="submit"
              text="outline"
              icon={<BiArrowFromLeft />}
              variant="outline"
              size="medium"
            />{" "}
            <MainButton
              onClick={() => console.log("clicked")}
              buttonClassName="capitalize text-sm bg-pink-800 text-white"
              type="submit"
              loading
              text="loading"
              size="medium"
            />{" "}
          </div>
          <div className="w-full">
            <pre className="bg-gray-900 px-4  rounded-md">
              <code className="whitespace-pre">
                {`
  <MainButton
  type="submit" // button - submit - reset
  onClick={() => console.log("clicked")}
  buttonClassName="some classes"
  text="Primary"
  loading // default false
  icon={<BiArrowFromLeft />}
  variant="primary" // danger - secondary - outline - primary
  size="medium" // small - medium - large
   />`}
              </code>
            </pre>
          </div>
        </div>

        <div className="border rounded-md w-full mx-auto flex gap-4 flex-col p-4  shadow-md">
          <h2 className="text-lg font-semibold">Installation</h2>

          <div className="flex flex-col gap-2">
            <p>To install the component library, use the following command:</p>

            <pre className="bg-gray-800 text-white p-3 rounded-md">
              <code className="whitespace-pre">
                npm install Spiritude-button
              </code>
            </pre>

            <p>Or via github:</p>

            <pre className="bg-gray-800 text-white p-3 rounded-md">
              <code className="whitespace-pre">
                https://github.com/spiritude/library/button
              </code>
            </pre>
            <pre className="bg-gray-800 text-white px-3 mt-2 rounded-md">
              <code className="whitespace-pre">
                {`
import { MainButton } from 'Spiritude-button';

function App() {
return (
  <MainButton
  type="submit"
  text="Primary"
  icon={<BiArrowFromLeft />}
  variant="primary"
  size="medium" />
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

export default Button;
