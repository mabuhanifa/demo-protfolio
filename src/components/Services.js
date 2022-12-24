import React, { useState } from "react";
import Modal from "./modals/Modal";

export default function Services() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button onClick={() => setModal(true)}>Show</button>
      <Modal view={modal} setModal={setModal} />
    </div>
  );
}
