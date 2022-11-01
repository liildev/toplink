import React from "react";

export default function Input({ title, ...props }) {
  return (
    <div className="h-24">
      <p className="text-sm mb-1">{title}</p>
      <input className="border-2 border-violet-800 w-full rounded-xl px-5 py-2 outline-none" {...props} />
    </div>
  );
}
