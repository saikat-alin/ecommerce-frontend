import React from "react";

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div className="flex items-center mb-4">
    <input
      className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-brand-500"
      value={globalFilter || ""}
      onChange={(e) => setGlobalFilter(e.target.value)}
      placeholder="Search..."
    />
  </div>
  );
};

export default GlobalFilter;
