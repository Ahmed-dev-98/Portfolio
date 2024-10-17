/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface Option {
  id: number;
  label: string;
}

interface MainSelectProps {
  options: Option[];
  isMulti?: boolean; // Support for single or multi-select
  loading?: boolean;
  closeIcon?: React.ReactNode;
  arrowUp?: React.ReactNode;
  arrowDown?: React.ReactNode;
  itemsClassName?: string;
  badgeClassName?: string;
  loader?: React.ReactNode;
  value: (data: Option[] | Option) => void;
}
const MainSelect: React.FC<MainSelectProps> = ({
  options ,
  isMulti = false,
  loading = false,
  closeIcon = "✕",
  arrowUp = <IoIosArrowUp />,
  arrowDown = <IoIosArrowUp className="rotate-180" />,
  itemsClassName,
  badgeClassName,
  loader,
  value,
}) => {
  const [selectedItems, setSelectedItems] = useState<Option[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleSelect = (option: Option) => {
    if (isMulti) {
      setSelectedItems((prevSelected) => {
        if (prevSelected.some((item) => item.id === option.id)) {
          const filteredData = prevSelected.filter(
            (item) => item.id !== option.id
          );
          value(filteredData);
          return filteredData;
        } else {
          const selectedData = [...prevSelected, option];
          value(selectedData);
          return selectedData;
        }
      });
    } else {
      setSelectedItems([option]);
      value(option);
      setIsDropdownOpen(false);
    }
  };

  const handleRemoveItem = (id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.filter((item) => item.id !== id)
    );
  };

  // Filter out selected items from the dropdown options
  const filteredOptions = options
    .filter(
      (option) =>
        !selectedItems.some((selectedItem) => selectedItem.id === option.id)
    )
    .filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="relative w-full ">
      {/* Selected Items */}
      <div
        className="flex justify-between items-center border border-gray-300   rounded p-2"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="flex flex-wrap ">
          {selectedItems.length > 0 ? (
            selectedItems.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "bg-gray-200 rounded-full flex items-center px-2 py-1 mr-2 mb-1",
                  badgeClassName
                )}
              >
                <span className="text-black-100">{item.label}</span>
                <button
                  className="ml-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveItem(item.id);
                  }}
                >
                  {closeIcon}
                </button>
              </div>
            ))
          ) : (
            <span className="text-white">Select...</span>
          )}{" "}
        </div>
        <div>{isDropdownOpen ? arrowUp : arrowDown}</div>
      </div>

      {/* Dropdown Options */}
      {isDropdownOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded shadow-lg z-10">
          {/* Search Input */}
          <input
            type="text"
            className="w-full p-2 border-b border-gray-300 focus:outline-none bg-white text-black"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Options */}
          <ul className="max-h-40 overflow-y-auto text-black">
            {loading ? (
              <div className="w-full h-40  flex justify-center items-center">
                {loader ? (
                  loader
                ) : (
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                )}
              </div>
            ) : filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.id}
                  className={cn(
                    `p-2 cursor-pointer hover:bg-blue-100 `,
                    itemsClassName
                  )}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainSelect;
