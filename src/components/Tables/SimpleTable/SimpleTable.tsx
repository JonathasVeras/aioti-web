"use client";
import React, { ChangeEvent } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface SimpleTableProps<T> {
  title: string;
  data: T[];
  columns: Column<T>[];
  setSearchbarText: (text: string) => void;
}

const SimpleTable = <T,>({ title, data, columns, setSearchbarText }: SimpleTableProps<T>) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchbarText(e.target.value);
  };

  return (
    <div className="p-6 bg-white dark:bg-black h-full text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex items-center gap-2 w-[400px] mb-4">
        <input
          type="text"
          placeholder="Pesquise..."
          className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark dark:bg-black"
          onChange={handleSearchChange}
        />
        <FaMagnifyingGlass size={20}/>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full border border-primary dark:border-primary-dark">
          <thead>
            <tr className="bg-primary dark:bg-primary-dark text-white">
              {columns.map((column, index) => (
                <th key={index} className="p-2">
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
                  <td key={colIndex} className="p-4 text-center">
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
