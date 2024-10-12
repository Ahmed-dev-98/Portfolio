"use client";
import React, { useState } from "react";
import CustomDatePicker from "../_components/DatePicker";

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div>
       <CustomDatePicker
        label="Pick a date"
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      {selectedDate && (
        <p className="mt-4 text-sm text-gray-600">
          Selected Date: {selectedDate.toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
