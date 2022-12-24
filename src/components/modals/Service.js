import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "./Modal";

export default function Service({ data: { name, info, icon } }) {
  const Icon = icon;
  const [modal, setModal] = useState(false);
  return (
    <div>
      <h1>{name}</h1>
      <p>{info}</p>
      <Icon className="text-4xl " />
      <button onClick={() => setModal(true)} className="border border-gray-500 p-2 my-5 rounded-lg">View More <BsArrowRight className="inline"/> </button>
      <Modal view={modal} setModal={setModal} data={name}/>
    </div>
  );
}
