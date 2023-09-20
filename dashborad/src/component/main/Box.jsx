import React from "react";

export default function Box({}) {
  return (
    <div className="relative p-5 bg-gradient-to-r from-teal-400 to-green-500 rounded-md overflow-hidden">
      <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">
        $5000.00
      </div>
      <div className="relative z-10 text-green-200 leading-none font-semibold">
        Next month's income
      </div>
    </div>
  );
}
