import React from "react";

export default function Modal({ view, setModal }) {
  if (!view) return null;
  const closeModal = (e) => {
    if (e.target.id === "container") {
      setModal((m) => !m);
    }
  };
  return (
    <div
      id="container"
      className="bg-blue-300 bg-opacity-30 backdrop-blur-sm fixed inset-0 flex justify-center items-center z-15"
      onClick={closeModal}
    >
      <div className="border-[2px] border-blue-300 rounded-xl p-10">
        <h1>Modal</h1>

        <button
          className="bg-red-500 p-2 rounded text-white"
          onClick={() => setModal((m) => !m)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
