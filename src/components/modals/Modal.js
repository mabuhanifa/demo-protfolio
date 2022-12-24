import React from "react";

export default function Modal({ view,setModal }) {
  if (!view) return null;
  return (
    <div className="bg-blue-300 bg-opacity-30 backdrop-blur-sm fixed inset-0 flex justify-center items-center z-15">
      <div className="border-[2px] border-blue-300 rounded-xl p-10">
        <h1>Modal</h1>

        <button className="bg-red-500 p-2 rounded text-white" onClick={()=>setModal()}>Close</button>
      </div>
    </div>
  );
}
