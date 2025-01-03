"use client";
import React from "react";

interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface SimpleTableProps<T> {
  title: string;
  data: T[];
  columns: Column<T>[];
}

const SimpleTable = <T,>({ title, data, columns }: SimpleTableProps<T>) => {
  return (
    <div className="p-6 bg-white dark:bg-black h-full text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-primary dark:bg-primary-dark text-white">
              {columns.map((column, index) => (
                <th key={index} className="p-2 border border-gray-200 dark:border-gray-700">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-primary dark:hover:bg-primary-dark hover:text-white"
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-2 border border-gray-200 dark:border-gray-700"
                  >
                    {column.render
                      ? column.render(row[column.accessor], row)
                      : (row[column.accessor] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleTable;
