import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

interface CustomDatePickerProps {
  label: string;
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  selectedDate,
  onDateChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => setIsOpen(!isOpen);

  const clearDate = () => {
    onDateChange(null);
  };

  return (
    <div className="relative w-64">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center">
        <button
          className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          onClick={toggleCalendar}
        >
          {selectedDate ? format(selectedDate, "MM/dd/yyyy") : "Select a date"}
        </button>
        {selectedDate && (
          <button
            className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
            onClick={clearDate}
            aria-label="Clear date"
          >
            &times;
          </button>
        )}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => {
              onDateChange(date);
              setIsOpen(false);
            }}
            inline
            className="p-2"
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
