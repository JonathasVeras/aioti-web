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
    <div className="p-6 bg-gray-50 dark:bg-gray-900 h-full text-gray-800 dark:text-gray-200 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        {/* Título da tabela */}
        <h1 className="text-2xl font-bold">{title}</h1>

        {/* Barra de pesquisa */}
        <div className="flex items-center gap-2 w-[400px]">
          <input
            type="text"
            placeholder="Buscar viagens..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-700 dark:bg-gray-800"
            onChange={handleSearchChange}
          />
          <FaMagnifyingGlass size={20} />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-300 dark:border-gray-700">
        <table className="min-w-full text-sm bg-white dark:bg-gray-800">
          <thead>
            <tr className="bg-blue-500 dark:bg-blue-600 text-white">
              {columns.map((column, index) => (
                <th key={index} className="p-4 text-center font-bold border border-gray-300 dark:border-gray-700">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-t border-gray-200 dark:border-gray-700 ${
                  rowIndex % 2 === 0 ? "bg-blue-50 dark:bg-gray-900" : "bg-white dark:bg-gray-800"
                } hover:bg-blue-100 dark:hover:bg-blue-700`}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-4 text-left">
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
