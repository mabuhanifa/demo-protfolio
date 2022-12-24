import React, { useState } from "react";
import { FaServer } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { MdWeb } from "react-icons/md";
import Modal from "./modals/Modal";
export default function Services() {
  const [modal, setModal] = useState(false);
  const data = [
    {
      name: "Static Website",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos exercitationem accusamus, at placeat cupiditate sint labore voluptatum iusto, quia, voluptatibus fugit doloremque quisquam ducimus explicabo!",
      icon: MdWeb,
    },
    {
      name: "Single Page Application",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos exercitationem accusamus, at placeat cupiditate sint labore voluptatum iusto, quia, voluptatibus fugit doloremque quisquam ducimus explicabo!",
      icon: IoIosApps,
    },
    {
      name: "Web Application",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos exercitationem accusamus, at placeat cupiditate sint labore voluptatum iusto, quia, voluptatibus fugit doloremque quisquam ducimus explicabo!",
      icon: FaServer,
    },
  ];

  return (
    <div className="flex justify-center">
      <button onClick={() => setModal(true)}>Show</button>
      {data.map((data,i) => (
        <Modal view={modal} setModal={setModal} data={data} key={i}/>
      ))}
      <Modal view={modal} setModal={setModal} />
    </div>
  );
}
