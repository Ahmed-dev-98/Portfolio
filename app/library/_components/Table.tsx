/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/utils/cn";
import React from "react";

interface Column {
  header: string;
  accessor: string; // key to access the data field
  align?: "left" | "center" | "right"; // Optional alignment for columns
}

interface TableProps<T> {
  columns: Column[];
  data: T[];
  tableClassName?: string; // Custom table class
  headerClassName?: string; // Custom header class
  rowClassName?: string; // Custom row class
  cellClassName?: string; // Custom cell cla
}

const CustomTable = <T,>({
  columns,
  data,
  tableClassName = "",
  headerClassName = "",
  rowClassName = "",
  cellClassName = "",
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(
          "min-w-full bg-white border border-gray-300",
          tableClassName
        )}
      >
        <thead>
          <tr >
            {columns.map((col) => (
              <th
                key={col.accessor}
                className={cn(
                  "px-4 py-2 bg-gray-100 border-b border-gray-300 text-sm font-medium text-gray-700",
                  `text-${col.align || "left"}`,
                  headerClassName
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn("hover:bg-gray-50", rowClassName)}
              >
                {columns.map((col) => (
                  <td
                    key={col.accessor}
                    className={cn(
                      "px-4 py-2 border-b border-gray-300 text-sm text-gray-600",
                      `text-${col.align || "left"}`,
                      cellClassName
                    )}
                  >
                    {(row as any)[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
