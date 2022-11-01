import React from "react";

export default function Button({ hover, bg, width, children, ...props }) {
  return (
    <button
      className={`${width && "w-full"} text-sm px-8 py-4 rounded-md ${
        bg ? "bg-violet-800" : "bg-transparent"
      } ${
        hover
          ? "hover:bg-violet-800 hover:text-white border-2 border-violet-800 text-black"
          : "text-white hover:text-violet-800 hover:bg-white border-2 hover:border-violet-800"
      }  transition ease-in-out duration-300`}
      {...props}
    >
      {children}
    </button>
  );
}
