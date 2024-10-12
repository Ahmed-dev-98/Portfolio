"use client";
import React from "react";
import CustomTable from "../_components/Table";
import MainButton from "../_components/MainButton";
import { BiTrash } from "react-icons/bi";

const page = () => {
  const columns = [
    { header: "This", accessor: "name" },
    { header: "is", accessor: "age" },
    { header: "A", accessor: "email" },
    { header: "Custom", accessor: "address" },
    { header: "Table", accessor: "action" },
  ];

  // Example data
  const data = [
    {
      name: "Reusable",
      age: "copy and paste",
      email: "john@example.com",
      address: "123 Main St",
      action: (
        <div className="flex justify-center   gap-3">
          <MainButton
            onClick={() => window.alert("awesome")}
            type="button"
            text="awesome"
            variant="primary"
            size="small"
          />
          <MainButton
            onClick={() => window.alert("delete")}
            type="button"
            text="Delete"
            icon={<BiTrash />}
            variant="danger"
            size="small"
          />
        </div>
      ),
    },
    {
      name: "Customizable",
      age: "Tailwind classNames props",
      email: "jane@example.com",
      address: "123 Main St",
      action: (
        <div className="flex justify-center   gap-3">
          <MainButton
            onClick={() => window.alert("awesome")}
            type="button"
            text="awesome"
            variant="primary"
            size="small"
          />
          <MainButton
            onClick={() => window.alert("delete")}
            type="button"
            text="Delete"
            icon={<BiTrash />}
            variant="danger"
            size="small"
          />
        </div>
      ),
    },
    {
      name: "Dynamic",
      age: "Rows - Headers props",
      email: "samuel@example.com",
      address: "123 Main St",
      action: (
        <div className="flex justify-center   gap-3">
          <MainButton
            onClick={() => window.alert("awesome")}
            type="button"
            text="awesome"
            variant="primary"
            size="small"
          />
          <MainButton
            onClick={() => window.alert("delete")}
            type="button"
            text="Delete"
            icon={<BiTrash />}
            variant="danger"
            size="small"
          />
        </div>
      ),
    },
  ];
  return (
    <div className=" flex flex-col gap-4 overflow-y-scroll  w-full">
      <div className=" border rounded-md w-full mx-auto flex gap-4 flex-col p-4">
        <h1 className="text-2xl font-bold mb-5">Custom Table Example</h1>
        <CustomTable
          rowClassName=""
          cellClassName="border"
          tableClassName="w-full "
          headerClassName="text-center "
          columns={columns}
          data={data}
        />
      </div>
      <div className="border rounded-md w-full flex gap-4 flex-col p-4  shadow-md">
        <h2 className="text-lg font-semibold">Installation</h2>

        <div className="flex flex-col gap-2">
          <p>To install the component library, use the following command:</p>

          <pre className="bg-gray-800 text-white p-3 rounded-md">
            <code className="whitespace-pre">npm install Spiritude-table</code>
          </pre>

          <p>Or via github :</p>

          <pre className="bg-gray-800 text-white p-3 rounded-md">
            <code className="whitespace-pre">
              https://github.com/spiritude/library/table
            </code>
          </pre>
          <pre className="bg-gray-800 text-white px-3 mt-2 rounded-md">
            <code className="whitespace-pre">
              {`
import { CustomTable } from 'Spiritude-selector';

function App() {
  return (
     <CustomTable
        rowClassName=""
        cellClassName="border"
        tableClassName="w-full "
        headerClassName="text-center "
        columns={columns}
        data={data}
      />
  );
}
        `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default page;
