import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "./Modal";

export default function Service({ data: { name, info, icon } }) {
  const Icon = icon;
  const [modal, setModal] = useState(false);
  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center items-center">
        <Icon className="text-8xl text-gray-700" />
      </div>
      <h1>{name}</h1>
      <p>{info}</p>
      <button
        onClick={() => setModal(true)}
        className="border border-gray-500 p-2 my-5 rounded-lg"
      >
        View More <BsArrowRight className="inline" />{" "}
      </button>
      <Modal view={modal} setModal={setModal} data={name} />
    </div>
  );
}
