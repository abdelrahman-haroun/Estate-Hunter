import React from "react";
import { Link } from "react-scroll";

export default function ScrollToTop() {
  return (
    <div className="fixed bottom-4 right-4 z-2">
      <Link to="header" smooth={true} duration={500}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </Link>
    </div>
  );
}
