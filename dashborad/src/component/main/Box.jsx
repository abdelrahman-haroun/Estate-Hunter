import React from "react";

export default function Box({ text, number }) {
  return (
    <div className="relative p-5 rounded-md overflow-hidden bg-gradient-to-r from-green-400 to-green-600 shadow-lg">
      <div className="relative z-10 mb-4 text-white text-4xl leading-none font-semibold">
        {number}
      </div>
      <div className="relative z-10 text-green-200 leading-none font-semibold">
        {text}
      </div>
    </div>
  );
}
