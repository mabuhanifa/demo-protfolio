import React from "react";

export default function Modal({ view, setModal, data }) {
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
      <div className="border border-gray-300 bg-white bg-opacity-80 rounded-xl p-10">
        <h1 className="text-2xl">{data}</h1>

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
